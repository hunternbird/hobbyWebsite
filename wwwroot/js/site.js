﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val(total.toFixed(2)); // Display total cost
    });
});