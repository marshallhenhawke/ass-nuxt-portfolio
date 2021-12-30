<template>
  <div class="container-box">
    <a :href="link" target="_blank" class="thelink">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ["text", "link"],
};
</script>

<style lang="scss" scoped>
.container-box {
  background-color: $theme-color;
  padding:2rem;
  margin-top:.5rem;
  margin-bottom:.5rem
}
.thelink{
    font-weight:750;
    color:$black;
    text-decoration: none;
    font-size:2rem;
    transition: font-weight 100ms ease-in-out;
}
.thelink:hover{
    font-weight:800
}
</style>