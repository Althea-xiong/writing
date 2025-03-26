<template>
  <view class="container">
    <view class="picture">
      <image
        src="../../common/images/矩形 13@2x.png"
        mode="aspectFit"
        class="img"
      />
    </view>
    <view class="content">
      <view class="text">
        我仍生活在人间。至少，在这么偏僻的地方，仍有人间的姻缘逐迹而来。蜜蜂般执着而灵敏。陷落于辛忙劳动中的人们，仍有花期般准时降临的情感与情欲。
        时间到了，总会有姻缘成熟。
        但我常常有幻觉，觉得自己和这片葵花地正逐渐退向梦境和虚构之中。越来越多的访客都拉不住我们了。连沉甸甸的收获和真实的姻缘都拉不住我们了。
        又想起被我们放弃的南面荒野中........
      </view>
      <view class="tags">
        <view class="tag">#人生</view>
        <view class="tag">#人生</view>
        <view class="tag">#人生</view>
      </view>
    </view>

    <view class="commentList">
      <view class="title">评论</view>
      <view class="comment" v-for="(item, index) in 3" :key="index">
        <image class="avatar" />
        <view>
          <view class="name">来自风的压力</view>
          <view class="date">2025.01.03 12:30</view>
          <view class="text">大千世界，无奇不有啊！！！</view>
        </view>
      </view>
    </view>

    <view class="push">
      <input placeholder="聊聊你的感受~" />
      <view class="operate">
        <!-- <uni-icons type="chat" size="28"></uni-icons> -->
        <text class="iconfont icon-pinglun"></text>
        <uni-icons type="heart" size="28" class="icon"></uni-icons>
        <uni-icons type="star" size="28" class="icon"></uni-icons>
        <text class="iconfont icon-fenxiang"></text>
      </view>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  padding: 0;
  padding-bottom: 140rpx;
  .picture {
    width: 100%;
    height: 414rpx;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    background: #fff;
    font-size: 28rpx;
    padding: 40rpx;
    line-height: 40rpx;
    .tags {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .tag {
        margin: 10rpx 10rpx 0 0;
        font-size: 24rpx;
      }
    }
  }
  .commentList {
    margin-top: 14rpx;
    background: #fff;
    padding: 0 30rpx 80rpx 30rpx;
    .title {
      font-size: 36rpx;
      font-weight: 700;
      padding: 20rpx;
    }
    .comment {
      display: flex;
      padding: 20rpx;
      padding-left: 0;
      .avatar {
        width: 56rpx;
        height: 56rpx;
        border-radius: 50%;
        background: #ccc;
        margin-right: 16rpx;
      }
      .name {
        font-size: 24rpx;
      }
      .date {
        font-size: 20rpx;
        color: #979797;
      }
      .text {
        margin-top: 20rpx;
        font-size: 20rpx;
      }
    }
  }
  .push {
    width: 100%;
    border-top: 1px solid #cccccc92;
    position: fixed;
    bottom: 0;
    padding: 30rpx;
    padding-bottom: env(safe-area-inset-bottom);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      width: 280rpx;
      height: 76rpx;
      background: #f5f5f5;
      border-radius: 40rpx 40rpx 40rpx 40rpx;
      padding-left: 24rpx;
    }
    .operate {
      .icon {
        padding: 15rpx;
      }
      .iconfont {
        padding: 15rpx;
        font-size: 28px;
      }
    }
  }
}
</style>
