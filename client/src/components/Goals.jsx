import React from 'react'
import domains from '../static/contents'

function Goals() {
    return (
        <div className='dark:bg-gray-900'>
            {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}
            <div className="text-center mt-10 my-5">
                <h2 className="text-3xl dark:text-blue-400">Areas of Work</h2>
            </div>
            <div className="text-center text-gray-300 text-lg mb-5">
                Empowering communities through sustainable initiatives, our NGO is dedicated to creating positive social impact.
            </div>
            <div>
                {domains.map((element) => (
                    <div className="grid grid-cols-2 text-center dark:text-white text-md w-[50rem] m-auto" key={element.key}>
                        <div className="my-5">
                            <h3 className="text-lg">{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                        <img src={element.imgUrl} alt={element.title} width='180' height='180' className="m-auto rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Goals;
