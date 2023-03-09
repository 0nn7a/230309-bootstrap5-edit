<script setup>
const cards = reactive({
  data: [
    {
      id: '#00106',
      name: 'Mindtickle',
      date: '2 Sep, 2020',
      method: 'Viewed',
      price: '$3,500',
    },
    {
      id: '#00105',
      name: 'Cleancloud',
      date: '1 Sep, 2020',
      method: 'Sent',
      price: '$2,000',
    },
  ],
});
</script>

<template>
  <footer>
    <section>
      <div class="title">
        <h2>Invoices</h2>
        <p class="light-p">recently created</p>
        <div class="icons">
          <font-awesome-icon icon="fa-solid fa-sliders" />
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </div>
      </div>
      <div class="left">
        <div class="cards">
          <font-awesome-icon icon="fa-solid fa-cloud-arrow-up" />
          <p>Update Invoice</p>
        </div>
        <div class="cards" v-for="(c, index) in cards.data" :key="index">
          <div class="text">
            <p>{{ c.id }}</p>
            <h5>{{ c.name }}</h5>
            <p>{{ c.date }}</p>
          </div>
          <hr />
          <div class="total">
            <p>{{ c.method }}</p>
            <h5>{{ c.price }}</h5>
          </div>
        </div>
      </div>
    </section>
    <div class="pic">
      <h2>. . .</h2>
      <h4>Work Anywhere<br />with the Invoicer<br />Mobile App</h4>
      <div class="rainbow-circle first"></div>
      <div class="rainbow-circle second"></div>
      <div class="rainbow-circle third"></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/scss/_variable.scss';

footer {
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  gap: 4rem;
  section {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .title {
      display: flex;
      align-items: center;
      h2 {
        margin: 0 0.5rem 0 0;
      }
      p {
        align-self: end;
      }
      .icons {
        display: flex;
        margin-left: auto;
        gap: 1rem;
      }
    }

    .left {
      height: 100%;
      display: flex;
      gap: 2rem;
      .cards {
        background-color: $self-light-gray;
        display: flex;
        flex-direction: column;
        &:first-child {
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          svg {
            font-size: 2rem;
          }
        }
        &:last-child .text:before {
          background-color: $self-dark-green;
        }

        .text {
          position: relative;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 0.1rem;
            height: 100%;
            background-color: $self-orange;
          }
          p {
            color: $self-gray;
            font-weight: 300;
          }
        }
        hr {
          margin: auto 0;
        }
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }

  .pic {
    position: relative;
    overflow: hidden;
    width: 17rem;
    background-color: $self-dark;
    border-radius: 0.5rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    h2,
    h4 {
      color: #ffffff;
      line-height: 1.5;
    }
    .first {
      position: absolute;
      top: -20%;
      right: -4rem;
      width: 12rem;
      height: 12rem;
    }
    .second {
      position: absolute;
      top: 0.5rem;
      right: -8rem;
      width: 12rem;
      height: 12rem;
    }
    .third {
      position: absolute;
      top: 1rem;
      left: -11rem;
      width: 12rem;
      height: 12rem;
    }
    .rainbow-circle {
      border-radius: 100rem;
      background-image: linear-gradient(
        45deg,
        #a0c4ff,
        #9bf6ff,
        #bdb2ff,
        #fdffb6,
        #ffadad,
        #a0c4ff,
        #9bf6ff,
        #ffadad,
        #ffd6a5
      );
      -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRo%0APSIyMDAiIGhlaWdodD0iMjAwIiB2ZXJzaW9uPSIxLjEiPgogIDxjaXJjbGUg%0AY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTYiIHN0cm9rZT0iYmxhY2siIHN0cm9r%0AZS13aWR0aD0iNCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPC9zdmc+);
      -webkit-mask-size: 100%;
      -webkit-mask-position: 0;
      -webkit-mask-repeat: no-repeat;
    }
  }
}
</style>
