import { useState } from "react";

export default  function useToggle(initValue) {
    const [value, setValue] = useState(initValue)
    const toggle = () => setValue(prev => !prev)
    return [value, toggle, setValue]
}