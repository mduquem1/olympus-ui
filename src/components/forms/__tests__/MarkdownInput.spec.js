import { shallowMount } from '@vue/test-utils';
import MarkdownInput from '../MarkdownInput.vue';

describe('MarkdownInput.vue', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallowMount(MarkdownInput, {
        propsData: {
          label: 'Test Label',
          modelValue: '# Hello\nThis is a test',
        },
      });
    });
  
    it('renders the correct label', () => {
      expect(wrapper.findAll('a.tab').at(0).text()).toBe('Test Label');
    });
  
    it('starts in edit mode', () => {
      expect(wrapper.vm.isPreview).toBe(false);
      expect(wrapper.findComponent({ name: 'TextareaInput' }).isVisible()).toBe(true);
      expect(wrapper.findComponent({ name: 'MarkdownDisplay' }).isVisible()).toBe(false);
    });
  
    it('switches to preview mode when "Preview" tab is clicked', async () => {
      await wrapper.findAll('a.tab').at(1).trigger('click');
  
      expect(wrapper.vm.isPreview).toBe(true);
      expect(wrapper.findComponent({ name: 'TextareaInput' }).isVisible()).toBe(false);
      expect(wrapper.findComponent({ name: 'MarkdownDisplay' }).isVisible()).toBe(true);
    });
  
    it('emits update:modelValue event when input value changes', async () => {
      const inputElement = wrapper.findComponent({ name: 'TextareaInput' });
      inputElement.vm.$emit('update:modelValue', '## New Heading');
      await wrapper.vm.$nextTick();
  
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')[0]).toEqual(['## New Heading']);
    });
  });