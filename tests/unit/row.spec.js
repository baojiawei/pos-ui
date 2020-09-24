import { shallowMount } from '@vue/test-utils'
import Row from '@/packages/layout/row.vue'
import Col from '@/packages/layout/col.vue'
import { expect } from 'chai'

describe('row.vue', () => {
  it('1.测试gutter是否ok?', async () => {
    let wrapper = shallowMount(Row, {
      attachTo: document.body,
      stubs: {
        'pos-col': Col
      },
      slots: {
        default: `<pos-col></pos-col>`
      },
      propsData: {
        gutter: 20
      }
    })
    expect(wrapper.vm.$el.style.marginLeft).to.eq('-10px')
    expect(wrapper.vm.$el.style.marginLeft).to.eq('-10px')

    await wrapper.vm.$nextTick()
    let col = wrapper.vm.$el.querySelector('.pos-col')
    expect(col.style.paddingLeft).to.eq('10px')
    expect(col.style.paddingRight).to.eq('10px')
  })

  it('2.测试justify属性?', async () => {
    let wrapper = shallowMount(Row, {
      attachTo: document.body,
      stubs: {
        'pos-col': Col
      },
      slots: {
        default: `<pos-col></pos-col>`
      },
      propsData: {
        justify: 'start'
      }
    })
    expect(wrapper.vm.$el.style.justifyContent).to.eq('flex-start')
    wrapper.setProps({ justify: 'end' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.style.justifyContent).to.eq('flex-end')
    wrapper.setProps({ justify: 'center' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.style.justifyContent).to.eq('center')
    wrapper.setProps({ justify: 'space-around' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.style.justifyContent).to.eq('space-around')
    wrapper.setProps({ justify: 'space-between' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.style.justifyContent).to.eq('space-between')
  })
})
