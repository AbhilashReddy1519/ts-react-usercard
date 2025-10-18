// export function fetchData() : Promise<JSON> {
//     const data = fetch("https://randomuser.me/api/")
//                  .then(res => res.json())
//                  .catch(err => console.error(err));

//     return data;
// }

// above is older version for new we can use async/await

import type { UserData } from "../util/userDataUtil";

export async function fetchData(): Promise<UserData> {
    // Using 'any' since JSON isn't a defined type
    try {
        // 1. Await the response
        const response = await fetch("https://randomuser.me/api/?results=12");

        // It's good practice to check for non-network errors (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // 2. Await the JSON parsing
        const data = await response.json();
        console.log(data);

        return data; // Returns the resolved data
    } catch (error) {
        // This catches network errors, bad status codes, and JSON parsing issues.
        console.error("Failed to retrieve user data:", error);

        // 🚨 CRITICAL FIX: Re-throw the error.
        // This ensures the Promise returned by fetchData() is REJECTED,
        // allowing the caller to handle the failure (e.g., .catch() or another try/catch).
        throw error;
    }
}

