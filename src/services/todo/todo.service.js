import createHttpRequest from '../../utils/createHttpRequest';

export const fetchToDosApi = url => createHttpRequest('GET')(url);
export const addToDoApi = (url, todo) => createHttpRequest('POST')(url, todo);
export const updateToDoApi = (url, todo) => createHttpRequest('PUT')(url, todo);
export const deleteToDoApi = (url) => createHttpRequest('DELETE')(url);
