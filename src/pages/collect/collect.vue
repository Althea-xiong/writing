<template>
  <view class="container">
    <view class="profile">
      <image
        src="../../common/images/矩形 17@2x.png"
        mode="aspectFit"
        class="pic"
      />
      <view class="authorInfo">
        <view class="title">热爱生活的温柔文案</view>
        <view class="name">风中等雨来<text>共36条句子</text></view>
        <view class="desc">
          简介：饭撒方式方法撒饭撒方式方法撒饭撒方式方法撒饭撒方式方法撒撒饭撒方式方法撒撒饭撒方式方法撒</view
        >
      </view>
    </view>
    <common-sub></common-sub>
    <common-card v-for="(item, index) in 3" :key="index"></common-card>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  .profile {
    width: 100%;
    display: flex;
    margin-bottom: 40rpx;
    padding-top: 30rpx;
    .pic {
      width: 210rpx;
      height: 160rpx;
      margin-right: 36rpx;
    }
    .authorInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-weight: 500;
        font-size: 32rpx;
        color: #3d3d3d;
      }
      .name {
        font-size: 20rpx;
        color: #3d3d3d;
        text {
          margin-left: 16rpx;
        }
      }
      .desc {
        width: 446rpx;
        font-size: 24rpx;
        color: #999999;
        line-height: 40rpx;
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 2;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
        /* 溢出的文本隐藏 */
        overflow: hidden;
        /* 溢出用省略号显示 */
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
