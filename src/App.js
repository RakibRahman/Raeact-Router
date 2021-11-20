import { Vault } from "./Vault";
import { Tips } from "./Tips";
import { Nav } from "./Nav";
import { Info } from "./Info";
import { Home } from "./Home";
import { Seller } from "./Seller";
import { Buyer } from "./Buyer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vault" element={<Vault />} />
          <Route path="tips" element={<Tips />} />
          <Route path="info/*" element={<Info />}>
            <Route path="seller" element={<Seller />} />
            <Route path="buyer" element={<Buyer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
