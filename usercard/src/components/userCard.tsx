import type { User } from "../util/userDataUtil";
import "../App.css";

const UserCard = ({results}: {results : User}) => {
    const { name, picture, gender, location, email } = results;
    return (
        <div
            // Card Container Styles: Center content, responsive width, padding, rounded corners, shadow
            className="bg-white p-6 shadow-xl rounded-xl w-100 mx-auto 
                transform transition-transform ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_10px_#007e5d] duration-400">
            {/* Image Container: Center the image */}
            <div className="flex justify-center mb-4">
                <img
                    src={picture.medium}
                    alt="user Image"
                    // Image Styles: Circle crop, border, shadow for depth
                    className="rounded-full h-24 w-24 object-cover border-4 border-[#007e5d] shadow-lg"
                />
            </div>

            {/* Name and Title */}
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
                {name.title}. {name.first} {name.last}
            </h1>

            {/* Details List */}
            <ul className="text-sm text-gray-600 space-y-2 border-t pt-4">
                <li className="flex justify-between">
                    <span className="font-medium text-gray-900">Email:</span>
                    <span>{email}</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-900">Gender:</span>
                    <span>{gender}</span>
                </li>
                <li className="flex flex-col pt-2 border-t">
                    <span className="font-medium text-gray-900 ">
                        Location:
                    </span>
                    <span className="text-right">
                        <address>
                            {location.city}, {location.state},{" "}
                            {location.country}
                        </address>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default UserCard;
