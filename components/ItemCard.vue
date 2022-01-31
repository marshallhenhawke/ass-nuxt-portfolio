<template>
  <div>
    <div :style="'background-color:' + color" class="card-image"></div>
    <h2 class="space-top-1-half">{{ title }}</h2>
    <p>{{ caption }}</p>
    <div>
      <span
        class="special skill-font"
        v-for="(skill, index) in skills"
        :key="skill"
        ><span v-if="index != 0" class="special bullet">•</span
        >{{ skill }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "caption", "skills"],
};
</script>

<style scoped>
.card-image {
  min-height: 28rem;
  width: 100%;
}
.skill-font {
  font-size: 1.8rem;
  line-height: 1;
}
.bullet {
  display: inline-block;
  margin: 0rem 1rem;
}
</style>