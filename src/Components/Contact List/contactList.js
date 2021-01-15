import React from 'react'
import ContactItem from './Contact Item/contactItem'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom'


class ContactList extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      List: this.props.List,
      onLableChange: this.props.onLableChange,
      onDelete: this.props.onDelete,
      onDetailInfo: this.props.onDetailInfo,
      onEdit: this.props.onEdit
    }
  }

  render() {
    let user = this.props.List.map((user) => {
     return(
       <ContactItem 
        id={user.id}
        name={user.name}
        lables={user.lables}
        phone={user.phone}
        email={user.email}
        avatar={user.avatar}
        onLableChange={() => {this.state.onLableChange(user.id)}}
        onDelete={() => {this.props.onDelete(user.id)}}
        onDetailInfo={() => {this.props.onDetailInfo(user.id, user.name, user.lables, user.phone, user.email, user.avatar)}}
        onEdit={() => {this.props.onEdit(user.id)}}
       />
     )
    })

    return (
          <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="contacts-list">
            <h5 className="title">Contact List</h5>
            <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
              <div className="input-group">
                <input type="text" className="contacts-list-search" placeholder="Search"/>
              </div>
              <div className="btn-head">
                <Link to="/add-contact" className="btn-add btn-primary">+</Link>
              </div>
              
              <div className="unit head">
                <div className="field name">
                  <div className="check">
                    <input id="cb1" name="cb1" type="checkbox"/>
                    <label htmlFor="cb1"></label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                  Name
                </div>
                <div className="field phone">
                  Phone
                </div>
                <div className="field email icons">
                  Email
                  <div className="btn-group pull-right" role="group">
                    <button type="button" className="btn btn-default"><span className="icon icon-folder"></span></button>
    
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-label"></span></button>
    
                      <ul className="dropdown-menu pull-right">
                        <li><a href="#"><span className="label label-success text-dark">New</span></a></li>
                        <li><a href="#"><span className="label label-primary text-dark">Social</span></a></li>
                        <li><a href="#"><span className="label label-warning text-dark">Spam</span></a></li>
                      </ul>
                    </div>
                    <button type="button" className="btn btn-default"><span className="icon icon-trash"></span></button>
                  </div>
                </div>
              </div>
              {user.length !==0 ? user: <p className='liset-empty'>Contact list is empty.</p>}
              </form>
              </div>
            </div>  
    )
  }
}

export default ContactList