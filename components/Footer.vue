<template>
  <div data-scroll-section class="container footer-padding">
    <div class="row">
      <div class="col-lg-10">
        <p class="header">
          <span class="special">Contact me</span> today to talk about working on
          a
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
      >
        <img
          ref="square1"
          class="square square-1"
          src="@/assets/img/square-1.svg"
        />
        <img
          ref="square2"
          class="square square-2"
          src="@/assets/img/square-2.svg"
        />
      </div>
    </div>
    <div class="row space-top-5">
      <div class="col-lg-8 offset-lg-3">
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
</template>

<script>
import SocialBox from "@/components/SocialBox.vue";
export default {
  components: {
    SocialBox,
  },
  mounted() {
    this.$nextTick(() => {
      this.gsap.to(this.$refs.square1, {
        duration: 12,
        rotate: 360,
        ease: "none",
        repeat: -1,
      });
      this.gsap.to(
        this.$refs.square2,
        {
          duration: 16,
          rotate: 360,
          ease: "none",
          repeat: -1,
        },
        0
      );
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
</style>