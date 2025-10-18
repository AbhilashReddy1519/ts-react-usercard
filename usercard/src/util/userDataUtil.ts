export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
    };
    email: string;
    picture: {
        medium: string;
    };
}

export interface UserData {
    results: User[];
    info?: object;
}


