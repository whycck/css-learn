<template>
  <div class="main">
    <h1>box-reflect</h1>
    <div class="section">
      <h2>box-reflect 倒影</h2>
      <div class="quote">
        box-reflect 一共有以下几个属性：
        <ul class="quote-list">
          <li>1. above：指定倒影在对象的上边</li>
          <li>2. below：指定倒影在对象的下边</li>
          <li>3. left：指定倒影在对象的左边</li>
          <li>4. right：指定倒影在对象的右边</li>
          <li>5. offset：倒影与对象之间的间隔，可以为负值。</li>
        </ul>
      </div>
    </div>
    <p>box-reflect: below 示例：</p>
    <div class="wrapper container">
      <div class="wavy">
        <span style="--i:1">内</span>
        <span style="--i:2">容</span>
        <span style="--i:3">加</span>
        <span style="--i:4">载</span>
        <span style="--i:5">中</span>
        <span style="--i:6">.</span>
        <span style="--i:7">.</span>
        <span style="--i:8">.</span>
      </div>
    </div>

    <div class="section">
      <h3> -webkit-box-reflect:below </h3>
      <p>向下映射</p>
      <div class="wrapper">
        <img class="below" src="@/assets/images/view1.png" />
      </div>
    </div>

    <div class="section">
      <h3> -webkit-box-reflect:above </h3>
      <p>向上映射</p>
      <div class="wrapper" :style="{ paddingTop: '210px' }">
        <img class="above" src="@/assets/images/view1.png" />
      </div>
    </div>

    <div class="section">
      <h3> -webkit-box-reflect:left </h3>
      <p>向左映射</p>
      <div class="wrapper" :style="{ paddingLeft: '360px' }">
        <img class="left" src="@/assets/images/view1.png" />
      </div>
    </div>

    <div class="section">
      <h3> -webkit-box-reflect:right </h3>
      <p>向右映射</p>
      <div class="wrapper">
        <img class="right" src="@/assets/images/view1.png" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  // background: #000;
  .wavy {
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, .2));
    span {
      display: inline-block;
      color: #000;
      font-size: 2em;
      // animation: name duration timing-function delay iteration-count direction fill-mode;
      animation: animate 1s ease-in-out calc(.1s*var(--i)) infinite;
      margin-right: 5px;
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-24px);
    }
    40%, 100% {
      transform: translateY(0px);
    }
  }
}

.wrapper {
  min-height: 420px;
}

.below {
  -webkit-box-reflect:below 10px;
}

.above {
  -webkit-box-reflect:above 10px;
}

.left {
  -webkit-box-reflect:left 10px;
}

.right {
  -webkit-box-reflect:right 10px;
}
</style>



