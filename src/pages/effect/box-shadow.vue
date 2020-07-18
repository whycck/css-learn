<template>
<div class="main">
  <h1>text-shadow</h1>
  <h2>属性值</h2>
  <div class="quote">
    <ul class="quote-list">
      <li>
        1. <code>color</code>：可选
        <div>可以在偏移量之前或之后指定。如果没有指定颜色，则使用UA（用户代理）自行选择的颜色。</div>
        <div class="warning">Note: 如果想确保跨浏览器的一致性，请明确地指定一种颜色</div>
      </li>
      <li>
        2. <code>offset-x</code><code>offset-y</code>必选
        <div>这些长度值指定阴影相对文字的偏移量。</div>
        <div><code>offset-x</code>指定水平偏移量，若是负值则阴影位于文字左边。</div>
        <div><code>offset-y</code>指定垂直偏移量，若是负值则阴影位于文字上面。</div>
        <div>如果两者均为0，则阴影位于文字正后方（如果设置了<code>blur-radius</code>则会产生模糊效果)</div>
      </li>
      <li>
        3. <code>blur-radius</code>：可选
        <div>如果没有指定，则默认为0。值越大，模糊半径越大，阴影也就越大越淡.</div>
      </li>
    </ul>
  </div>
  <div class="section">
    <div class="container">
      <div class="wrap" :contenteditable="true"> love you as like a song </div>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.container {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #07d1ff;
  // overflow-x: hidden;

  .wrap {
    position: relative;
    color: #fff;
    font-size: 2em;
    line-height: 1.1em;
    outline: none;
    text-align: center;
    transform: rotate(-10deg) skewX(20deg);
    text-shadow: -1px 1px #cacaca,
                  -2px 2px #cacaca,
                  -3px 3px #cacaca,
                  -4px 4px #cacaca,
                  -5px 5px #cacaca,
                  -6px 6px #cacaca,
                  -7px 7px #cacaca,
                  -8px 8px #cacaca,
                  -9px 9px #cacaca,
                  -10px 10px #cacaca,
                  -11px 11px #cacaca,
                  -12px 12px #cacaca,
                  -20px 20px #cacaca;

  }
}
</style>

