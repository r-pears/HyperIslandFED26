// Base URL
/* const apiUrl = "https://api.example.com/data"; */
const apiUrl = 'https://dummyjson.com/test';

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(apiUrl)
  .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error('Fetch Error:', error));    
};


fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)  
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log('POST Response Data', data))
  .catch(error => console.error('Error:', error));
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
