import {withRouter} from 'next/router'
import React from 'react'

const Post = withRouter((props) => (
  <div>
    <a href={props.router.query.url}><h3>{props.router.query.title}</h3></a>
    <h4>{props.router.query.name}</h4>
    <h6>{props.router.query.published}</h6>
    <p>{props.router.query.description}</p>
    <p>Word Count: {props.router.query.word}</p>
    <img src={props.router.query.image_url}/>
    <style jsx>{`
    div {
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px black solid;
        box-shadow: 5px 5px lightgrey;
        font-family: Arial;
    }

    img {
        height: 30%;
        width: 30%;
    }
    
    `}</style>
  </div>
))

export default Post