import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'


class ContactInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const {name, phone, email, avatar, lables} = this.props.ContactDetail
        const imageURL = `https://bootdey.com/img/Content/avatar/avatar${avatar}.png`
        let styleLables = 'lab'
        if(lables === 'Work') {
          styleLables = 'lab lab-success'
        } else if(lables === 'Family') {
          styleLables = 'lab lab-primary'
        } else if(lables === 'Private') {
          styleLables = 'lab lab-danger'
        } else if(lables === 'Friends') {
          styleLables = 'lab lab-warning'
        }
        return(
            <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
            <h5 className="title">Contact info:</h5>
            <div className="btn-contact-info">
            <Link to="/" className=" btn-primary">
            back
            </Link></div>
            <div className="contact-detail">
                <img className="img-cd" src={imageURL}/>
                <div className="info-cd"><div><div className={styleLables}>{lables}</div></div>
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{phone}</p></div> 
            </div>
            </div>
            </div>
        )
    }
}


export default ContactInfo