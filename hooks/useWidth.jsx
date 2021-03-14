/** Aside from using setWidth() all logic within the eventHandler below is related to
 * removing the transition property on the slider track during the resizing action.
 * We set it to none first and then we add a timer to add back the transition value
 * once resizing has ended. It's a bit hacky but currently there's no other way to
 * detect when a resize event has finished
 *
 * https://css-tricks.com/snippets/jquery/done-resizing-event/
 * https://stackoverflow.com/questions/5489946/how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-action
 *
 */
import { useState, useEffect } from "react"

export const useWidth = (elementRef) => {
  /** create state to hold the width value */
  const [width, setWidth] = useState(0)

  useEffect(() => {
    /** create a function to retrieve the width value from the DOM element being watched  */
    const getWidth = () => elementRef.current.getBoundingClientRect().width

    /** create an eventHandler to be invoked upon window resizing.
     */
    const handleResize = () => {
      // eslint-disable-next-line prefer-const
      let resizeTimer
      elementRef.current.style.transition = "none"
      setWidth(getWidth())

      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        elementRef.current.style.transition = "all 0.25s ease-in-out"
      }, 250)
    }

    /** Set the initial value of state upon component mount */
    if (elementRef.current) {
      setWidth(getWidth())
    }

    /** upon component mount, create an eventlistener to watch out for window resizing and attach to it handleResize */

    window.addEventListener("resize", handleResize)

    /** cleanup by removing the eventlistener upon component unmount */
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [elementRef])

  return { width }
}
