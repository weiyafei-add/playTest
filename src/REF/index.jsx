import React, {useRef, useEffect, useState} from 'react'
import Child from './Child'

const FancyButton = () => {
    const [count, setCount] = useState(0)
    const buttonRef = useRef(null)
    useEffect(() => {
        console.log(buttonRef.current)
    })
    const handleOnclick = (data) => {
        if(data) {
            buttonRef.current?.handleOnInput(data)
            return
        }
        buttonRef.current.handleOnClick()
    }
    return <div>
        <button onClick={() => handleOnclick(null)} >parentButton</button>
        <button onClick={() => handleOnclick('aaa')} >传值Btn</button>
        <Child count={count} ref={buttonRef} ></Child>
    </div>
}
export default FancyButton