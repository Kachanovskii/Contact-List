import React from 'react'
import ReactDom from 'react-dom'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import ContactList from './Components/Contact List/contactList'
import NotFound from './Components/Not found/notFound'


class App extends React.Component {
  state = { 
    props:this.props,
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
        lables: 'Family',
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
        lables: 'Private',
        phone: '+1-800-600-9898',
        email: 'example@gmail.com',
        avatar: '6'
        },
      ],
  }

  onLableChange = (id) => {
    const index = this.state.List.findIndex((element) => element.id === id)
    const newList = this.state.List.slice()
    switch (newList[index].lables) {
      case 'Work':
      newList[index].lables = 'Family'
      break
      case 'Family':
      newList[index].lables = 'Private'
      break
      case 'Private':
      newList[index].lables = 'Friends'
      break
      case 'Friends':
        newList[index].lables = 'Work'
        break
    }
    this.setState({Lise: newList})
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/"
          exact
          render={() =>  <ContactList List={this.state.List}
          onLableChange={this.onLableChange}
          ></ContactList>}
          />
          <Route component={NotFound} />
        </Switch>
        </Router>
    )
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))