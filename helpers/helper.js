export const stringExtractor = (str, from, to) => {
    const regExp = new RegExp(`(?<=\\${from})(.*?)(?=${to})`)
    const result = str.match(regExp);
    return result && result[0] ? result[0].trim() : null; 

}