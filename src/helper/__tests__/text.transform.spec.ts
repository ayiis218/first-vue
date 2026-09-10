import { describe, it, expect } from 'vitest'
import { formatTime } from '../text.transform'

describe('formatTime', () => {
  it('memformat detik menjadi menit:detik', () => {
    expect(formatTime(0)).toBe('0:00')
    expect(formatTime(9)).toBe('0:09')
    expect(formatTime(60)).toBe('1:00')
    expect(formatTime(125)).toBe('2:05')
    expect(formatTime(300)).toBe('5:00')
  })
})
