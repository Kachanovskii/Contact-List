import React from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'



class AddContact extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            lables: '',
            avatar: '',
            isRedirect: false,
            changeAvatar: '',
            classAvatar: 'hidden'
        }
    }

    getName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
    getEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    getLables = (event) => {
        this.setState({
            lables: event.target.value
        })
    }
    getAvatar = (event) => {
        this.setState({
            avatar: event.target.value,
            changeAvatar: `https://bootdey.com/img/Content/avatar/avatar${event.target.value}.png`,
            classAvatar: 'show'
        })
    }
    showChangeAvatar = (event) => {
        this.setState({
        changeAvatar: event.target.value
        })
    }

onSendData = (event) => {
    event.preventDefault()
    const {name, phone, email, lables, avatar, changeAvatar} = this.state
    this.props.onCreate(name, phone, email, lables, avatar)
    this.setState({
        isRedirect: true
    })
}

    render() {
        console.log(this.state)
        if(this.state.isRedirect) {
            return <Redirect to="/" />
          }
        return(
           <div className="col-lg-9 col-md-8 col-sm-12 add-contact">
                
               <div className="container-form">
               <div className="btn-contact-info">
            <Link to="/" className=" btn-primary">
            back
            </Link></div>
               <h5>Add new contact</h5>
               <form onSubmit={this.onSendData}>
                <input type="text" className="form-control" placeholder="Username" name="name" onChange={this.getName}/>
                <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={this.getPhone}/>
                <input type="text" className="form-control" placeholder="Email" name="email" onChange={this.getEmail}/>
                <input type="text" className="form-control" placeholder="Lables" name="lables" onChange={this.getLables}/>
                <input type="text" className="form-control" placeholder="Avatar" name="avatr" onChange={this.getAvatar}/>

                <button type="submit" className="btn btn-defoult">Add contact</button>
               </form>
               </div>
               <div className={this.state.classAvatar}>
               <img src={this.state.changeAvatar} alt="image" className="avatar img-cd"/>
               </div>
           </div>
        )
    }
}


export default AddContact