<template>
  <div class="relative">
    <img ref="tric" class="tric" src="~/assets/img/tric.gif" />
    <div class="container contact-padding relative">
      <div class="row">
        <div class="col-lg-10">
          <p ref="title" class="header animate-title o-0">
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
              ref="box1"
              text="/marshallhenhawke"
              link="https://www.instagram.com/marshallhenhawke/"
            />
            <SocialBox
              ref="box2"
              text="marsh.hawke@gmail.com"
              link="mailto:marsh.hawke@gmail.com"
            />
            <SocialBox ref="box3" text="343.364.8041" link="tel:3433648041" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBox from "@/components/contact/SocialBox.vue";
export default {
  components: {
    SocialBox,
  },
  data() {
    return {
      animation: {},
    };
  },
  mounted() {
    this.intro();
    setTimeout(() => {
      this.$ScrollTrigger.refresh();
      this.animation.play();
    }, 1000);
    setTimeout(() => {
      this.$refs.box1.mountIt();
    }, 1400);
    setTimeout(() => {
      this.$refs.box2.mountIt();
    }, 1600);
    setTimeout(() => {
      this.$refs.box3.mountIt();
    }, 1800);
  },
  methods: {
    intro() {
      var theWidth = window.innerWidth + this.$refs.tric.offsetWidth;
      const childSplit = new this.$SplitText(this.$refs.title, {
        type: "lines",
        linesClass: "split-child",
      });

      this.animation = this.$gsap
        .timeline({ paused: true })
        .from(childSplit.lines, {
          duration: 2,
          yPercent: 110,
          skewX: 9,
          skewY: 7,
          ease: "elastic.out(1, 0.75)",
          stagger: 0.15,
          force3D: true,
          autoAlpha: 0,
        });
      this.$gsap.to(this.$refs.tric, {
        duration: 10,
        x: -theWidth,
        ease: "none",
        repeat: -1
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.o-0 {
  // opacity:0
}
.tric {
  position: fixed;
  bottom: 0;
  left: 100%;
}
.contact-padding {
  padding-top: 5rem;
  min-height: 100vh;
}
</style>