function getFormvalue() {
    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Access form using its ID
    const form = document.getElementById("form1");

    // Get values and trim extra spaces
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Combine and show in alert
    alert(`${firstName} ${lastName}`);
}
