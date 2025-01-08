// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
fetchData(apiUrl);

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
        throw new Error("Failed to post data:" + response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      console.log("Posted data", data);
    })

    .catch((error) => {
      console.log("There was a problem with the POST operation:", error);
    });
}

// Function to make a POST request
// TODO: Implement the function

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
