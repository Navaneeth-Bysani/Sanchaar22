import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import { ThemeProvider } from "@material-ui/core/styles";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Payment from "./views/Payment";
import PaymentStatus from "./views/PaymentStatus";
import theme from "./assets/theme/theme.js";
// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute path = '/emailConfirm/:regId' component = {Payment} layout = {LayoutDefault}/>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute path="/callback" component={PaymentStatus} layout={LayoutDefault} />
          </Switch>
        )}
      />
    </ThemeProvider>
  );
};

export default App;
