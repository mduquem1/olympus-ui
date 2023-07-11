import { shallowMount } from '@vue/test-utils';
import { marked } from 'marked';
import MarkdownDisplay from '../index.vue';

describe('MarkdownDisplay.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MarkdownDisplay, {
      propsData: {
        content: '# Hello\nThis is a test',
      },
    });
  });

  it('renders props.content as markdown when passed', () => {
    const expectedHtml = marked('# Hello\nThis is a test');
    expect(wrapper.element.innerHTML).toBe(expectedHtml);
  });

  it('rerenders when props.content changes', async () => {
    const newContent = '## New Content\nThis is new content';
    const expectedHtml = marked(newContent);
    wrapper.setProps({ content: newContent });
    await wrapper.vm.$nextTick();

    expect(wrapper.element.innerHTML).toBe(expectedHtml);
  });
});
