import React from 'react'
import ReactDom from 'react-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import ContactList from './Components/Contact List/contactList'


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
      allLables: ['Work', 'Family', 'Private', 'Friends'] 
  }

  changeLable = (event, value, fn) => {
    for(let element in value){
      if(event.target.children[0].value===value[element].id){        
        let num = this.state.allLables.indexOf(value[element].lables)
        if(num == 3) {
          num = -1
        }
        num = num + 1
        let newLables = this.state.allLables[num]
        async function func() {
          value[element].lables = newLables
        }
        this.setState({List: value}) 
        func().then(()=>{
          fn()
        })
        }
      }
      console.log(this.state.List)
  }

  render() {
    return (
      <div>
        <ContactList List={this.state.List}
        changeLable={this.changeLable}
        allLables={this.state.allLables}
        ></ContactList>
      </div>
    )
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))