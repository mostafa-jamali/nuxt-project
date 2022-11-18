function createStringFromData(data) {
  return JSON.stringify(data);
}

export default ({ app }, inject) => {
  // Inject $createJWT(data) in Vue, context and store.
  inject('createJWT', data => {
    const stringData = createStringFromData(data);
    return btoa(stringData);
  });
};