// mixins can be imported to each page required, they'll be "injected" in the correct lifecycle hook (in this case mounted() and beforeDestroy()).

export default {
  mounted() {
    // Comes from plugin
    this.$asscroll.enable();
  },

  beforeDestroy() {
    // Comes from plugin
    this.$asscroll.disable();
  }
};
