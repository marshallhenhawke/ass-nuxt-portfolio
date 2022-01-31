<template>
  <div>
    <div
      id="menuContainer"
      @click="openMenu"
      @mouseover="menuHover"
      @mouseleave="menuLeave"
      class="menu-opener relative"
    >
      <img class="open-menu-icon icon-decoy" src="@/assets/img/menu-icon.svg" />
      <img
        ref="openArrow"
        class="open-menu-icon visible-icon"
        src="@/assets/img/menu-icon.svg"
      />
    </div>
    <div ref="slider" class="slideout">
      <div ref="tentacleContainer" class="tentacle-container">
        <img
          ref="tent1"
          class="img-fluid tent tent1 pixelated"
          src="@/assets/img/tent1.gif"
        />
        <img
          ref="tent2"
          class="img-fluid tent tent2 pixelated"
          src="@/assets/img/tent2.gif"
        />
        <img
          ref="tent3"
          class="img-fluid tent tent3 pixelated"
          src="@/assets/img/tent3.gif"
        />
      </div>
      <div class="slideout-container">
        <div class="menu-filler">
          <div>
            <div
              @click="closeMenu"
              class="hover-close-text flex flex-row align-items-center relative"
            >
              <p ref="closeText" class="close-text">
                <span class="close-font">close</span>
              </p>
              <img
                ref="closeArrow"
                class="close-menu-icon"
                src="@/assets/img/close-arrow.svg"
              />
            </div>
          </div>
        </div>
        <div class="menu-body">
          <router-link ref="menuItem1" to="/" class="menu-text"
            ><span class="menu-text-span">Home</span></router-link
          ><br />
          <router-link ref="menuItem2" to="/" class="menu-text"
            ><span class="menu-text-span">About</span></router-link
          ><br />
          <router-link ref="menuItem3" to="/" class="menu-text"
            ><span class="menu-text-span">Work</span></router-link
          ><br />
          <router-link ref="menuItem4" to="/" class="menu-text"
            ><span class="menu-text-span">Contact</span></router-link
          >
        </div>
        <div class="menu-footer">
          <div class="menu-footer-container">
            <a class="contact-link" href="mailto:marsh.hawke@gmail.com">
              <span class="minimized-header menu-min-header"
                >example@email.com</span
              >
            </a>
          </div>
          <div class="menu-footer-container">
            <a class="contact-link" href="tel:3433648041">
              <span class="minimized-header menu-min-header">343.364.8041</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeWidth: "0rem",
      closingMenu: false,
    };
  },
  mounted() {
    console.log("this1", this.gsap);
    this.$nextTick(() => {
      // The whole view is rendered, so I can safely access or query
      // the DOM. ¯\_(ツ)_/¯

      this.menuItems = [
        this.$refs.menuItem1,
        this.$refs.menuItem2,
        this.$refs.menuItem3,
        this.$refs.menuItem4,
      ];
      console.log(this.menuItems);
      this.menuAnim = this.gsap.timeline({ paused: true });

      this.closeWidth = this.$refs.closeText.offsetWidth;
      this.rotateTents();
      this.menuAnim.to(this.$refs.openArrow, {
        duration: 0.4,
        width: "7.5rem",
        ease:'power1.inOut',
        rotate:10
      });
    });
  },
  methods: {
    menuHover() {
      this.menuAnim.play();
    },
    menuLeave() {
      this.menuAnim.reverse();
    },
    openMenu() {
      this.closingMenu = false;
      var tl = this.gsap.timeline();
      tl.to(this.$refs.slider, {
        duration: 0.8,
        width: "40%",
        ease: "back.inOut(1)",
        force3D: true,
      })
        .to(
          this.$refs.tentacleContainer,
          {
            rotate: "0deg",
            duration: 4,
            ease: "elastic.out(1, 0.5)",
            opacity: 1,
            overwrite: true,
            force3D: true,
          },
          0
        )
        .to(
          ".menu-text",
          {
            opacity: 1,
            y: "+=-100px",
            ease: "expo.inOut",
            duration: 0.8,
            force3D: true,
            stagger: {
              each: 0.1,
              //amount: 0.3
            },
          },
          0.3
        )
        .to(
          this.$refs.closeArrow,
          {
            opacity: 1,
            force3D: true,
            x: "+=25px",
            ease: "expo.inOut",
          },
          0.8
        )
        .to(
          this.$refs.closeText,
          {
            opacity: 1,
            force3D: true,
            x: "+=25px",
            ease: "expo.inOut",
          },
          0.8
        )
        .to(
          ".menu-min-header",
          {
            opacity: 1,
            x: "+=25px",
            force3D: true,
            ease: "expo.inOut",
            duration: 0.8,
            stagger: {
              each: 0.1,
              //amount: 0.3
            },
          },
          0.8
        );
    },
    closeMenu() {
      this.closingMenu = true;
      var tl = this.gsap.timeline();

      tl.to(
        ".menu-min-header",
        {
          opacity: 0,
          force3D: true,
          x: "+=-25px",
          ease: "expo.out",
          duration: 0.8,
          stagger: {
            each: 0.1,
            //amount: 0.3
          },
        },
        0
      )
        .to(
          this.$refs.closeArrow,
          {
            opacity: 0,
            x: "+=-25px",
            force3D: true,
            ease: "expo.out",
          },
          0
        )
        .to(
          this.$refs.closeText,
          {
            opacity: 0,
            force3D: true,
            x: "+=-25px",
            ease: "expo.out",
          },
          0
        )
        .to(
          ".menu-text",
          {
            opacity: 0,
            force3D: true,
            y: "+=100px",
            ease: "expo.inOut",
            duration: 0.8,
            stagger: {
              each: 0.1,
              //amount: 0.3
            },
          },
          0
        )
        .to(
          this.$refs.tentacleContainer,
          {
            rotate: "90deg",
            force3D: true,
            duration: 0.8,
            ease: "expo.in",
            opacity: 0,
            overwrite: true,
          },
          0
        )
        .to(
          this.$refs.slider,
          {
            duration: 0.8,
            force3D: true,
            width: "0%",
            ease: "back.in(1)",
          },
          0.3
        );
    },
    rotateTents() {
      const tent1 = this.$refs.tent1;
      const tent2 = this.$refs.tent2;
      const tent3 = this.$refs.tent3;
      const maxTrans = 15;

      let maxXDist, maxYDist;

      let centerX, centerY;

      function resize1() {
        maxXDist = innerWidth / 2;
        maxYDist = innerHeight / 2;

        const area = tent1.getBoundingClientRect();
        const R = area.width / 2;
        centerX = area.left + R;
        centerY = area.top + R;
      }
      var self = this;
      function updateTrans1(e) {
        // Calculate the distance from the mouse position to the center.
        const x = e.clientX - centerX;
        const y = e.clientY - centerY;
        // const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(x, 2)); // optionally use the total distance as a factor or restriction

        // Put that number over the max distance from 2)
        const xPercent = x / maxXDist;
        const yPercent = y / maxYDist;

        // Multiply that product by the max value from 1 and apply it to your element.
        const scaledXPercent = xPercent * maxTrans;
        const scaledYPercent = yPercent * maxTrans;

        self.gsap.to(tent1, {
          skewX: scaledXPercent + 1,
          skewY: scaledYPercent,
          duration: 1.5,
          overwrite: "auto",
        });
        self.gsap.to(tent2, {
          skewX: scaledXPercent + 2,
          skewY: scaledYPercent + 2,
          duration: 0.2,
          overwrite: "auto",
        });
        self.gsap.to(tent3, {
          skewX: scaledXPercent + 5,
          skewY: scaledYPercent + 4,
          duration: 3,
          overwrite: "auto",
        });
      }

      window.addEventListener("resize", resize1);
      resize1();

      document
        .querySelector(".slideout")
        .addEventListener("mousemove", updateTrans1);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-min-header {
  opacity: 0;
  transform: translateX(-25px);
  display: block;
}
.slideout {
  position: fixed;
  z-index: 10000;
  background-color: $theme-color;
  width: 0%;
  top: 0;
  right: 0;
  height: 100vh;
}
.slideout-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
}
.menu-text {
  font-family: "Syne", sans-serif;
  position: relative;
  font-size: 5.5rem;
  font-weight: 750;
  color: #161316;
  display: inline-block;
  position: relative;
  line-height: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: font-weight 300ms cubic-bezier(0.945, 0, 0.04, 1);
  opacity: 0;
  transform: translateY(100px);
  text-decoration: none;
}
.menu-text-span {
  position: relative;
  z-index: 101;
  color: $black;
  text-decoration: none;
}
.menu-text:hover {
  color: #161316;
  text-decoration: none;
  font-weight: 800;
}
.menu-text::before {
  content: "";
  position: absolute;
  bottom: -10%;
  height: 55%;
  width: 0%;
  left: 0;
  background-color: #e25e47;
  z-index: 100;
  transition: width 300ms cubic-bezier(0.945, 0, 0.04, 1);
}
.menu-text:hover::before {
  width: calc(101%);
}

.menu-filler {
  flex: 1;
  display: flex;
  align-items: center;
}
.close-menu-icon {
  width: 1.8rem;
  opacity: 0;
  transform: translateX(-25px);
  display: inline-block;
  z-index: 101;
  position: relative;
}
.close-menu-icon:hover {
  cursor: pointer;
}
.menu-body {
  flex: 2;
}
.menu-footer {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  color: #161316;
  padding-bottom: 2.5rem;
}
.menu-footer-container {
  margin-right: 3rem;
}
.menu-opener {
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 199;
  mix-blend-mode: difference;
}
.menu-opener:hover {
  cursor: pointer;
}
.open-menu-icon {
  width: 6.5rem;
  height: auto;
  transform-origin: center;
 
}
.visible-icon{
   position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.fixed-logo {
  width: 4rem;
  mix-blend-mode: difference;
}
.tent {
  position: absolute;
  right: -6.5rem;
  top: 0;
  width: 13rem;
  transform: rotate(45deg);
  transform-origin: top center;
}
.tent1 {
  transform: rotate(25deg);
}
.tent2 {
  transform: rotate(85deg);
}
.tent3 {
  transform: rotate(50deg);
}
.pixelated {
  image-rendering: pixelated;
}
.minimized-header {
  font-size: 1.2rem;
  font-family: "Syne", sans-serif;
  font-weight: 750;
  line-height: 1.4;
  margin-top: 0.5rem;
  letter-spacing: 0.1rem;
}
.menu-min-header {
  opacity: 0;
  transform: translateX(-25px);
  display: block;
}
.contact-link {
  color: #161316;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.contact-link > span {
  position: relative;
  z-index: 101;
  transition: font-weight 300ms cubic-bezier(0.945, 0, 0.04, 1);
}
.contact-link > span:hover {
  font-weight: 800;
}
.contact-link:hover {
  color: #161316;
  text-decoration: none;
  font-weight: 800;
}
.contact-link::before {
  content: "";
  position: absolute;
  bottom: -10%;
  height: 55%;
  width: 0%;
  left: 0;
  background-color: #dd5d46;
  z-index: 100;
  transition: width 300ms cubic-bezier(0.945, 0, 0.04, 1);
}
.contact-link:hover::before {
  width: 100%;
}
.close-font {
  color: $black;
  font-weight: 750;
  font-family: Syne;
  line-height: 1;
  user-select: none;
  font-size: 1.1rem;
  font-size: 1.2rem;
  transition: font-weight 100ms ease-in-out;
  margin-right: 0.5rem;
  z-index: 101;
  display: inline-block;
  position: relative;
}
.close-font:hover {
  font-weight: 800;
  cursor: pointer;
}
.close-text {
  color: $black;
  font-weight: 750;
  font-family: Syne;
  line-height: 1;
  user-select: none;
  font-size: 1.1rem;
  font-size: 1.2rem;
  transition: font-weight 100ms ease-in-out;
  margin-right: 0.5rem;
  opacity: 0;
  z-index: 101;
  transform: translateX(-25px);
  display: inline-block;
  position: relative;
}
.close-text:hover {
  font-weight: 800;
}
.close-text::before {
  content: "";
  position: absolute;
  bottom: -10%;
  height: 55%;
  width: 0%;
  left: 0;
  background-color: #dd5d46;
  z-index: 100;
  transition: width 300ms cubic-bezier(0.945, 0, 0.04, 1);
}
.close-text:hover::before {
  width: 140%;
}
.hover-close-text:hover {
  cursor: pointer;
  font-weight: 800;
}
.tentacle-container {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: rotate(90deg);
  transform-origin: top right;
}
.icon-decoy{
  opacity:0
}
</style>


