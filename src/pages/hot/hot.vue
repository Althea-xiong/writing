<template>
  <view class="hotLayout">
    <view :style="{ height: getStatusBarHeight() + 'px' }"></view>
    <view class="title" :style="{ height: getTitleBarHeight() + 'px' }">
      <image src="../../static/images/goBack.png" class="goBack" />
      <image src="../../static/images/copy.png" class="copy" />
      <view class="name">寻·觅</view>
    </view>
    <!-- 模糊背景层 -->
    <image :src="currentBg" mode="aspectFill" class="blur-bg" />

    <!-- 可滑动内容区 -->
    <swiper
      class="card-swiper"
      :current="currentIndex"
      @change="onSwiperChange"
    >
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="content-card">
          <common-card :isImg="true"></common-card>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { getStatusBarHeight, getTitleBarHeight } from "../../utils/system";
import { ref } from "vue";

// 数据源
const list = ref([
  {
    image: "/static/images/矩形 13@2x.png",
    title: "标题1",
    desc: "这里是第一张卡的描述内容",
    bg: "/static/images/Rectangle 2076@2x.png",
  },
  {
    image: "/static/images/矩形 13@2x.png",
    title: "标题2",
    desc: "这里是第二张卡的描述内容",
    bg: "/static/images/Rectangle 2076@2x.png",
  },
]);

const currentIndex = ref(0);
const currentBg = ref(list.value[0].bg);

// 切换回调
const onSwiperChange = (e) => {
  currentIndex.value = e.detail.current;
  currentBg.value = list.value[currentIndex.value].bg;
};
</script>
<style lang="scss" scoped>
.hotLayout {
  padding: 0 40rpx 40rpx 40rpx;
  position: relative;
  width: 100vm;
  height: 100vh;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    .goBack {
      width: 53.85rpx;
      height: 53.85rpx;
      margin-right: 35rpx;
    }
    .copy {
      width: 53.85rpx;
      height: 53.85rpx;
      margin-right: 119.23rpx;
    }
    .name {
      font-weight: 700;
      font-size: 35rpx;
      color: #3d3d3d;
    }
  }

  /* 模糊背景层 */
  .blur-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(20px) brightness(0.8);
    opacity: 0.9;
    transition: all 0.5s ease;
  }

  /* 卡片滑动容器 */
  .card-swiper {
    width: 100%;
    height: 80vh;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .content-card {
      margin: 0 20rpx;
    }
  }
}
</style>
