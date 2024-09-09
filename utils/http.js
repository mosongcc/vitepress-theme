
// 接口POST请求
export async function httpPost(path, body) {
    const response = await fetch(path, {
        method: "POST", body: JSON.stringify(body), headers: {"Content-Type": "application/json"}
    })
    const result = await response.json()
    if (result.errno !== "00000") {
        throw new Error(result.errno + ":" + result.errmsg)
    }
    return result.body
}

export function uuid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0;
        let v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export default {
    httpPost,
    uuid
}