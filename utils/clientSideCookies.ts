interface TokenExpiry {
    isValid: boolean,
    expiryTime: number
}

export const isTokenExpired = (token: string): TokenExpiry => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    const { exp } = JSON.parse(jsonPayload);
    const expired = Date.now() >= exp * 1000
    return {
        isValid: expired,
        expiryTime: parseInt(exp)
    }
}

// ======================================================================
// ======================================================================
export interface SetCookie {
    name: string,
    value?: string, 
    token?: string, 
    time?: number
}

export const setCookie = ({ name, value, token, time }: SetCookie): void => {
    const cookieValue = token ? token : value;
    let maxAge = token ? isTokenExpired(token).expiryTime : time;
    document.cookie = name + "=" + (cookieValue || "") + maxAge + "; path=/";
}

// ======================================================================
// ======================================================================
export const  getCookie = (name: string) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// ======================================================================
// ======================================================================
export const eraseCookie = (name: string) => {
    document.cookie = name+'=; Max-Age=-99999999;';
}