<template>
  <view class="nav">
    <view class="left">
      <slot name="left"></slot>
    </view>

    <navigator class="right" url="">
      <text>更多</text>
      <uni-icons type="right" size="15"></uni-icons>
    </navigator>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44rpx 0 20rpx 0;
  .left {
    font-size: 36rpx;
    font-weight: 700;
    .right {
      font-weight: 350;
      font-size: 24rpx;
    }
  }
}
</style>
