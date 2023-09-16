import React, { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import "./style.scss";
import { loginUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
    const dispatch = useDispatch();
    const [signUp, setSignUp] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please Enter Name");
        }
        if (!email) {
            alert("Please Enter Email");
        }
        if (!password) {
            alert("Please Provide Password");
        }
        if (!description) {
            alert("Please Enter Description");
        }
        if (!photoUrl) {
            alert("Please Provide PhotoUrl");
        }
        const auth = getAuth();

        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl,
                    description: description,
                });
                dispatch(loginUser({
                    email : email,
                    uid : user.uid,
                    photoURL : photoUrl,
                    name :name,
                    description : description,
                }))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + errorMessage);
                // ..
            });
        setName("");
        setEmail("");
        setPassword("");
        setDescription("");
        setPhotoUrl("");
    };

    const logIn = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please Enter Email");
        }
        if (!password) {
            alert("Please Provide Password");
        }
        setEmail("");
        setPassword("");

        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            email,
            password,
            photoUrl,
            description,
            name
        )
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                dispatch(loginUser({
                    email : user.email,
                    uid : user.uid,
                    photoURL : user.photoURL,
                    name :user.displayName,
                    description : description,
                }));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorCode + errorMessage);
            });
    };
    return (
        <div className="sign-in">
            <div className="sign-in-left">
                <div className="logo">
                    <h3>LinksIn</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/3256/3256016.png" alt="Logo"/>
                </div>
                <div className="content">
                    <p>
                        Aashan Social helps you connect and share with the
                        people in your life.
                    </p>
                    <br />
                    <p>
                        The Social Site Created by Muhammad Aashan Amir. The
                        Full Stack Application
                    </p>
                </div>
            </div>

            {signUp === false ? (
                <div className="sign-in-form">
                    <form onSubmit={logIn}>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="text"
                            placeholder="Email address or phone number"
                            value={email}
                        />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            value={password}
                        />
                        <button>Log in</button>
                        <p>Forgetten Password</p>
                        <h3
                            className="sign-up-page"
                            onClick={() => {
                                setSignUp(true);
                            }}
                        >
                            Create New Account
                        </h3>
                    </form>
                </div>
            ) : (
                <div className="sign-in-form">
                    <form onSubmit={register}>
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                        />
                        <input
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            type="text"
                            placeholder="Enter Your Dunamic Bio Here"
                            value={description}
                        />
                        <input
                            onChange={(e) => {
                                setPhotoUrl(e.target.value);
                            }}
                            type="text"
                            placeholder="Paste Your Photo Url"
                            value={photoUrl}
                        />
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="text"
                            placeholder="Email address or phone number"
                            value={email}
                        />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            value={password}
                        />
                        <button>Sign Up</button>
                        {/* <p>Forgetten Password</p> */}
                        <h3
                            onClick={() => {
                                setSignUp(false);
                            }}
                            className="sign-up-page"
                        >
                            Already Have an Account
                        </h3>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignIn;
