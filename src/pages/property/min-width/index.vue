<template>
  <div class="main">
    <h1>m_x-width与m_x-height</h1>

    <div class="section">
      <h3>max-width</h3>
      <p>
        <code>max-width</code>的常见且简单的用例是将其与图像一起使用
      </p>
      <div class="wrapper img-wrapper">
        <div class="item">
          <div class="button warning">Bad</div>
          <img src="@/assets/images/view1.png">
        </div>
        <div class="item">
          <div class="button success">Good</div>
          <img class="good" src="@/assets/images/view1.png">
        </div>
      </div>
      <p>
        图像比它的父元素大。通过使用
        <code>max-width: 100%</code>，图像的宽度不会超过其父图像的宽度。如果图像比父图像小，则
        <code>max-width: 100%</code>不会对图像产生实际影响，因为它比父图像小。
      </p>
    </div>

    <div class="section max-width">
      <h3>使用最小宽度和最大宽度</h3>
      <p>当<code>min-width</code>和<code>max-width</code>都用于一个元素时，哪个优先级更高?</p>
      <div class="wrapper">
        <pre v-pre>
.sub {
  width: 100px;
  min-width: 50%;
  max-width: 100%;
}
        </pre>
        <div class="wrap">
          <div class="sub"></div>
        </div>
        <span>当使用最小宽度和最大宽度时<code>min-width</code>有效果</span>
      </div>
    </div>

    <div class="section flex">
      <h3>flex中的 min-size</h3>
      <div class="quote">
        <code>min-(size)</code>的默认值是auto,它会被计算为0。当一个元素是flex项时，<code>min-(size)</code>的值不会被计算为0，flex项的最小大小等于其内容的大小。
      </div>
      <p>思考：如何让链接元素【View More】居右呢？</p>
      <div class="wrapper wrap">
        <ul>
          <li class="c-person">
            <img src="@/assets/images/cake.jpg" class="c-person__avatar">
            <h3><div class="c-person__name">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div></h3>
            <a class="c-link">View More</a>
          </li>
          <li class="c-person">
            <img src="@/assets/images/cake.jpg" class="c-person__avatar">
            <h3><div class="c-person__name">aaaaaaaaaaaaaaaaaaaaaaaa</div></h3>
            <a class="c-link">View More</a>
          </li>
          <li class="c-person">
            <img src="@/assets/images/cake.jpg" class="c-person__avatar">
            <h3><div class="c-person__name">aaaaaaaaaaa</div></h3>
            <a class="c-link">View More</a>
          </li>
          <li class="c-person">
            <img src="@/assets/images/cake.jpg" class="c-person__avatar">
            <h3><div class="c-person__name">aaaaaaa</div></h3>
            <a class="c-link">View More</a>
          </li>
        </ul>
      </div>

      <p>思考：如何让溢出的部分滚动呢？</p>
      <div class="wrapper">
        <pre v-pre>
.c-panel {
  display: flex;
  flex-direction: column;
  height: 180px;
}

.c-panel__content {
  overflow-y: scroll;
  height: 100%;
}
        </pre>

        <div class="wrap">
          <div class="c-panel">
            <h2 class="c-panel__title">Title should be there</h2>
            <div class="c-panel__body">
              <div class="c-panel__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero maxime esse ipsam commodi eius accusantium quasi enim id, totam modi voluptate tempore maiores fugiat officia minus labore magnam sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero maxime esse ipsam commodi eius accusantium quasi enim id, totam modi voluptate tempore maiores fugiat officia minus labore magnam sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary" :style="{ marginTop: '30px' }">
        通过向面板主体添加min-size: 0，这将重置该属性，样式就会正常显示。
      </div>
    </div>

    <div class="section transition">
      <h3>对高度未知的元素进行动画处理</h3>
      <p>单击菜单按钮后，菜单应随动画从上到下滑动。 如果没有固定的高度（不建议这样做），除非使用JavaScript，否则这是不可能的。 但是，对于max-height，这是可能的。 
        想法是为高度添加一个较大的值，例如<code>max-height：20rem</code> ，可能无法达到，然后我们可以使用动画从<code>max-height：0</code>变换到<code>max-height：20rem</code></p>
      <div class="wrapper wrap">
        <pre>
.c-nav {
    max-height: 0;
    overflow: hidden;
    transition: 0.3s linear;
}

.c-nav.is-active {
    max-height: 22rem;
}
        </pre>
        <div class="wrap-container">
          <header>
            <h1>Logo</h1>
            <nav>
              <button @click="toggleMenu">Menu</button>
              <ul :class="{'c-nav': true, 'is-active': isShowMenu }">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Hire Me</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'min-width',
  data: function () {
    return {
      isShowMenu: false
    }
  },

  methods: {
    toggleMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang="less" scoped>
.img-wrapper {
  display: flex;
  justify-content: space-around;
  .item {
    width: 300px;
    height: 250px;
    background-color: #fff;
    padding: 10px;
    text-align: center;

    .good {
      max-width: 100%;
    }

    .button {
      margin-bottom: 10px;
    }
  }
}

.max-width {
  .wrap {
    background-color: #efefef;
    padding: 10px;
    margin-bottom: 10px;
    .sub {
      width: 100px;
      height: 100px;
      min-width: 50%;
      max-width: 100%;
      background-color: #3d79db;
    }
  }
}

.flex {
  .wrap {
    ul {
      display: flex;
      flex-direction: column;
      border: 1px dashed #c6c3c6;
      padding: 10px;

      .c-person {
        background-color: #f8f6f9;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        align-items: center;

        &__avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }

        h3 {
          flex-grow: 2;
          text-align: left;
          // min-width: 0;
        }

        &__name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .c-link {
          margin-left: auto;
          min-width: 100px;
          text-align: end;
          cursor: pointer;
          text-decoration: underline;
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  .wrap {
    .c-panel {
      display: flex;
      flex-direction: column;
      height: 180px;
      background-color: #c6c3c6;
    }

    .c-panel__body {
      // min-height: 0;
    }

    .c-panel__content {
      overflow-y: scroll;
      height: 100%;
    }
  }
}

.transition {
  .wrap {
    &-container {
      min-height: 260px;
      header {
        background-color: #e2deed;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
        border-radius: 8px;
        position: relative;
        h1 {
          text-align: left;
        }
        button {
          display: none;
          color: #fff;
          background: #9b8fbb;
          font-size: 16px;
          padding: .5rem .75rem;
          border-radius: 5px;
          @media (max-width: 1200px) {
            display: block;
          }
        }
        .c-nav {
          display: flex;
          @media (max-width: 1200px) {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            transition: .3s linear;
            background-color: #9181bc;
            border-radius: 5px;
            overflow: hidden;
            max-height: 0;
  
            li {
              display: block;
            }
  
            a {
              display: block;
              color: #e0d9f4;
              padding: .5rem 1rem;
            }
  
            &.is-active {
              max-height: 22rem;
            }
          }
          li {
            margin-right: 1rem;
          }
  
          a {
            text-decoration: none;
            color: #222;
          }
        }
      }
    }
  }
}

</style>

