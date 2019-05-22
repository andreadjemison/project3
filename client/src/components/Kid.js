import { Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios'

class Kid extends Component {
    state = {
        kid: {
            name: '',
            description: '',
            img: '',
            author: '',
            price: ''
        },
        isEditFormDisplayed: false
    }
    componentDidMount() {
        axios.get(`/api/v1/kids/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ kid: res.data })
            })
    }
    deleteKid = () => {
        axios.delete(`/api/v1/kids/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ redirectToHome: true })
            })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const cloneKid = { ...this.state.Kid }
        cloneKid[e.target.name] = e.target.value
        this.setState({ Kid: cloneKid })
    }
    updateKid = (e) => {
        e.preventDefault()
        axios.put(`/api/v1/kids/${this.props.match.params.id}`, {
            name: this.state.kid.name,
            description: this.state.kid.description,
            img: this.state.kid.img,
            author: this.state.kid.author,
            price: this.state.kid.price
        })
            .then(res => {
                this.setState({ kid: res.data, isEditFormDisplayed: false })
            })
    }

    showKid = () => {
        return (
            <div className='show' >
                <h2>{this.state.kid.name} </h2>
                <img src={`/img/${this.state.kid.img}`} alt=" " />
                <h2>{this.state.kid.author} </h2>
                <h3>{this.state.kid.description} </h3>
                <h4>${this.state.kid.price} </h4>
            </div>
        )
    }

    render() {
        console.log(this.state)
        if (this.state.redirectToHome) {
            return (<Redirect to="/api/v1/kids/" />)
        }
        return (
            <div className="showcontainer">
                {this.showKid()}
                <div className="buttons">
                    <button onClick={this.deleteKid}>Delete</button>
                </div>
                <form onSubmit={ (e)=> this.updateKid(e)} className="color">

<div>
    <label htmlFor="name">Name</label>
    <input
        type="text"
        name="name"
        onChange={this.handleChange}
        placeholder={this.state.kid.name}
    />
</div>

<div>
    <label htmlFor="name">Image</label>
    <input
        type="text"
        name="img"
        onChange={this.handleChange}
        placeholder={this.state.kid.img}
    />
</div>

<div>
    <label htmlFor="name">Author</label>
    <input
        type="text"
        name="author"
        onChange={this.handleChange}
        placeholder={this.state.kid.author}
    />
</div>
<div>
    <label htmlFor="name">Description</label>
    <input
        type="text"
        name="description"
        onChange={this.handleChange}
        placeholder={this.state.kid.description}

    />
</div>

<div>
    <label htmlFor="name">Price</label>
    <input
        type="text"
        name="price"
        onChange={this.handleChange}
        placeholder={this.state.kid.price}
    />
</div>
<input className="createbutton" type="submit" value="Update Book" onClick={(e)=> this.updateKid(e)}/>
</form>
</div>
          
        )
    }
}
export default Kid
