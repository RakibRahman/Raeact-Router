import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "./data";
export const Invoice = () => {
  let params = useParams();
  let navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
      <h1>Details of {params.invoiceId} </h1>
      <p>User Name: {invoice.name} </p>
      <p>Amount: {invoice.amount} </p>
      <p>Due Date: {invoice.due} </p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices"); //return to index after deleting an invoice
        }}
      >
        Delete
      </button>
    </div>
  );
};
