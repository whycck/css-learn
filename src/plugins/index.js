const cssLearnPlugin = {
  install: function(Vue) {
    Vue.mixin({
      mounted() {
        const preList = [...document.querySelectorAll('pre')]
        preList.forEach(item => item.innerHTML = item.innerHTML.replace(/ +/gi,''))
      },
    })
  }
}

export default cssLearnPlugin
