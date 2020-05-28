<template>
  <div class="girl-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      @load="onLoad"
    >
      <div class="card" v-for="(item,index) in list" :key="index" style="padding:20px">
        <span class="title">{{ item.title }}</span>
        <van-image
          :src="item.images[0]"
          radius="8"
          fit="cover"
          height="200"
          @click="onClickItemImage(index)"
        />
        <span class="desc">{{ item.desc }}</span>
      </div>
    </van-list>

    <van-image-preview v-model="show" :images="images" :start-position="index"></van-image-preview>
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
      list: [],
      show: false,
      index: 0
    };
  },
  computed: {
    images() {
      return this.list.map(it => it.images[0]);
    }
  },
  methods: {
    onClickItemImage(index) {
      this.index = index;
      this.show = true;
    },
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

<style scoped>
.card {
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}
.card img {
  width: 100%;
}
.title {
  font-size: 14px;
  display: -webkit-box;
  font-weight: bold;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding-bottom: 16px;
  padding-left: 8px;
}
.desc {
  font-size: 12px;
  color: #bfbfbf;
  display: block;
  letter-spacing: 2px;
  padding: 30px 20px;
}
</style>