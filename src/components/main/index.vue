<template>
  <div class="layout">
    <aside class="aside">
      <div class="logo">

      </div>
      <div class="menu-wrapper">
        <Menu :menuList="menuList"></Menu>
      </div>
    </aside>
    <div class="layout-content">
      <header class="header">
        <!-- todos: header -->
      </header>
      <div class="layout-content-wrapper">
        <keep-alive class="main">
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

