<template>
  <div id="app">
    <div id="pSlide1" class="page-slider p-slider1"></div>
    <div id="pSlide2" class="page-slider p-slider2"></div>
    <div id="pSlide3" class="page-slider p-slider3"></div>
    <div id="pSlide4" class="page-slider p-slider4"></div>
    <div id="pSlide5" class="page-slider p-slider5"></div>
    <div class="intro-container">
      <div ref="logo" class="logo-container">
        <img class="logo logo-1" src="@/assets/img/logo-changer.gif" />
      </div>
      <div ref="slider1" class="intro-slider slider1"></div>
      <div ref="slider2" class="intro-slider slider2"></div>
      <div ref="slider3" class="intro-slider slider3"></div>
      <div ref="slider4" class="intro-slider slider4"></div>
      <div ref="slider5" class="intro-slider slider5"></div>
    </div>
    <Header />
    <Menu />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Nuxt ref="therouter" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Header,
    Menu,
  },
  watch: {
    $route() {
      this.$ScrollTrigger.refresh();
    },
  },
  mounted() {
    this.$ScrollSmoother.create({
      speed: 2,
      effects: true,
      normalizeScroll: true,
      preventDefault: true,
    });
    this.$nextTick(() => {
      (this.introTimeline = this.$gsap.timeline()), this.introAnimation();
    });
  },
  methods: {
    introAnimation() {
      this.introTimeline
        .to(
          this.$refs.logo,
          {
            duration: 0.3,
            autoAlpha: 1,
            force3D: true,
          },
          1
        )
        .to(
          this.$refs.logo,
          {
            duration: 0.7,
            top: "0%",
            translateY: "-50%",
            ease: "circ.inOut",
            force3D: true,
          },
          3
        )
        .to(
          this.$refs.slider1,
          {
            duration: 0.7,
            height: "0vh",
            ease: "circ.inOut",
            force3D: true,
          },
          3
        )
        .to(
          this.$refs.slider2,
          {
            duration: 0.7,
            height: "0vh",
            ease: "circ.inOut",
            force3D: true,
          },
          3
        )
        .to(
          this.$refs.slider3,
          {
            duration: 0.7,
            height: "0vh",
            ease: "circ.inOut",
            force3D: true,
          },
          3
        )
        .to(
          this.$refs.slider4,
          {
            duration: 0.7,
            height: "0vh",
            ease: "circ.inOut",
            force3D: true,
          },
          3
        )
        .to(
          this.$refs.slider5,
          {
            duration: 0.7,
            height: "0vh",
            force3D: true,
            ease: "circ.inOut",
            onComplete: () => {
              this.$nuxt.$emit("finishedIntro");
            },
            onCompleteParams: this,
          },
          3
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  image-rendering: -webkit-optimize-contrast;
  width: 18rem;
}
.logo-container {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 201;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.intro-slider {
  width: 20vw;
  position: fixed;
  height: 100vh;
  max-height:100vh;
  background-color: $theme-color;
  z-index: 200;
}

.slider1 {
  left: 0vw;
  top: 0;
}
.slider2 {
  left: 20vw;
  bottom: 0;
}
.slider3 {
  left: 40vw;
  top: 0;
}
.slider4 {
  left: 60vw;
  bottom: 0;
}
.slider5 {
  left: 80vw;
  top: 0;
}
.page-slider {
  width: 0vw;
  position: fixed;
  height: 20vh;
  background-color: $theme-color;
  z-index: 400;
}
.p-slider1 {
  left: 0vw;
  top: 0vh;
}
.p-slider2 {
  left: 0vw;
  top: 20vh;
}
.p-slider3 {
  left: 0vw;
  top: 40vh;
}
.p-slider4 {
  left: 0vw;
  top: 60vh;
}
.p-slider5 {
  left: 0vw;
  top: 80vh;
}
</style>
