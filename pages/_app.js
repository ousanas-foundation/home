import App from "next/app";
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import "../node_modules/react-modal-video/css/modal-video.min.css"
import "../src/assets/css/style.css"
import favicon from '../src/assets/images/favicon.ico'
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
        <Provider store={reduxStore}>
          <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CoinAge – React Landing Page For ICO & Cryptocurrency</title>
                <meta name="description" content="A simple react, redux and nextjs template" />
                <link rel="icon" type="image/x-icon" href={favicon}/>
            </Helmet>
          </HelmetProvider>
          <Component {...pageProps} />
        </Provider>
    );
  }
}

export default withReduxStore(MyApp);
