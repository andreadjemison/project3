import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

class Kids extends Component {
    state = {
        kids: [],
        newKid: {
            name: '',
            description: '',
            img: '',
            author: '',
            price: '',
        },
        isKidFormDisplayed: false
    }
    componentDidMount() {
        axios.get('/api/v1/kids')
            .then(res => {
                this.setState({ kids: res.data })
            })

    }

    toggleKidForm = () => {
        this.setState((state, props) => {
            return ({ isKidFormDisplayed: !state.isKidFormDisplayed })
        })
    }

    handleChange = (e) => {
        const cloneNewKid = { ...this.state.newKid }
        cloneNewKid[e.target.name] = e.target.value
        this.setState({ newKid: cloneNewKid })
    }

    createKid = (e) => {
        e.preventDefault()
        axios.post('/api/v1/kids', {
                name: this.state.newKid.name,
                description: this.state.newKid.description,
                img: this.state.newKid.img,
                author: this.state.newKid.author,
                price: this.state.newKid.price,
            })
            .then(res => {
                const kidsList = [...this.state.kids]
                kidsList.unshift(res.data)
                this.setState({
                    newKid: {
                        name: '',
                        description: '',
                        img: '',
                        author: '',
                        price: '',
                    },
                    isKidFormDisplayed: false,
                    kids: kidsList
                })
            })
    }
    showKids =() =>{
        return this.state.kids.map((kid, i) => (
            <div key={i} kids={kid}>
                <Link to={`${kid._id}`} >
                    <div className='single'>
                        <h2>{kid.name} </h2>
                        <img src={`/img/${kid.img}`} alt={kid.name} />
                        <h2>{kid.author} </h2>
                        <h3>${kid.price} </h3>
                    </div>
                </Link>
            </div>
        ))
    }
    render() {
        return (

            <div className="allkids">
                <h1>Kid Catalogue</h1>

                <div className="kidcontainer">
                    {this.showKids()}
                </div>
                <button className="buttons createbutton" onClick={this.toggleKidForm}>Add New Kid</button>
                {this.state.isKidFormDisplayed
                        ? 
                        <form onSubmit={this.createKid}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.newKid.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    type="text"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.newKid.description}
                                />
                            </div>
                            <div>
                                <label htmlFor="img">Image</label>
                                <input
                                    id="image"
                                    type="file"
                                    name="img"
                                    onChange={this.handleChange}
                                    value={this.state.newKid.img}
                                />
                            </div>
                            <div>
                                <label htmlFor="author">Author</label>
                                <input
                                    id="author"
                                    type="text"
                                    name="author"
                                    onChange={this.handleChange}
                                    value={this.state.newKid.author}
                                />
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <textarea
                                    id="price"
                                    type="text"
                                    name="price"
                                    onChange={this.handleChange}
                                    value={this.state.newKid.price}
                                />
                            </div>
                            <button onClick={this.createKid}>Create</button>
                        </form >
                        : null
                }
            </div>
        )
    }
}
export default Kids