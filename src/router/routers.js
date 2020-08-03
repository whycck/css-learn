
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
      {
        name: 'hsla',
        path: '/property/hsla',
        component: () => import('@/pages/property/hsla')
      },
      {
        name: 'box-shadow',
        path: '/property/box-shadow',
        component: () => import('@/pages/property/box-shadow')
      },
      {
        name: 'text-shadow',
        path: '/property/text-shadow',
        component: () => import('@/pages/property/text-shadow')
      },
      {
        name: 'background',
        path: '/property/background',
        component: () => import('@/pages/property/background')
      },
      {
        name: 'outline',
        path: '/property/outline',
        component: () => import('@/pages/property/box-shadow')
      },
      {
        name: 'linear-gradient',
        path: '/property/linear-gradient',
        component: () => import('@/pages/property/linear-gradient')
      },
      {
        name: 'border-radius',
        path: '/property/border-radius',
        component: () => import('@/pages/property/border-radius')
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
  },
  {
    name: '特效',
    path: '/effect',
    component: Main,
    children: [
      {
        name: '倒影',
        path: '/effect/box-reflect',
        component: () => import('@/pages/effect/wavy')
      },
      {
        name: '文本阴影',
        path: '/effect/box-shadow',
        component: () => import('@/pages/effect/box-shadow')
      },
      {
        name: '按钮悬停',
        path: '/effect/btn-hover',
        component: () => import('@/pages/effect/btn-hover')
      },
    ]
  }
]
