export async function GetFeaturedList() {
    const res = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;
}

export async function getProductList(searchQ) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchQ || ""}`);
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;

}

export async function getProduct(id) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;
}