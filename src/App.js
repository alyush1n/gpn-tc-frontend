import React from 'react';
import Search from "./pages/search";
import {Provider} from "react-redux";
import store from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Search/>
            </div>
        </Provider>
    );
};

export default App;