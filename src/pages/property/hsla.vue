<template>
  <div class="main">
    <h1>hsla</h1>
    <div class="quote">
      <h2>HSLA </h2>
      <p>即色相(（英语：Hue)、饱和度(Saturation)、亮度(Lightness)、透明度(Alpha)</p>
      <ul class="quote-list">
        <li>1. 色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。</li>
        <li>2. 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。</li>
        <li>3. 亮度（L） 取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。</li>
        <li>4. 透明度（A） 取值 0~1 之间， 代表透明度。1代表完全不透明</li>
      </ul>
    </div>
    <div class="section">
      <p>注意：左侧图片的透明出现了问题？</p>
      <div class="wrapper">
        <div class="container">
        </div>
        <div class="container container-right">
        </div>
      </div>
      <p class="warning"><strong>CSS2.1中默认情况下，背景会延伸到边框所在的区域下层</strong>，因此出现左侧图片的问题。</p>
      <div class="quote">
        <h2>background-clip</h2>
        <ul class="quote-list">
          <li>1. border-box(default): 意味着背景会被元素的 border box（边框的外沿框）裁切掉</li>
          <li>2. padding-box: 背景不侵入边框所在的范围</li>
          <li></li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  .container {
    height: 300px;
    width: 320px;
    background: #fff;
    border: 10px solid hsla(0, 0%, 100%, .5);
    background: url('../../assets/images/cake.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  
    &-right {
      background-clip: padding-box;
    }
  }
}

.warning {
  text-indent: 2em;
}
</style>

