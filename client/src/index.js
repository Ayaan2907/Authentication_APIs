import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import { MantineProvider } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <MantineProvider
            theme={{
                colorScheme: "dark",
                fontFamily: "Roboto",
                radius: "sm",
            }}
        >
            <Provider store={Store}>
                <App />
            </Provider>
        </MantineProvider>
    </BrowserRouter>
);
