import Users from "./views/users";
import "./App.css";

function App() {
    return (
        <>
            <nav className="text-center bg-[#f8c828] text-[#007e5d] p-10 text-3xl font-extrabold font-serif">
                Random User Cards
            </nav>
            <div className="bg-[#f8c828] w-3/4 m-auto h-fit text-[#007e5d] mt-10 rounded-xl  shadow-[0px_0px_10px_#f8c828]">
                <Users />
            </div>
        </>
    );
}

export default App;
