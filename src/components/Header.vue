<template>
  <header>
    <div>
      <img src="../assets/dc-logo.png" alt="dc-logo" />
    </div>
    <div>
      <ul>
        <li v-for="(element, i) in headerNavList" :key="i">
          <a :href="element.src">{{ element.txt }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerNavList: [
        {
          txt: "CHARACTERS",
          src: "#",
        },
        {
          txt: "COMICS",
          src: "#",
        },
        {
          txt: "MOVIES",
          src: "#",
        },
        {
          txt: "TV",
          src: "#",
        },
        {
          txt: "GAMES",
          src: "#",
        },
        {
          txt: "COLLECTIBLES",
          src: "#",
        },
        {
          txt: "VIDEOS",
          src: "#",
        },
        {
          txt: "FANS",
          src: "#",
        },
        {
          txt: "NEWS",
          src: "#",
        },
        {
          txt: "SHOP",
          src: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/header";
</style>
