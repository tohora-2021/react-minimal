import React from 'react'
const ReactDOM = require('react-dom')

const data = { 
  name: 'humans', 
  pets: [
    {name: 'fluffy', breed: 'shark'},
    {name: 'fido', breed: 'elephant'}
  ],
  sayHi: true
}

function helloTemplate (props) {
  let bob = 'BOB'
  let bobs = ['bob', 'BOB', 'bobs', <div>bob</div>]
  let {name} = props
  return (
    <div className='hello'>
      {bobs.map((bob, index) => <span key={index}>{bob}</span>)}
      {props.sayHi ? <Greeting name='brian' salutation='hi' />  : 'nope' }
      <Pets pets={props.pets} />
    </div>
  )
}

function Greeting(props) {
  console.log(props)
  let salutation = props.salutation || 'hello'
  return <div>{salutation} {props.name}</div>
}

function Pets(props) {
  return <ul>
    {props.pets.map((pet, index) => <li key={index}>{pet.name}, {pet.breed}</li>)}
  </ul>
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
