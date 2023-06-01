export async function login(authData) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/login`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authData),
    })

    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }

    const data = await res.json();
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("ebid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authData) {
    const res = await fetch(`${process.env.REACT_APP_HOST}/register`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authData),
    })

    if (!res.ok) {
        throw { message: res.statusText, code: res.status }
    }

    const data = await res.json();
    return data;
}

export async function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("ebid");
    return null;
}