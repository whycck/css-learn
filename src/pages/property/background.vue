<template>
  <div class="main">
    <h1>background</h1>
    <div class="section position">
      <h2>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position"
        >background-position</a>
      </h2>
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
          </pre>但代码不够DRY：每次改动内边距的值时，我们都需要在三个地方更新这个值！下列属性可完美解决
      </div>
    </div>
    <div class="section origin">
      <div class="quote">
        <h2>
          <a
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin"
          >background-origin</a>
        </h2>
        <p>
          <code>background-origin</code>规定了指定背景图片
          <code>background-image</code>属性的原点位置的背景相对区域.
        </p>
        <div class="warning">
          注意：当使用
          <code>background-attachment</code>为fixed时，该属性将被忽略不起作用。
        </div>
        <ul class="quote-list">
          <li>
            1.
            <code>border-box</code>
          </li>
          <li>
            2.
            <code>padding-box(default)</code>
          </li>
          <li>
            3.
            <code>content-box</code>
          </li>
        </ul>
      </div>
      <p>似 background-position: top left; 这样的代码。你是否曾经有过疑惑：这个 top left 到底是哪个左上角？你可能知道，每个元素身上都存在三个矩形框：border box（边框的外沿框）、padding box（内边距的外沿框）和 content box（内容区的外沿框）。那 background-position 这个属性指定的到底是哪个矩形框的左上角？</p>
      <div class="wrapper">
        <div class="border-box">Border Box
          <div class="padding-box">Padding Box
            <div class="content-box">Content Box</div>
          </div>
        </div>
      </div>
      <div class="demo">
        <div class="demo-header">CSS Demo: background-origin</div>
        <div class="demo-content">
          <ul class="properties">
            <li class="item" @click="changeOriginClass(1)">background-origin: border-box</li>
            <li class="item" @click="changeOriginClass(2)">background-origin: padding-box</li>
            <li class="item" @click="changeOriginClass(3)">background-origin: content-box</li>
          </ul>
          <div class="result">
            <div :class="['demo-wrapper', originProperty]"></div>
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
    <div class="section clip">
      <div class="quote">
        <h2>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip">background-clip</a>
        </h2>
        <p>
          <code>background-clip</code>设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。
        </p>
        <ul class="quote-list">
          <li>1. border-box(default): 意味着背景会被元素的 border box（边框的外沿框）裁切掉，但是在边框下层</li>
          <li>2. padding-box: 背景延伸至内边距（padding）外沿。不会绘制到边框处。</li>
          <li>3. content-box: 背景被裁剪至内容区（content box）外沿。</li>
          <li>4. text: 背景被裁剪成文字的前景色。</li>
        </ul>
      </div>
      <div class="demo">
        <div class="demo-header">
          <h4>CSS Demo: background-clip</h4>
          <button>Reset</button>
        </div>
        <div class="demo-content">
          <ul class="properties">
            <li class="item" @click="changeClipClass(1)">background-clip: border-box;</li>
            <li class="item" @click="changeClipClass(2)">background-clip: padding-box;</li>
            <li class="item" @click="changeClipClass(3)">background-clip: content-box;</li>
            <li class="item" @click="changeClipClass(4)">background-clip: text;
              <br>color: transparent;
            </li>
          </ul>
          <div class="result">
            <div :class="['demo-wrapper', clipProperty]">你是我患得患失的梦</div>
          </div>
        </div>
      </div>
    </div>
    <div class="summary">
      <p>
        <code>background-clip</code>与
        <code>background-origin</code>是css3中引入的两个跟元素背景相关的属性，它们有相同的可选值，即border、padding、content三种，
        而且这两个属性表示的都是元素背景与元素边框、补白(padding)和内容区域之间的某种关系。
      </p>
      <p>
        <code>background-clip</code>与
        <code>background-origin</code>原理是不同的。
        background-origin定义的是背景位置（background-position）的起始点；而background-clip是对背景（图片和背景色）的切割。
      </p>
    </div>
    <div class="section size">
      <div class="quote">
        <h2>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size">background-size</a>
        </h2>
        <p>
          <code>background-size</code>设置
          <strong>背景图片</strong>大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。
        </p>
        <ul class="quote-list">
          <li>
            1.
            <code>length</code>指定背景图片大小，不能为负值。
          </li>
          <li>
            2.
            <code>percentage</code>指定背景图片相对背景区（background positioning area）的百分比。
          </li>
          <li>
            3.
            <code>auto</code>以背景图片的比例缩放背景图片。
          </li>
          <li>
            4.
            <code>cover</code>缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。
            该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。
          </li>
          <li>
            5.
            <code>contain</code>缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。
            当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。
          </li>
        </ul>
      </div>
      <div class="demo">
        <div class="demo-header">background-size</div>
        <div class="demo-content">
          <ul class="properties">
            <li class="item" @click="changSizeClass(1)">contain</li>
            <li class="item" @click="changSizeClass(2)">cover</li>
            <li class="item" @click="changSizeClass(3)">120px</li>
            <li class="item" @click="changSizeClass(4)">120px 200px</li>
          </ul>
          <div class="result">
            <div :class="['demo-wrapper', sizeProperty]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'background',
  data: function () {
    return {
      clipProperty: 'property-1',
      originProperty: 'property-1',
      sizeProperty: 'property-1',
    }
  },
  methods: {
    changeClipClass (index) {
      this.clipProperty = `property-${index}`
    },

    changeOriginClass (index) {
      this.originProperty = `property-${index}`
    },

    changSizeClass (index) {
      this.sizeProperty = `property-${index}`
    },
  }
}
</script>

<style lang="less" scoped>
.position {
  .wrap {
    background: url("../../assets/svg/code-pirate.svg") no-repeat bottom right
      #58a;
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
    background: url("../../assets/svg/code-pirate.svg") no-repeat bottom right
      #58a;
    background-origin: content-box;

    height: 150px;
    width: 250px;
    padding: 10px;
    color: #fff;
    font: 100%/1 sans-serif;
  }

  .demo {
    &-content {
      .result {
        display: flex;
        align-items: center;
        .demo-wrapper {
          margin: 0 auto;
          width: 150px;
          height: 150px;
          padding: 10px;
          border: dashed 10px #000;
          background: url("../../assets/svg/code-pirate.svg") yellowgreen
            no-repeat;
        }

        .property {
          &-1 {
            background-origin: border-box;
          }
          &-2 {
            background-origin: padding-box;
          }
          &-3 {
            background-origin: content-box;
          }
        }
      }
    }
  }
}

.calc {
  .wrap {
    background: url("../../assets/svg/code-pirate.svg") no-repeat bottom right
      #58a;
    background-position: calc(100% - 10px) calc(100% - 10px);

    height: 150px;
    width: 250px;
    padding: 10px;
    color: #fff;
    font: 100%/1 sans-serif;
  }
}
.clip {
  .demo {
    .demo-content {
      .result {
        display: flex;
        align-items: center;
        background: url("../../assets/images/wall.jpg");
        .demo-wrapper {
          background: #fff;
          border: 10px solid hsla(0, 0%, 100%, 0.5);
          padding: 2em;
          margin: 2em auto;
          max-width: 15em;
          font-size: 24px;
        }
        .property {
          &-1 {
            background-clip: border-box;
          }
          &-2 {
            background-clip: padding-box;
          }
          &-3 {
            background-clip: content-box;
          }
          &-4 {
            background-clip: text;
            color: transparent;
          }
        }
      }
    }
  }
}

.size {
  .demo {
    .demo-content {
      .result {
        .demo-wrapper {
          display: flex;
          align-items: center;
          margin: 0 auto;
          background: url("../../assets/images/eagle.jpg") no-repeat yellowgreen;
          max-width: 200px;
          height: 100%;
        }

        .property {
          &-1 {
            background-size: contain;
          }
          &-2 {
            background-size: cover;
          }
          &-3 {
            background-size: 120px;
          }
          &-4 {
            background-size: 120px 200px;
          }
        }
      }
    }
  }
}
</style>

