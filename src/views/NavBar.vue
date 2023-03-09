<script setup></script>

<template>
  <nav>
    <span></span>
    <font-awesome-icon icon="fa-brands fa-jira" class="icon-blue" />
    <font-awesome-icon icon="fa-brands fa-ethereum" class="icon-green" />
    <font-awesome-icon icon="fa-solid fa-plus" class="icon-gray" />
  </nav>
</template>

<style lang="scss" scoped>
@import '@/scss/_variable.scss';
nav {
  background-color: $self-dark;
  height: 100%;
  width: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  span {
    position: relative;
    margin-bottom: 3rem;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-1rem) translateY(-0.5rem);
      content: '...';
      font-family: sans-serif;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      color: $self-light-gray;
    }
  }
  svg {
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 100rem;
    color: $self-dark;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .icon-blue {
    background-color: $self-blue;
    transform: rotate(45deg);
  }
  .icon-green {
    background-color: $self-green;
  }
  .icon-gray {
    background-color: $self-gray;
  }
  &:after {
    position: absolute;
    content: '';
    top: 8.75rem;
    left: 0;
    height: 1.5rem;
    width: 0.2rem;
    background-color: $self-green;
  }
}
</style>
