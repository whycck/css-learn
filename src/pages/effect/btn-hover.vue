<template>
  <div class="main">
    <div class="container">
      <div class="wrap">
        <a href=""><span>梅赛德斯</span></a>
        <a href=""><span>蒙哥马利</span></a>
      </div>
    </div>
  </div>  
</template>

<style lang="less" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    a {
      position: relative;
      text-decoration: none;
      font-size: 2em;
      padding: 8px 16px;
      border-radius: 1em;
      &:hover {
        color: #fff;
        &::before {
          width: 100%;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: .5s;
        background-color: #9181bc;
      }

      span {
        position: relative;
      }
    }
  }
</style>

