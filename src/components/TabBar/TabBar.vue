<template>
  <div class="wrap">
    <view @tap="onNav(item)" v-for="(item, i) in tabBars" :key="i">
      <view class="tab-item" v-if="item.id !== 'submit'">
        <image v-if="index === item.id" :src="item.selectedIconPath"></image>
        <image v-else :src="item.iconPath"></image>
        <text :class="{ active: index === item.id }">{{ item.text }}</text>
      </view>
      <view class="tab-plus" v-else>
        <image :src="PlusIcon" class="img" />
      </view>
    </view>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import PlusIcon from "@/static/tabbar/plus.png";

const props = defineProps({
  index: String,
});
const { index } = toRefs(props);

/**
 * 底部导航栏
 */
const tabBars = ref([
  {
    id: "home",
    pagePath: "/pages/index/index",
    text: "首页",
    iconPath: "../../static/tabbar/home.png",
    selectedIconPath: "../../static/tabbar/homeSelected.png",
  },
  {
    id: "hot",
    pagePath: "/pages/hot/hot",
    text: "寻觅",
    iconPath: "../../static/tabbar/article.png",
    selectedIconPath: "../../static/tabbar/articleSelected.png",
  },
  {
    id: "submit",
    text: "提交",
  },
  {
    id: "discovery",
    pagePath: "/pages/discovery/discovery",
    text: "发现",
    iconPath: "../../static/tabbar/discovery.png",
    selectedIconPath: "../../static/tabbar/discoverySelected.png",
  },
  {
    id: "user",
    pagePath: "/pages/user/user",
    text: "我的",
    iconPath: "../../static/tabbar/Folder.png",
    selectedIconPath: "../../static/tabbar/FolderSelected.png",
  },
]);

/**
 * @function 跳转页面
 * @param url 路径 为空和路径一致时不跳转
 */
function onNav(tabItem) {
  if (!tabItem || tabItem.id === index.value) return;

  uni.navigateTo({
    url: tabItem.pagePath,
  });
}
</script>

<style scoped>
.wrap {
  width: 650rpx;
  height: 148rpx;
  padding: 0 40rpx;

  background: #ffffff;
  box-shadow: 16rpx 22rpx 40rpx 0rpx rgba(198, 198, 198, 0.33);
  border-radius: 40rpx 40rpx 40rpx 40rpx;
  box-sizing: border-box;
  transform: translateX(-50%);

  position: fixed;
  bottom: 60rpx;
  left: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab-item {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tab-item image {
  width: 56rpx;
  height: 56rpx;
}

.tab-item text {
  margin-top: 12rpx;

  font-size: 24rpx;
  font-weight: 500;
  color: #666;
}

.tab-item .active {
  color: #8f81fe;
}

.tab-plus {
  width: 100rpx;
  height: 100rpx;

  border-radius: 100rpx;
  background: #5b67ca;

  display: flex;
  justify-content: center;
  align-items: center;

  image {
    width: 56rpx;
    height: 56rpx;
  }
}
</style>
