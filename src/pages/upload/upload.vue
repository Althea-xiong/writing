<template>
  <view class="container">
    <button @click="upload">上传</button>
  </view>
</template>

<script setup>
const upload = () => {
  uni.chooseImage({
    count: 6, //默认9
    sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ["album"], //从相册选择
    success: function (res) {
      console.log(JSON.stringify(res.tempFilePaths));
    },
  });
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
