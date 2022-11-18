export default ({ app }, inject) => {
  // Inject $validationForm(str) in Vue, context and store.
  inject('validationForm', str => {
    let errorMsg = null;
    const englishChar = /^[a-zA-Z]+$/;

    if (!str) {
      errorMsg = 'این فیلد نمی تواند خالی باشد.';
    } else if (!englishChar.test(str)) {
      errorMsg = 'تنها مجاز به استفاده از حروف لاتین هستید.';
    } else {
      errorMsg = '';
    }

    return errorMsg;
  });
};
