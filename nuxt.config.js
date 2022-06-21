export default {
  target: "static",
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
    clubPlugins: {
      scrollSmoother: true,
      splitText: true
    }
  },
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Marshall Henhawke - Frontend developer with an eye for design",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap"
      }
    ]
  },
  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      console.log("beforeEnter");
      this.$gsap.set(".page-slider", {
        left: "auto",
        right: 0
      });
    },

    enter(el, done) {
      console.log("Enter");
      this.$gsap.to(".page-slider", {
        width: "0vw",
        duration: 1,
        ease: "circ.inOut",
        stagger: { each: 0.1 },
        onComplete: done
      });
    },

    beforeLeave(el) {
      console.log("beforeEnter");
      this.$gsap.set(".page-slider", {
        left: 0,
        right: "auto"
      });
    },

    leave(el, done) {
      console.log("Leave");
      this.$gsap.to(".page-slider", {
        width: "100vw",
        duration: 1,
        ease: "circ.inOut",
        stagger: { each: 0.1 },
        onComplete: done
      });
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],
  buildModules: ["@nuxtjs/style-resources", "nuxt-gsap-module"],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: ["~assets/scss/main.scss"],

  styleResources: {
    scss: ["./assets/scss/_variables.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [],
  build: {
    transpile: ["gsap"]
  }
};
