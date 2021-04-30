import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./views/Dashboard";
import VSSystem from "./views/VSSystem";

import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import Profile from "./views/Profile";
import "./app.css";
import { authService } from "./service/auth";
import BlankPage from "./views/BlankPage";
import Energy from "./views/Energy";
import Booking from "./views/Booking";
import Light from "./views/Light";

function App() {
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    (async function root() {
      if (authState.loggedIn) {
        await authService.get();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route
          exact
          path="/reset-password/:linktoken"
          component={ResetPassword}
        />
        <PrivateRoute exact path="/" component={Dashboard} />
       
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/vssystem" component={VSSystem} />
        <PrivateRoute exact path="/booking" component={Booking} />
        <PrivateRoute exact path="/light" component={Light} />
        <PrivateRoute exact path="/energy" component={Energy} />
        <Route path="*">
          <BlankPage/>
        </Route>
      </Switch>
    </Suspense>
  );
}

function PrivateRoute({ component, children, admin, ...rest }) {
  const Component = component;
  const { Header, Footer } = Layout;
  let auth = useSelector((state) => state.auth);
  const isAdmin = auth.role === "admin";

 
  console.log(admin)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin && !isAdmin ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : auth.loggedIn ? (
          <div className="App">
            <NavBar />
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              {children ? children : <Component />}
              <Footer style={{ textAlign: "center" }}>
                Karta-X Indonesia ©2021
              </Footer>
            </Layout>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
