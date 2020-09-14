<template>
  <div class="main">
    <h1>hsla</h1>
    <p>
      CSS 中的颜色可以由RGB色彩空间和HSL色彩空间两种方式来表述。
    </p>
    <p>
      其中我们常用的是RGB色彩空间，RGB色彩空间的颜色表示方式有：十六进制颜色（如红色：#FF0000）、RGB颜色（如红色：rgb(255,0,0)）,
      RGBA颜色（如半透明的红色rgba(255,0,0,0.5)），此外常见的颜色可以直接写颜色名（如红色：red）。
    </p>
    <p>
      HSL色彩，是一种工业界的色彩标准，因为它能涵盖到人类视觉所能感知的所有颜色，所以在工业界广泛应用。
    </p>
    <div class="quote">
      <h2>HSLA</h2>
      <p>即色调(（英语：Hue)、饱和度(Saturation)、亮度(Lightness)、透明度(Alpha)</p>
      <ul class="quote-list">
        <li>1. H是色度，取值在0度~360度之间，0度是红色，120度是绿色，240度是蓝色。360度也是红色。</li>
        <li>2. S是饱和度，是色彩的纯度，是一个百分比的值，取值在0%~100%，0%饱和度最低，100%饱和度最高</li>
        <li>3. L是亮度，也是一个百分比值，取值在0%~100%，0%最暗，100%最亮。</li>
        <li>4. A是不透明度，取值在0.0~1.0，0.0完全透明，1.0完全不透明。</li>
      </ul>
    </div>

    <div class="section hsla">
      <h3>饱和度S</h3>
      <div class="wrapper">
        <pre>
.box1 { background-color: hsla(0, 100%, 50%, 0.5); }          
.box2 { background-color: hsla(0, 80%, 50%, 0.5); }          
.box3 { background-color: hsla(0, 70%, 50%, 0.5); }          
.box4 { background-color: hsla(0, 60%, 50%, 0.5); }          
.box5 { background-color: hsla(0, 50%, 50%, 0.5); }          
        </pre>
        <div class="saturation">
          <div class="box box-1">box1</div>
          <div class="box box-2">box2</div>
          <div class="box box-3">box3</div>
          <div class="box box-4">box4</div>
          <div class="box box-5">box5</div>
        </div>
      </div>
      <h3>亮度L</h3>
      <div class="wrapper">
        <pre>
.box1 { background-color: hsla(0, 100%, 80%, 0.5); }          
.box2 { background-color: hsla(0, 100%, 70%, 0.5); }          
.box3 { background-color: hsla(0, 100%, 60%, 0.5); }          
.box4 { background-color: hsla(0, 100%, 50%, 0.5); }          
.box5 { background-color: hsla(0, 100%, 40%, 0.5); }          
        </pre>
        <div class="lightness">
          <div class="box box-1">box1</div>
          <div class="box box-2">box2</div>
          <div class="box box-3">box3</div>
          <div class="box box-4">box4</div>
          <div class="box box-5">box5</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>应用</h3>
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

.hsla {
  .wrapper {
    .saturation {
      .box {
        width: 500px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        &-1 {
          background-color: hsla(0, 100%, 50%, 0.5);
        }
        &-2 {
          background-color: hsla(0, 80%, 50%, 0.5);
        }
        &-3 {
          background-color: hsla(0, 70%, 50%, 0.5);
        }
        &-4 {
          background-color: hsla(0, 60%, 50%, 0.5);
        }
        &-5 {
          background-color: hsla(0, 50%, 50%, 0.5);
        }
      }
    }

    .lightness {
      .box {
        width: 500px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        &-1 {
          background-color: hsla(0, 100%, 80%, 0.5);
        }
        &-2 {
          background-color: hsla(0, 100%, 70%, 0.5);
        }
        &-3 {
          background-color: hsla(0, 100%, 60%, 0.5);
        }
        &-4 {
          background-color: hsla(0, 100%, 50%, 0.5);
        }
        &-5 {
          background-color: hsla(0, 100%, 40%, 0.5);
        }
      }
    }
  }
}
</style>

