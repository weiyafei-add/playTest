import React , {useCallback, useEffect, useMemo}from 'react';
import './App.less';
import Hello from './button/index'
import MyButton from './ButtonCustom/button'
import {Button} from 'antd'
// 主题色
<<<<<<< Updated upstream
console.log('最后一次修复线上BUg,完毕')
=======
console.log('继续写代码，又有问题了')
console.log('还要修改一下')
console.log('代码写完')
>>>>>>> Stashed changes

interface ThemeProps {
  [key: string]: {color: string, background: string}
}
465465
console.log('bug 修复完毕')

export const theme: ThemeProps = {
  light: {
    color: '#000',
    background: '#fff',
  },
  drak: {
    color: '#fff',
    background: '#000'
  }
}
export const themeContext = React.createContext(theme.light)

function App() {
 
console.log('线上问题修复一下')
  return (
    <div className="App">
      <Button style={{marginRight:'50px'}}>我是按钮</Button>
      {
        Buttons()
      }
      {
        Buttons()
      }
    </div>
  );
}

const Buttons = () => {
  const [ show, setShow] = React.useState(false)
  const [obj, setObj] = React.useState({
    name: 'weiyafei',
    age: 25,
    love: 'you',
    })
    const [ss, setSS] = React.useState(123)
    const [aa, setAA] = React.useState(123)
    // const getDate = useCallback(() => {
    //   setSS(46)
    // },[obj.name])
    const handleClick1 = () => {
      console.log('object')
    }
  return (
    <div>
      <MyButton type='primary' loading={show}  onClick={() => handleClick1()}>我是自定义按钮哟</MyButton>
    </div>
  )
}

export default App;
