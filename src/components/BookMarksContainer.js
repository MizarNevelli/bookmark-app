import React from "react";
import { useAlert } from "react-alert";
import { API_TOKEN } from "../constants";
import { deleteBookmark, getBookmarks } from "../fetch/bookmarks";

function BookMarksContainer({ bookMarksList = [], setBookMarksList = {} }) {

    const alert = useAlert();

    const onDeleteElement = async (id) => {
        try {
                await deleteBookmark(API_TOKEN, id);
                alert.success('Element deleted successfully!');
                const updatedItems = await getBookmarks(API_TOKEN);
                setBookMarksList(updatedItems);
        } catch (err) {
            alert.error('Error, Try again')
            throw err
        } 
    }


    return (
        <div >
            <div className="mx-auto py-4 px-12 ">
                <h2 className="py-8 text-2xl font-extrabold tracking-tight text-indigo-700 text-center w-full">Your Bookmarks</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {bookMarksList.map((element) => (
                        <div key={element.id} className="group relative">
                            <div
                                style={{ backgroundImage: `url(${element.image_url})` }}
                                className={`bg-no-repeat bg-center bg-cover w-full h-64 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none`}
                            >
                                <div
                                    className="z-50 absolute flex justify-center items-center right-2 top-2 bg-white bg-opacity-60 border-black border-1 cursor-pointer border-solid w-8 h-8 rounded-full"
                                    onClick={() => {
                                        onDeleteElement(element.id);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-between rounded-md  bg-white">
                                <h3 className="text-sm text-gray-700 text-center w-full">
                                    <a href={element.link} target='_blank' rel="noreferrer">
                                        <b>{element.name}</b>
                                        <p>Clicca qui e Vai al sito linkato! </p>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BookMarksContainer;
