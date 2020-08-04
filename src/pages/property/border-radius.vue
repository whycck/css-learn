<template>
  <div class="main border-radius">
    <h1>border-radius</h1>
    <div class="quote">
      <p>border-radius可以单独指定水平和垂直半径，只要用一个斜杠（/）分隔这两个值</p>
      <p>border-radius 不仅可以接受长度值，还可以接受百分比值。这个百分比值会基于元素的尺寸进行解析，即宽度用于水平半径的解析，而高度用于垂直半径的解析。
        这意味着相同的百分比可能会计算出不同的水平和垂直半径。因此，如果要创建一个自适应的椭圆，我们可以把这两个半径值都设置为 50%：
      </p>
      <p>属性：</p>
      <ul class="quote-list">
        <li>1. <code>border-top-left-radius</code></li>
        <li>2. <code>border-top-right-radius</code></li>
        <li>3. <code>border-bottom-left-radius</code></li>
        <li>4. <code>border-bottom-right-radius</code></li>
      </ul>
      <p>如果我们传给它四个值，这 四个值就会被分别从左上角开始以顺时针顺序应用到元素的各个拐角</p>
    </div>

      <p class="success">当 border-radius 的值为10px / 5px 20px 时，其效果相当于 10px 10px 10px 10px / 5px 20px 5px 20px</p>

      <h3>自适应椭圆</h3>
    <div class="wrapper">
      <div class="box box-1"></div>
      <p>基于观察</p>
      <p>1. 这个形状是垂直对称的，这意味着左上角和右上角的半径值应该是相同的；与此类似，左下角和右下角的半径值也应该是相同的。</p>
      <p>2. 顶部边缘并没有平直的部分（也就是说，整个顶边都是曲线），这意味着左上角和右上角的半径之和应该等于整个形状的宽度。</p>
      <p>3. 基于前两条观察，我们可以推断出，左半径和右半径在水平方向上的值应该均为 50%</p>
      <p>4. 再看看垂直方向，似乎顶部的两个圆角占据了整个元素的高度，而 且底部完全没有任何圆角。因此，在垂直方向上 border-radius 的合理值似乎就是 100% 100% 0 0。</p>
      <p>5. 因为底部两个角的垂直圆角是零，那么它们的水平圆角是多少就完全不重要了，因为此时水平圆角总是会被计算为零</p>
      <pre>
border-radius: 50% / 100% 100% 0 0;
      </pre>
    </div>

    <div class="wrapper warning">
      <p>在LESS中，如果我们要将其编译为CSS时，LESS会自动根据 +、-、*、/ 等运算符进行尺寸大小的计算.如果有：</p>
      <pre>
border-radius: 100px / 50px;
      </pre>
      <p>则会被编译为</p>
      <pre>
border-radius: 2px;
      </pre>
      <p>因此改成</p>
      <pre>
border-radius: ~'50% / 100% 100% 0 0'; 或
border-radius: 50% e('/') 100% 100% 0 0;
      </pre>
    </div>

    <p>更多示例</p>
    <div class="wrapper">
      <pre>
border-radius: 100% 0 0 100% e('/') 50%;
      </pre>
      <div class="box box-2"></div>
      <p>1/4圆</p>
      <pre>
border-radius: 100% 0 0 0;
      </pre>
      <div class="box box-3"></div>
    </div>
  </div>  
</template>

<style lang="less" scoped>
.border-radius {
  .box {
    background: #fb3;
    width: 200px;
    height: 150px;

    &-1 {
      border-radius: ~'50% / 100% 100% 0 0';
    }

    &-2 {
      border-radius: 100% 0 0 100% e('/') 50%;
    }

    &-3 {
      border-radius: 100% 0 0 0;
    }
  }
}
</style>

