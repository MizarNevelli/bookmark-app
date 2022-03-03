import React, { useEffect } from "react";
import BookMarkContainer from "../components/BookMarksContainer";
import NavBar from "../components/NavBar";
import { getBookmarks } from "../fetch/bookmarks";
import { API_TOKEN } from "../constants"
function Home() {

    const token = API_TOKEN;
    console.log('token', token)

    const fetchBookmarks = async () => {
        try {
            const { data = [] } = await getBookmarks(token);
            // setAllDealers(data.msg);
        } catch (err) {
            // alert.error(t('COMMON:GENERIC_ERROR'));
            console.log(err)
        }
    };

    useEffect(() => {
        fetchBookmarks();
    }, []);
    return (
        <>
            <NavBar />
            <div >
                <h1>Home</h1>
                <BookMarkContainer />

            </div>
        </>

    );
}

export default Home;
