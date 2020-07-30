<template>
  <div class="main container">
      <h1>linear-gradient</h1>
      <div class="quote">
      </div>
    <div class="section">
      <h3>条纹背景</h3>
      <div class="section">
        <p>假设我们有一条基本的垂直线性渐变，颜色从 #fb3 过渡到 #58a</p>
        <div class="wrapper">
          <div class="box box-1"></div>
        </div>
      </div>

      <div class="section">
        <p>假设容器顶部的 20% 区域被填充为 #fb3 实色，底部 20% 区域被填充为 #58a 实色。渐变只出现在容器 60% 的高度区域</p>
        <div class="wrapper">
          <pre>
background: linear-gradient(#fb3 20%, #58a 80%);
          </pre>
          <div class="box box-2"></div>
        </div>
      </div>

      <div class="section">
        <p>如果多个色标具有相同的位置，它们会产生一个无限小的过渡区域，过渡的起止色分别是第一个和最后一个指定值。从效果上看，颜色会在那个位置突然变化，而不是一个平滑的渐变过程。</p>
        <div class="wrapper">
          <pre>
background: linear-gradient(#fb3 50%, #58a 50%);
          </pre>
          <div class="box box-3"></div>
        </div>
      </div>

      <div class="section">
        <p>因为渐变是一种由代码生成的图像，我们能像对待其他任何背景图像那样对待它，而且还可以通过 background-size 来调整其尺寸;</p>
        <div class="wrapper">
          <pre>
background: linear-gradient(#fb3 50%, #58a 50%);
background-size: 100% 30px;
          </pre>
          <div class="box box-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.container {
  .box {
    height: 150px;
    width: 250px;
    background: #efefef;

    &-1 {
      background: linear-gradient(#fb3, #58a);
    }

    &-2 {
      background: linear-gradient(#fb3 20%, #58a 80%);
    }

    &-3 {
      background: linear-gradient(#fb3 50%, #58a 50%);
    }

    &-4 {
      background-image: linear-gradient(#fb3 50%, #58a 50%);
      background-size: 100% 30px;
      background-repeat: no-repeat;
    }
  }
}
</style>


