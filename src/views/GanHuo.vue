<template>
  <transition name="fade">
    <div class="ganhuo">
      <van-nav-bar title="Gank.io | 干货" />
      <van-tabs v-model="tabIndex" sticky>
        <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">
          <CategoryList category="GanHuo" :type="tab.type" />
        </van-tab>
      </van-tabs>
    </div>
  </transition>
</template>

<script>
import CategoryList from "../components/CategoryList";
export default {
  name: "GanHuo",
  components: { CategoryList },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        { title: "Android", type: "Android" },
        { title: "iOS", type: "iOS" },
        { title: "Flutter", type: "Flutter" }
      ]
    };
  }
};
</script>

<style>
</style>