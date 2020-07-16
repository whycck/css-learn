<template>
  <div class="main">
    <aside class="aside">
      <div class="logo">

      </div>
      <div class="menu-wrapper">
        <Menu :menuList="menuList"></Menu>
      </div>
    </aside>
    <div class="container">
      <header class="header">
        <!-- todos: header -->
      </header>
      <div class="content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import './main.less'
import Menu from './components/menu'
import routers from '@/router/routers'

export default {
  name: 'Main',
  components: {
    Menu
  },
  data () {
    return {
      menuList: routers
    }
  }
}
</script>

