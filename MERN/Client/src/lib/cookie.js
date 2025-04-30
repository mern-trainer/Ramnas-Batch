import { jwtDecode } from "jwt-decode";

const key = "sample_token"

const cookie = {
    set: (token) => {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000;
        const dt = new Date(exp).toUTCString();
        document.cookie = `${key}=${token}; expires=${dt};`;
    },
    get: () => {
        const cookies = document.cookie
        const cookiesArr = cookies.split(";")
        for (const cookie of cookiesArr) {
            const [field, value] = cookie.split("=");
            if (field.trim() == key) {
                return value
            }
        }
        return null
    }
}

export default cookie