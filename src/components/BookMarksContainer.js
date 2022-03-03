import React from "react";

function BookMarksContainer({ bookMarksList=[]}) {

    console.log('bookMarksList', bookMarksList)
    

    return (
        <div >
            <div className="mx-auto py-4 px-12 ">
                <h2 className="py-8 text-2xl font-extrabold tracking-tight text-gray-900 text-center w-full">Your Bookmarks</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {bookMarksList.map((element) => (
                        <div key={element.id} className="group relative">
                            <div 
                                style={{ backgroundImage: `url(${element.image_url})` }}
                                className={`bg-no-repeat bg-center bg-cover w-full h-64 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none`}                                
                            >
                            </div>
                            <div className="mt-4 flex justify-between">
                                <h3 className="text-sm text-gray-700 text-center w-full">
                                    <a href={element.link} target='_blank' rel="noreferrer">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {element.name}
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
