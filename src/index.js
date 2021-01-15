import React from 'react'
import ReactDom from 'react-dom'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import ContactList from './Components/Contact List/contactList'
import NotFound from './Components/Not found/notFound'
import Sidebar from './Components/Contact List/Sidebar/sidebar'
import ContactInfo from './Components/Contact List/Contact Info/contactInfo'
import AddContact from './Components/Add Contact/addContact'
import EditContact from './Components/Edit contact/editContact'


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
      ContactDetail: [{name: '',
    phone: '',
    email: '',
    avatar: '',
    lables: ''
    }],
    currentContact: ''
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
    this.setState({List: newList})
  }

  onDelete = (id) => {
    const tmpList = [...this.state.List].filter((elem) => elem.id !== id)
    this.setState({
      List: tmpList
    })
    }

    onDetailInfo = (id) => {
      const index = this.state.List.findIndex((element) => element.id === id)
      const tmpList = this.state.List[index]
      this.setState({ContactDetail: tmpList})
      console.log(this.state.ContactDetail)
      console.log(tmpList)
    }

    onCreate = (name, phone, email, lables, avatar) => {
      let newContact = {
        id: uuidv4(),
        name: name,
        phone: phone,
        email: email,
        lables: lables,
        avatar: avatar
      }

      const newList = [...this.state.List, newContact]
      this.setState(() => {
        return{List: newList}
      })
    }

    onEdit = (id ) => {
      const index = this.state.List.findIndex((elem) => elem.id === id)
      const Contact = this.state.List[index]

      this.setState({
        currentContact: Contact
      })
    }

    onEditCurrentContact = (name, phone, email, lables, avatar, id) => {
      const index = this.state.List.findIndex((elem) => elem.id === id);
      let newContact = {
        id: id, 
        name: name, 
        phone: phone, 
        email: email, 
        lables: lables,
        avatar: avatar
      }

      const partOne = this.state.List.slice(0, index)
      const partTwo = this.state.List.slice(index+1)

      const newList = [...partOne, newContact, ...partTwo]

      this.setState({
        List: newList
      })
    }
    render() {
    console.log(this.state.List);
  
    return (
      <div className="container bootstrap snippets bootdeys bootdey">
      <div className="row decor-default"> 
      <Sidebar></Sidebar>
      <Router>
        <Switch> 
          <Route path="/"
          exact
          render={() =>   
          <ContactList List={this.state.List}
          onLableChange={this.onLableChange}
          onDelete={this.onDelete}
          onDetailInfo={this.onDetailInfo}
          onEdit={this.onEdit}
          ></ContactList>}
          />
          <Route
            path="/info"
              exact
              render={() => <ContactInfo List={this.state.List}
              ContactDetail={this.state.ContactDetail}
              ></ContactInfo>}/>
              <Route path="/add-contact"
              exact
              render={() => <AddContact onCreate={this.onCreate}/>}
              />
              <Route 
              path="/edit-contact"
              exact
              render={() => <EditContact currentContact={this.state.currentContact}
              onEditCurrentContact={this.onEditCurrentContact}
              />}
              />
          <Route component={NotFound} />
        </Switch>
        </Router>
        </div></div>
   )
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))