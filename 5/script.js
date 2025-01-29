const apiUrl = "https://api.example.com/data";

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData(apiUrl);
function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Posted data successfully:", data))
    .catch((error) => console.error("Error posting data:", error));
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
