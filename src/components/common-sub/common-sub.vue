<template>
  <view class="subs">
    <view
      class="sub"
      v-for="(item, index) in subs"
      :key="index"
      :class="{ active: subIndex === index }"
      @click="subIndex = index"
      >{{ item }}</view
    >
  </view>
</template>

<script setup>
import { ref } from "vue";
const subs = ref(["全部", "热门"]);
const subIndex = ref(0);
</script>

<style lang="scss" scoped>
.subs {
  width: 100%;
  display: flex;
  font-weight: 400;
  font-size: 24rpx;
  color: #3d3d3d;
  padding: 20rpx 30rpx;
  .sub {
    margin-right: 26rpx;
  }
  .sub.active {
    font-weight: 500;
    border-bottom: 2px solid #165dff;
    padding-bottom: 5rpx;
  }
}
</style>
