import React from 'react'
import ContactItem from './Contact Item/contactItem'

const ContactList = ({List}) => {
  const item = List.map((item) => {
      console.log(item)
        return (
            <ContactItem
            key={item.id}
            name={item.name}
            lables={item.lables}
            phone={item.phone}
            email={item.email}
            avatar={item.avatar}
            ></ContactItem>
        )
    })
        return (
            <div className="container bootstrap snippets bootdeys bootdey">
            <div className="row decor-default">
              <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="contacts-labels">
                <div className="title">All contacts<span>76</span></div>
                <div className="list">
                  <div className="input-group"> <input type="text" className="contacts-search" placeholder="Search"/> 
                  </div>
                  <div className="head">Labels</div>
                  <div className="unit">
                    <div className="lab lab-success">Work</div><span></span>
                  </div>
                  <div className="unit">
                    <div className="lab lab-primary">Family</div><span>8</span>
                  </div>
                  <div className="unit">
                    <div className="lab lab-danger">Private</div><span>13</span>
                  </div>
                  <div className="unit">
                    <div className="lab lab-warning">Friends</div><span>47</span>
                  </div>
                  <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
              </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="contacts-list">
                <h5 className="title">Contact List</h5>
                <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                  <div className="input-group">
                    <input type="text" className="contacts-list-search" placeholder="Search"/>
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
                  {item.length !==0 ? item : <p className='list-empty'>Contact list is empty.</p>}
                  </form>
                  </div>
                </div>
                  </div>
                </div>  
        )
}

export default ContactList