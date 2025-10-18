import { useEffect, useState } from "react";
import { fetchData } from "../data/userData";
import type { UserData } from "../util/userDataUtil";
import UserCard from "../components/userCard";
import "../App.css";


const Users = () => {
    const [data , setData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const loadData = async() => {
            try {
                const result : UserData = await fetchData();
                setData(result);
            } catch(err) {
                console.log(err);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    },[]);

    if(isLoading) {
        return <h1>isLoading....</h1>
    }
    if(data == null) {
        return (
            <h1>Data is null</h1>
        )
    }
    return (
        <div className="flex relative flex-wrap p-10 justify-around text-[#f8c828] gap-10">
            {data.results.map((result) => {
                return <UserCard key={result.name.first} results={result} />;
            })}
        </div>
    );
};

export default Users;
