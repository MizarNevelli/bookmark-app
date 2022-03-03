import React from "react";

function BookMarksContainer() {

    const products = [
        {
            id: 1,
            name: 'name',
            link: 'https://github.com/MizarNevelli/bookmark-app',
            image_url: 'https://www.windowsblogitalia.com/wp-content/uploads/2020/04/github-1.jpg'
        },
        {
            id: 2,
            name: 'name 2',
            link: 'https://github.com/MizarNevelli/bookmark-app',
            image_url: 'https://www.windowsblogitalia.com/wp-content/uploads/2020/04/github-1.jpg'
        },
        {
            id: 3,
            name: 'name 3',
            link: 'https://github.com/MizarNevelli/bookmark-app',
            image_url: 'https://www.windowsblogitalia.com/wp-content/uploads/2020/04/github-1.jpg'
        }
    ];

    

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    alt={product.name}
                                    src={product.image_url}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.link} target='_blank' rel="noreferrer">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BookMarksContainer;
