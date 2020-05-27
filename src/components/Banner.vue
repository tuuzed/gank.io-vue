<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" :height="160">
      <van-swipe-item v-for="image in bannerImages" :key="image">
        <van-image fit="cover" :src="image" height="160" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { banners } from "../api/Banner";

export default {
  name: "Banner",
  data() {
    return {
      banners: null
    };
  },
  computed: {
    bannerImages() {
      if (this.banners === null) {
        return [];
      } else {
        return this.banners.map(it => it.image);
      }
    }
  },
  created() {
    banners()
      .then(res => (this.banners = res.data))
      .catch(error => console.log("ERROR", error));
  }
};
</script>

<style scoped>
</style>