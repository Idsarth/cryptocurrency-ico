import React, { Component } from 'react'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: '',
      email: '',
      message: ''
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  handlerChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlerSubmit (e) {
    e.preventDefault()

    console.log(this.state)
  }

  render () {
    return (
      <form className='form' autoComplete='off' onSubmit={this.handlerSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre'
            className='contact-input'
            value={this.state.name}
            onChange={this.handlerChange}
            name='name'
          />
        </div>

        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            className='form-input'
            value={this.state.email}
            onChange={this.handlerChange}
            name='email'
          />
        </div>

        <div className='form-group'>
          <textarea
            className='form-group'
            placeholder='Mensaje'
            value={this.state.message}
            name='message'
            onChange={this.handlerChange}
          />
        </div>

      </form>
    )
  }
}
export default ContactForm
