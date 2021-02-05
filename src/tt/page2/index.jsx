import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
    width: 400,
    height: 400,
    margin: '100px auto',
    lineHeight: '60px',
    border: '1px dashed black'
}


const PageTwo = () => {
    
    const [collectProps, droper] = useDrop({
        accept: 'PageOne',
        collect: (minoter) => ({
            isOver: minoter.isOver()
        })
    })

    const bg = collectProps.isOver ? 'deeppink' : 'white';
    const content = collectProps.isOver ? '快松开，放到碗里来' : '将 Box 组件拖动到这里';

    return <div ref={droper} style={{...style, backgroundColor: bg }}>{content}</div>
}

export default PageTwo; 