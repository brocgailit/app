import Vue from 'vue';
import formatName from './format-name';
import gravatar from './gravatar';
import registerExtension from './register-extension';
import prefixes from './prefixes';
import date from './date';

const helpers = {
  formatName,
  gravatar,
  registerExtension,
  prefixes,
  date,
};

const helpersPlugin = {
  install(Vue) { // eslint-disable-line no-shadow
    Vue.prototype.$helpers = helpers;
  },
};

Vue.use(helpersPlugin);

export default helpers;
