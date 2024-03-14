import headerScroll from "./modules/_header-scroll.js";
import {
  swiperFacts,
  swiperServicesNordcore,
  swiperCasesCases,
  swiperCasesMedia,
  swiperTeamDirectors,
  swiperTeamMembers,
  tabs,
} from "./modules/_swipertabs.js";

import {
  moveElements,
  openMenu,
  restoreElements,
  openSpoiler,
} from "./modules/_mobile.js";

import { formValidation } from "./modules/_validation.js";
import { closeModal } from "./modules/_close-modal.js";

window.addEventListener("DOMContentLoaded", () => {
  headerScroll();
  moveElements();
  restoreElements();
  openMenu();
  openSpoiler();
  formValidation();
  closeModal();
  tabs();
});
