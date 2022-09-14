import { Ref } from 'vue'

/**
 * useCountdown - A Function that countdowns helps countdown
 *
 * @example
 * ```ts
 * useCountdown(5, () => {
 *  console.log('Countdown is done!')
 * })
 * ```
 *
 * @param timer {number} - The time in seconds
 * @param cb {function} - The callback function
 *
 * @returns `Ref<number>` countdown number
 */
export const useCountdown = (timer: number | undefined, cb: () => void): Ref<number> => {
  const counter = ref(timer ?? 5)
  const timeoutFn = ref(null)

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
