import qs from 'qs';
import client from './client';

export const writeTask = ({ title, body, tags }) =>
  client.post('/api/tasks', { title, body, tags });

export const readTask = (id) => client.get(`/api/tasks/${id}`);

export const listTasks = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/tasks?${queryString}`);
};

export const updateTask = ({ id, title, body, tags }) =>
  client.patch(`/api/tasks/${id}`, {
    title,
    body,
    tags,
  });

export const removeTask = (id) => client.delete(`/api/tasks/${id}`);
