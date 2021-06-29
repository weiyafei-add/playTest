import React, { Suspense } from "react";
import App from "../App";
import { Redirect } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home/index"));
const MyListView = React.lazy(() => import("../pages/myListView/index"));

const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div>loading</div>}>
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
];

export default Routers;
