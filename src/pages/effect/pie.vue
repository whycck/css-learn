<template>
  <div class="main pie">
    <h1>饼图</h1>
    <p>
      饼图使用transform方案在结构层面是最佳选择：它只需要一个元素作为容器，而其他 部分是由伪元素、变形属性和 CSS 渐变来实现的。
      让我们先从一个简单的 元素开始
    </p>

    <div class="wrapper">
      <pre>
width: 100px;
height: 100px;
border-radius: 50%;
background-color: yellowgreen;
      </pre>
      <div class="box"></div>
    </div>

    <p>
      我们的饼图是绿色的（确切地说是 yellowgreen），并将采用棕色（ #655）来显示比率.把圆形的左右两部分指定为上述两种颜色，然后用伪元素覆盖上去，
      通过旋转来决定露出多大的扇区。
    </p>

    <div class="wrapper">
      <pre>
box-1 {
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  &::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border: dashed 1px #ddd;
  }
}
      </pre>
      <div class="box box-1"></div>
    </div>

    <p>我们还要再做一些观察和分析</p>
    <ul class="description-list">
      <li>1. 我们希望它能遮盖圆形中的棕色部分，因此应该给它指定绿色背景。 在这里使用 background-color: inherit 声明可以避免代码的重复，因为我们希望它的背景色与其宿主元素保持一致。</li>
      <li>2. 我们希望它是绕着圆形的圆心来旋转的，对它自己来说，这个点就是它左边缘的中心点。因此，我们应该把它的 transform-origin设置为 0 50%，或者干脆写成 left。</li>
      <li>3. 我们不希望它呈现出矩形的形状，否则它会突破整个饼图的圆形范围。因此要么给 .pie 设置 overflow: hidden 的样式，要么给这个伪元素指定合适的 border-radius 属性来把它变成一个半圆。</li>
    </ul>
    <p>我们现在可以通过一个 rotate() 变形属性来让这个伪元素转起来。如果我们要显示出 20% 的比率，我们可以指定旋转的值为 72deg（0.2 ×360 = 72），写成 .2turn 会更加直观一些.</p>
    <div class="wrapper">
      <pre>
&::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 e('/') 50%;
  background: yellowgreen;
  transform-origin: left;
  transform: rotate(.1turn);
  overflow: hidden;
  border: dashed 1px #ddd;
}
      </pre>
      <div class="box box-2">20%</div>
    </div>

    <p>用CSS动画来实现一个饼图从0到100%的动画</p>
    <p>注意：当旋转角度超过50%的时候，背景色会变化的</p>
    <div class="wrapper">
      <pre>
.box-3 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, currentColor 0);
  color: #655;

  @keyframes spin {
    to { transform: rotate(.5turn); }
  }

  @keyframes bg {
    50% { background: currentColor; }
  }

  &::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 e('/') 50%;
    background: yellowgreen;
    transform-origin: left;
    animation: spin 3s linear infinite, bg 6s step-end infinite;
  }
}
      </pre>
      <div class="box-3"></div>
    </div>

    <p>
      我们需要探索如何用内联样式来实现这个需求；接下来，我们就可以写一小段脚本来解析文本内容并把内联样式添加到元素上去，
      以实现代码的优雅性、封装抽象度、可维护性，以及（可能是）最重要的一点——可访问性。
    </p>

    <p>
      我们将使用上面刚刚用到的那个动画，但动画必须处于暂停状态。跟常规情形下我们让动画动起来的做法不一样，
      这里我们要用负的动画延时来直接跳至动画中的任意时间点，并且定格在那里。
    </p>

    <p class="quote">
      “一个负的延时值是合法的。与 0s 的延时类似，它意味着动画会立即开始播放，但会自动前进到延时值的绝对值处，就好像动画在过去已经播
      放了指定的时间一样。因此实际效果就是动画跳过指定时间而从中间开始播放了。” ——CSS 动画
    </p>

    <div class="wrapper">
      <pre>
&lt;div class="box-5" style="animation-delay: -20s"&gt;&lt;/div&gt;

.pie {
  position: relative;
  width: 100px;
  line-height: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  color: transparent;
  text-align: center;
  margin-bottom: 16px;

  @keyframes spin {
    to {
      transform: rotate(0.5turn);
    }
  }

  @keyframes bg {
    50% {
      background: #655;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 e("/") 50%;
    background: yellowgreen;
    transform-origin: left;
    animation: spin 50s linear infinite, bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay: inherit;
  }
}
      </pre>
      <div class="box-5" style="animation-delay: -20s"></div>
      <div class="box-5" style="animation-delay: -60s"></div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.pie {
  .box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: yellowgreen;
    &-1 {
      background-image: linear-gradient(to right, transparent 50%, #655 0);
      &::before {
        content: "";
        display: block;
        margin-left: 50%;
        height: 100%;
        border: dashed 1px #ddd;
      }
    }

    &-2 {
      background-image: linear-gradient(to right, transparent 50%, #655 0);
      &::before {
        content: "";
        display: block;
        margin-left: 50%;
        height: 100%;
        border-radius: 0 100% 100% 0 e("/") 50%;
        background: yellowgreen;
        transform-origin: left;
        transform: rotate(0.1turn);
        overflow: hidden;
        border: dashed 1px #ddd;
      }
    }
  }

  .box-3 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: yellowgreen;
    background-image: linear-gradient(
      to right,
      transparent 50%,
      currentColor 0
    );
    color: #655;

    @keyframes spin {
      to {
        transform: rotate(0.5turn);
      }
    }

    @keyframes bg {
      50% {
        background: currentColor;
      }
    }

    &::before {
      content: "";
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 e("/") 50%;
      background: yellowgreen;
      transform-origin: left;
      animation: spin 3s linear infinite, bg 6s step-end infinite;
    }
  }

  .box-5 {
    position: relative;
    width: 100px;
    line-height: 100px;
    height: 100px;
    border-radius: 50%;
    background: yellowgreen;
    background-image: linear-gradient(to right, transparent 50%, #655 0);
    color: transparent;
    text-align: center;
    margin-bottom: 16px;

    @keyframes spin {
      to {
        transform: rotate(0.5turn);
      }
    }

    @keyframes bg {
      50% {
        background: #655;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 e("/") 50%;
      background: yellowgreen;
      transform-origin: left;
      animation: spin 50s linear infinite, bg 100s step-end infinite;
      animation-play-state: paused;
      animation-delay: inherit;
    }
  }
}
</style>

