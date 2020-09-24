import Col from './col.vue'
import Row from './row.vue'

const Layout = {}

Layout.install = Vue => {
  Vue.component(Col.name, Col)
  Vue.component(Row.name, Row)
}

export default Layout
