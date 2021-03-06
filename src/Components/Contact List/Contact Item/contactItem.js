import { render } from '@testing-library/react';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link,  Route, Switch} from 'react-router-dom'



class ContactItem extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          id: this.props.id,
          name: this.props.name,
          lables: this.props.lables,
          phone: this.props.phone,
          email: this.props.email,
          avatar: this.props.avatar,
          List: this.props.List
        }
    }
    
    render() {
      let {name, phone, email, avatar, id} = this.props;
      const { lables } = this.props
      const { onLableChange, onDelete, onDetailInfo } = this.props 
      
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
              <Fragment >
              <div className="unit">
                <div className="field name">
                  <div className="check">
                    <input id="cb2" name="cb1" type="checkbox"/>
                    <label htmlFor="cb2"></label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                      
                  </div>
                  <div>
                    <img src={imageURL} alt="image" className="avatar"/>{name}
                  </div>
                  <div className={styleLables} onClick={onLableChange}>{lables}</div>
                  
                </div>
                <div className="field phone">
                  {phone}
                </div>
                <div className="field email">
                  {email}
                </div>
                <div className='btn-group btn-group-unit'>
                  <Link className="btn-danger" onClick={onDelete}>Delete</Link>
                  <Link to="/info" className="btn-default" onClick={onDetailInfo}>Info</Link>
                  <Link to="/edit-contact" className="btn-warning" onClick={this.props.onEdit}>Edit</Link>
                </div>
              </div>
             
              </Fragment> 
              
        )
    }
}

export default ContactItem  