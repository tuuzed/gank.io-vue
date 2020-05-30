<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" :height="160">
      <van-swipe-item v-for="(image,index) in images" :key="index">
        <van-image fit="cover" :src="image" height="160" width="100%" @click="onClickItem(index)" />
      </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="show" :images="images" :start-position="index" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Banner",
  data() {
    return {
      index: 0,
      show: false
    };
  },
  methods: {
    onClickItem(index) {
      this.index = index;
      this.show = true;
    },
    ...mapActions("banner", {
      fetch: "fetch"
    })
  },
  computed: mapState("banner", {
    images: state => state.list.map(it => it.image)
  }),
  created() {
    this.fetch();
  }
};
</script>