import {CustomerModel} from '../../Model/CustomerModel'
import $ from 'jquery';
import 'jquery'


getAllCustomers();

// Save Customer
$(document).ready(function() {
    $("#customerSaveBtn").on('click', function() {
        var cust_Id = $("#customerIdTxt").val();
        var cust_Name = $("#customerNameTxt").val();
        var cust_Mail = $("#customerMailTxt").val();
        var cust_Address = $("#customerAddressTxt").val();

        var customerDetailsObject = new CustomerModel(cust_Id, cust_Name, cust_Mail, cust_Address);

        var customerDetailsJsonObject = JSON.stringify(customerDetailsObject)

        const sendAJAX = (customerDetailsJsonObj) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = () =>{
                //Validation
                if (http.readyState === 4 && http.status === 200) {
                    alert("Success")
                }else{
                    alert("Failed")
                }
            }
            http.open("POST","http://localhost:8080/D_Zone_BackEnd_war_exploded/customer",true);
            http.setRequestHeader("Content-Type","application/json");
            http.send(customerDetailsJsonObj)
        }

        sendAJAX(customerDetailsJsonObject)
    });
});

// Update Customer
$(document).ready(function (){
    $("#customerUpdateBtn").on('click', function() {

        var cust_Id = $("#customerIdTxt").val();
        var cust_Name = $("#customerNameTxt").val();
        var cust_Mail = $("#customerMailTxt").val();
        var cust_Address = $("#customerAddressTxt").val();

        var customerUpdateDetailsObje = new CustomerModel(cust_Id,cust_Name,cust_Mail,cust_Address)
        var customerUpdateDetailsObjeJson = JSON.stringify(customerUpdateDetailsObje);

        const sendAJAX = (customerUpdateObj) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = () =>{
                //Validation
                if (http.readyState === 4 && http.status === 200) {
                    alert("Success")
                }else{
                    alert("Failed")
                }
            }

            // Append the customer ID to the URL  ( Id Sent PathVarible)
            var url = "http://localhost:8080/D_Zone_BackEnd_war_exploded/customer/" + cust_Id;

            http.open("PUT",url,true);
            http.setRequestHeader("Content-Type","application/json");
            http.send(customerUpdateObj)
        }

        sendAJAX(customerUpdateDetailsObjeJson)
    });
});

// Delete Customer
$(document).ready(function() {
    $("#customerDeleteBtn").on('click', function() {

        var deleteCustomerId = $("#customerIdTxt").val();

        const sendAJAX = () => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = () =>{
                //Validation
                if (http.readyState === 4 && http.status === 200) {
                    alert("Success")
                }else{
                    alert("Failed")
                }
            }

            // Append the customer ID to the URL  ( Id Sent PathVarible)
            var url = "http://localhost:8080/D_Zone_BackEnd_war_exploded/customer/" + deleteCustomerId;

            http.open("DELETE",url,true);
            http.setRequestHeader("Content-Type","application/json");
            http.send()
        }

        sendAJAX()
    });
});


// Get All Customer
function getAllCustomers(){
    fetch("http://localhost:8080/D_Zone_BackEnd_war_exploded/customer")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Call the function to load customer data into the table
           getAllCustomerSetCustomerTable(data)


        })
        .catch(error => console.error('Error fetching data:', error));
}

// Get All Data Set Table
const getAllCustomerSetCustomerTable = (data) => {

    $('#customer_Table').empty(); // Customer Table Clean

    data.forEach(CustomerModel =>{

        var newRow =  "<tr><th scope='row'>" + CustomerModel.cust_Id + "</th><td>" + CustomerModel.cust_Name + "</td><td>" + CustomerModel.cust_Mail + "</td><td>" + CustomerModel.cust_Address + "</td></tr>";
        $("#customer_Table").append(newRow);

    });
}


// Ensure the event handler is bound even after content changes
$(document).on("click", "#customer_Table tr", function () {
    let id = $(this).find("th").text(); // table header
    let data = $(this).find("td"); // table Data

    $("#customerIdTxt").val(id);
    $("#customerNameTxt").val(data.eq(0).text());
    $("#customerMailTxt").val(data.eq(1).text());
    $("#customerAddressTxt").val(data.eq(2).text());
});


//////////////////////////////////////////////////// Button Css ////////////////////////////////////////////

$(document).on("click", "#customer_Table tr", function () {
    $('#customerSaveBtn').css('display', 'none');
    $('#customerUpdateBtn').css('display', 'block');
    $('#customerDeleteBtn').css('display', 'block');
});

$(document).on("click", "#customerUpdateBtn", function () {
    $('#customerSaveBtn').css('display', 'block');
    $('#customerUpdateBtn').css('display', 'none');
    $('#customerDeleteBtn').css('display', 'none');
});

$(document).on("click", "#customerDeleteBtn", function () {
    $('#customerSaveBtn').css('display', 'block');
    $('#customerUpdateBtn').css('display', 'none');
    $('#customerDeleteBtn').css('display', 'none');
});