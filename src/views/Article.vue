<template>
  <div class="article">
    <van-nav-bar title="Gank.io | 专题" />
    <van-tabs v-model="tabIndex" sticky animated swipeable>
      <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">
        <CategoryList category="Article" :type="tab.type" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CategoryList from "../components/CategoryList";

export default {
  name: "Article",
  components: { CategoryList },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        { title: "Android", type: "Android" },
        { title: "iOS", type: "iOS" },
        { title: "Flutter", type: "Flutter" },
        { title: "前端", type: "frontend" },
        { title: "后端", type: "backend" },
        { title: "App", type: "app" },
        { title: "推荐", type: "promote" }
      ]
    };
  }
};
</script>

<style>
</style>