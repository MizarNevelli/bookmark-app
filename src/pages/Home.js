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
                const res = await getBookmarks(API_TOKEN);
                setBookMarksList(res);
            } catch (err) {
                alert.error('Error, data not available');
                throw err
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
                    setBookMarksList={setBookMarksList}
                    bookMarksList={bookMarksList} 
                />
                <Footer/>

            </div>
        </>

    );
}

export default Home;
