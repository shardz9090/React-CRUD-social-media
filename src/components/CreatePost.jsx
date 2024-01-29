'use client';

import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Form, redirect } from 'react-router-dom';

let CreatePost = () => {
    return (
        <Form method='post' className="flex max-w-md flex-col gap-4 m-6">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Heading" value="Enter Post Title" />
                </div>
                <TextInput name="title" id="title" type="text" placeholder="TITLE" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Heading" value="Enter Your username" />
                </div>
                <TextInput name="userId" id="uname" type="text" placeholder="username" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Heading" value='Enter Post Content' />
                </div>
                <Textarea name="content" rows={10} id="content" type="text" placeholder="enter content here..." />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="tags" value="Your tags" />
                </div>
                <TextInput name="tags" id="tags" type="text" />
            </div>
            <input name="reactions" type="hidden" id='reactions' value='13' />
            <Button type="submit">Post</Button>
        </Form>
    );
}

export async function createPostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ")
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(
            (post) => {
                console.log(post)
            }

        );
    return redirect("/")
}
export default CreatePost