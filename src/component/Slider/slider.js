export default class Slider {
  constructor(config) {
    config = Object.assign({
      time: 3000,
      speed: 1,
      index: 0
    }, config);
    this.el = document.querySelector(config.el);
    this.items = [...this.el.children];
    this.time = config.time;
    this.speed = config.speed;
    this.index = config.index;
    this.init();
  }

  init() {
    this.el.style.cssText = 'overflow:hidden; position: relative';
    this.items.forEach((item, index) => {
      item.style.cssText = `position: absolute; transform: translateX(${ index * 100 }%); transition: transform ${ this.speed }s ease`;
    });
    this.slide();
  }

  slide() {
    setTimeout(() => {
      this.items.forEach((value) => {
        let translateValue = Number.parseInt(value.style.transform.match(/(-)?[0-9]*%/).toString());
        value.style.transition = `transform ${ this.speed }s ease`;
        value.style.transform = `translateX(${ translateValue - 100 }%)`;
      });
      setTimeout(() => {
        this.items[this.index].style.transition = '';
        this.items[this.index].style.transform = 'translateX(200%)';
        this.index++;
        if(this.index === 3) {
          this.index = 0;
        }
      }, this.speed * 1000);
      this.slide();
    }, this.time);
  }
}