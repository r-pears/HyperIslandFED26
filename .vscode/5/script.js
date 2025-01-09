// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request
function fetchData(url) {
  fetch(url)
    .then((response) => {
      
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json(); 
    })
    .then((data) => {
      console.log("Data fetched successfully:", data); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Call the GET request function
fetchData(apiUrl);

// Function to make a POST request
function postData(url, data) {
  fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data), 
  })
    .then((response) => {

      if (!response.ok) {
        throw new Error("Failed to post data: " + response.statusText);
      }
      return response.json(); 
    })
    .then((data) => {
      console.log("Data posted successfully:", data); 
    })
    .catch((error) => {
      console.error("Error posting data:", error); 
    });
}

// Data to be posted
const dataToPost = {
  name: "John Doe",
  age: 21,
};

// Call the POST request function
postData(apiUrl, dataToPost);
