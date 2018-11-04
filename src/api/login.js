import fetch from 'utils/fetch';

export function login(userName, password) {
  console.log('api-----------')
  const data = {
    userName,
    password
  };
  return fetch({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

