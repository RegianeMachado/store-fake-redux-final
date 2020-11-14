export function saveLogin(token) {
  return { type: "SAVE_LOGIN", data: token };
}

export function logout() {
  return { type: "LOGOUT", data: {} };
}
