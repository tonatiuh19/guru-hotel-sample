import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.yelp.com/v3/graphql";

const httpLink = createHttpLink({
  uri: "https://api.yelp.com/v3/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token =
    "eGPnn_kJoE2lZDMMYkz7SSma-GxpJ6NYsUrxIWUk_CKTZR1um7RAELCL6b1enuX6EvWZM09f70RVBqPupPSaXDNGFjTvdjagoJ3Tzx_tNARdvbPJGrVCG5En8i2EYnYx";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Accept-Language": "en-US",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
