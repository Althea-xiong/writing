<template>
  <view class="card" @click="goDetail">
    <view class="author" style="display: none">
      <view class="avatar">
        <image src="../../common/images/Ellipse 186@2x.png" class="img" />
        <view class="name">风中等雨来</view>
      </view>
      <view class="date">2025-03-02:12:32</view>
    </view>
    <view class="content">
      <image
        src="../../common/images/矩形 13@2x.png"
        class="card-image"
        v-show="isImg"
      />
      <view class="card-text"
        >我仍生活在人间。至少，在这么偏僻的地方，仍有人间的姻缘逐迹而来。蜜蜂般执着而灵敏。陷落于辛忙劳动中的人们，仍有花期般准时降临的情感与情欲。
        时间到了，总会有姻缘成熟。
        但我常常有幻觉，觉得自己和这片葵花地正逐渐退向梦境和虚构之中。越来越多的访客都拉不住我们了。连沉甸甸的收获和真实的姻缘都拉不住我们了。
        又想起被我们放弃的南面荒野中........
        <view class="articleName"> ——— 《遥远的向日葵地》 </view>
      </view>
    </view>
    <view class="footer">
      <view class="item">
        <uni-icons type="heart" size="20"></uni-icons>
        <text class="count">123</text>
      </view>
      <view class="item">
        <text class="iconfont icon-pinglun"></text>
        <text class="count">123</text>
      </view>
      <view class="item">
        <text class="iconfont icon-fenxiang"></text>
        <text class="count">123</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const goDetail = () => {
  uni.navigateTo({
    url: "/pages/detail/detail",
  });
};
const props = defineProps({
  isImg: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: #ffffff;
  box-shadow: 2rpx 8rpx 16rpx 0rpx rgba(153, 153, 153, 0.25);
  border-radius: 30rpx;
  font-weight: 500;
  margin-bottom: 20rpx;
  padding: 20rpx 30rpx;
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .avatar {
      display: flex;
      align-items: center;
      .img {
        width: 36rpx;
        height: 36rpx;
        margin-right: 6rpx;
      }
      .name {
        font-size: 24rpx;
        color: #6f6f6f;
      }
    }
    .date {
      font-size: 20rpx;
      color: #3d3d3d;
    }
  }
  .content {
    font-size: 28rpx;
    color: #000;
    line-height: 48rpx;
    padding: 40rpx 0;

    .card-image {
      width: 100%;
      height: 400rpx;
      margin-bottom: 40rpx;
    }
    .articleName {
      text-align: right;
      color: #333;
      margin-top: 30rpx;
    }
  }
  .footer {
    display: flex;
    height: 88rpx;
    border-top: 2rpx solid #f2f3f5;
    align-items: center;
    justify-content: space-around;
    font-size: 32rpx;
    color: #000;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 20px;
      }
      .count {
        margin-left: 30rpx;
      }
    }
  }
}
</style>
