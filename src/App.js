import { Vault } from "./Vault";
import { Tips } from "./Tips";
import { Nav } from "./Nav";
import { Home } from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="vault" element={<Vault />} />
            <Route path="tips" element={<Tips />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
