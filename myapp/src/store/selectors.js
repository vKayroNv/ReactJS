export function getChats(state) {
  return state.chats.value;
}
export function getChatsCount(state) {
  return state.chats.value.length;
}

export function getChatsNames(state) {
  return state.chats.value.map(obj => obj.username);
}

export function getAnswerphone(state) {
  return state.answerphone.value;
}

export function getUsername(state) {
  return state.username.value;
}