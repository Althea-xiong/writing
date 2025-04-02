<template>
  <view class="container">
    <view
      :style="{
        height: getStatusBarHeight() + 'px',
      }"
    ></view>
    <view class="title" :style="{ height: getTitleBarHeight() + 'px' }">
      <view
        v-for="(item, index) in titles"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
        class="box"
        >{{ item }}</view
      >
    </view>
    <view v-if="activeIndex === 0">
      <common-sub></common-sub>
      <common-card v-for="(item, index) in 3" :key="index"></common-card>
    </view>
    <view v-else>
      <view class="classify">
        <view
          class="box"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: activeIndex1 === index }"
          @click="activeIndex1 = index"
          >{{ item }}</view
        >
      </view>
      <view class="banner">
        <swiper indicator-dots autoplay circular>
          <swiper-item v-for="(item, index) in 4" :key="index">
            <image
              src="../../common/images/Rectangle 2163@2x.png"
              mode="aspectFit"
              class="pic"
            />
          </swiper-item>
        </swiper>
      </view>
      <view class="sort">
        <view
          class="box"
          v-for="(item, index) in sorts"
          :key="index"
          :class="{ active: activeIndex2 === index }"
          @click="activeIndex2 = index"
          >{{ item }}</view
        >
      </view>
      <view
        class="article"
        v-for="(item, index) in 3"
        :key="index"
        @click="goCollect"
      >
        <image src="../../common/images/矩形 8@2x.png" />
        <view>
          <view class="name">三毛 | 三毛笔下的自由勇气</view>
          <view class="desc">一起聆听她笔下汹涌澎湃的文字</view>
        </view>
      </view>
    </view>

    <TabBar index="discovery"></TabBar>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

import { getStatusBarHeight, getTitleBarHeight } from "../../utils/system";

const titles = ref(["社区", "发现"]);
const items = ref(["所有", "专辑", "标签"]);
const sorts = ref(["文学", "诗词", "电影", "语录", "段子"]);
const activeIndex = ref(0); // 社区、发现的索引
const activeIndex1 = ref(0); // 所有、专辑、标签的索引
const activeIndex2 = ref(0);

onLoad((options) => {
  if (options.type) {
    activeIndex.value = Number(options.type);
  }
  if (options.tab) {
    activeIndex1.value = Number(options.tab);
  }
  console.log("options", options);
});

const goCollect = () => {
  uni.navigateTo({
    url: "/pages/collect/collect",
  });
};
</script>

<style lang="scss" scoped>
.container {
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36rpx;
    color: #3d3d3d;
    font-weight: 700;
    margin-bottom: 48rpx;
    .box:first-child {
      margin-right: 40rpx;
    }
    .box.active {
      color: #165dff;
    }
  }
  .classify {
    width: 100%;
    height: 64rpx;
    background: #f4f4f4;
    border-radius: 40rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20rpx;
    font-weight: 500;
    font-size: 28rpx;
    color: #6f6f6f;
    .box {
      padding: 4rpx 55rpx;
    }
    .box.active {
      color: #007aff;
      background: #fff;
      border-radius: 40rpx;
    }
  }
  .banner {
    width: 100%;

    swiper {
      height: 263rpx;
      .pic {
        width: 100%;
        height: 100%;
      }
    }
  }
  .sort {
    width: 100%;
    background: #ffffff;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 32rpx;
    color: #1d2129;
    margin: 20rpx 0;
    .box {
      padding: 25rpx 0;
    }
    .box.active {
      color: #165dff;
      border-bottom: 2px solid #165dff;
      padding-bottom: 22rpx;
    }
  }
  .article {
    width: 100%;
    background: #fff;
    border-radius: 24rpx;
    padding: 24rpx;
    display: flex;
    align-items: center;
    color: #3d3d3d;
    margin-bottom: 20rpx;
    image {
      width: 102rpx;
      height: 102rpx;
      margin-right: 28rpx;
    }
    .name {
      font-size: 30rpx;
      font-weight: 700;
      margin-bottom: 14rpx;
    }
    .desc {
      font-size: 24rpx;
    }
  }
}
</style>
