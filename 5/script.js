// Base URL
const apiUrl = "https://api.example.com/data";
const token = "one_access_token";
// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url, token) {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) =>
      console.error("There was an error fetching: " + error.message)
    );
}

fetchData(apiUrl, token);

// Function to make a POST request
// TODO: Implement the function

function postData(url, data, token) {
  let myPromise = new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //post needs body data
    })
      .then((response) => {
        if (!response.ok) {
          reject(
            new Error("Network response was not ok: " + response.statusText)
          );
        }
        return response.json();
      })
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => reject(error));
  });
  return myPromise;
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost, token)
  .then((result) => console.log("Data posted successfully:", result))
  .catch((error) => console.error("Failed to post data:", error.message));
