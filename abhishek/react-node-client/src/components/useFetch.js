import { useState, useEffect } from "react";

export default function useFetch() {
  const [customers, setCustomers] = useState([]);
  // const url = "https://react-node-mysql-app.herokuapp.com/customers";
  const url = "http://localhost:3001/customers";

  async function getCustomers() {
    const response = await fetch(url);
    console.log(response)
    const json = await response.json();
    if(response.ok) {
      setCustomers(json.customers);
    } 
  }

  try {
    useEffect(() => {
      getCustomers();
    }, []);
    return customers;
  } catch (err) {
    console.log(err);
  }
}
