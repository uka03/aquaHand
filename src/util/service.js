const getAllUsers = async (cred) => {
  return await fetch("http://34.221.45.97:4000/v1/users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createUser = async (cred) => {
  return await fetch("http://34.221.45.97:4000/v1/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      cred,
    },
  });
};

const updateUser = async (id, sta) => {
  return await fetch(`http://34.221.45.97:4000/v1/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ status: `${sta}` }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const userServices = {
  getAllUsers,
  createUser,
  updateUser,
};
