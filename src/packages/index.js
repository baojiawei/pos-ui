import Button from './basic/button/button.vue'
import Icon from './basic/icon/icon.vue'
import ButtonGroup from './basic/group/button-group.vue'
import Row from './basic/layout/row.vue'
import Col from './basic/layout/col.vue'
import Container from './basic/container/container.vue'
import Aside from './basic/container/aside.vue'
import Footer from './basic/container/footer.vue'
import Header from './basic/container/header.vue'
import Main from './basic/container/main.vue'
import Input from './Form/input/input.vue'
import Switch from './Form/switch/switch.vue'
import Upload from './Form/upload/upload.vue'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Container,
  Main,
  Aside,
  Header,
  Footer,
  Input,
  Switch,
  Upload
]
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
