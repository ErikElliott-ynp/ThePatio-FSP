import React from "react";
import PostFeedItem from "./post_feed_item";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts
        }
    }

    componentDidMount () {
        this.props.fetchUsers();
        this.props.fetchPosts(this.props.profile);
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.posts.length !== nextProps.posts.length || this.props.profile !== nextProps.profile) {
            return true;
        }   else {
            return false;
        }
    }

    

    render () {
        let items = null;
        if (this.props.posts) {
            items = this.props.posts.reverse().map( (post, i) => {
                return <PostFeedItem 
                            post={post}
                            key={i}
                            user={this.props.users[post.authorId]}
                            userId={this.props.currentUserId}
                            deletePost={this.props.deletePost}
                            updatePost={this.props.updatePost}
                        />
            })
        }
        let postsList = items ? items : null;
        return (
            <div className="posts-feed">
                <ul className="posts-list">
                    {postsList}
                </ul>
            </div>
        ) 
    }
}

export default PostFeed;