import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExercisesContainer from "./pages/ExercisesContainer";
import ExerciseNewContainer from "./pages/ExerciseNewContainer";
import NotFound from "./pages/NotFound";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercise" component={ExercisesContainer} />
        <Route exact path="/exercise/new" component={ExerciseNewContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
