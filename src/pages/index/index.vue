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
      <common-title @moreClick="click_more('text')">
        <template #left>
          <view class="text">精选摘录</view>
        </template>
      </common-title>
      <view class="content" @click="click_more('detail')">
        <view class="desc">
          {{ (hot_texts.length && hot_texts[0].content) || "" }}
        </view>
        <image
          src="../../common/images/Rectangle 2165@2x.png"
          mode="aspectFit"
          class="pic"
        />
      </view>
    </view>
    <view class="recommand">
      <common-title @moreClick="click_more('album')">
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
      <common-title @moreClick="click_more('tag')">
        <template #left>
          <view class="text">热门分类</view>
        </template>
      </common-title>
      <view class="content">
        <view v-for="(v, i) in hot_tags" :key="i" class="box">
          <image src="../../common/images/Ellipse 186@2x.png" class="pic" />
          <view class="tag">{{ `#${v.name}` }}</view>
          <view class="count">{{ `${v.texts.length}帖子` }}</view>
        </view>
      </view>
    </view>

    <TabBar index="home"></TabBar>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { get_collections_list } from "@/api";
import {
  getStatusBarHeight,
  getTitleBarHeight,
  CollectToUserType,
  CollectionType,
} from "@/utils";

const hot_texts = ref([]);
const hot_albums = ref([]);
const hot_tags = ref([]);

onMounted(() => {
  init();
});

async function init() {
  try {
    const [texts, albums, tags] = await Promise.all([
      get_hot_idiom(),
      get_hot_albums(),
      get_hot_tags(),
    ]);

    hot_texts.value = texts;
    hot_albums.value = albums;
    hot_tags.value = tags;
  } catch (error) {
    console.log("inited failed！");
    throw error;
  }
}

// 处理点击跳转交互操作
async function click_more(type) {
  switch (type) {
    case "text":
      return uni.redirectTo({
        url: "/pages/discovery/discovery?type=1&tab=0",
      });
    case "album":
      return uni.redirectTo({
        url: "/pages/discovery/discovery?type=1&tab=1",
      });
    case "tag":
      return uni.redirectTo({
        url: "/pages/discovery/discovery?type=1&tab=2",
      });
    case "detail":
      return uni.navigateTo({
        url: "/pages/detail/detail",
      });
    default:
      console.log("输入类型错误");
  }
}

// 获取热门语录，点赞最多的
async function get_hot_idiom() {
  // 获取点赞表中的textid
  const textIds = await _get_likes_ids(CollectToUserType.texts);

  const texts_result = await get_collections_list(CollectionType.Texts, {
    queries: [
      {
        method: "equal",
        attribute: "$id",
        values: textIds,
      },
      { method: "select", values: ["$id", "*"] },
    ],
  });
  return texts_result.documents || [];
}

// 获取热门专辑，点赞最多的
async function get_hot_albums() {
  // 获取点赞表中的专辑id
  const albumsIds = await _get_likes_ids(CollectToUserType.albums);

  const albums_result = await get_collections_list(CollectionType.Albums, {
    queries: [
      {
        method: "equal",
        attribute: "$id",
        values: albumsIds,
      },
      { method: "select", values: ["$id", "*"] },
    ],
  });
  return albums_result.documents || [];
}

// 获取热门标签，点赞最多的
async function get_hot_tags() {
  // 获取点赞表中的标签id
  const tagsIds = await _get_likes_ids(CollectToUserType.tags);

  const tags_result = await get_collections_list(CollectionType.Tags, {
    queries: [
      {
        method: "equal",
        attribute: "$id",
        values: tagsIds,
      },
    ],
  });
  return tags_result.documents || [];
}

// 根据类别，获取获取点赞表的目标id
async function _get_likes_ids(type, limit = 10, offset = 0) {
  const text_like_result = await get_collections_list(CollectionType.Likes, {
    queries: [
      {
        method: "equal",
        attribute: "targetType",
        values: [type],
      },
      { method: "select", values: ["$id", "targetType", "targetId"] },
      { method: "limit", values: [limit] },
      { method: "offset", values: [offset] },
    ],
  });

  const targetIds = text_like_result.documents.map((item) => item.targetId);
  if (!targetIds.length) return [];

  return targetIds;
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 148rpx;
}
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
