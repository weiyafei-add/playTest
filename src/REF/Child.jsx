import React, {forwardRef, useImperativeHandle, useRef} from 'react'

const Child = forwardRef((props, ref) => {
    console.log(props)

    useImperativeHandle(ref, () => ({
        handleOnClick() {
            console.log('点击子组件的REF')
        },
        handleOnInput(text) {
            console.log(text)
        }
    }))
    console.log('lesson_1222修改')
    return <div>
        <p>this is childComponent</p>
        <button ref={ref} onClick={() => {
            console.log(456)
        }} >childRenButton</button>
    </div>
})

export default Child