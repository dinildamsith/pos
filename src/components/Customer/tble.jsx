import React, { useEffect } from 'react';

function CustomerTablePage() {
    useEffect(() => {
        getAllCustomers();
    }, []); // Empty dependency array to ensure it runs only once when component mounts

    function getAllCustomers() {
        fetch("http://localhost:8080/D_Zone_BackEnd_war_exploded/customer")
            .then(response => response.json())
            .then(data => {
                getAllCustomerSetCustomerTable(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function getAllCustomerSetCustomerTable(data) {
        // Clear the table
        const customerTable = document.getElementById("customer_Table");
        customerTable.innerHTML = "";

        // Populate the table with new data
        data.forEach(CustomerModel => {
            var newRow = "<tr><th scope='row'>" + CustomerModel.cust_Id + "</th><td>" + CustomerModel.cust_Name + "</td><td>" + CustomerModel.cust_Mail + "</td><td>" + CustomerModel.cust_Address + "</td></tr>";
            customerTable.innerHTML += newRow;
        });
    }

    return (
        <div>
            <table className="table mt-3 mt-xxl-4">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody id="customer_Table"></tbody>
            </table>
        </div>
    );
}

export default CustomerTablePage;
