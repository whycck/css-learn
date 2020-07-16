<template>
  <div class="menu">
    <slot></slot>
    <div class="menu-container">
      <template v-for="(item, index) in menuList">
        <div
          class="menu-item"
          :key="index"
          v-if="!item.hide"
          @click.stop="onClickMenuItem(item.path)"
        >
          <!-- <router-link :to="item.path">{{item.name}}</router-link> -->
          <div :path="item.path">{{item.name}}</div>
          <template v-if="item.children && item.children.length">
            <Menu :menuList="item.children" />
          </template>
          <!-- <template v-else>
            {{ item.name }}
          </template> -->
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import routers from '@/router/routers'
import './menu.less'

// const getFullPath = path => {
//   const result = []
//   const recursivePath = list => {
//     for (let i = 0; i < list.length; i ++) {
//       const current = list[i]
//       if (path === current.path) {
//         result.push(path)
//         return result
//       } else if (Array.isArray(current.children)) {
//         result.push(current.path)
//         recursivePath(current.children)
//         if (result[result.length - 1] !== path) {
//           result.pop()
//         } else {
//           return result
//         }
//       }
//     }
//   }

//   return recursivePath(routers).join('')
// }


export default {
  name: 'Menu',

  props: {
    menuList: Array,
    default: []
  },

  methods: {
    onClickMenuItem(path) {
      this.$router.push({ path })
    }
  },
}
</script>



