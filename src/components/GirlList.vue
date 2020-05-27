<template>
  <div class="girl-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      @load="onLoad"
    >
      <div v-for="(item,index) in list" :key="index" style="padding:20px">
        <h5>{{ item.title }}</h5>
        <van-image :src="item.images[0]" radius="8" fit="cover" height="200" />
        <span>{{ item.desc }}</span>
      </div>
    </van-list>
    <router-view />
  </div>
</template>

<script>
import { fetchList } from "../api/Category";

export default {
  name: "GirlList",
  data() {
    return {
      finished: false,
      loading: false,
      error: false,
      page: 1,
      count: 10,
      list: []
    };
  },
  methods: {
    onLoad() {
      fetchList("Girl", "Girl", this.page, this.count)
        .then(res => {
          this.list.push(...res.data);
          this.loading = false;
          this.finished = res.data.length < this.count;
          this.page++;
        })
        .catch(() => (this.error = true));
    }
  }
};
</script>

<style>
</style>