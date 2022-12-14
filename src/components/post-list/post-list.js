import React from "react";

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });
    return (
        <li className="app-list list-group">
            {elements}
        </li>
    )
}

export default PostList;