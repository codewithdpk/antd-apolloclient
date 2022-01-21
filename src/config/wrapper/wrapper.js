import { Provider } from "react-redux";
import { AntDesignWrapper } from "../../views/Layout";
import { RouterList } from "../";
import { Space } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

export const AppProvider = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <AntDesignWrapper>
          <RouterList />
        </AntDesignWrapper>
      </Router>
    </Provider>
  );
};
