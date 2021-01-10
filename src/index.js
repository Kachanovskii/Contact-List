import React from 'react'
import ReactDom from 'react-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import ContactList from './Components/Contact List/contactList'


class App extends React.Component {
  state = {
    List: [
      {id:uuidv4(),
        name:  'Alexander Verdnam',
        lables: 'Friends',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '1'
        },
        {id:uuidv4(),
        name:  'Gerard Butler',
        lables: 'Work',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '2'
        },
        {id:uuidv4(),
        name:  'Anna Lee',
        lables: 'Private',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '3'
        },
        {id:uuidv4(),
        name:  ' Alexander Verdnam',
        lables: '',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '4'
        },
        {id:uuidv4(),
        name:  'Olga Verdnam',
        lables: 'Family',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '5'
        },
        {id:uuidv4(),
        name:  'John Verdnam',
        lables: '',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '6'
        },
    ]
  }
  render() {
    return (
      <ContactList List={this.state.List}></ContactList>
    )
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))