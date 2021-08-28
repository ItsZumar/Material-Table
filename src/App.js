import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
