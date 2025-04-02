<template>
  <view class="userLayout">
    <image
      src="../../static/images/背景@2x.png"
      mode="aspectFill"
      class="background-image"
    ></image>
    <view class="userInfo">
      <view class="avatar">
        <image src="../../common/images/Rectangle 2165@2x.png" />
      </view>
      <view>
        <view class="nickname">
          机器小怪物
          <uni-icons type="compose" size="20"></uni-icons>
        </view>
        <view class="ID">ID:62626626</view>
      </view>
    </view>
    <view class="section">
      <view class="title">
        <view
          class="box"
          v-for="(item, index) in items"
          :key="index"
          :class="{
            active: activeIndex === index,
          }"
          @click="activeIndex = index"
        >
          {{ item }}
        </view>
      </view>

      <view class="content">
        <view v-show="activeIndex === 0">
          <view class="box" v-for="(item, index) in 3" :key="index">
            <view class="date"> <text>23</text>/3月 </view>
            <view class="desc">食物千千万 唯独莓你不行～</view>

            <image
              class="img"
              src="../../common/images/Rectangle 2076@2x.png"
              mode="aspectFit"
            />
          </view>
        </view>
        <view v-show="activeIndex === 1">收藏内容</view>
        <view v-show="activeIndex === 2">喜欢内容</view>
        <view v-show="activeIndex === 3">评论内容</view>
      </view>
    </view>

    <TabBar index="user"></TabBar>
  </view>
</template>

<script setup>
import { ref } from "vue";
const items = ref(["动态", "收藏", "喜欢", "评论"]);
const activeIndex = ref(0);
</script>

<style lang="scss" scoped>
.userLayout {
  position: relative;
  .background-image {
    position: absolute;
    top: -247.92rpx;
    left: -231.25rpx;
    width: 889.58rpx;
    height: 638.19rpx;
    z-index: -1;
  }
  .userInfo {
    width: 100%;
    padding: 193rpx 0 0 45rpx;
    display: flex;
    align-items: center;
    .avatar {
      width: 193rpx;
      height: 193rpx;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 63rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .nickname {
      font-size: 42rpx;
      font-weight: 700;
      margin-bottom: 10rpx;
    }
    .ID {
      font-size: 30rpx;
      color: #a0a7ba;
    }
  }
  .section {
    padding: 45rpx;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30rpx;
      color: #7c7c7c;
      .box {
        position: relative;
      }
      .box.active {
        color: #333;
        font-weight: 700;
      }
      .active::after {
        content: ""; /* 必须设置内容 */
        position: absolute; /* 绝对定位 */
        left: 50%; /* 将下划线的起点定位到文字中间 */
        bottom: -10rpx; /* 将下划线定位到文字底部 */
        width: 50%; /* 下划线的宽度为文字宽度的一半 */
        height: 2px; /* 下划线的高度 */
        background-color: black; /* 下划线的颜色 */
        transform: translateX(
          -50%
        ); /* 将下划线向左移动自身宽度的一半，使其居中 */
      }
    }
    .content {
      margin-top: 40rpx;
      .box {
        margin-bottom: 50rpx;
        font-size: 30rpx;
        color: #666;
        .img {
          width: 592rpx;
          height: 347rpx;
          border-radius: 21rpx 21rpx 21rpx 21rpx;
        }
        .date {
          text {
            font-size: 43rpx;
            font-weight: 700;
            color: #333;
          }
        }
        .desc {
          margin: 38rpx 0 20rpx 0;
        }
      }
    }
  }
}
</style>
