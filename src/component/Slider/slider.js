export default class Slider {
  constructor(config) {
    config = Object.assign({
      time: 1000,
      speed: 1
    }, config);
    console.log(config);
    this.el = document.querySelector(config.el);
    this.items = [...this.el.children];
    this.time = config.time;
    this.speed = config.speed;

    this.init();
  }

  init() {
    this.el.style.cssText = 'overflow:hidden; position: relative';
    this.items.forEach((item, index) => {
      item.style.cssText = `position: absolute; transform: translateX(${ index * 100 }%); transition: transformX ${ this.time }s ease`;
    });
    this.slide();
  }

  slide() {

  }
}