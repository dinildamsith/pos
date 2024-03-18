import {CustomerModel} from '../../Model/CustomerModel'
import $ from 'jquery';
import 'jquery'

$(document).ready(function() {
    $("#customerSaveBtn").on('click', function() {
        var customerId = $("#customerIdTxt").val();
        var customerName = $("#customerNameTxt").val();
        var customerMail = $("#customerMailTxt").val();
        var customerAddress = $("#customerAddressTxt").val();

        var customerDetailsObject = new CustomerModel(customerId, customerName, customerMail, customerAddress);

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
            http.open("POST","http://localhost:8080/Dzone//customer",true);
            http.setRequestHeader("Content-Type","application/json");
            http.send(customerDetailsJsonObj)
        }

        sendAJAX(customerDetailsJsonObject)
    });
});