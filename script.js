const button = document.getElementById("helloButton");
const responseBox = document.getElementById("response");

button.addEventListener("click", async () => {

    // Send HTTP request to our API endpoint
    const response = await fetch("/api/hello");

    // Convert JSON response into a JavaScript object
    const data = await response.json();

    // Display the result
    responseBox.textContent = data.message;
});