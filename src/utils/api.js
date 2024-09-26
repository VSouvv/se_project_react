const baseUrl = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

//Get items
function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
}

//Add items
function addItems({ name, imageUrl, weather, token }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // TODOL add token to arg
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
}

//Remove items
function removeItems(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

// Edit user profile
function editUserProfile({ name, avatar, token }) {
  if (!name || !avatar || !token) {
    throw new Error("Missing required parameters: name, avatar, or token.");
  }

  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
  })
    .then(handleServerResponse)
    .then((data) => {
      return data;
    });
}

// Like item
function addLikeItem({ itemId, token }) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleServerResponse)
    .then((data) => {
      return data;
    });
}

// Dislike Item
function removeLikeItem({ itemId, token }) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleServerResponse)
    .then((data) => {
      return data;
    });
}

const api = {
  getItems,
  addItems,
  removeItems,
  editUserProfile,
  addLikeItem,
  removeLikeItem,
};

export default api;
