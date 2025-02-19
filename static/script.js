document.querySelector("form").addEventListener("submit", function (event) {
    
    event.preventDefault();
    const form = document.getElementById("123");
    const formData = new FormData(form);
    let invalidInput = false;
    for (let [key, value] of formData.entries()) {
        if (value === "-1") {
            invalidInput = true;
            break;
        }
    }
    if (invalidInput)
    {
        alert("Please select all options before submitting the form.");
    } 
    else
    {
        form.submit();
    }
});