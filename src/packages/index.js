import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'
import Row from './layout/row.vue'
import Col from './layout/col.vue'
import Container from './container/container.vue'
import Aside from './container/aside.vue'
import Footer from './container/footer.vue'
import Header from './container/header.vue'
import Main from './container/main.vue'

const components = [Button, Icon, ButtonGroup, Row, Col, Container, Main, Aside, Header, Footer]
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
/* eslint-disable */
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}
