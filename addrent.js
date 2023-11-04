// $(document).ready(function () {
//     $("#roomInfoForm").on("submit", function (e) {
//         e.preventDefault();

//         // Show the loader and hide the submit button
//         $("#loader").show();
//         $("#submitButton").hide();

//         // Perform the form submission
//         $.ajax({
//             url: $(this).attr("action"),
//             method: "POST",
//             data: $(this).serialize(),
//             success: function (response) {
//                 // Handle the response as needed
//                 console.log(response);
//                 // Hide the loader and show the submit button
//                 $("#loader").hide();
//                 $("#submitButton").show();

//                 // Reload the page to clear the form and start over
//                 window.location.reload();
//             },
//             error: function (error) {
//                 console.error(error);
//                 // Hide the loader and show the submit button
//                 $("#loader").hide();
//                 $("#submitButton").show();
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("#submitButton");
    const requiredFields = document.querySelectorAll("input[required], select[required]");

    requiredFields.forEach(function (field) {
        field.addEventListener("input", validateForm);
    });

    function validateForm() {
        let isValid = true;

        requiredFields.forEach(function (field) {
            if (field.value.trim() === "") {
                isValid = false;
            }
        });

        if (isValid) {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "disabled");
        }
    }
});
