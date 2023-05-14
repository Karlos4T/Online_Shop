import axios from 'axios'

const API = "http://localhost:4000";

export const getProducts = async (data = -1) => {
    const res = data > 0 ? await fetch(`${API}/products/${data}`).then((res) => res.json()).catch((err) => err.message) : await fetch(`${API}/products`).then((res) => res.json()).catch((err) => err.message);
    return await res;
}

export const getProduct = async (id) => {
    const res = await fetch(`${API}/product/${id}`).then((res) => res.json());
    return await res;
}

export const getCollections = async () => {
    const res = await fetch(`${API}/collections`).then((res) => res.json());
    return await res;
}

export const uploadImg = (data) => {
    let formData = new FormData();
    formData.set('img', data.img.target.files[0]);
    console.log(formData);
    console.log(data.img.target.files[0])

    axios.post(`${API}/images`, formData, 
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
    .then(res => {
        console.log('Image uploaded', res.data)
    })
    .catch(err => console.error('error', err));
}

export const uploadProducts = async (data) => {
    const res = await fetch(`${API}/products`, 
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) 
    })
    return await res.json();
}

export const getUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`).then((res) => res.json());
    return await res;
}

export const getUsers = async () => {
    const res = await fetch(`${API}/users`)
    return await res
}

export const checkUser = (user) => {
    console.log(user)
    axios.post(`${API}/checkuser`, user)
    .then(({ data }) => {
        console.log(data);
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);
        console.log(localStorage.getItem("name"));
    })
    .catch(({ response }) => {
        console.log(response.data);
    })
}


export const uploadUser = async (data) => {
    console.log(data)
    const res = await fetch(`${API}/users`,
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await res.json();
}

export const getWishList = async (id) => {
    const res = await fetch(`${API}/wishlist/${id}`).then((res) => res.json());
    return await res;
}


export const setInWishList = async (data) => {
    console.log(data);
    const res = await fetch(`${API}/wishlist`,
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await res;
}

export const removeFromWishList = async (data) => {
    const res = await fetch(`${API}/wishlist/`,
    {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await res;
}