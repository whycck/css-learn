<template>
  <div class="main transform">
    <h1>transform</h1>
    <div class="quote">
      <p>
        CSS
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
    <h3>1.1 平行四边形</h3>
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
      <p>另一种方式是用伪元素：</p>
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
      <p>此处没有正常显示的原因是，z-index: -1;将背景色置于底层，但外层容器依旧有背景色，伪元素背景色被掩盖，可自行F12查看；</p>
      <div class="wrapper">
        <div class="box-3">click me</div>
      </div>
    </div>
    <h2>2. rotate</h2>
    <div class="quote">
      <code>angle</code>指定了 rotate() 的旋转程度。参数为正时，顺时针旋转；参数为负时，逆时针旋转。180° 旋转称为点反演。
      <p>语法：</p>
      <pre>
transform: rotate(30deg);
      </pre>
    </div>
    <h3>菱形</h3>
    <p>如何将图片转换为菱形呢？</p>
    <div class="rotate">
      <div class="wrapper">
        <p>原图效果</p>
        <div class="box">
          <img src="@/assets/images/view2.jpg" alt="">
        </div>
        <p>方式一：旋转图片</p>
        <pre>
.box-1 {
  width: 400px;
  transform: rotate(45deg);
  overflow: hidden;
  .box-1 > img {
    max-width: 100%;
    transform: rotate(-45deg);
}
        </pre>
        <div class="box-1">
          <img src="@/assets/images/view2.jpg" alt="">
        </div>
      </div>
      <p>
        我们想让图片的宽度与容器的对角线相等，而 不是与边长相等。一个正方形的对角线长度等于它边长的1.414 213 562 倍。
        因此，把 max-width 的值设置为 142%
      </p>
      <p>如果用 scale() 变形样式来把这个图片放大，实际上会更加合理，原因如下:</p>
      <p>1. 我们希望图片的尺寸属性保留 100% 这个值，这样当浏览器不支持变形样式时仍然可以得到一个合理的布局。</p>
      <p>
        2. 通过 scale() 变形样式来缩放图片时，是以它的中心点进行缩放的（除非我们额外指定了 transform-origin 样式）。通过 width 属性
        来放大图片时，只会以它的左上角为原点进行缩放，从而迫使我们动用额外的负外边距来把图片的位置调整回来。
      </p>
      <div class="wrapper">
        <pre>
.box-2 {
  width: 400px;
  transform: rotate(45deg);
  overflow: hidden;
  .box-2 > img {
    max-width: 100%;
    transform: rotate(-45deg) scale(1.42);
  }
}
        </pre>
        <div class="box-2">
          <img src="@/assets/images/view2.jpg" alt="">
        </div>
      </div>

      <p>方式二：clip-path 裁切路径方案</p>
      <p>
        上面的方法确实可以奏效，但它基本上是一个 hack。这个方法需要一层额外的 HTML 标签，这不够简洁；代码本身也不够直观；
        它甚至还不够健壮——如果我们碰巧要处理一张非正方形的图片，这个小把戏就会原形毕露
      </p>
      <p>
        我们还有一个更好的办法来完成这个任务。它的主要思路是使用 clip-path 属性。这个特性也是从 SVG 那里借鉴而来，已经可以应用
        在 HTML 元素上了（至少对于支持的浏览器来说是这样的）。而且它的语法也很友好、可读性不错，
      </p>

      <div class="wrapper">
        <pre>
.box-3 {
  .box-3 > img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s clip-path;
    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}
        </pre>
        <div class="box-3">
          <img src="@/assets/images/view2.jpg" alt="">
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
        padding: 0.5em 1em;
        border: 0;
        margin: 0.5em;
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
          background: yellowgreen;
          z-index: -1;
          transform: skew(-45deg);
        }
      }
    }
  }

  .rotate {
    .box {
      &-1 {
        width: 400px;
        transform: rotate(45deg);
        overflow: hidden;
        & > img {
          max-width: 100%;
          transform: rotate(-45deg);
        }
      }

      &-2 {
        width: 400px;
        transform: rotate(45deg);
        overflow: hidden;
        margin: 100px;
        & > img {
          max-width: 100%;
          transform: rotate(-45deg) scale(1.42);
        }
      }

      &-3 {
        & > img {
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
          transition: 1s clip-path;
          &:hover {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
  }
}
</style>

