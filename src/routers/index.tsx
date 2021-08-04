import React, { Suspense } from "react";
import "./index.less";
// import Home from "../pages/home";
// import MyListView from "../pages/myListView";
// import ObserverCase from "../pages/observerCase";
// import CustomAnimation from "../requestAnimation";

const prefix = "router-r";

const Home = React.lazy(() => import("../pages/home/index"));
const MyListView = React.lazy(() => import("../pages/myListView/index"));
const ObserverCase = React.lazy(() => import("../pages/observerCase/index"));
const CustomAnimation = React.lazy(() => import("../requestAnimation/index"));

const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div className={`${prefix}-loading`}>loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Routers = [
  {
    path: "/",
    component: SuspenseComponent(Home),
    exact: true,
  },
  {
    path: "/home",
    component: SuspenseComponent(Home),
    exact: true,
    routes: [
      {
        path: "/home/scroll-table",
        component: SuspenseComponent(MyListView),
      },
    ],
  },
  {
    path: "/home/animation",
    component: SuspenseComponent(CustomAnimation),
  },
  {
    path: "/observer",
    component: SuspenseComponent(ObserverCase),
    key: "observer",
  },
];

export default Routers;
