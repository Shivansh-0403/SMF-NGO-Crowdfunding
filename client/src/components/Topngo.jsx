import React from 'react'

const teamMembers = [
    {
        name: 'Ahmed Omer',
        position: 'CEO',
        image:
            'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80',
    },
    {
        name: 'Jane Doe',
        position: 'Co-founder',
        image:
            'https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Steve Ben',
        position: 'UI/UX',
        image:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
    },
    {
        name: 'Patterson Johnson',
        position: 'Software Engineer',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
];

function Topngo() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}
                    <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Top NGOs
                    </h2>

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="w-full max-w-xs text-center">
                                <img
                                    className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                    src={member.image}
                                    alt={member.name}
                                />

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{member.name}</h3>
                                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{member.position}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}
                </div>
            </section>
        </div>
    )
}

export default Topngo

// Logo
// Name
// Location
// Rating
