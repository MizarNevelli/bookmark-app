import React, { useEffect, useState } from "react";
import BookMarkContainer from "../components/BookMarksContainer";
import NavBar from "../components/NavBar";
import { getBookmarks } from "../fetch/bookmarks";
import { API_TOKEN } from "../constants";
import { useAlert } from "react-alert";
import Footer from "../components/Footer";

function Home() {

    const [bookMarksList, setBookMarksList] = useState([]);
    const alert = useAlert();

    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const result = await getBookmarks(API_TOKEN);
                setBookMarksList(result);
            } catch (err) {
                alert.error('Error, data not available');
                throw err;
            }
        };
        fetchBookmarks();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <NavBar />
            <div className="bg-gray-200 " style={{ height: 'calc(100vh - 4rem)', overflow: 'scroll' }} >
                {/* <h1>Home</h1> */}
                <BookMarkContainer 
                    setBookMarksList={setBookMarksList}
                    bookMarksList={bookMarksList} 
                />
                <Footer/>

            </div>
        </>

    );
}

export default Home;
