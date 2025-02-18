document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the form from submitting initially
    event.preventDefault();

    // Get the form data
    const form = document.getElementById("123");
    const formData = new FormData(form);

    // Check if any dropdown has the default value
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
let btn=document.querySelector("button");
btn.addEventListener('onclick',() =>{
    btn.preventDefault();
})
console.dir(btn)