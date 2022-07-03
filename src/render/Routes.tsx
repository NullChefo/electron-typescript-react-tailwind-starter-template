import {
  Route,
  HashRouter as Router,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";



const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            caseSensitive
            path="/"
            element={<Navigate replace to="/" />}
          />
          <Route caseSensitive path="/" element={<HomePage />} />

        </Switch>
      </Router>
    </>
  );
};

export default Routes;
