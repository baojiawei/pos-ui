import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'
import Row from './layout/row.vue'
import Col from './layout/col.vue'

const components = [Button, Icon, ButtonGroup, Row, Col]
const install = (Vue) => {
  components.forEach((component) => {
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
