import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import ContactList from './Components/Contact List/contactList'

class App extends React.Component {
  state = {
    List: [
      {id:1,
      name:  'Alexander Verdnam',
      lables: 'Friends',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png'
      },
      {id:2,
      name:  'Gerard Butler',
      lables: 'Work',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {id:3,
      name:  'Anna Lee',
      lables: 'Private',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png'
      },
      {id:4,
      name:  ' Alexander Verdnam',
      lables: '',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png'
      },
      {id:5,
      name:  'Olga Verdnam',
      lables: 'Family',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png'
      },
      {id:6,
      name:  'John Verdnam',
      lables: '',
      phone: '+1-800-600-9898',
      email: 'example@gmail.com',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
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