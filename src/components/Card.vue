<template>
  <div class="card-container">
    <a href="#">
      <div class="img-container">
        <img :src="img" :alt="title" />
        <div class="overlay">
          <span>{{ description.toUpperCase() }}</span> <br />
          <span>{{ price }}</span>
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
@import "@/styles/card.scss";
</style>
