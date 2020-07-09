import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, email, phone, website, company } = this.props.user;
    return (
      <aside className="UserInfo">
        <p className="title">{name}</p>
        <p className="concat-me">Contact me @</p>
        <div className="flex-wrapper">
          <div className="left">Email</div> <div className="right blue">{email}</div>
          <div className="left">Phone</div> <div className="right blue">{phone}</div>
          <div className="left">Website</div> <div className="right blue">{website}</div>
          <div className="left">Company</div> <div className="right">{company.name}</div>
        </div>
      </aside>
    );
  }
}

export default UserInfo;
