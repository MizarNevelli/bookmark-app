import React from "react";
import NavBar from "../components/NavBar";

function Create() {

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return (
        <>
            <NavBar />

            <div className="w-100 h-screen flex flex-col justify-center items-center p-4 bg-gray-200">
                <div className=" my-4 w-96">
                    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input
                        type="text"
                        name="bookmarkName"
                        id="bookmarkName"
                        className="font-normal text-gray-700 px-2 shadow-sm focus:ring-indigo-500 h-8 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md"
                        placeholder="Insert your name"
                    />
                </div>

                <div className=" my-4 w-96">
                    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Inserisci Link</label>
                    <input
                        type="text"
                        name="bookmarkURL"
                        id="bookmarkURL"
                        className="font-normal text-gray-700 px-2 shadow-sm focus:ring-indigo-500 h-8 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md"
                        placeholder="Insert your name"
                    />
                </div>

                <div className=" my-4 flex justify-center">
                    <div className="mb-3 w-96">
                        <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Seleziona un Immagine</label>
                        <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={async (e) => {
                                const imgBase64 = await toBase64(e.target.files[0])
                                console.log(imgBase64)
                            }}
                        />
                    </div>
                </div>


            </div>
        </>
      
    );
}

export default Create;
