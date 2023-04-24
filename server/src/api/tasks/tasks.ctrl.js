import Task from '../../models/task';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};

export const getTaskById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const task = await Task.findById(id);
    // 포스트가 존재하지 않을 때
    if (!task) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.task = task;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnTask = (ctx, next) => {
  const { user, task } = ctx.state;
  if (task.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/*
    POST /api/tasks
    {
      title: '제목',
      body: '내용',
      tags: ['태그1', '태그2']
    }
*/
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const task = new Task({
    title,
    body: sanitizeHtml(body, sanitizeOption),
    tags,
    user: ctx.state.user,
  });
  try {
    await task.save();
    ctx.body = task;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// html을 없애고 내용이 너무 길면 200자로 제한하는 함수
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

/*
    GET /api/tasks?username=&tag=&page=
*/
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 함.
  // 값이 주어지지 않았다면 1을 기본으로 사용.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const tasks = await Task.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const taskCount = await Task.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(taskCount / 10));
    ctx.body = tasks
      // .map(task => task.toJSON())
      .map((task) => ({
        ...task,
        body: removeHtmlAndShorten(task.body),
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/tasks/:id
*/
export const read = async (ctx) => {
  ctx.body = ctx.state.task;
};

/*
    DELETE /api/tasks/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Task.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공했지만 응답할 데이터 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    PATCH /api/tasks/:id
    {
      title: '수정',
      body: '수정 내용',
      tags: ['수정', '태그']
    }
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없음.
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const nextData = { ...ctx.request.body }; // 객체를 복사하고
  // body 값이 주어졌으면 HTML 필터링
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData.body, sanitizeOption);
  }

  try {
    const task = await Task.findByIdAndUpdate(id, nextData, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 반환합니다.
    }).exec();
    if (!task) {
      ctx.status = 404;
      return;
    }
    ctx.body = task;
  } catch (e) {
    ctx.throw(500, e);
  }
};
