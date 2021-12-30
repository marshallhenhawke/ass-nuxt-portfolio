<template>
  <div>
    <div class="peaches">
      <div class="peach" data-speed="0.3">🍑</div>
      <div class="peach" data-speed="0.37">🍑</div>
      <div class="peach" data-speed="0.35">🍑</div>
      <div class="peach" data-speed="0.4">🍑</div>
      <div class="peach" data-speed="0.2">🍑</div>
      <div class="peach" data-speed="0.3">🍑</div>
      <div class="peach" data-speed="0.45">🍑</div>
    </div>
    <div class="text" data-speed="0.2">
      <span>
        <a href="https://github.com/ashthornton/asscroll" target="_blank"
          >ASScroll</a
        >
        <span>&times;</span> GSAP ScrollTrigger</span
      >
    </div>
    <div class="gif">
      <img src="https://media.giphy.com/media/BoBOKNtlR8rTi/giphy.gif" alt="" />
    </div>
  </div>
</template>

<script>
import globalMixin from "~/mixins/global.js";
export default {
  mixins: [globalMixin],
  mounted() {
    const isTouch = "ontouchstart" in document.documentElement;
    const totalScroll =
      this.$asscroll.containerElement.scrollHeight - innerHeight;

    this.gsap.to(".peach", {
      scrollTrigger: {
        pin: true,
        pinType: isTouch ? "fixed" : "transform",
        end: "200%",
        scrub: 0.2,
        trigger: ".peaches",
      },

      y: (i, target) => -totalScroll * target.dataset.speed,
      ease: "none",
    });

    this.gsap.from(".gif img", {
      scrollTrigger: {
        pin: true,
        pinType: isTouch ? "fixed" : "transform",
        scrub: true,
        trigger: ".gif",
      },

      scale: 0.2,
      autoAlpha: 0,
      ease: "sine.out",
    });
    this.$nextTick(() => {});
  },
  name: "IndexPage",
};
</script>

<style>
.text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  font-size: 4vw;
}
.text a {
  color: black;
}

.peaches {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}

.peach {
  position: absolute;
  font-size: 5vw;
}
.peach:nth-child(1) {
  top: 10%;
  left: 5%;
  transform: scale(0.6);
}
.peach:nth-child(2) {
  top: 20%;
  right: 15%;
  transform: scale(0.74);
}
.peach:nth-child(3) {
  top: 80%;
  right: 35%;
  transform: scale(0.7);
}
.peach:nth-child(4) {
  top: 90%;
  left: 35%;
  transform: scale(0.8);
}
.peach:nth-child(5) {
  top: 20%;
  left: 45%;
  transform: scale(0.4);
}
.peach:nth-child(6) {
  top: 70%;
  left: 10%;
  transform: scale(0.6);
}
.peach:nth-child(7) {
  top: 60%;
  right: 10%;
  transform: scale(0.9);
}

.gif {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}
.gif img {
  display: block;
}

body,
html {
  padding: 0;
  margin: 0;
}
</style>
