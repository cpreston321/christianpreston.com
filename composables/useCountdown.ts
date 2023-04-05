import { Ref } from 'vue'

/**
 * useCountdown - A Function that countdowns helps countdown
 *
 * @example
 * ```ts
 * useCountdown(() => {
 *  console.log('Countdown is done!')
 * }, 5)
 * ```
 *
 * @param {function} cb - The callback function
 * @param {number} timer - The time in seconds
 *
 * @returns {Ref<number>} countdown number
 */
export const useCountdown = (cb: () => void, timer?: number): Ref<number> => {
  const counter = ref(timer || 5)
  const timeoutFn = ref<null | NodeJS.Timeout>(null)

  const countdown = () => {
    counter.value--
    if (counter.value === 0) { return cb() }
    timeoutFn.value = setTimeout(countdown, 1000)
  }

  onMounted(() => nextTick(() => countdown()))
  onUnmounted(() => {
    if (timeoutFn.value) { clearTimeout(timeoutFn.value) }
  })

  return counter
}
