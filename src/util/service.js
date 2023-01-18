const getAllUsers = async (cred) => {
    return await fetch("http://34.221.45.97:4000/v1/users", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
}

const createUser = async (cred) => {
    return await fetch("http://34.221.45.97:4000/v1/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: {
            cred
        }
    })
}

const updateUser = async (cred) => {
    return await fetch("http://34.221.45.97:4000/v1/users", {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
    })
}

export const userServices = {
    getAllUsers,
    createUser,
    updateUser
}