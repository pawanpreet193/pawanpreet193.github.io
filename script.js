// Add your JavaScript code here

// Example code to fetch plant data from an API
fetch('https://api.example.com/plants')
    .then(response => response.json())
    .then(data => {
        // Process the plant data and update the page
    })
    .catch(error => console.error(error));

