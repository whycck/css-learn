<template>
  <div class="main transform">
    <h1>transform</h1>
    <div class="quote">
      <p>CSS
        <code>transform</code>属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
      </p>
      <code>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function"
        >transform-function</a>
      </code>
    </div>
    <h2>1. skew()、skewX()、skewY()</h2>
    <div class="quote">
      <p>skew() 这个CSS函数是一种用于拉伸，或者说是平移，该函数会使得在每个方向上扭曲元素上的每个点以一定角度。</p>
      <p>skewX() 这个CSS函数是用于水平拉伸，它将元素的每个点在水平方向上扭曲一定角度。</p>
      <p>skewY() 这个CSS函数是用于垂直拉伸，它将元素的每个点在垂直方向上扭曲一定角度。</p>
      <p>语法</p>
      <pre>
skew(ax) 或 skew(ax, ay)
skewX(a)
skewY(a)
      </pre>
      <p>
        <code>ax</code>该参数为一个角度
        <code>angle</code>， 表示用于沿着横坐标扭曲元素的角度 。
      </p>
      <p>
        <code>ay</code>该参数为一个角度
        <code>angle</code>， 表示用于沿着纵坐标扭曲元素的角度 。
      </p>
    </div>
    <p>平行四边形</p>
    <div class="skew">
      <div class="wrapper">
        <div class="box">click me</div>
        <p>现在，我们来改变形状</p>
        <pre>
transform: skewX(-45deg);
      </pre>
        <div class="box box-1">click me</div>
        <p>我们发现：字体也发生了倾斜，这并不是我们想要的</p>
        <p>解决方案：嵌套元素</p>
        <pre>
&lt;div class="box box-1"&gt;
  &lt;div class="box-2"&gt;click me&lt;/div&gt;
&lt;div&gt;

.box-1 {
  transform: skewX(-45deg);
}

.box-2 {
  transform: skewX(45deg);
}
      </pre>
        <div class="box box-1">
          <div class="box-2">click me</div>
        </div>
      </div>
      <p>这不是最好的解决方法，我们尝试用伪元素；</p>
      <p>
        我们希望伪元素保持良好的灵活性，可以自动继承其宿主元素的尺寸，甚至当宿主元素的尺寸是由其内容来决定时仍然如此。一个简单的办法是
        给宿主元素应用 position: relative 样式，并为伪元素设置 position: absolute，然后再把所有偏移量设置为零，以便让它在水平和垂直方向上都
        被拉伸至宿主元素的尺寸。
      </p>
      <pre>
.button {
 position: relative;
 /* 其他的文字颜色、内边距等样式…… */
}
.button::before {
 content: '';
 position: absolute;
 top: 0; right: 0; bottom: 0; left: 0; }
    </pre>
      <p>此时，用伪元素生成的方块是重叠在内容之上的，一旦给它设置背景，就会遮住内容。为了修复这个问题，我们可以给伪元素设置z-index: -1</p>
      <div class="wrapper">
        <div class="box-3">
          click me
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.transform {
  .skew {
    .box {
      color: #fff;
      font-size: 28px;
      background: cornflowerblue;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      appearance: button;
      &:hover {
        cursor: pointer;
      }

      &-1 {
        transform: skewX(-45deg);
      }

      &-2 {
        transform: skewX(45deg);
      }

      &-3 {
        position: relative;
        display: inline-block;
        padding: .5em 1em;
        border: 0;
        margin: .5em;
        background: transparent;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        font: bold 200%/1 sans-serif;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: cornflowerblue;
          z-index: -1;
          transform: skewX(-45deg);
        }
      }
    }
  }
}
</style>

