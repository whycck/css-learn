<template>
  <div class="main perspective">
    <h1>
      <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective">perspective</a>
    </h1>
    <div class="quote">
      <p>perspective指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z &lt; 0 时则比正常小，大小程度由该属性的值决定。</p>
    </div>
    <div class="section trapezoid">
      <p>
        试想在现实的三维世界中旋转一个矩形。由于透视的关系，我们最终看
        到的二维图像往往就是一个梯形
      </p>
      <div class="wrapper">
        <pre>
background: #58a;
transform: perspective(0.5em) rotateX(5deg);         
        </pre>
        <div class="tab tab-1">TRAPEZOID</div>
      </div>
      <p>
        由于我们是对整个元素应用 3D 变形的，因此它上面的文字也变形了，对元素使用了 3D
        变形之后，其内部的变形效应是“不可逆转”的，这一点跟 2D 变形不同
        （在 2D 变形的体系之下，内部的逆向变形可以抵消外部的变形效应）。
      </p>
      <p>
        因此，如果我们想发
        挥 3D 变形的功能来生成梯形，唯一可行的途径就是把变形效果作用在伪元
        素上。这有些类似于我们在“平行四边形”一节中生成平行四边形的方法：
      </p>
      <div class="wrapper">
        <pre>
.tab {
  display: inline-block;
  padding: 0.5em 1em 0.35em;
  color: white;
  z-index: 1;
  &-2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: #58a;
      transform: perspective(0.5em) rotateX(5deg);
    }
  }
}
        </pre>
        <div class="tab tab-2">TRAPEZOID</div>
      </div>
      <p>
        当我们没有设置 transform-origin 属性时，应用变形效果会让这个元素以它自身的中心线为轴进行空间上的旋转。
        因此，元素投射到 2D 屏幕上的尺寸会发生多种变化，如下图所示：它 的宽度会增加，它所占据的位置会稍稍下移，它在高度上会有少许缩减，等 等。这
        些变化导致它在设计上很难控制。
      </p>
      <div class="wrapper">
        <div class="tab tab-3">TRAPEZOID</div>
      </div>
      <p>
        为了让它的尺寸更好掌握，我们可以为它指定 transform-origin:
        bottom;当它在 3D 空间中旋转时，可以把它的底边固定住。
      </p>
      <div class="wrapper">
        <div class="tab tab-4">TRAPEZOID</div>
      </div>
      <p>
        现在它看起来就直观多了，只有高度会发生变化。
        不过这样一来，高度的缩水会变得更加显眼，因为现在整个元素是转离屏幕
        前的观众的；而在之前，元素的上半部分会转向屏幕后面，下半部分会转出
        屏幕。相比之下，在 3D 空间中，之前的元素总体上是离观众更近的。为了
        纠正这个问题，我们可能会想到给元素增加额外的顶部内边距。不过在那
        些不支持 3D 变形的浏览器中，结果看起来会很怪异
      </p>
      <p>
        我们 还可以换种思路，同样通过变形属性来改变它的尺寸。这样一来，如果浏览
        器不支持 3D 变形，则所有的变形属性都会被丢弃，从而显示出它朴素的本
        来面目。经过一番试验之后，我们会发现，垂直方向上的缩放程度（也就是
        scaleY() 变形属性）在达到 130% 左右时刚好可以补足它在高度上的缩水：
      </p>
      <div class="wrapper">
        <div class="tab tab-5">TRAPEZOID</div>
      </div>
      <p>梯形的使用</p>
      <div class="wrapper">
      <pre>
.nav {
  font: 130%/2 Frutiger LT Std, sans-serif;
  position: relative;
  z-index: 1;
  padding-left: 1em;
  & > a {
    position: relative;
    display: inline-block;
    padding: 0.3em 1em 0;
    color: inherit;
    text-decoration: none;
    margin: 0 -0.3em;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-bottom: none !important;
      border-radius: 0.5em 0.5em 0 0;
      background: #ccc linear-gradient(hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
      box-shadow: 0 0.15em white inset;
      transform: scale(1.1, 1.3) perspective(0.5em) rotateX(5deg);
      transform-origin: bottom;
    }
    &.selected {
      z-index: 2;
      &::before {
        background-color: #eee;
        margin-bottom: -.08em;
      }
    }
  }
}
.nav > a::before,
main {
  border: 0.1em solid rgba(0, 0, 0, 0.4);
}
main {
  display: block;
  margin-bottom: 1em;
  background: #eee;
  padding: 1em;
  border-radius: .15em;
}
      </pre>
        <nav class="nav">
          <a href="">Home</a>
          <a href="" class="selected">Projects</a>
          <a href="">About</a>
        </nav>
        <main>Content Area</main>
      </div>
      <p>向左</p>
      <div class="wrapper">
        <pre>
.right {
  padding-left: 2em;
  & > a::before {
    transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom right;
  }
}
        </pre>
        <nav class="nav right">
          <a href="">Home</a>
          <a href="" class="selected">Projects</a>
          <a href="">About</a>
        </nav>
        <main>Content Area</main>
      </div>
      <p>向右</p>
      <div class="wrapper">
        <pre>
.left {
  & > a::before {
    transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom left;
  }
}
        </pre>
        <nav class="nav right">
          <a href="">Home</a>
          <a href="" class="selected">Projects</a>
          <a href="">About</a>
        </nav>
        <main>Content Area</main>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.perspective {
  .trapezoid {
    .wrapper {
      .tab {
        display: inline-block;
        padding: 0.5em 1em 0.35em;
        color: white;
        z-index: 1;
        &-1 {
          background: #58a;
          transform: perspective(0.5em) rotateX(5deg);
        }
        &-2 {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: #58a;
            transform: perspective(0.5em) rotateX(5deg);
          }
        }
        &-3 {
          position: relative;
          background: rgba(5, 8, 10, 0.3);
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: rgba(5, 8, 10, 0.3);
            transform: perspective(0.5em) rotateX(5deg);
          }
        }
        &-4 {
          position: relative;
          background: rgba(5, 8, 10, 0.3);
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: rgba(5, 8, 10, 0.3);
            transform: perspective(0.5em) rotateX(5deg);
            transform-origin: bottom;
          }
        }
        &-5 {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: #58a;
            transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
            transform-origin: bottom;
          }
        }
      }
      .nav {
        font: 130%/2 Frutiger LT Std, sans-serif;
        position: relative;
        z-index: 1;
        padding-left: 1em;
        & > a {
          position: relative;
          display: inline-block;
          padding: 0.3em 1em 0;
          color: inherit;
          text-decoration: none;
          margin: 0 -0.3em;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            border-bottom: none !important; // 我也不知道为什么这里一定要加上important
            border-radius: 0.5em 0.5em 0 0;
            background: #ccc linear-gradient(hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
            box-shadow: 0 0.15em white inset;
            transform: scale(1.1, 1.3) perspective(0.5em) rotateX(5deg);
            transform-origin: bottom;
          }
          &.selected {
            z-index: 2;
            &::before {
              background-color: #eee;
              margin-bottom: -.08em;
            }
          }
        }

        &.left {
          & > a::before {
            transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
            transform-origin: bottom left;
          }
        }

        &.right {
          padding-left: 2em;
          & > a::before {
            transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
            transform-origin: bottom right;
          }
        }
      }
      .nav > a::before,
      main {
        border: 0.1em solid rgba(0, 0, 0, 0.4);
      }
      main {
        display: block;
        margin-bottom: 1em;
        background: #eee;
        padding: 1em;
        border-radius: .15em;
      }
    }
  }
}
</style>

