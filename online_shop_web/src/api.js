const API = "http://localhost:4000";


export const getProducts = async () => {
    const res = await fetch(`${API}/products`).then((res) => res.json());
    return await res;
}