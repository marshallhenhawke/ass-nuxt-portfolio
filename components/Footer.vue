<template>
  <div class="relative">
    <div class="container footer-padding relative">
      <div class="row">
        <div class="col-lg-10">
          <p class="header animate-title">
            <span class="special">Contact me</span> today to talk about working
            on a
            <span class="special relative inline-block">project together</span>
          </p>
        </div>
        <div
          class="
            col-lg-2
            d-flex
            justify-content-lg-end
            align-items-lg-start
            relative
          "
        ></div>
      </div>
      <div class="row space-top-5">
        <div class="col-lg-6 offset-lg-6">
          <div class="inline-block">
            <SocialBox
              text="/marshallhenhawke"
              link="https://www.instagram.com/marshallhenhawke/"
            />
            <SocialBox
              text="marsh.hawke@gmail.com"
              link="mailto:marsh.hawke@gmail.com"
            />
            <SocialBox text="343.364.8041" link="tel:3433648041" />
          </div>
        </div>
      </div>
      <img ref="tric" src="~/assets/img/tric.gif" class="img-fluid tric" />
    </div>
  </div>
</template>

<script>
import SocialBox from "@/components/SocialBox.vue";
export default {
  components: {
    SocialBox,
  },
  mounted() {
    this.$nextTick(() => {
      this.$gsap.to(this.$refs.tric, {
        scrollTrigger: {
          trigger: this.$refs.tric,
          start: "top bottom",
          scrub: true,
        },
        x: "-=1200",
        ease: "none",
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.footer-padding {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.square {
  position: absolute;
  width: 10rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.tric {
  width: 50rem;
  position: absolute;
  bottom: -2rem;
  left: 30%;
  pointer-events: none;
  z-index:3
}
</style>