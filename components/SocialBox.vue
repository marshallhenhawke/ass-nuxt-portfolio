<template>
  <div class="container-wrapper">
    <div ref="containerBox" class="container-box">
      <a :href="link" target="_blank" class="thelink">{{ text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "link"],
  mounted() {
    this.$nextTick(() => {
      this.gsap.to(this.$refs.containerBox,{
        duration:1.2,
        width:'auto',
        ease:'power4.inOut',
        scrollTrigger:{
          start:'top 90%',
          trigger:this.$refs.containerBox
        }
      })
    });
  },
};
</script>

<style lang="scss" scoped>
.container-box {
  background-color: $theme-color;
  padding: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  width: 0rem;
}
.thelink {
  font-weight: 750;
  color: $black;
  text-decoration: none;
  font-size: 2rem;
  transition: font-weight 100ms ease-in-out;
}
.thelink:hover {
  font-weight: 800;
}
</style>