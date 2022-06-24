import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postUpdated } from "./postsSlice";

export const EditPostForm = ({match}) => {
    const { postId } = match.params
    
    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postId, title, content }))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>
                Edit Post
            </h2>
            <form>
                <label
                    htmlFor="postTitle"
                >
                    Post Title:
                </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    onChange={onTitleChanged}
                    placeholder="What's on your mind?"
                    value={title}
                />
                <label
                    htmlFor="postContent"
                >
                    Content:
                </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    onChange={onContentChanged}
                    value={content}
                />
            </form>
            <button
                type="button"
                onSubmit={onSavePostClicked}
            >
                Save Post
            </button>
        </section>
    )
}