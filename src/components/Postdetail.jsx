import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { id } = useParams();

    const post = {
        id,
        title: "Sample Post",
        description: "This is the full description of the post.",
        date: "2024-11-22",
        category: "General"
    };

    return (
        <div className="container mt-4">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p><strong>Date:</strong> {post.date}</p>
            <p><strong>Category:</strong> {post.category}</p>
        </div>
    );
};

export default PostDetails;
