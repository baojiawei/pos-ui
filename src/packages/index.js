import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

const components = [Button, Icon, ButtonGroup]
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window.Vue !== 'undefined') {
  install(window.Vue)
}
export default {
  install,
}
