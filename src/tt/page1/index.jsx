import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
    width: 200,
    height: 50,
    lineHeight: '50px',
    background: 'pink',
    margin: '30px auto'
}


const PageOne = () => {

    const [, drager] = useDrag({
        item: {type: 'PageOne'}
    })

    return <div ref={drager} style={style}>PageOne</div>
}

export default PageOne;