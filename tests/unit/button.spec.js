import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'pos-ui',
      },
    })
    expect(wrapper.text()).to.eq('pos-ui')
  })
  it('2.测试Button组件的icon传入是否能正常显示', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'pos-icon': Icon,
      },
      propsData: {
        icon: 'edit',
      },
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit')
  })
  it('3.测试loading时，按钮是禁用状态', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'pos-icon': Icon,
      },
      propsData: {
        loading: true,
      },
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
  })
  it('4.测试button能否正常点击', () => {
    const wrapper = shallowMount(Button)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1)
  })
  it('5.测试button传入iconPosition能否正常显示', () => {
    const wrapper = shallowMount(Button, {
      attachTo: document.body,
      stubs: {
        'pos-icon': Icon,
      },
      slots: {
        default: 'pos-ui',
      },
      propsData: {
        iconPosition: 'left',
        icon: 'edit',
      },
    })
    let ele = wrapper.vm.$el.querySelector('span')
    expect(getComputedStyle(ele).order).to.eq('2')
    wrapper.setProps({ iconPosition: 'right' })
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq('1')
    })
  })
})
