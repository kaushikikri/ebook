export async function getUser(token, ebid) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/600/users/${ebid}`, {
        method: "GET",
        headers: { "content-Type": "application/josn", Authorization: `Bearer ${token}` }
    })
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;
}

export async function createOrder(cartList, total, user, token) {
    const order = {
        cartList: cartList,
        total: total,
        unit: cartList.length,
        users: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const res = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    })
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;
}

export async function getUserOrder(token, ebid) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/660/orders?users.id=${ebid}`, {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }
    })
    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }
    const data = await res.json();
    return data;
}