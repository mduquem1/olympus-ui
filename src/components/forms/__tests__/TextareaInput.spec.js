import { shallowMount } from '@vue/test-utils';
import TextareaInput from '../TextareaInput.vue';

describe('TextareaInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TextareaInput, {
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
    expect(wrapper.find('textarea').attributes().placeholder).toBe('Test Placeholder');
  });

  it('renders props.modelValue when passed', () => {
    expect(wrapper.find('textarea').element.value).toBe('Test Value');
  });

  it('emits update:modelValue event when input value changes', async () => {
    const textareaElement = wrapper.find('textarea');
    textareaElement.element.value = 'New Value';
    textareaElement.trigger('input');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['New Value']);
  });
});
