export const ADD_POST = "ADD_POST";
export const FETCH_POSTS = "FETCH_POSTS";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    };
};

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/posts");
            const posts = await response.json();
            dispatch(fetchPosts(posts));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
};

export const addPostAsync = (post) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });
            const newPost = await response.json();
            dispatch(addPost(newPost));
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };
};
