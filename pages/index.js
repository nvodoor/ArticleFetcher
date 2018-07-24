import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import React, { Component } from 'react'
import "babel-polyfill";



export default class Index extends React.Component {
    static async getInitialProps () {
        const data = { "query": "tech" }
        const res = await fetch(
            'https://publist.ai/api/v2/jobs.frontend', {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/javascript",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImlhdCI6MTUzMjI5ODE1MCwiZXhwIjoxNTMzNTA3NzUwfQ.Tb6gMTcVLTVg8e12vhkLZqUq2IvhiR-uQBQHhf2jkK8",
                },
                body: JSON.stringify(data)
            }
        )
        const conf = await res.json()
        console.log(conf)

        return {
            data: conf.data
        }
    }

    state = {
        site: '',
        value: 'Enter Newspaper'
    }

    handleChange = (e) => (
        this.setState({
            value: e.target.value
        })
    )

    handleSubmit = (e) => {
        this.setState({
            site: this.state.value
        })
    }

    render() {
        let dats = null
        if (this.state.site === "") {
            dats = null
        } else {
            dats = this.props.data.map((dat) =>
                dat.site.name === this.state.site ? 
                    <li key={dat.id}>
                        <Link as={`/${dat.id}`} href={`/post?title=${dat.title}
                        &name=${dat.site.name}
                        &description=${dat.description}
                        &image_url=${dat.image_url}
                        &published=${dat.published_at}
                        &url=${dat.url}
                        &word=${dat.word_count}
                        `}>
                            <a><h2>{dat.title}</h2></a>
                        </Link>
                        <p>{dat.description}</p>
                    <style jsx>{`
                        li {
                            border: 1px solid black;
                            padding: 10px;
                            background-color: rgb(240,240,240)
                        }
                        a {
                            text-decoration: none;
                            color: blue;
                        }

                        a:hover {
                            text-decoration: underline;
                        }
                    `}
                    </style>
                    </li>
                : null
            )
        }
        return (
            <div>
                <h1>Article Fetcher</h1>
                <p>This app fetches articles depending on the newspaper you enter in the input field.</p>
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                <button type='button' onClick={this.handleSubmit}>Search Articles</button>
                <ul>
                {dats}
                </ul>
                {console.log(this.props.data)}
            <style jsx="true">{`
                div {
                    display: flex;
                    flex-direction: column;
                    font-family: Arial;
                    align-items: center;
                }
                input {
                    width: 10%;
                    height: 20px;
                }

                button {
                    margin-top: 10px;
                    width: 9%;
                    border-radius: 5px;
                }

                ul {
                    list-style: none;
                }
            `}
            </style>
            </div>
        )
    }
}