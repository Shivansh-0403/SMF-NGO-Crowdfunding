import React from 'react';

function List() {
    const items = [
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
            price: "$220",
            imageUrl: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        }
        // Add more items here as needed
    ];

    return (
        <div className="bg-gray-900 flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div
                            className="w-1/3 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                                height: '150px'
                            }}
                        ></div>
                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            <div className="flex mt-2 item-center">
                                {[...Array(3)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                ))}
                                {[...Array(2)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.price}</h1>
                                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
