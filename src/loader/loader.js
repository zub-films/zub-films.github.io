/**
 * Получает список фильмов из удаленного файла.
 * @returns {Promise<Object>} Объект JSON в формате
 * ```json
 * {
 *  "Наименование фильма": [
 *      "https://any.link",
 *      "https://any.link",
 *  ],
 * }
 * ```
 */
async function fetchRemoteFilms() {
    const url = 'https://raw.githubusercontent.com/zub-films/loader/refs/heads/main/output.json';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка загрузки JSON: ${response.status}`);
    }
    return await response.json();
}

export default fetchRemoteFilms;