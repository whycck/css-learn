
import Main from '@/components/main'

export default [
  {
    path: '/',
    component: Main,
    hide: true,
  },
  {
    name: 'css属性',
    path: '/property',
    component: Main,
    children: [
      {
        name: 'flex中的min-height',
        path: '/property/min-height',
        component: () => import('@/pages/property/min-height')
      },

      {
        name: 'flex中的min-width',
        path: '/property/min-width',
        component: () => import('@/pages/property/min-width')
      },
    ]
  },
  {
    name: '布局',
    path: '/layout',
    component: Main,
    children: [
      {
        name: '百分比布局',
        path: '/layout/percent',
        component: () => import('@/pages/property/min-width')
      }
    ]
  }
]
