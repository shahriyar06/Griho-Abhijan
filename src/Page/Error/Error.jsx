import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
            <div className="background-image bg-cover bg-center h-screen">
                <div className="py-60">
                    <h2 className="text-xl mb-16 text-center">The page you are looking for can not be found.</h2>
                    <h1 className="text-9xl font-extrabold text-center">404</h1>
                </div>
            </div>
        </div>
    );
};

export default Error;