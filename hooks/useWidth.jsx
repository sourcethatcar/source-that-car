import { useState, useEffect } from "react"

export const useWidth = (elementRef) => {
  /** create state to hold the width value */
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log("useWidth Ran")
    /** create a function to retrieve the width value from the DOM element being watched  */
    const getWidth = () => elementRef.current.getBoundingClientRect().width

    /** create an eventHandler to be invoked upon window resizing */
    const handleResize = () => setWidth(getWidth())

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
