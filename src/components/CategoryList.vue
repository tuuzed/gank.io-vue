<template>
  <div class="category-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      @load="onLoad"
    >
      <div class="item" v-for="(item,index) in list" :key="index" @click="onItemClick(item)">
        <van-row>
          <van-col span="16">
            <span class="title">{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="7">
            <van-image
              class="image"
              :src="item.images[0]+'/crop/1/w/100'"
              radius="16"
              fit="cover"
              height="80"
              width="100%"
            />
          </van-col>
          <van-col class="publishedAt" span="24">{{ item.publishedAt }}</van-col>
        </van-row>
        <div class="divider"></div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { fetchList } from "../api/Category";

export default {
  name: "CategoryList",
  props: {
    category: String,
    type: String
  },
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
    onItemClick(item) {
      window.open(`https://gank.io/post/${item._id}`, "_blank");
    },
    onLoad() {
      fetchList(this.category, this.type, this.page, this.count)
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
.divider {
  background-color: #ebedf0;
  height: 1px;
  margin-top: 20px;
}
.item {
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
}
.title {
  font-size: 14px;
  display: -webkit-box;
  font-weight: bold;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.desc {
  margin-top: 2px;
  font-size: 12px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: grey;
}
.publishedAt {
  text-align: start;
  margin-top: 2px;
  font-size: 12px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #a0a0a0;
}
.image {
  padding: 4px;
}
</style>