<script setup>
const cards = reactive({
  data: [
    {
      price: 20,
      date: '23 Sep, 2020',
      icon: 'fa-brands fa-atlassian',
      detail: 'Software',
    },
    {
      price: 30,
      date: '26 Sep, 2020',
      icon: 'fa-brands fa-cloudsmith',
      detail: 'Management',
    },
    {
      price: 60,
      date: '28 Sep, 2020',
      icon: 'fa-brands fa-apple',
      detail: 'Support',
    },
  ],
});
</script>

<template>
  <main>
    <section>
      <div class="title">
        <h2>Total Profit</h2>
        <p class="light-p">September 2020</p>
        <font-awesome-icon icon="fa-solid fa-sliders" />
      </div>
      <div class="left">
        <div class="text">
          <h4>$22.3K</h4>
          <p class="dot">$54.3K income</p>
          <p class="dot">$32.1K expenses</p>
        </div>
        <p>Mo 30</p>
      </div>
    </section>
    <section>
      <div class="title">
        <h2>Expenses</h2>
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </div>
      <div class="right">
        <div class="cards" v-for="c in cards.data" :key="c.price">
          <font-awesome-icon class="clip" icon="fa-solid fa-paperclip" />
          <div class="total">
            <h5>${{ c.price }}</h5>
            <h6>.00</h6>
          </div>
          <p>
            {{ c.date }}
          </p>
          <font-awesome-icon class="brand-icon" :icon="c.icon" />
          <p>{{ c.detail }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/scss/_variable.scss';
main {
  width: 100%;
  height: 38%;
  display: flex;
  gap: 4rem;
  section {
    width: 18rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &:last-child {
      flex: 1 1 auto;
    }
    .title {
      display: flex;
      align-items: center;
      h2 {
        margin: 0 0.5rem 0 0;
      }
      p {
        align-self: end;
      }
      svg {
        margin-left: auto;
      }
    }

    .left {
      position: relative;
      flex: 1 1 auto;
      display: flex;
      align-items: end;
      background-color: $self-yellow;
      border-radius: 0.5rem;
      overflow: hidden;
      padding: 1.25rem;
      &:before {
        position: absolute;
        content: '';
        top: -100%;
        left: -125%;
        width: 250%;
        height: 200%;
        border: 0.1rem solid $self-dark;
        border-bottom-right-radius: 100rem;
        border-bottom-left-radius: 100rem;
      }
      &:after {
        position: absolute;
        content: '';
        top: -98%;
        left: -145%;
        width: 250%;
        height: 200%;
        border: 0.1rem solid $self-orange;
        border-bottom-right-radius: 100rem;
        border-bottom-left-radius: 100rem;
      }
      .text {
        position: relative;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        &:after {
          position: absolute;
          content: '';
          top: 0;
          right: 2rem;
          height: 100%;
          width: 0.05rem;
          background-color: $self-dark;
        }
        p.dot {
          padding-left: 0.75rem;
          position: relative;
          &:before {
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            width: 0.35rem;
            height: 0.35rem;
            transform: translateY(-50%);
            border-radius: 100rem;
          }
          &:nth-last-child(2) {
            margin-top: 1rem;
            &:before {
              background-color: $self-orange;
            }
          }
          &:last-child {
            margin-top: 0.5rem;
            &:before {
              background-color: $self-dark;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 2rem;
      .cards {
        flex: 1 1 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: $self-light-purple;
        &:last-child {
          background-color: $self-light-blue;
        }
        &:nth-last-child(2) {
          background-color: $self-light-green;
        }
        .clip {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: $self-middle-gray;
        }
        .total {
          display: flex;
        }
        .brand-icon {
          margin-top: auto;
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
