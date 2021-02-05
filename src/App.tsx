import React, {useCallback, useEffect, useMemo}from 'react';
import './App.less';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PageOne from './tt/page1';
import PageTwo from './tt/page2';

// 主题色

interface ThemeProps {
  [key: string]: {color: string, background: string}
}

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
const arr = new Array(5).fill('1')


function App() {
  return (
    <div className='App'>
                <DndProvider backend={HTML5Backend} >
                    <PageOne></PageOne>
                    <PageTwo></PageTwo>
                 </DndProvider>
    </div>
  );
}

export default App;
