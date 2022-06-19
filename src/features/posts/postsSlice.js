import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'First Post!', 
        content: 'Hello World!'
    },
    {
        id: '2',
        title: 'Second Post.',
        content: 'I love posting, let\'s post some more.'
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
});

export const { postAdded, postUpdated } = postSlice.actions

export default postSlice.reducer
