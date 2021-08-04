import React from "react";
import "./App.less";
import Routes from "./routers";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
// 主题色

interface ThemeProps {
  [key: string]: { color: string; background: string };
}

export const theme: ThemeProps = {
  light: {
    color: "#000",
    background: "#fff",
  },
  drak: {
    color: "#fff",
    background: "#000",
  },
};
export const themeContext = React.createContext(theme.light);

function App() {
  return (
    <div>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </div>
  );
}

export default App;
