import React, { useEffect, useState } from "react";
import "./style.scss";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventIcon from "@mui/icons-material/Event";
import Post from "./posts";
import {
    collection,
    addDoc,
    Timestamp,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Feed = () => {
    const user = useSelector(selectUser);

    console.log(user);

    const [inputVal, setInputVal] = useState();
    const [post, setPost] = useState([]);

    const submitPost = (e) => {
        e.preventDefault();
        const addPosts = async () => {
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    name: user.name,
                    description: user.description,
                    postText: inputVal,
                    photoUrl: user.photoURL,
                    timeStamp: Timestamp.fromDate(new Date()),
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };
        addPosts();
        setInputVal("");
    };

    useEffect(() => {
        const getData = async () => {
            const q = query(
                collection(db, "posts"),
                orderBy("timeStamp", "desc")
            );

            onSnapshot(q, (snapshot) => {
                let list = [];
                snapshot.forEach((doc) => {
                    list.push({
                        // id: doc.id,
                        ...doc.data(),
                    });
                });
                setPost(list);
            });
            console.log(post);
        };
        getData();
    }, []);
    return (
        <div className="feed">
            <div className="feed-input">
                <div className="feed-input-header">
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input
                            type="text"
                            placeholder="Share Your Post"
                            value={inputVal}
                            onChange={(e) => {
                                setInputVal(e.target.value);
                            }}
                        />
                        <button>Submit</button>
                    </form>
                </div>
                <div className="feed-input-footer">
                    <div className="feed-input-footer-btn">
                        <InsertPhotoIcon style={{ color: "orange" }} />
                        Photo
                    </div>

                    <div className="feed-input-footer-btn">
                        <YouTubeIcon style={{ color: "red" }} />
                        Video
                    </div>

                    <div className="feed-input-footer-btn">
                        <EventIcon style={{ color: "blue" }} />
                        Event
                    </div>

                    <div className="feed-input-footer-btn">
                        <AssignmentIcon style={{ color: "gold" }} />
                        Article
                    </div>
                </div>
            </div>

            <div className="feed-post">
                {post.map((e) => {
                    return (
                        <Post
                            name={e.name}
                            description={e.description}
                            message={e.postText}
                            avatarUrl={e.photoUrl}
                        />
                    );
                })}

                {/* <Post
                    name="Muhammad Aashan"
                    description="Senior Mern Stack Developer"
                    message="Learn Dijango With Me.................."
                    avatarUrl="https://media.licdn.com/dms/image/D4D35AQEXbh5RHXZaQQ/profile-framedphoto-shrink_100_100/0/1694240456113?e=1695106800&v=beta&t=F_EP3W1f4Gf0udlpHa0a3L-6u93vGxhJBf-CoaKbRmc"
                /> */}
            </div>
        </div>
    );
};

export default Feed;
