import React, { Fragment } from 'react'

class ContactItem extends React.Component {
    state = {
        name: this.props.name,
        lables: this.props.lables,
        phone: this.props.phone,
        email: this.props.email,
        avatar: this.props.avatar
    }
    render() {
        const {name, lables, phone, email, avatar} = this.state;
        return(
            <Fragment>
              <div className="unit">
                <div className="field name">
                  <div className="check">
                    <input id="cb2" name="cb1" type="checkbox"/>
                    <label htmlFor="cb2"></label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                      
                  </div>
                  <div>
                    <img src={avatar} alt="image" className="avatar"/>{name}
                  </div>
                  <div className="lab lab-warning">{lables}</div>
                </div>
                <div className="field phone">
                  {phone}
                </div>
                <div className="field email">
                  {email}
                </div>
              </div>
              
              </Fragment>      
        )
    }
}

export default ContactItem  