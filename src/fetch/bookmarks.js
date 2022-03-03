import axios from 'axios';
import { API_BOOKMARKS_ENPOINT } from '../constants';

export const getBookmarks = async (token = '') => {
    try {
        const response = await axios.get(
            `${API_BOOKMARKS_ENPOINT}`,
            {
                headers: {
                    'token': `${token}`,
                },
            }
        );

        if (response instanceof Error) {
            throw response;
        }
        const { data = [] } = response || {};

        return data;
    } catch (err) {
        console.log('err:::', err);
        throw err;
    }
};

export const createBookmark = async (token, bookmarkBody) => {
    try {
        const response = await axios.post(
            `${API_BOOKMARKS_ENPOINT}/add`,
            bookmarkBody,
            {
                headers: {
                    'token': `${token}`,
                },
            }
        );

        if (response instanceof Error) {
            throw response;
        }
        const { data = [] } = response || {};
        console.log('data from create', data)
        return data;
    } catch (err) {
        throw err;
    }
};

export const updateBookmark = async (token, bookmarkBody) => {
    try {
        const response = await axios.post(
            `${API_BOOKMARKS_ENPOINT}/edit/${bookmarkBody.id}`,
            bookmarkBody,
            {
                headers: {
                    'token': `${token}`,
                },
            }
        );

        if (response instanceof Error) {
            throw response;
        }
        const { data } = response || {};
        console.log('data from update', data)
        return data;
    } catch (err) {
        throw err;
    }
};

export const deleteBookmark = async (token, bookmarkBody) => {
    try {
        const response = await axios.post(
            `${API_BOOKMARKS_ENPOINT}/delete/${bookmarkBody.id}`,
            bookmarkBody,
            {
                headers: {
                    'token': `${token}`,
                },
            }
        );

        if (response instanceof Error) {
            throw response;
        }
        const { data } = response || {};
        console.log('data from delete', data)
        return data;
    } catch (err) {
        throw err;
    }
};