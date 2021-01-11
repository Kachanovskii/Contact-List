import { render } from '@testing-library/react';
import React, { Fragment } from 'react'



class ContactItem extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          name: this.props.name,
          lables: this.props.lables,
          phone: this.props.phone,
          email: this.props.email,
          avatar: this.props.avatar,
          allLables: ['Work', 'Family', 'Private', 'Friends'] 
        }
        this.changeLable = this.changeLable.bind(this)
    }
    changeLable (event) {
      for(let e in this.state.allLables){
        if(this.state.allLables[e]===event.target.outerText){
          let num = Number(e)
          if(num==3){
            num=-1
          }
          num=num+1
          this.setState({
            lables: this.state.allLables[num]
          })
          
        }
      }
    }
    render() {

        const {name, lables, phone, email, avatar, allLables} = this.state;
        
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
                  <div className={styleLables} onClick={this.changeLable}>{lables}</div>
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