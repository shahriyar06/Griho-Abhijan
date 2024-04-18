import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="w-9/12 mx-auto my-10">
            <div className="flex gap-20">
                <div className="w-72 h-72 border-2 border-gray-400 rounded-full">
                    <img src={user?.photoURL} className="w-64 h-64 rounded-full mx-auto mt-4" />
                </div>
                <div>
                    <h1 className="text-xl mb-6"><span className="font-semibold">Name  : </span>{user?.displayName}</h1>
                    <h1 className="text-xl mb-6"><span className="font-semibold">Email  : </span>{user?.email}</h1>
                    <h1 className="text-xl"><span className="font-semibold">Phone  : </span>{user?.providerData?.phoneNumber}</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;