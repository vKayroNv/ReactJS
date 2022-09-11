export function getChats(state) {
  return state.chats.value;
}
export function getChatsCount(state) {
  return state.chats.value.length;
}

export function getAnswerphone(state) {
  return state.answerphone.value;
}

export function getUsername(state) {
  return state.username.value;
}

export function getMessagesByUserId(state, id) {
  return state.messages.value.filter(obj => obj.chatId === id);
}

export function getGists(state) {
  return state.gists.value
}

export function getFirebaseApp(state) {
  return state.firebaseApp;
}