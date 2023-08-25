import { mount } from '@vue/test-utils';
import Button from '../index.vue';

test('component is mounted', () => {
  const wrapper = mount(Button);

  expect(wrapper).toBeDefined();
});

test('btn is clicked', () => {
  const wrapper = mount(Button);

  const btn = wrapper.find('.btn');

  btn.trigger('click');
  wrapper.vm.$nextTick();

  expect(wrapper.emitted('on-click-handle')).toBeTruthy();
});

test('button is not clickable when disabled', async () => {
  const wrapper = mount(Button, {
    attrs: {
      disabled: true,
    },
  });

  const btn = wrapper.find('.btn');
  await btn.trigger('click');

  expect(wrapper.emitted('on-click-handle')).toBeFalsy();
});
