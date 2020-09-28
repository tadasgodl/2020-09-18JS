export function loginFromToken() {
  let token = localStorage.getItem('token');

  if (token) {
    user.token = 'Bearer ' + token;
    return true;
  }

  return false;
}

export const user = {
  token: ''
};
