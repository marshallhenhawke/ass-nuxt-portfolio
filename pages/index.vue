<template>
  <div>
    <div class="container hero-padding">
      <div class="row">
        <div class="col-lg-6 d-flex flex-lg-column justify-content-lg-end">
          <h1 class="intro-text" ref="introLine1">Front-end</h1>
        </div>
        <div class="col-lg-6 relative">
          <img ref="eye" class="img-fluid eye" src="@/assets/img/eye.gif" />
          <img class="img-fluid fake-eye" src="@/assets/img/eye.gif" />
        </div>
        <div class="col-lg-12 d-flex flex-lg-row align-items-lg-center">
          <div class="spinner-container d-flex justify-content-center">
            <img
              ref="spinner"
              class="img-fluid spinner-1"
              src="@/assets/img/spinner.svg"
            />
          </div>
          <div>
            <h1 class="intro-text" ref="introLine2">
              <span class="special">Developer</span> With An
            </h1>
            <h1 ref="introLine3" class="intro-text">
              Eye For <span class="special">Design</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container standard-padding">
      <div class="row">
        <div
          class="
            col-lg-6
            d-flex
            flex-lg-column
            justify-content-lg-between
            relative
          "
        >
          <h2 class="animate-title">
            My name is <span class="special">Marshall Henhawke</span>
          </h2>
          <div class="position-face">
            <img
              class="face img-fluid fade-up-small"
              src="@/assets/img/face.gif"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <p class="animate-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum tristique porttitor. Ut viverra aliquet enim, eget sodales
            leo facilisis non. Nam sollicitudin lectus tortor, ut tempus nisi
            congue non. Cras a rutrum diam.
          </p>

          <p class="no-bottom animate-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum tristique porttitor. Ut viverra aliquet enim, eget sodales
            leo facilisis non. Nam sollicitudin lectus tortor, ut tempus nisi
            congue non. Cras a rutrum diam. Phasellus vitae gravida eros. Fusce
            fringilla tempus dolor, aliquet venenatis lectus sagittis et.
            Phasellus vitae accumsan odio.
          </p>
          <p class="animate-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum tristique porttitor. Ut viverra aliquet enim, eget sodales
            leo facilisis non. Nam sollicitudin lectus tortor, ut tempus nisi
            congue non. Cras a rutrum diam.
          </p>
          <div class="d-flex flex-lg-row space-top-5 fade-up">
            <div class="center flex-1">
              <span class="large-special"> 5 </span>
              <h4>years of pro experience</h4>
            </div>
            <div class="vertical-line"></div>
            <div class="center flex-1 space-bottom-2">
              <span class="large-special"> 4 </span>
              <h4>creative passions</h4>
            </div>
            <div class="vertical-line"></div>
            <div class="center flex-1">
              <img class="infinite img-fluid" src="@/assets/img/infinite.svg" />
              <h4>love for my craft</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="sliderSection1" class="standard-padding space-top-10">
      <div class="js-ticker ticker-1">
        <ul class="wrapper">
          <li>
            <span class="special special-block no-left">ux</span> designer
            <span class="special special-block">ui</span> designer
            <span class="special special-block">graphic</span> designer
            <span class="special special-block">print</span> designer
          </li>
          <li>
            <span class="special special-block no-left">experience</span>
            designer
          </li>
        </ul>
      </div>

      <div class="js-ticker ticker-2">
        <ul class="wrapper">
          <li class="outline">
            <span class="special special-block no-left">html</span> enthusiast
            <span class="special special-block">css</span> studier
          </li>
          <li class="outline">
            <span class="special special-block no-left">javascript</span> coder
            <span class="special special-block">wordpress</span> themer
            <span class="special special-block">vue</span> developer
          </li>
        </ul>
      </div>

      <div class="js-ticker ticker-3">
        <ul class="wrapper">
          <li>
            <span class="special special-block no-left">website</span> admirer
            <span class="special special-block">lifelong</span> student
          </li>
          <li>
            <span class="special special-block no-left">eye</span> for detail
            <span class="special special-block">passion</span> for design
            <span class="special special-block">need</span> for perfection
          </li>
        </ul>
      </div>
    </div>
    <div class="standard-padding container third-section">
      <div class="row">
        <div class="col-lg-7">
          <p class="header animate-title">
            Take <span class="special">a look</span> at some of my
            <span class="special relative inline-block"
              ><img class="counter" src="@/assets/img/04.svg" />projects</span
            >
          </p>
        </div>
        <div class="col-lg-5">
          <p class="no-bottom space-top-15 relative animate-text">
            <img class="img-fluid triangle" src="@/assets/img/triangle.svg" />
            Take a peek at some of the projects i have completed. Most of these
            are done under the coimpany allCare IT with a small team that i was
            the thing and also iw as fdoing another thing but i was doing one
            thing and i came across this and that,.
          </p>
        </div>
      </div>
      <div class="row space-top-10">
        <div class="col-lg-7 relative">
          <ItemCard
            style="z-index: 2"
            class="relative fade-up-small"
            color="#058e5a"
            title="Bag to Earth"
            caption="I designed and developed the front end of a website created for a paper bag manufacturer in Napanee, Ontario."
            :skills="['web design', 'web development']"
          />
          <img ref="bird" src="@/assets/img/bird.gif" class="bird" />
        </div>
        <div class=":col-lg-5"></div>
        <div class="col-lg-4 offset-lg-1 wynford-space relative">
          <ItemCard
            style="z-index: 2"
            class="relative fade-up-small"
            color="#431b54"
            title="The Wynford Group"
            caption="I designed and developed the front end of a website created for a paper bag manufacturer in Napanee, Ontario."
            :skills="['web design', 'web development']"
          />
        </div>
        <div class="col-lg-5 offset-lg-2 chamber-space">
          <ItemCard
            color="#00355a"
            class="fade-up-small"
            title="Kingston Chamber of Commerce"
            caption="I designed and developed the front end of a website created for a paper bag manufacturer in Napanee, Ontario."
            :skills="['web design', 'web development']"
          />
        </div>
        <div class="col-lg-7 offset-lg-4 warder-space relative">
          <ItemCard
            class="fade-up-small"
            color="#222b35"
            title="Warder Law"
            caption="I designed and developed the front end of a website created for a paper bag manufacturer in Napanee, Ontario."
            :skills="['web design', 'web development']"
          />
          <div data-speed="1.2" class="wine-container">
            <img class="wine" src="@/assets/img/collage1.svg" />
            <img class="wine wine2" src="@/assets/img/collage2.svg" />
            <img class="wine wine3" src="@/assets/img/collage3.svg" />
            <img class="wine wine4" src="@/assets/img/collage4.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="container standard-padding">
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div>
            <img
              data-speed="1.7"
              ref="aboutStar"
              class="star-1"
              src="@/assets/img/star_1.svg"
            />
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center">
          <p class="header animate-title">
            Take <span class="special">a look</span> at some of my
            <span class="special relative inline-block">projects</span>
          </p>
        </div>
      </div>
      <div class="row space-top-1">
        <div class="col-lg-5 offset-lg-5">
          <p class="no-bottom animate-text">
            Take a peek at some of the projects i have completed. Most of these
            are done under the coimpany allCare IT with a small team that i was
            the thing and also iw as fdoing another thing but i was doing one
            thing and i came across this and that,.
          </p>
        </div>
      </div>
    </div>
    <div ref="sliderSection2" class="standard-padding space-top-7">
      <div class="js-ticker ticker-1">
        <ul class="wrapper">
          <li>
            <span class="special special-block no-left">ux</span> designer
            <span class="special special-block">ui</span> designer
            <span class="special special-block">graphic</span> designer
            <span class="special special-block">print</span> designer
          </li>
          <li>
            <span class="special special-block no-left">experience</span>
            designer
          </li>
        </ul>
      </div>

      <div class="js-ticker ticker-2">
        <ul class="wrapper">
          <li class="outline">
            <span class="special special-block no-left">html</span> enthusiast
            <span class="special special-block">css</span> studier
          </li>
          <li class="outline">
            <span class="special special-block no-left">javascript</span> coder
            <span class="special special-block">wordpress</span> themer
            <span class="special special-block">vue</span> developer
          </li>
        </ul>
      </div>

      <div class="js-ticker ticker-3">
        <ul class="wrapper">
          <li>
            <span class="special special-block no-left">website</span> admirer
            <span class="special special-block">lifelong</span> student
          </li>
          <li>
            <span class="special special-block no-left">eye</span> for detail
            <span class="special special-block">passion</span> for design
            <span class="special special-block">need</span> for perfection
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ItemCard,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    console.log("how are you", this.$gsap);
    if (this.$nuxt.context.from != undefined) {
      this.$nextTick(() => {
        this.introScene();
      });
    }
    this.$nextTick(() => {
      this.$ScrollTrigger.refresh()
      this.initLoco();
      this.animateText();
      this.goBird();
      this.goAboutStar();
    });
  },
  created() {
    this.$nuxt.$on("finishedIntro", this.introScene);
  },
  methods: {
    goAboutStar() {
      var aboutStarAnimation = this.$gsap.timeline();
      aboutStarAnimation.to(this.$refs.aboutStar, {
        autoAlpha: 1,
        rotate: 360,
        duration: 3,
      });
      this.$ScrollTrigger.create({
        trigger: this.$refs.aboutStar,
        start: "top bottom",
        animation: aboutStarAnimation,
        force3d: true,
      });
    },
    animateText() {
      var self = this;
      this.$gsap.utils.toArray(".fade-up-small").forEach((el) => {
        this.$gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 160%",
          },
          duration: 1.5,
          autoAlpha: 1,
          transform:
            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          ease: "back.out(1)",
          force3D: true,
        });
      });
      this.$gsap.utils.toArray(".fade-up").forEach((el) => {
        this.$gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          duration: 3,
          autoAlpha: 1,
          transform:
            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          ease: "elastic.out(1, 0.75)",
          force3D: true,
        });
      });
      this.$gsap.utils.toArray(".animate-title").forEach((title) => {
        const childSplit = new this.$SplitText(title, {
          type: "lines",
          linesClass: "split-child",
        });
        const parentSplit = new this.$SplitText(title, {
          linesClass: "split-parent",
        });

        this.$gsap.from(childSplit.lines, {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
          },
          duration: 2,
          yPercent: 110,
          skewX: 9,
          skewY: 7,
          ease: "elastic.out(1, 0.75)",
          stagger: 0.15,
          force3D: true,
          opacity:0
        });
      });
      this.$gsap.utils.toArray(".animate-text").forEach((el) => {
        self.$gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          duration: 2,
          autoAlpha: 1,
          translateY: "-=80",
          ease: "elastic.out(1, 0.75)",
          force3D: true,
        });
      });
    },
    introScene() {
      var tl = this.$gsap.timeline();
      tl.to(this.$refs.introLine1, {
        duration: 2,
        autoAlpha: 1,
        transform:
          "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        ease: "elastic.out(1, 0.75)",
      })
        .to(
          this.$refs.spinner,
          {
            duration: 0.9,
            width: "12rem",
            ease: "power4.out",
          },
          "-=1.8"
        )
        .to(
          this.$refs.spinner,
          {
            duration: 5,
            ease: "none",
            rotate: "+=360",
            repeat: -1,
          },
          "-=5"
        )
        .to(
          this.$refs.introLine2,
          {
            duration: 2,
            autoAlpha: 1,
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            ease: "elastic.out(1, 0.75)",
          },
          "-=1.7"
        )
        .to(
          this.$refs.introLine3,
          {
            duration: 2,
            autoAlpha: 1,
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            ease: "elastic.out(1, 0.75)",
          },
          "-=1.8"
        )
        .to(
          this.$refs.eye,
          {
            autoAlpha: 1,
            duration: 3,
            ease: "power4.out",
            width: "100%",
            rotateX: "+=96",
          },
          "-=1.4"
        );
    },

    goBird() {
      var triggerAnim = this.$gsap.timeline();
      triggerAnim.to(this.$refs.bird, {
        x: "-=400",
        ease: "none",
      });
      this.$ScrollTrigger.create({
        trigger: this.$refs.bird,
        start: "top bottom",
        animation: triggerAnim,
        scrub: true,
        end: "bottom top",
      });
    },
    initLoco() {
      this.$ScrollTrigger.create({
        trigger: this.$refs.sliderSection1,
        start: "top bottom",
        onEnter: this.initSideScroller,
        once: true,
      });
    },
    initSideScroller() {
      // const dur = 20;

      document.querySelectorAll(".js-ticker .wrapper").forEach((ticker) => {
        // Get the initial size of the ticker

        const totalDistance = ticker.offsetWidth;

        // Position the ticker
        this.$gsap.set(ticker, { yPercent: -50 });
        var node = ticker.querySelector("li").cloneNode(true);

        // // Clone the first item and add it to the end
        ticker.appendChild(node);

        // Get all of the items

        this.$gsap.to(ticker, {
          duration: this.$gsap.utils.random(10, 30),
          x: -totalDistance,
          ease: "none",
          repeat: -1,
        });
      });
      this.$ScrollTrigger.refresh();
    },
  },
};
</script>

<style lang="scss" scoped>
.eye {
  margin-bottom: 3rem;
  transform: translate(-50%, -50%) rotateX(264deg) perspective(1000px);
  transform-origin: center center;
  width: 10%;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
}
.fake-eye {
  opacity: 0;
  margin-bottom: 3rem;
}
.hero-padding {
  padding-top: 7rem;
  padding-bottom: 15rem;
}
.spinner-1 {
  //width: 12rem;
  width: 0rem;
  transform-origin: center center;
  margin-right: 3rem;
}
.spinner-container {
  width: 15rem;
  height: 12rem;
}
.large-special {
  line-height: 1;
  font-size: 6rem;
  margin-bottom: 1.5rem;
  display: block;
  font-family: "Syne Tactile", cursive;
}
.vertical-line {
  width: 1px;
  background-color: white;
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.face {
  width: 90%;
}
.position-face {
  left: -12rem;
  position: absolute;
  z-index: 1;
  width: 42rem;
  bottom: -14rem;
}
.js-ticker {
  height: 10rem;
  position: relative;
}

.js-ticker .wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  white-space: nowrap;
  padding: 0;
  will-change: transform;
}

.js-ticker li {
  list-style: none;
  padding: 0;
  line-height: 1;
  color: $theme-color;
  font-weight: 730;
  font-size: 10rem;
  display: inline-block;
}
.special-block {
  display: inline-block;
}
.ticker-1 {
  transform: rotate(-4.5deg);
}
.ticker-2 {
  transform: rotate(-6.5deg);
}
.ticker-3 {
  transform: rotate(-1.14deg);
}
.no-left {
}
.third-section {
  margin-top: 7rem;
}
.infinite {
  width: 5rem;
  margin-top: 3.4rem;
  margin-bottom: 1.5rem;
}
.triangle {
  position: absolute;
  bottom: calc(100% + 3rem);
  left: 0rem;
  width: 7rem;
}
.counter {
  position: absolute;
  width: 5.5rem;
  top: 0;
  right: calc(0rem - 4.25rem);
}
.bag-space {
}
.chamber-space {
  margin-top: 10rem;
}
.wynford-space {
  margin-top: 35rem;
}
.warder-space {
  margin-top: 12rem;
}
.star-1 {
  width: 25rem;
  opacity: 0;
  transform: translateY(100px);
  position: relative;
}
.bird {
  position: absolute;
  width: 30rem;
  left: 5rem;
  top: 100%;
  z-index: 1;
}
.wine-container {
  position: absolute;
  bottom: calc(100% + 5rem);
  left: 60%;
}
.wine {
  position: absolute;
  bottom: calc(100% + 5rem);
  width: 6rem;
  left: 60%;
}
.wine2 {
  left: calc(60% + 10rem);
}
.wine3 {
  left: calc(60% + 20rem);
}
.wine4 {
  left: calc(60% + 30rem);
}
.est {
  position: static;
  left: 0;
  top: 0;
  width: 60rem;
  transform: rotate(-90deg);
  transform-origin: bottom left;
}
.intro-text {
  transform: translate3d(0px, 110%, -90px) scale3d(1, 1, 1) rotateX(-92deg)
    rotateY(0deg) rotateZ(0deg) skew(3deg, -12deg);
  transform-origin: 50% 0%;
  transform-style: preserve-3d;
  position: relative;
  opacity: 0;
}
</style>




