
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

    showKid= ()=> {
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
        return (
            <div className="showcontainer">
                {this.showKid()}
                <div className="buttons">
                    <button onClick={this.updateKid}>Update</button>
                    <button onClick={this.deletekid}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Kid
