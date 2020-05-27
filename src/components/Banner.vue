<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" :height="160">
      <van-swipe-item v-for="(image,index) in bannerImages" :key="index">
        <van-image fit="cover" :src="image" height="160" @click="onClickBannerItem(index)" />
      </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="show" :images="bannerImages" :start-position="index"></van-image-preview>
  </div>
</template>

<script>
import { banners } from "../api/Banner";

export default {
  name: "Banner",
  data() {
    return {
      index: 0,
      banners: [],
      show: false
    };
  },
  methods: {
    onClickBannerItem(index) {
      this.index = index;
      this.show = true;
    }
  },
  computed: {
    bannerImages() {
      return this.banners.map(it => it.image);
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