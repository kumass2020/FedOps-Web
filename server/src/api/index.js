import Router from 'koa-router';
import auth from './auth';
import tasks from './tasks';

const api = new Router();

api.use('/tasks', tasks.routes());
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api;
