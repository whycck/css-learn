<template>
  <div class="main">
    <h1>background</h1>
    <div class="section position">
      <h2>background-position</h2>
      <p>它允许我们指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字</p>
      <div class="wrapper">
        <p>让背景图片跟右边缘保持 20px 的偏移量，同时跟底边保持 10px 的偏移量</p>
          <pre>
  background: url(code-pirate.svg) no-repeat #58a;
  background-position: right 10px bottom 10px;
          </pre>
        <div class="wrap"></div>
        <p>我们还需要提供一个合适的回退方案。因为对上述方案来说，在不支持 background-position 扩展语法的浏览器中，背景图片会紧贴在左上角（背景图片的默认位置）.回退方案也很简单，就是把老套的bottom right 定位值写进 background 的简写属性中。</p>
          <pre>
  background: url(code-pirate.svg) no-repeat bottom right #58a;
  background-position: right 10px bottom 10px;
          </pre>
        但代码不够DRY：每次改动内边距的值时，我们都需要在三个地方更新这个值！下列属性可完美解决
      </div>
    </div>

    <div class="section origin">
      <div class="quote">
        <h2>background-origin</h2>
        <ul class="quote-list">
          <li>
            1. <code>border-box</code>
          </li>
          <li>
            2. <code>padding-box(default)</code>
          </li>
          <li>
            3. <code>content-box</code>
          </li>
        </ul>
      </div>
      <p>似 background-position: top left; 这样的代码。你是否曾经有过疑惑：这个 top left 到底是哪个左上角？你可能知道，每个元素身上都存在三个矩形框：border box（边框的外沿框）、padding box（内边距的外沿框）和 content box（内容区的外沿框）。那 background-position 这个属性指定的到底是哪个矩形框的左上角？</p>
      <div class="wrapper">
        <div class="border-box">
          Border Box
          <div class="padding-box">
            Padding Box
            <div class="content-box">Content Box</div>
          </div>
        </div>
      </div>
      <p>这样我们可以使用background-origin属性来实现background-position同样的功能</p>
      <div class="wrapper">
        <pre>
background: url('../../assets/svg/code-pirate.svg') no-repeat bottom right #58a;
background-origin: content-box;
        </pre>
        <div class="wrap"></div>
      </div>
    </div>

    <div class="section calc">
        <p>calc()方案实现指定位置显示图片</p>
      <div class="wrapper">
        <p>请不要忘记在 calc() 函数内部的 - 和 + 运算符的两侧各加一个空白符，否则会产生解析错误！</p>
        <pre>
background: url("code-pirate.svg") no-repeat;
background-position: calc(100% - 10px) calc(100% - 10px);
        </pre>
        <div class="wrap"></div>
      </div>
    </div>
  </div>  
</template>

<style lang="less" scoped>
.position {
  .wrap {
    background: url('../../assets/svg/code-pirate.svg') no-repeat bottom right #58a;
    background-position: right 10px bottom 10px;

    height: 150px;
    width: 250px;
    padding: 10px;
    color: #fff;
    font: 100%/1 sans-serif;
  }
}

.origin {
  .border-box {
    background: #58a;
    width: 200px;
    height: 130px;
    .padding-box {
      margin: 0 20px;
      background: #c6c3c6;
      width: 160px;
      height: 90px;
      .content-box {
        margin: 0 20px;
        background: yellowgreen;
        height: 50px;
        width: 120px;
      }
    }
  }

  .wrap {
    background: url('../../assets/svg/code-pirate.svg') no-repeat bottom right #58a;
    background-origin: content-box;

    height: 150px;
    width: 250px;
    padding: 10px;
    color: #fff;
    font: 100%/1 sans-serif;
  }
}

.calc {
  .wrap {
    background: url('../../assets/svg/code-pirate.svg') no-repeat bottom right #58a;
    background-position: calc(100% - 10px) calc(100% - 10px);

    height: 150px;
    width: 250px;
    padding: 10px;
    color: #fff;
    font: 100%/1 sans-serif;
  }
}
</style>

