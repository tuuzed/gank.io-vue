<template>
  <div class="layout">
    <div class="content">
      <router-view />
    </div>
    <van-tabbar v-model="tabbarIndex" @change="tabbarChange">
      <van-tabbar-item icon="point-gift-o">妹纸</van-tabbar-item>
      <van-tabbar-item icon="fire-o">干货</van-tabbar-item>
      <van-tabbar-item icon="gem-o">专题</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarIndex: 0
    };
  },
  methods: {
    tabbarChange(index) {
      switch (index) {
        case 0:
          this.$router.replace("girl");
          break;
        case 1:
          this.$router.replace("ganhuo");
          break;
        case 2:
          this.$router.replace("article");
          break;
      }
    }
  },
  created() {
    switch (this.$router.currentRoute.name) {
      case "ganhuo":
        this.tabbarIndex = 1;
        break;
      case "article":
        this.tabbarIndex = 2;
        break;
    }
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 50px;
}
</style>