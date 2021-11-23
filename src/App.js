import { Vault } from "./Vault";
import { Tips } from "./Tips";
import { Nav } from "./Nav";
import { Info } from "./Info";
import { Home } from "./Home";
import { Seller } from "./Seller";
import { Buyer } from "./Buyer";
import { Blog } from "./Blog/Blog";
import { Invoice } from "./Data/Invoice";
import { Invoices } from "./Data/Invoices";
import { Error } from "./Error";
import { Admin } from "./Admin/Admin";
import { RequireAuth } from "./Admin/RequireAuth";
import { Login } from "./Login";
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
          <Route path="info/" element={<Info />}>
            <Route index element={<h1>Select any List</h1>} />
            <Route path="seller" element={<Seller />} />
            <Route path="buyer" element={<Buyer />} />
          </Route>
          <Route path="blog/*" element={<Blog />} />
          {/* 
            <Route path="blog/*" element={<Blog />}>
              <Route path="blog/" element={<ArticleIndex />} />
              <Route path=":id" element={<Article />} />
              we use this pattern with <Outlet/> 
            </Route> */}

          {/* ProtectedRoute */}
          <Route
            path="/admin"
            element={
              <RequireAuth authenticated={!true}>
                <Admin />
              </RequireAuth>
            }
          />

          {/* No Match Found */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
