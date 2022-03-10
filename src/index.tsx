import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";

ReactDOM.render(
  <ApolloProvider client={client}>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
