import { Provider } from "react-redux";
import { AntDesignWrapper } from "../../views/Layout";
import { RouterList } from "../";
import { Space } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../services/ApolloClient";

export const AppProvider = ({ store }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Router>
          <AntDesignWrapper>
            <RouterList />
          </AntDesignWrapper>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};
