import { shallowMount } from '@vue/test-utils';
import TextInput from '../TextInput.vue';

describe('TextInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test Label',
        placeholder: 'Test Placeholder',
        modelValue: 'Test Value',
      },
    });
  });

  it('renders props.label when passed', () => {
    expect(wrapper.find('label').text()).toBe('Test Label');
  });

  it('renders props.placeholder when passed', () => {
    expect(wrapper.find('input').attributes().placeholder).toBe('Test Placeholder');
  });

  it('renders props.modelValue when passed', () => {
    expect(wrapper.find('input').element.value).toBe('Test Value');
  });

  it('emits update:modelValue event when input value changes', async () => {
    const inputElement = wrapper.find('input');
    inputElement.element.value = 'New Value';
    inputElement.trigger('input');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['New Value']);
  });
});
