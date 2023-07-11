import { shallowMount } from '@vue/test-utils';
import Loader from '../index.vue';

describe('Loader.vue', () => {
  it('renders a div with class "lds-ring"', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.find('div.lds-ring').exists()).toBe(true);
  });

  it('renders four child divs', () => {
    const wrapper = shallowMount(Loader);
    const children = wrapper.find('div.lds-ring').findAll('div');
    expect(children.length).toBe(4);
  });
});
