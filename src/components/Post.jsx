'use client';

import { Card } from 'flowbite-react';
import { Alert, Badge, Button } from '@mui/material';

import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from 'react';
import { PostList } from '../store/Post-list-store';

const Post = ({ post }) => {
    const { deletePost } = useContext(PostList)
    return (
        <div className="max-w-sm mb-5">

            <Card className="">
                <Badge badgeContent={<FaDeleteLeft />} color="primary" onClick={() => deletePost(post.id)}></Badge>
                <p>{post.userId}</p>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                    {post.title}
                </h5>
                <p className="font-normal text-gray-700 ">
                    {post.body}
                </p>

                <span>
                    {post.tags.map((tags, index) => (<span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400" key={index}>{tags}</span>))}
                </span>
                <Alert icon={false} severity="success">
                    This post has been reacted {post.reactions} times.
                </Alert>
            </Card>

        </div>


    );
}
export default Post

