import React from "react";

const Ngo_Header = (props) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-evenly px-4 py-12 mx-auto xl:flex-row">
                {/* <div className="flex justify-center xl:w-1/2"> */}
                    <img
                        className="h-20 sm:h-32 w-20 sm:w-32 flex-shrink-0 object-cover rounded-full"
                        src={props.logo}
                        // src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                        alt="App preview"
                    />
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                        {props.name}
                    </h2>
                {/* </div> */}
            </div> 
        </section>
    );
};

export default Ngo_Header;
