import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { createStore, applyMiddleware } from "redux";
import { Reducers } from "../store/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/Client";

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
