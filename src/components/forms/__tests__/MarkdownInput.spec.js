import { mount } from '@vue/test-utils';
import MarkdownInput from '../MarkdownInput.vue';

describe('MarkdownInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MarkdownInput, {
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
    expect(wrapper.vm.isPreview).toBe(false); // Corrected access to isPreview
    expect(wrapper.findComponent({ name: 'OlTextareaInput' }).isVisible()).toBe(
      true
    );
    expect(
      wrapper.findComponent({ name: 'OlMarkdownDisplay' }).isVisible()
    ).toBe(false);
  });

  it('switches to preview mode when "Preview" tab is clicked', async () => {
    await wrapper.findAll('a.tab').at(1).trigger('click');

    expect(wrapper.vm.isPreview).toBe(true); // Corrected access to isPreview
    expect(wrapper.findComponent({ name: 'OlTextareaInput' }).isVisible()).toBe(
      false
    );
    expect(
      wrapper.findComponent({ name: 'OlMarkdownDisplay' }).isVisible()
    ).toBe(true);
  });
  it('emits update:modelValue event when input value changes', async () => {
    console.log(wrapper.html()); // Print the HTML of the entire component

    const inputElement = wrapper.find('#textareaInput'); // Find the textarea by ID
    if (inputElement.exists()) {
      await inputElement.setValue('## New Heading'); // Trigger input event with new value

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')[0]).toEqual([
        '## New Heading',
      ]);
    } else {
      throw new Error('Textarea not found');
    }
  });
});
