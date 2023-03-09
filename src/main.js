import { createApp } from 'vue';
import './scss/main.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCopy,
  faUser,
  faBookmark,
  faFileLines,
  faComments,
} from '@fortawesome/free-regular-svg-icons';
import {
  faPlus,
  faBars,
  faMagnifyingGlass,
  faSliders,
  faArrowRightLong,
  faPaperclip,
  faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEthereum,
  faJira,
  faAtlassian,
  faCloudsmith,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faCopy,
  faUser,
  faBookmark,
  faFileLines,
  faComments,
  faPlus,
  faBars,
  faMagnifyingGlass,
  faSliders,
  faArrowRightLong,
  faPaperclip,
  faCloudArrowUp,
  faEthereum,
  faJira,
  faAtlassian,
  faCloudsmith,
  faApple
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
