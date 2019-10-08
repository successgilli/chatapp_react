const regEx = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  name: /^[a-zA-Z-@0-9]{4,}$/,
  password: /^[0-9A-Za-z!@$%^&*()_+=]{7,}$/,
};

const validate = (name, value) => {
  if (!regEx[name].test(value)) {
    switch (name) {
      case 'email':
        return 'Invalid email';
      case 'name':
        return 'UserName too short or has invalid character';
      case 'password':
        return 'password too short';
      default:
        return '';
    }
  }
  return '';
};

export default validate;
