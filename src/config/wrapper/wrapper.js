import { Provider } from "react-redux";
import { AntDesignWrapper } from "../../views/Layout";
import { RouterList } from "./";

export const AppProvider = ({ store }) => {
  return (
    <Provider store={store}>
      <AntDesignWrapper>
        <RouterList />
      </AntDesignWrapper>
    </Provider>
  );
};
