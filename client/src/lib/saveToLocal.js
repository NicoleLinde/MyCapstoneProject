export const saveToLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}