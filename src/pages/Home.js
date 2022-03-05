import React from "react";
import BookMarkContainer from "../components/BookMarksContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <NavBar />
            <div className="bg-gray-200 " style={{ height: 'calc(100vh - 4rem)', overflow: 'scroll' }} >
                <BookMarkContainer />
                <Footer/>

            </div>
        </>

    );
}

export default Home;
