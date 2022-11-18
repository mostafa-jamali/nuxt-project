function decodedString(jwt) {
  return atob(jwt);
}

export default ({ app }, inject) => {
  // Inject $parseJWT(data) in Vue, context and store.
  inject('parseJWT', jwt => {
    const decodedStr = decodedString(jwt);
    return JSON.parse(decodedStr);
  });
};
