import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'


class EditContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentContact.id,
            name: this.props.currentContact.name,
            phone: this.props.currentContact.phone,
            email: this.props.currentContact.email,
            lables: this.props.currentContact.lables,
            avatar: this.props.currentContact.avatar,
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
    const {name, phone, email, lables, avatar, id} = this.state
    this.props.onEditCurrentContact(name, phone, email, lables, avatar, id)
    this.setState({
        isRedirect: true
    })
}
   

    render() {
        console.log(this.props)
        const {name, phone, email, avatar, lables} = this.state
        const imageURL = `https://bootdey.com/img/Content/avatar/avatar${avatar}.png`
        if(this.state.isRedirect) {
            return <Redirect to="/"/>
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
         <input type="text" className="form-control" placeholder="Username" name='name' value={name} onChange={this.getName}/>
         <input type="text" className="form-control" placeholder="Phone" name="phone" value={phone} onChange={this.getPhone}/>
                <input type="text" className="form-control" placeholder="Email" name="email" value={email} onChange={this.getEmail}/>
                <input type="text" className="form-control" placeholder="Lables" name="lables" value={lables} onChange={this.getLables}/>
                <input type="text" className="form-control" placeholder="Avatar" name="avatr" value={avatar} onChange={this.getAvatar}/>

         <button type="submit" className="btn btn-defoult">Edit contact</button>
        </form>
        </div>
        <div>
               <img src={imageURL} alt="image" className="avatar img-cd"/>
               </div>
    </div>
        )
    }
}

export default EditContact