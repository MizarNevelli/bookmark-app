import React, { useEffect, useState } from "react";
import BookMarkContainer from "../components/BookMarksContainer";
import NavBar from "../components/NavBar";
import { getBookmarks } from "../fetch/bookmarks";
import { API_TOKEN } from "../constants";

function Home() {

    const [bookMarksList, setBookMarksList] = useState([]);
    // const token = API_TOKEN;

    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const res = await getBookmarks(API_TOKEN);
                setBookMarksList(res);
            } catch (err) {
                // alert.error(t('COMMON:GENERIC_ERROR'));
                console.log(err)
            }
        };

        fetchBookmarks();
    }, []);

    return (
        <>
            <NavBar />
            <div style={{ height: 'calc(100vh - 4rem)', overflow: 'scroll'}} className="bg-gray-200 " >
                <h1>Home</h1>
                <BookMarkContainer 
                    bookMarksList={bookMarksList} 
                />

            </div>
        </>

    );
}

export default Home;
