import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Details(props) {
    const [showAll, setShowAll] = useState(true);
    // const imagesToDisplay = showAll ? props.data.photos : props.data.photos;
    // console.log(props.data.photos);

    console.log(props);
    const images = props.data.photos
    // const images = useSelector(state => state.ngo.ngo.photos);
    // console.log(useSelector(state => state.ngo.ngo));

    return (
        <div>
            {/* <Heading /> */}
            <div className="flow-root py-3 shadow-sm px-[20%] dark:bg-gray-900">
                <dl className="divide-y divide-gray-100 text-md bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Organization Name</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.name}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Owner</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.owner}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Website</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.website}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Address</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.address}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">City</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.city}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Contact</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">{props.data.contact}</dd>
                    </div>

                    {/* <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 even:dark:bg-gray-700 odd:bg-gray-300 odd:dark:bg-gray-600 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-gray-100">Bio</dt>
                        <dd className="text-gray-700 dark:text-gray-300 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                            doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                            aspernatur neque molestiae labore aliquam soluta architecto?
                        </dd>
                    </div> */}
                    {/* <div>
                        {props.data.photos.map()}
                    </div> */}
                </dl>

                <div className=" my-8">
                    <div className="grid grid-cols-4 gap-4">
                        {images?.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Photo ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ))}
                    </div>

                    {!showAll && (
                        <div className="text-right mt-4">
                            <button
                                onClick={() => setShowAll(true)}
                                className="text-blue-500 hover:underline"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Details;
