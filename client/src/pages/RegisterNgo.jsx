import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterNgo() {
    const navigate = useNavigate();

    const [ngoData, setNgoData] = React.useState({
        name: "",
        owner: "",
        email: "",
        website: "",
        address: "",
        city: "",
        contact: "",
    });

    const [file, setFile] = React.useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNgoData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setNgoData({ name: "", owner: "", email: "", website: "", address: "", city: "", contact: "" });
        navigate("/");
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        // dispatch(register(ngoData))
        // console.log("axaca");

        try {
            const formData = new FormData();
            formData.append("name", ngoData.name);
            formData.append("owner", ngoData.owner);
            formData.append("email", ngoData.email);
            formData.append("website", ngoData.website);
            formData.append("address", ngoData.address);
            formData.append("city", ngoData.city);
            formData.append("contact", ngoData.contact);

            formData.append('logo', file);
            console.log(ngoData);
            const response = await axios.post("/api/ngo/register-ngo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log(response);
            if (!response.data) {
                // console.log("HELLO");
                throw response.message;
            }
            window.alert(response.data.message);
            navigate("/");
        } catch (error) {
            console.log("Error: ", error);
            window.alert(error.response.data.message || "Something went wrong");
        }
        setNgoData({ name: "", owner: "", email: "", website: "", address: "", city: "", contact: "" });
    };
    return (
        <div>
            <section className="max-w-full px-[25%] mx-auto bg-white shadow-md dark:bg-gray-800">
                <h2 className="text-3xl font-semibold text-gray-700 capitalize text-center py-5 dark:text-white">
                    Register Your NGO
                </h2>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="name"
                            >
                                Organization Name
                            </label>
                            <input
                                placeholder="ABC Sewa Trust"
                                value={ngoData.name}
                                onChange={handleChange}
                                name="name"
                                id="name"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                placeholder="abc123@gmail.com"
                                value={ngoData.email}
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="owner"
                            >
                                Owner Name
                            </label>
                            <input
                                placeholder="Shivansh Srivastava"
                                value={ngoData.owner}
                                onChange={handleChange}
                                id="owner"
                                name="owner"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="website"
                            >
                                Website Link
                            </label>
                            <input
                                placeholder="www.abc123sewatrust.com"
                                value={ngoData.website}
                                onChange={handleChange}
                                id="website"
                                name="website"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="address"
                            >
                                Street/Area
                            </label>
                            <input
                                placeholder="123, Vasant Kunj"
                                value={ngoData.address}
                                onChange={handleChange}
                                id="address"
                                name="address"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="city"
                            >
                                City/District
                            </label>
                            <input
                                placeholder="New Delhi, India"
                                value={ngoData.city}
                                onChange={handleChange}
                                id="city"
                                name="city"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="contact"
                            >
                                Contact No
                            </label>
                            <input
                                placeholder="+91 1234567890"
                                value={ngoData.contact}
                                onChange={handleChange}
                                id="contact"
                                name="contact"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="logo"
                            >
                                Logo
                            </label>
                            <input
                                name="logo"
                                id="logo"
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="block w-full px-4 py-1.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                    </div>

                    <div className="flex justify-around">
                        <div className="mt-6">
                            <button
                                onClick={handleCancel}
                                className="px-8 py-2.5 text-lg leading-5 text-white transition-colors duration-300 div bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Cancel
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={handleRegister}
                                className="px-8 py-2.5 text-lg leading-5 text-white transition-colors duration-300 div bg-emerald-700 rounded-md hover:bg-emerald-600 focus:outline-none focus:bg-gray-600">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
            </section>
        </div>
    );
}

export default RegisterNgo;
