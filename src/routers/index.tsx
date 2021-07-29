import React, { Suspense } from "react";
import App from "../App";
import { Redirect } from "react-router-dom";
import "./index.less";

const prefix = "router-r";

const Home = React.lazy(() => import("../pages/home/index"));
const MyListView = React.lazy(() => import("../pages/myListView/index"));
const ObserverCase = React.lazy(() => import("../pages/observerCase/index"));

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
    component: App,
    exact: true,
    render: () => <Redirect to={"/home"} />,
  },
  {
    path: "/home",
    component: SuspenseComponent(Home),
    key: "home",
    exact: true,
    routes: [
      {
        path: "/scroll-table",
        key: "scroll",
        exact: true,
        component: SuspenseComponent(MyListView),
      },
    ],
  },
  {
    path: "/observer",
    component: SuspenseComponent(ObserverCase),
    key: "observer",
    exact: true,
  },
];

export default Routers;
