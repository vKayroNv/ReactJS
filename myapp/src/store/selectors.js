export function getChats(state) {
  return state.chats;
}
export function getChatsCount(state) {
  return state.chats.value.length;
}

export function getProfile(state) {
  return state.profile;
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