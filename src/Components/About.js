import React, { Component } from 'react';
import Image from 'react-image-resizer';


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <Image height= {250} width= {250} className="profile-pic" src={profilepic} alt="Shelby Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h1 style={{ color: 'white' }}>About Me</h1>

            <p><h3 style={{ color: 'white' }}>{bio}</h3></p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p style={{ color: 'white' }} className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
