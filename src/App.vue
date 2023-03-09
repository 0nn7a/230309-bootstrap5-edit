<script setup></script>

<template>
  <NavBar />
  <UserInfo />
  <div class="main">
    <MainHeader />
    <MainMiddle />
    <MainFooter />
  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .main {
    flex: 1 1 auto;
    padding: 3.5rem 3rem 2.75rem 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
</style>
