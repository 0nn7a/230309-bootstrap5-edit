<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}

const list = reactive({
  data: [
    { icon: 'fa-regular fa-copy', name: 'Dashboard' },
    { icon: 'fa-regular fa-user', name: 'Client' },
    { icon: 'fa-regular fa-bookmark', name: 'Invoices' },
    { icon: 'fa-regular fa-file-lines', name: 'Estimates' },
    { icon: 'fa-regular fa-comments', name: 'My teams' },
    { icon: 'fa-solid fa-bars', name: 'Settings' },
  ],
});
</script>

<template>
  <article>
    <div class="avatar">
      <img :src="getImageUrl('avatar')" alt="avatar" />
    </div>
    <div class="info">
      <p>Welcome back,</p>
      <h3>0nn 7a</h3>
    </div>
    <ul class="list">
      <li v-for="(l, index) in list.data" :key="index">
        <font-awesome-icon :icon="l.icon" />
        <p>{{ l.name }}</p>
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
@import '@/scss/_variable.scss';
article {
  background-color: $self-light-gray;
  width: 13rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .avatar {
    margin-top: 3.5rem;
    position: relative;
    width: 5rem;
    height: 5rem;
    background-color: $self-purple;
    border-radius: 100rem;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      //background-color: $self-light-gray;
      //opacity: 0.2;
    }
    img {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 115%;
      transform: translateX(-10%) translateY(-5%);
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }
  .list {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    li {
      display: flex;
      padding: 0.75rem 0;
      transition: all 0.2s ease-in-out;
      svg {
        width: 1rem;
        height: 1rem;
        margin-right: 1rem;
      }
      &:last-child {
        margin-top: auto;
        color: $self-dark-gray;
      }
      &:hover {
        color: $self-middle-gray;
        cursor: pointer;
      }
    }
  }
}
</style>
