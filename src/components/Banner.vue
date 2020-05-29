<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" :height="160">
      <van-swipe-item v-for="(image,index) in images" :key="index">
        <van-image
          fit="cover"
          :src="image"
          height="160"
          width="100%"
          @click="onClickBannerItem(index)"
        />
      </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="show" :images="images" :start-position="index" />
  </div>
</template>

<script>
import { banners } from "../api/Banner";
import { mapState } from "vuex";

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
  computed: mapState({
    images: state => state.banners.map(it => it.image)
  }),
  created() {
    banners()
      .then(res => this.$store.commit("updateBanners", res.data))
      .catch(error => console.log("ERROR", error));
  }
};
</script>