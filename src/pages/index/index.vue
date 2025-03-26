<template>
  <view class="container">
    <view :style="{ height: getStatusBarHeight() + 'px' }"></view>
    <view class="title" :style="{ height: getTitleBarHeight() + 'px' }">
      <uni-icons type="search" size="25"></uni-icons>
      <view class="text">文采</view>
      <view></view>
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
    <view class="select">
      <common-title>
        <template #left>
          <view class="text">精选摘录</view>
        </template>
      </common-title>
      <view class="content">
        <view class="desc">
          昔者庄周梦为胡蝶，栩栩然胡蝶也。自喻适志与！不知周栩栩然胡蝶也。栩栩然胡蝶也。栩栩然胡蝶也。
        </view>
        <image
          src="../../common/images/Rectangle 2165@2x.png"
          mode="aspectFit"
          class="pic"
        />
      </view>
    </view>
    <view class="recommand">
      <common-title>
        <template #left>
          <view class="text">推荐专辑</view>
        </template>
      </common-title>
      <view class="content">
        <image
          src="../../common/images/Rectangle 2164@2x.png"
          mode="aspectFit"
          class="pic"
        />
        <view class="mask">人民日报相见恨晚的金句</view>
      </view>
    </view>
    <view class="hot">
      <common-title>
        <template #left>
          <view class="text">热门分类</view>
        </template>
      </common-title>
      <view class="content">
        <view class="box">
          <image src="../../common/images/Ellipse 186@2x.png" class="pic" />
          <view class="tag">#文学</view>
          <view class="count">222帖子</view>
        </view>
        <view class="box">
          <image src="../../common/images/Ellipse 186@2x.png" class="pic" />
          <view class="tag">#文学</view>
          <view class="count">222帖子</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { getStatusBarHeight, getTitleBarHeight } from "../../utils/system";
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .text {
    font-size: 36rpx;
    font-weight: 700;
  }
}
.banner {
  width: 100%;
  margin-top: 36rpx;
  swiper {
    height: 263rpx;
    .pic {
      width: 100%;
      height: 100%;
    }
  }
}
.select {
  .content {
    background: #fff;
    padding: 28rpx 30rpx 26rpx 26rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24rpx;
    .desc {
      font-size: 36rpx;
      font-weight: 700;
      margin-right: 18rpx;
      width: 390rpx;
      display: -webkit-box; /* 将元素设置为弹性盒子 */
      -webkit-box-orient: vertical; /* 设置内容垂直排列 */
      -webkit-line-clamp: 3; /* 限制显示的行数 */
      overflow: hidden; /* 隐藏超出部分 */
      text-overflow: ellipsis; /* 超出部分显示省略号 */
    }
    .pic {
      width: 222rpx;
      height: 222rpx;
    }
  }
}
.recommand {
  .content {
    width: 100%;
    height: 276rpx;
    position: relative;
    overflow: hidden;
    border-radius: 24rpx;

    .pic {
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 78rpx;
      line-height: 78rpx;
      padding-left: 26rpx;
      color: #fff;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10rpx);
      font-weight: 700;
    }
  }
}
.hot {
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 38rpx;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      border-radius: 36rpx;
      width: 306rpx;
      height: 340rpx;
      .pic {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
      }
      .tag {
        font-weight: 500;
        font-size: 36rpx;
        margin: 20rpx;
      }
      .count {
        font-size: 24rpx;
      }
    }
  }
}
</style>
