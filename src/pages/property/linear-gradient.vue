<template>
  <div class="main container">
    <h1>
      <a
        target="_blank"
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient"
      >linear-gradient</a>
    </h1>
    <div class="quote">
      linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。其结果属于
      <code>gradient</code>数据类型，是一种特别的
      <code>image</code>数据类型。
      <ul class="quote-list">
        <li>
          <code>1. side-or-corner</code>
          <p>描述渐变线的起始点位置。它包含to和两个关键词：第一个指出水平位置left or right，第二个指出垂直位置top or bottom。关键词的先后顺序无影响，且都是可选的。</p>
          <p>to top, to bottom, to left 和 to right这些值会被转换成角度0度、180度、270度和90度。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。</p>
        </li>
        <li>
          <code>2. angle</code>
          <p>用角度值指定渐变的方向（或角度）。角度顺时针增加。</p>
        </li>
        <li>
          <code>3. linear-color-stop</code>
          <p>
            由一个
            <code>color</code>值组成，并且跟随着一个可选的终点位置（可以是一个百分比值或者是沿着渐变轴的
            <code>length</code>）。CSS渐变的颜色渲染采取了与SVG相同的规则。
          </p>
        </li>
        <li>
          <code>4. color-hint</code>
          <p>颜色中转点是一个插值提示，它定义了在相邻颜色之间渐变如何进行。长度定义了在两种颜色之间的哪个点停止渐变颜色应该达到颜色过渡的中点。如果省略，颜色转换的中点是两个颜色停止之间的中点。</p>
        </li>
      </ul>
      <p>其最终形成的语法</p>linear-gradient([ [ [
      <code>angle</code>| to [top | bottom] || [left | right] ],]?
      <code>color-stop</code>[,
      <code>color-stop</code>]+);
    </div>
    <div class="wrapper">
      <pre>
/* 从上至下，从蓝色渐变到红色 */
linear-gradient(blue, red);

/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);

/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);

/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);

        </pre>
    </div>
    <div class="summary">
      提示：由于
      <code>gradient</code>数据类型系
      <code>image</code>的子数据类型，
      <code>gradient</code>只能被用于
      <code>image</code>可以使用的地方。因此，linear-gradient() 并不适用于background-color以及类似的使用
      <code>color</code>数据类型的属性中。
    </div>
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
        <p>由于背景在默认情况下是重复平铺的，整个容器其实已经被填满了水平条纹,于是</p>
        <pre>
background: linear-gradient(#fb3 50%, #58a 50%);
background-size: 100% 30px;
background-repeat: no-repeat;
          </pre>
        <div class="box box-5"></div>
      </div>
    </div>
    <div class="section">
      <p>我们还可以创建不等宽条纹</p>
      <div class="wrapper">
        <pre>
background-image: linear-gradient(#fb3 30%, #58a 30%);
background-size: 100% 30px;
          </pre>
        <div class="box box-6"></div>
      </div>
    </div>
    <div class="section">
      <p>我们还可以创建多种颜色的条纹</p>
      <div class="wrapper">
        <pre>
background: linear-gradient(#fb3 33.3%, #58a 66.6%, yellowgreen 100%);
background-size: 100% 45px;
          </pre>
        <div class="box box-7"></div>
        <p>可能并没有达到我们想要的样子</p>
        <pre>
background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
background-size: 100% 45px;
          </pre>
        <div class="box box-8"></div>
        <div class="summary">注意此处的linear-gradient的写法：
          <p>1. 如果开始位置和结束位置相同，那么#fb3 0,可省略</p>
          <p>
            2. 如果#fb3的结束位置到#58a的结束位置不是线性变化的，那么要把#58a的开始位置写出来，
            <code>linear-color-stop</code>可选的终点位置，也是下一个颜色的起始位置
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <p>斜向条纹</p>
      <div class="wrapper">
        <pre>
background-image: linear-gradient(45deg, #fb3 50%, #58a 0);
background-size: 30px 30px;
          </pre>
        <div class="box box-9"></div>
      </div>
    </div>
    <div class="section">
      <p>repeating-linear-gradient(兼容性不够好)</p>
      <div class="wrapper">
        <pre>
background: repeating-linear-gradient(60deg, #fb3 0 15px, #58a 0 30px);
          </pre>
        <div class="box box-10"></div>
      </div>
    </div>
    <div class="section">
      <p>网格</p>
      <div class="wrapper">
        <pre>
background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 0),
 linear-gradient( rgba(200,0,0,.5) 50%, transparent 0);
background-size: 30px 30px;
          </pre>
        <div class="box box-11"></div>
        <p>使用长度而不是百分比作为色标的场景</p>
        <pre>
background-image:
  linear-gradient(white 1px, transparent 0),
  linear-gradient(90deg, white 1px, transparent 0);
background-size: 30px 30px;
          </pre>
        <div class="box box-12"></div>
        <p>我们可以把两幅不同线宽、不同颜色的网格图案叠加起来，得到一个更加逼真的蓝图网格</p>
        <pre>
background: #58a;
background-image:
 linear-gradient(white 2px, transparent 0),
 linear-gradient(90deg, white 2px, transparent 0),
 linear-gradient(hsla(0,0%,100%,.3) 1px, transparent 0),
 linear-gradient(90deg, hsla(0,0%,100%,.3) 1px, transparent 0);
background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
        </pre>
        <div class="box box-13"></div>
      </div>
    </div>
    <h3>radial-gradient</h3>
    <p>放射状的渐变</p>
    <div class="section">
      <div class="wrapper">
        <pre>
background: #655;
background-image: radial-gradient(tan 30%, transparent 0);
background-size: 30px 30px;
        </pre>
        <div class="box box-14"></div>
        <p>两层圆点阵列</p>
        <pre>
background: #655;
background-image: radial-gradient(tan 30%, transparent 0),
                  radial-gradient(tan 30%, transparent 0);
background-size: 0 0, 15px 15px;
        </pre>
        <div class="box box-15"></div>
      </div>
    </div>
    <div class="section sthSection">
      <h3>切角效果</h3>
      <div class="wrapper">
        <pre>
background: linear-gradient(-45deg, transparent 15px, #58a 0);
        </pre>
        <div class="box box-1"></div>
      </div>
      <p>如果需要有两个切角呢？</p>
      <div class="wrapper">
        <pre>
background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
  linear-gradient(45deg, transparent 15px, #655 0) left;
background-size: 50% 100%;
        </pre>
        <div class="box box-2"></div>
      </div>
      <p>
        尽 管 我 们 已 经 用 了
        background-size，但这两层渐变仍然是相互覆盖的。原因在于，我们忘记
        把 background-repeat 关掉了，因而每层渐变图案各自平铺了两次。这导
        致我们的两层渐变背景仍然是相互覆盖的，只不过这次是因为背景平铺。
      </p>
      <div class="wrapper">
        <pre>
background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
  linear-gradient(45deg, transparent 15px, #655 0) left;
background-size: 50% 100%;
background-repeat: no-repeat;
        </pre>
        <div class="box box-3"></div>
      </div>
      <p>现在我们可以得到最终结果</p>
      <div class="wrapper">
      <pre>
background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
  linear-gradient(-135deg, transparent 15px, #58a 0) top right,
  linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
  linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
background-size: 50% 50%;
background-repeat: no-repeat;
      </pre>
        <div class="box box-4"></div>
      </div>
      <p>clip-path的方式</p>
      <div class="wrapper">
        <pre>
background: #58a;
clip-path: polygon(
  20px 0,
  calc(100% - 20px) 0,
  100% 20px,
  100% calc(100% - 20px),
  calc(100% - 20px) 100%,
  20px 100%,
  0 calc(100% - 20px),
  0 20px
);
        </pre>
        <div class="box box-5"></div>
      </div>
      <p>弧形切角</p>
      <div class="wrapper">
        <pre>
background: 
  radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
  radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
  radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
  radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
background-size: 50% 50%;
background-repeat: no-repeat;
        </pre>
        <div class="box box-6"></div>
      </div>
      <p>未来战士：corner-shape(待补充)</p>
      <div class="wrapper">
        <pre>

        </pre>
        <div class="box box-7"></div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.container {
  .box {
    height: 155px;
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
    }

    &-5 {
      background-image: linear-gradient(#fb3 50%, #58a 50%);
      background-size: 100% 30px;
      background-repeat: no-repeat;
    }

    &-6 {
      background-image: linear-gradient(#fb3 30%, #58a 30%);
      background-size: 100% 30px;
    }

    &-7 {
      background: linear-gradient(#fb3 33.3%, #58a 66.6%, yellowgreen 100%);
    }

    &-8 {
      background: linear-gradient(
        #fb3 33.3%,
        #58a 0,
        #58a 66.6%,
        yellowgreen 0
      );
      background-size: 100% 45px;
    }
    &-9 {
      background-image: linear-gradient(45deg, #fb3 50%, #58a 0);
      background-size: 30px 30px;
    }
    &-10 {
      background: repeating-linear-gradient(60deg, #fb3 0 15px, #58a 0 30px);
    }
    &-11 {
      background-image: linear-gradient(
          90deg,
          rgba(200, 0, 0, 0.5) 50%,
          transparent 0
        ),
        linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
      background-size: 30px 30px;
    }
    &-12 {
      background-image: linear-gradient(white 1px, transparent 0),
        linear-gradient(90deg, white 1px, transparent 0);
      background-size: 30px 30px;
    }
    &-13 {
      background: #58a;
      background-image: linear-gradient(white 2px, transparent 0),
        linear-gradient(90deg, white 2px, transparent 0),
        linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
        linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
      background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
    }
    &-14 {
      background: #655;
      background-image: radial-gradient(tan 30%, transparent 0);
      background-size: 30px 30px;
    }
    &-15 {
      background: #655;
      background-image: radial-gradient(tan 30%, transparent 0),
        radial-gradient(tan 30%, transparent 0);
      background-size: 0 0, 15px 15px;
    }
  }
  .sthSection {
    .box {
      width: 250px;
      height: 155px;
      background: #58a;
      &-1 {
        background: linear-gradient(-45deg, transparent 15px, #58a 0);
      }
      &-2 {
        background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
          linear-gradient(45deg, transparent 15px, #655 0) left;
        background-size: 50% 100%;
      }
      &-3 {
        background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
          linear-gradient(45deg, transparent 15px, #655 0) left;
        background-size: 50% 100%;
        background-repeat: no-repeat;
      }
      &-4 {
        background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
          linear-gradient(-135deg, transparent 15px, #58a 0) top right,
          linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
          linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
        background-size: 50% 50%;
        background-repeat: no-repeat;
      }
      &-5 {
        background: #58a;
        clip-path: polygon(
          20px 0,
          calc(100% - 20px) 0,
          100% 20px,
          100% calc(100% - 20px),
          calc(100% - 20px) 100%,
          20px 100%,
          0 calc(100% - 20px),
          0 20px
        );
      }
      &-6 {
        background: radial-gradient(
              circle at top left,
              transparent 15px,
              #58a 0
            )
            top left,
          radial-gradient(circle at top right, transparent 15px, #58a 0) top
            right,
          radial-gradient(circle at bottom right, transparent 15px, #58a 0)
            bottom right,
          radial-gradient(circle at bottom left, transparent 15px, #58a 0)
            bottom left;
        background-size: 50% 50%;
        background-repeat: no-repeat;
      }
      &-7 {

      }
    }
  }
}
</style>


