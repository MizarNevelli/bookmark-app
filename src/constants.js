

export const API_TOKEN = 'EuVO8AE2b8'

export const API_BOOKMARKS_ENPOINT = 'https://www.shamancake.com/spartan-demo/bookmarks';

export const BOOKMARK_EMPTY_BODY = {
    name: '',
    link: '',
    image: '', //base64
}

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
