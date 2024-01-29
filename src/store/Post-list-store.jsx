import { createContext, useEffect, useReducer, useState } from "react";


export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { },
});


const PostListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.pid)
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === 'ADD_INITIAL_POST') {
        newPostList = action.payload.posts
    }
    return newPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(PostListReducer, [])

    // const addPost = (userId, title, tags, reactions, content) => {
    //     const maxId = Math.max(...postList.map(post => post.id), 0);
    //     dispatchPostList({
    //         type: 'ADD_POST',
    //         payload: {
    //             id: maxId + 1, userId, title, tags, reactions, body: content
    //         }
    //     })
    // }

    const addPost = (post) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: post,
        })
    }
    const addInitialPost = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POST',
            payload: {
                posts,
            }
        })
    }
    const deletePost = (pid) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                pid,
            }
        })
    }
    const [fetching, setfetching] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setfetching(true)
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then((data) => {
                addInitialPost(data.posts);
                setfetching(false);
            });
        return () => {
            controller.abort();
        }
    }, []);

    return (
        <PostList.Provider value={{ postList, fetching, addPost, deletePost, addInitialPost }}>{children}</PostList.Provider>
    )
}

export default PostListProvider