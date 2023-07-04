import { mount } from '@vue/test-utils'
import Container from '../index.vue'

describe('Container', () => {
  it('renders correctly', () => {
    const wrapper = mount(Container)
    expect(wrapper.find('.container').exists()).toBe(true)
  })

  it('adds the "page-container__cols" class when "isFlexCol" is true', () => {
    const wrapper = mount(Container, {
      propsData: {
        isFlexCol: true
      }
    })

    expect(wrapper.find('.container').classes()).toContain('page-container__cols')
  })

  it('does not add the "page-container__cols" class when "isFlexCol" is false', () => {
    const wrapper = mount(Container, {
      propsData: {
        isFlexCol: false
      }
    })

    expect(wrapper.find('.container').classes()).not.toContain('page-container__cols')
  })
})
