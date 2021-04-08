export const loadFromLocal = (key) => {
    try {
        const storedFavorites = JSON.parse(localStorage.getItem(key))
        return storedFavorites;
    } catch (error) {
        console.error('LocalStorage defect');
    }
}