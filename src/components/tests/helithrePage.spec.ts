import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { PageWrapper } from '../../composable/wrapper/page/pageWrapper'
import HelithrePage from '../wrapper/HelithrePage.vue'

vi.mock('@/composable/page/pageComponents', () => ({
  pageComponentsMap: new Map([
    ['text', {
      name: 'MockTextComponent',
      template: '<p>Mock Text</p>'
    }]
  ])
}))

vi.mock('@/composable/utils', () => ({
  validatedResult: (val: string) => val
}))

describe('helithre page render', () => {
  it('Correctly render component on page', () => {
    const mockWrapper = {
      getLoadArray: [
        { id: 'el1', type: 'text' },
        { id: 'el2', type: 'text' }
      ]
    } as unknown as PageWrapper

    const wrapper = mount(HelithrePage, {
      props: { wrapper: mockWrapper }
    })

    expect(wrapper.findAll('p').length).toBe(2)
  })
})
