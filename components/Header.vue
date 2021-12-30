<template>
  <div class="header-container">
    <div class="logo-container">
      <img class="logo-svg" src="@/assets/img/logo.svg" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 2rem 2rem;
  z-index: 100;
  mix-blend-mode: difference;
}
.logo-svg {
  width: 4rem;
}
.menu-svg {
  width: 6rem;
}
</style>