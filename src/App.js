import { Vault } from "./Vault";
import { Tips } from "./Tips";
import { Nav } from "./Nav";
import { Info } from "./Info";
import { Home } from "./Home";
import { Seller } from "./Seller";
import { Buyer } from "./Buyer";
import { User } from "./User";
import { Invoice } from "./Data/Invoice";
import { Invoices } from "./Data/Invoices";
import { Error } from "./Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        {/* Persistent Route/Component */}
        <Nav />

        {/* Navigation Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vault" element={<Vault />} />
          <Route path="tips" element={<Tips />} />

          {/* URL param || Side By Side*/}
          <Route path="invoices" element={<Invoices />}>
            {/* Index Routes */}
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          {/*   Nested Routes */}
          <Route path="info/*" element={<Info />}>
            <Route path="seller" element={<Seller />} />
            <Route path="buyer" element={<Buyer />} />
          </Route>

          <Route path="user" element={<User />} />
          {/* No Match Found */}
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
