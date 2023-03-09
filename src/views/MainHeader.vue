<script setup>
const dollar = reactive({
  data: [
    { price: '$12,095', detail: 'Overdue' },
    { price: '$33,363', detail: 'Total Outstanding' },
    { price: '$4,500', detail: 'In draft' },
  ],
});
</script>

<template>
  <header>
    <section>
      <p>Invoices</p>
      <div class="left">
        <div v-for="d in dollar.data" :key="d.detail">
          <h2>{{ d.price }}</h2>
          <p class="light-p">{{ d.detail }}</p>
        </div>
      </div>
    </section>
    <section>
      <p>Invoices</p>
      <div class="right">
        <h2 class="hide">!</h2>
        <h2>$21.3k</h2>
      </div>
      <p class="light-p">$12,095 overdue</p>
    </section>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </header>
</template>

<style lang="scss" scoped>
@import '@/scss/_variable.scss';
header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  section {
    &:nth-last-child(2) {
      flex: 2 1 auto;
    }
    .left {
      width: 100%;
      display: flex;
      align-items: end;
      gap: 3rem;
      div {
        flex: 1 1 auto;
      }
    }
    .right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      h2.hide {
        position: relative;
        color: transparent;
        flex: 1 1 auto;
        &:before,
        &:after {
          position: absolute;
          content: '';
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: 70%;
          border-radius: 0.25rem;
        }
        &:before {
          width: 100%;
          background-color: $self-light-gray;
        }
        &:after {
          width: 35%;
          background-color: $self-dark;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
  }
}
</style>
