import { add } from './index'

test(' a + b', () => {
  expect(add(1, 1)).toBe(2)
})