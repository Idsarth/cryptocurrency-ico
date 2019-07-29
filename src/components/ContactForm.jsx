import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      email: '',
      message: '',
      sendText: 'Enviar mensaje'
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  handlerChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handlerSubmit (e) {
    e.preventDefault()

    const url = `https://alycoinappweb.appspot.com/alysystem/post/email`
    const requestApi = {
      name: this.state.firstname,
      email: this.state.email,
      message: this.state.message
    }
    this.setState({ sendText: 'Enviando mensaje...' })
    axios.post(url, requestApi)
      .then(response => {
        if (response.success === 'send is Sucessfully') { this.setState({ sendText: 'Mensaje enviado' }) } else {
          this.setState({ sendText: 'Mensaje no enviado' })
        }
      })
  }

  render () {
    return (
      <form className='form' autoComplete='off' onSubmit={this.handlerSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre'
            className='form-input'
            value={this.state.name}
            onChange={this.handlerChange}
            name='firstname'
          />

          <input
            type='email'
            placeholder='Correo'
            className='form-input'
            value={this.state.email}
            onChange={this.handlerChange}
            name='email'
          />
        </div>

        <div className='form-group'>
          <textarea
            className='form-input form-area'
            placeholder='Mensaje'
            value={this.state.message}
            name='message'
            onChange={this.handlerChange}
          />
        </div>

        <input
          type='submit'
          value={this.state.sendText}
          className='form-submit'
        />
      </form>
    )
  }
}
export default ContactForm
