import React from 'react'

function Filter() {
    return (
        <div className='bg-white dark:bg-gray-900 py-3'>
            <div className="flex justify-center">
                <div className="w-full max-w-md flex space-x-4"> {/* Flex container for filters */}
                    <details
                        className="flex-1 overflow-hidden rounded border border-gray-300 dark:border-gray-600 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition dark:bg-gray-900 dark:text-white"
                        >
                            <span className="text-sm font-medium"> Availability </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700 dark:text-gray-200"> 0 Selected </span>

                                <button
                                    type="button"
                                    className="text-sm text-gray-900 underline underline-offset-4 dark:text-white"
                                >
                                    Reset
                                </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4 dark:border-gray-700">
                                <li>
                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="FilterInStock"
                                            className="size-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                                        />

                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            In Stock (5+)
                                        </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="FilterPreOrder"
                                            className="size-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                                        />

                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            Pre Order (3+)
                                        </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="FilterOutOfStock"
                                            className="size-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900"
                                        />

                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            Out of Stock (10+)
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </details>

                    <details
                        className="flex-1 overflow-hidden rounded border border-gray-300 dark:border-gray-600 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition dark:bg-gray-900 dark:text-white"
                        >
                            <span className="text-sm font-medium"> Price </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700 dark:text-gray-200"> The highest price is $600 </span>

                                <button
                                    type="button"
                                    className="text-sm text-gray-900 underline underline-offset-4 dark:text-white"
                                >
                                    Reset
                                </button>
                            </header>

                            <div className="border-t border-gray-200 p-4 dark:border-gray-700">
                                <div className="flex justify-between gap-4">
                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceFrom"
                                            placeholder="From"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-900"
                                        />
                                    </label>

                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceTo"
                                            placeholder="To"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-900"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Filter;
