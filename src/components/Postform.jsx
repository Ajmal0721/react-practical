// src/components/PostForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostAsync } from "../redux/actions";
import { Form, Button, Container } from "react-bootstrap"; // Make sure this is correct

const PostForm = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        title: "",
        description: "",
        date: new Date().toISOString(),
        image: "",
        category: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        const validationErrors = {};
        if (!post.title) validationErrors.title = "Title is required";
        if (!post.description) validationErrors.description = "Description is required";
        if (!post.category) validationErrors.category = "Category is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Dispatch the action to add the post
        dispatch(addPostAsync(post));

        // Clear the form after submitting
        setPost({
            title: "",
            description: "",
            date: new Date().toISOString(),
            image: "",
            category: "",
        });
        setErrors({});
    };

    return (
        <Container className="my-4">
            <h2>Create New Post</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter post title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter post description"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                        isInvalid={!!errors.description}
                    />
                    <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter post category"
                        name="category"
                        value={post.category}
                        onChange={handleChange}
                        isInvalid={!!errors.category}
                    />
                    <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Post
                </Button>
            </Form>
        </Container>
    );
};

export default PostForm;
