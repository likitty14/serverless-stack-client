import React, { useState, useEffect } from "react";
import "./Login.css";
import { Auth, Hub } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";


export default function SignIn() {

  const [customState, setCustomState] = useState(null);
  const { user, userHasAuthenticated, setUser } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            setUser(data);
            break;
          case "signOut":
            setUser(null);
            break;
          case "customOAuthState":
            setCustomState(data);
        }
      });

    Auth.currentAuthenticatedUser()
        .then((user) => {
            setUser(user);
            userHasAuthenticated(true);
            console.log(user);
            history.push("/");
        })
        .catch(() => console.log("Not signed in"));
  })


    return (!user &&
        <div className="App">
        <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
        </div>
    );

}