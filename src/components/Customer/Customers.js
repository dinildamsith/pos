import {CustomerModel} from '../../Model/CustomerModel'
import $ from 'jquery';
import 'jquery'

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