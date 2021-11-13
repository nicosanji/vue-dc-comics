<template>
  <div class="card-col">
    <a href="#">
      <div class="img-container">
        <img :src="img" :alt="title" />
        <div class="overlay">
          <span>{{ price }}</span> <br />
          <span>{{ description }}</span>
        </div>
      </div>
      <p class="card-title">{{ title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["img", "title", "price", "description"],
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.card-col {
  width: calc(100% / 6 - $padding-x * 2);

  a {
    display: inline-block;
    //overflow: hidden;
    width: 100%;
    position: relative;
    color: white;
    text-decoration: none;

    .img-container {
      height: ($max-width-container / 6) - $padding-x * 2;
      overflow: hidden;
      position: relative;

      .overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        transition: opacity 0.3s;
      }
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
    }
  }

  img {
    width: 100%;
  }

  .card-title {
    padding: $padding-y 0;
  }
}
</style>
