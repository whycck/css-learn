<template>
  <div class="main">
    <h1>hsla</h1>
    <div class="quote">
      <h2>HSLA</h2>
      <p>即色相(（英语：Hue)、饱和度(Saturation)、亮度(Lightness)、透明度(Alpha)</p>
      <ul class="quote-list">
        <li>1. 色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。</li>
        <li>2. 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。</li>
        <li>3. 亮度（L） 取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。</li>
        <li>4. 透明度（A） 取值 0~1 之间， 代表透明度。1代表完全不透明</li>
      </ul>
    </div>
    <div class="section">
      <p>假设我们想给一个容器设置一层白色背景和一道半透明白色边框</p>
      <div class="wrapper">
        <pre>
background: #fff;
border: 10px solid hsla(0, 0%, 100%, .5);
      </pre>
        <div class="container">
          <div class="item">你是我患得患失的梦</div>
        </div>
      </div>
      <p>注意：上方图片边框的透明出现了问题？</p>
      <p>如图：默认状态下，背景会延伸到边框的区域下层,导致hsla属性无法使用。</p>
      <p class="success">
        我们可以通过 background-clip 属性来调整上述默认行为所带来的不便。这个属性的初始值是 border-box，意味着背景会被元素的 border box（边框的外沿框）裁切掉。
        如果不希望背景侵入边框所在的范围，我们要做的就是把它的值设为 padding-box，这样浏览器就会用内边距的外沿来把背景裁切掉。
      </p>
      <div class="wrapper">
        <pre>
background: #fff;
border: 10px solid hsla(0, 0%, 100%, .5);
background-clip: padding-box;
      </pre>
        <div class="container">
          <div class="item item-fix">你是我患得患失的梦</div>
        </div>
      </div>
    </div>
    <p class="warning">
      <strong>CSS2.1中默认情况下，背景会延伸到边框所在的区域下层</strong>，因此会出现上方图片边框的透明问题。
    </p>

  </div>
</template>

<style lang="less" scoped>
.container {
  background: url("../../assets/images/wall.jpg");
  height: 300px;
  width: 320px;
  display: flex;
  align-items: center;
  .item {
    background: #fff;
    border: 10px solid hsla(0, 0%, 100%, 0.5);
    max-width: 15em;
    padding: 2em;
    margin: 2em auto 0;

    &-fix {
      background-clip: padding-box;
    }
  }
}

</style>

