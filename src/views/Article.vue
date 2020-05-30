<template>
  <div class="article">
    <van-nav-bar title="Gank.io | 专题" />
    <van-tabs v-model="tabIndex" sticky animated swipeable @change="onTabChange">
      <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">
        <CategoryList category="Article" :type="tab.type" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CategoryList from "../components/CategoryList";
import { mapMutations } from "vuex";

export default {
  name: "Article",
  components: { CategoryList },
  data() {
    return {
      tabIndex: this.$store.state.article.tabIndex,
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
  },
  methods: {
    ...mapMutations("article", {
      updateTabIndex: "updateTabIndex"
    }),
    onTabChange() {
      this.updateTabIndex(this.tabIndex);
    }
  }
};
</script>
