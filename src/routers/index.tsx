import React, { Suspense } from "react";
import App from "../App";
import { Redirect } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home/index"));

const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component props={props} />
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
  },
];

export default Routers;
