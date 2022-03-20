import React, { useState } from 'react';
import axios from 'axios';
export const UserContext = React.createContext();

function UserProvider(props){
    const initState = { user: {}, token: '' };
    const [userState, useUserState] = useState(initState);

    function signup(credentials) {
        axios.post('http://localhost:3200/auth/signup', credentials)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data.errMsg))
    };

    function login(credentials) {
        axios.post('http://localhost:3200/auth/login', credentials)
            .then((res) => console.log(res))
            .catch((err) => console.dir(err.response.data.errMsg))
    };

    return(
        <UserContext.Provider value = { {...userState, signup, login} }>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;