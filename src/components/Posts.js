import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
    
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
            const response = res.data;
            this.setState({ posts: response})
      })
        }
       

    render() {
        const postItems = this.state.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                Posts 
                {postItems}
            </div>
        )
    }
}
