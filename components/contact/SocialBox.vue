<template>
  <div class="container-wrapper">
    <a :href="link" target="_blank" class="thelink">
      <span ref="linkText" class="text-font">{{ text }}</span>
      <span ref="containerBox" class="whiteout"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: ["text", "link"],

  methods: {
    mountIt() {
      var tl = this.$gsap.timeline();
      tl.to(this.$refs.containerBox, {
        duration: 1.2,
        width: "calc(100% + 4rem)",
        ease: "power4.out",
      })
      .to(this.$refs.linkText,{
        duration:.3,
        opacity:1
      },.8);
      this.$ScrollTrigger.create({
        start: "top 90%",
        trigger: this.$refs.containerBox,
        animation: tl,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-wrapper {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding: 2rem;
}
.thelink {
  font-weight: 750;
  color: $black;
  text-decoration: none;
  font-size: 2rem;
  transition: font-weight 100ms ease-in-out;
  position: relative;
  z-index: 2;
}
.text-font {
  position: relative;
  z-index: 2;
  opacity: 0;
}
.whiteout {
  background-color: $theme-color;
  height: calc(100% + 4rem);
  display: inline-block;
  width: 0%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-2rem);
  z-index: 1;
}

.thelink:hover {
  font-weight: 800;
  transition: font-weight 300ms cubic-bezier(0.805, -0.005, 0.36, 0.995);
}
</style>