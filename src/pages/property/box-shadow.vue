<template>
  <div class="main">
    <h1>box-shadow</h1>
    <div class="quote">
      <h2>box-shadow</h2>
      <ul class="quote-list">
        <li>
          1. <code>inset</code>
          <div>如果没有指定inset，默认阴影在边框外，即阴影向外扩散。</div>
          <div>使用 inset 关键字会使得阴影落在盒子内部，这样看起来就像是内容被压低了。 此时阴影会在边框之内 (即使是透明边框）、背景之上、内容之下。</div>
        </li>
        <li>
          2. <code>offset-x</code><code>offset-y</code>
          <div>这是前两个<code>length</code> 值，用来设置阴影偏移量。x,y 是按照数学二维坐标系来计算的</div>
          <div><code>offset-x</code> 设置水平偏移量，正值阴影则位于元素右边，负值阴影则位于元素左边.</div>
          <div><code>offset-y</code> 设置垂直偏移量，正值阴影则位于元素下方，负值阴影则位于元素上方</div>
        </li>
        <li>
          3. <code>blur-radius</code>
          <div>值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利</div>
        </li>
        <li>
          4. <code>spread-radius</code>
          <div>取正值时，阴影扩大；取负值时，阴影收缩。默认为0，此时阴影与元素同样大。需要考虑 inset</div>
        </li>
        <li>
          5. color
        </li>
      </ul>
    </div>

    <div class="section">
      <p>如何用box-shadow模拟border呢？</p>
      <div class="wrapper">
        <div class="box box-mock-border"></div>
      </div>
      <p>如何用box-shadow模拟多层外框？</p>
      <div class="wrapper">
        <div class="box box-multiple-border"></div>
      </div>
      <div class="warning">
        <p>1. 投影的行为跟边框不完全一致，因为它不会影响布局，而且也不会受到 box-sizing 属性的影响。不过，你还是可以通过内边距或外边距（这取决于投影是内嵌和还是外扩的）来额外模拟出边框所需要占据的空间。</p>
        <p>2. 假“边框”出现在元素的外圈。它们并不会响应鼠标事件，比如悬停或点击。如果这一点非常重要，你可以给box-shadow 属性加上 inset 关键字，来使投影绘制在元素的内圈。请注意，此时你需要增加额外的内边距来腾出足够的空隙。</p>
      </div>
    </div>

    <div class="quote">
      <h2>outline</h2>
      <ul class="quote-list">
        <li>
          1. <code>outline-color(default: currentcolor)</code>
          <div>设置轮廓的颜色。</div>
        </li>
        <li>
          2. <code>outline-style(default: none)</code>
          <div>设置轮廓的样式</div>
        </li>
        <li>
          3. <code>outline-width(default: medium)</code>
          <div>设置轮廓的宽度</div>
        </li>
      </ul>
      <div class="warning">注意：对于很多元素来说，如果没有设置样式，轮廓是不可见的。因为样式（style）的默认值是 none。但 input 元素是例外，其样式默认值由浏览器决定</div>
    </div>
    <p>使用outline替代多层边框</p>
    <div class="wrapper">
      <div class="box box-outline"></div>
      <div class="box box-outline box-outline-shadow"></div>
      <div class="box box-radius"></div>
    </div>
    <p>当<code>outline</code>与<code>box-shadow</code>同时作用于同一个元素时，<code>outline</code>在内侧;</p>
    <p>描边<code>outline</code>并不会跟着元素的圆角走（因而显示出直角），但 box-shadow 却是会的。因此，如果我们把这两者叠加到一起，box-shadow 会刚好填补描边和容器圆角之间的空隙，</p>

    <h3>缝边效果</h3>
    <p>如何使用一个元素显示缝边效果呢</p>
    <div class="wrapper">
      <div class="box box-sew"></div>
    </div>
    <div class="warning">
      <p>如上所述，它只适用于双层“边框”的场景，因为 outline 并不能接受用逗号分隔的多个值。如果我们需要获得更多层的边框，前一种方案就是我们唯一的选择了</p>
      <p>边框不一定会贴合 border-radius 属性产生的圆角，因此如果元素是圆角的，它的描边可能还是直角的</p>
    </div>
  </div>  
</template>

<style lang="less" scoped>
  .wrapper {
    display: flex;
  }

  .box {
    width: 180px;
    height: 100px;
    background: yellowgreen;

    &-mock-border {
      box-shadow: 0 0 0 10px #655;
    }

    &-multiple-border {
      box-shadow: 0 0 0 10px #655,
                  0 0 0 15px deeppink,
                  0 2px 5px 15px rgba(0, 0, 0, .6);
    }

    &-outline {
      border: 10px solid #655;
      outline: 5px solid deeppink;
    }

    &-outline-shadow {
      box-shadow: 0 2px 5px 15px rgba(0, 0, 0, .6);
    }

    &-sew {
      outline: 1px dashed #fff;
      box-shadow: 0 0 0 10px yellowgreen;
    }

    & + .box {
      margin-left: 50px;
    }

    &-radius {
      border-radius: .8em;
      padding: 1em;
      box-shadow: 0 0 0 .6em #655;
      outline: .6em solid deeppink;
    }
  }

</style>

