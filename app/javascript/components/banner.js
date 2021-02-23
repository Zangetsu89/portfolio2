import Typed from 'typed.js';

const loadDynamicBannerText = () => {
 new Typed('#banner-typed-text', {
  strings: ["Full-Stack Web Developer", "Hospitality Specialist", "Operations specialist"],
  typeSpeed: 100,
  loop: true
 });
}

export { loadDynamicBannerText };