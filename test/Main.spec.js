import { shallowMount } from '@vue/test-utils'
import Main from '@/pages/index.vue'

describe('Main page', () => {
  test('is a Vue instance', () => {
    const $t = (key) => key
    const $n = (value) => value.toString()
    const wrapper = shallowMount(Main, { mocks: { $t, $n } })
    expect(wrapper.vm).toBeTruthy()
  })
})
