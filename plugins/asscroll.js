import Vue from "vue";

import ASScroll from "@ashthornton/asscroll";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const asscroll = new ASScroll({
  disableRaf: true
});

gsap.ticker.add(asscroll.update);

ScrollTrigger.defaults({
  scroller: asscroll.containerElement
});

ScrollTrigger.scrollerProxy(asscroll.containerElement, {
  scrollTop(value) {
    return arguments.length
      ? (asscroll.currentPos = value)
      : asscroll.currentPos;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

asscroll.on("update", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", asscroll.resize);

Object.defineProperty(Vue.prototype, "gsap", {
  value: gsap
});
Object.defineProperty(Vue.prototype, "ScrollTrigger", {
  value: ScrollTrigger
});

export default (context, inject) => {
  inject("asscroll", asscroll);
};
