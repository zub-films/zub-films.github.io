async function fetchRemoteImage(filmName) {
    // const url = 'https://raw.githubusercontent.com/zub-films/loader/refs/heads/main/images/' + filmName;
    const url = 'https://raw.githubusercontent.com/zub-films/loader/refs/heads/main/images/' + filmName;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка загрузки JSON: ${response.status}`);
    }
    return await response.text();
}

export default fetchRemoteImage;