<template>
  <div class="girl">
    <Banner />
    <GirlList />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import GirlList from "../components/GirlList";
export default {
  name: "Girl",
  components: { Banner, GirlList }
};
</script>

<style>
</style>