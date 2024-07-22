const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export { checkResponse };

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: headers,
  }).then(checkResponse);
}

export { getItems };

function postItems(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

export { postItems };

function deleteItem(item) {
  return fetch(`${baseUrl}/items/${item._id}`, {
    method: "DELETE",
    headers: headers,
  }).then(checkResponse);
}

export { deleteItem };
