import { useEffect } from 'react'

/**
 * @description Handle clicking outside a component of interest
 * @param {object} ref - node of reference
 * @param {*} onClickOutside -fn to execute onClick outside node of reference
 */
export default function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // remove event listener onComponentDidUnmount
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutside])
}

/**
 * @description React to escape keypress
 * Defined here coz essence is similar to above
 * @param {func} onEscKeyPress Executed on keydown
 */
export function useEcapeKeyPress(onEscKeyPress) {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        onEscKeyPress()
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [onEscKeyPress])
}
