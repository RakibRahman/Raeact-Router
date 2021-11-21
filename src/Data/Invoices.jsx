import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";

export function Invoices() {
  let invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (event) => {
    let filter = event.target.value;
    filter ? setSearchParams({ filter }) : setSearchParams({});
  };
  const filterInvoice = (arr) => {
    return arr.filter((invoice) => {
      let filter = searchParams.get("filter");
      if (!filter) return true;

      let name = invoice.name.toLowerCase();
      return name.startsWith(filter.toLowerCase());
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={onChangeHandler}
        />
        {filterInvoice(invoices).map((invoice) => (
          <NavLink
            // className="red"
            // className={({ isActive }) => (isActive ? "red" : "blue")}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
