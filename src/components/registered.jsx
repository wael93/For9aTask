import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      email: "",
      password: "",
    
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {name, email, password  } = this.state;

    axios
      .post(
        "http://localhost:3000/api/user/register",
        {
           
            name:name,
            email: email,
            password: password
           
          
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("respons of login ", response);
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("Login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="name"
            value={this.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="container">
  <div className="jumbotron">
    <h1 className="display-4">Image Uplaoder</h1>
    <p className="lead">
      This is a simple application to upload and retrieve images from a database
    </p>
    <hr className="my-4" />
  </div>
  <div className="input-group mb-3">
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="inputGroupFile01"
        aria-describedby="inputGroupFileAddon01"
      />
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Choose file
      </label>
    </div>
  </div>
  <button type="button" className="btn btn-primary">
    Upload
  </button>
</div>
          
        

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}




// import React from "react";
// import {browseRoute} from 'react-router-dom';


// class register extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"",
//             password:"",
//             email:"",
//             errors:{}

//         }

//     }

    
//     onChange(e){
//         this.setState({[e.target.name]:e.target.value})
//     }
//     onClick(e){
//         e.preventdefault();
//         const Users = {
//             /// The Data For  The Users
//             name : this.state.name,
//             email:this.state.email,
//             password:this.state.password,
            
           
//         }
//         console.log(Users)
//     }

//     sendRestNameAndPrice(e, mealObj) {
//         e.preventDefault();
//         console.log(mealObj);
//         fetch('http://localhost:5000/api/user/register', {
//           method: 'POST',
//           headers: { "Content-Type": "application/json" },
//           body:JSON.stringify(mealObj),
          
//         }).then((response) => {
//           return response.json();
//         }).then((data) => {
//           console.log(data);
//           this.setState({
//             resturants:data,
            
//             dispalyMealList: false,
//             displaRestList: true
//           })
//         });
    
        
//       }
    
//       handelUserChange(e) {
//         this.setState({
//             name: e.target.value,
//             email: e.target.value,
//             password: e.target.value,
           
           
//         });
//         // console.log(this.state.Name);
//       }


//       // UserVal=()=>{

//       //   let UserNameErr = '';
//       //   let PasswordErr = '';
//       //   let PriceandMealErr ='';

//       //   if(!this.state.UserName.includes("@")){
//       //    UserNameErr = "Invalid Email";
//       //   }
//       //  if(UserNameErr){
//       //     this.setState({UserNameErr,PasswordErr,PriceandMealErr});
//       //     return false;
//       //   }
//       //   return true;
//       // };
      
//       inVokeUserVal=(event)=>{
//         event.preventDefault();
//         this.UserVal();
//       };

//     render(){
//         return(
//             <div className="UserHeader">
//             <form action="/registered" method="POST">
//             <h1 className="UserTitles"><i class="fas fa-map-marked-alt"></i>Name</h1>
//             <input type="text" name="Name" className="UserInput"  onChange={this.handelUserChange.bind(this)} required/>  
//             <h1 className="UserTitles" ><i class="fas fa-user"></i> Email</h1>
//             <input type="email" className="UserInput"  name="UserName" onChange={this.handelUserChange.bind(this)} required/>
//             <div>{this.state.UserNameErr}</div>
   
//             <h1 className="UserTitles" ><i class="fas fa-lock"></i> Password</h1>
//             <input type="password"  name="Password" className="UserInput"  onChange={this.handelUserChange.bind(this)} required/>
//             <div>{this.state.PasswordErr}</div>
//             {/* <h1 className="UserTitles"><i class="fas fa-map-marked-alt"></i> Location</h1>
//             <input type="text" name="Location" className="UserInput"  onChange={this.handelUserChange.bind(this)} required/>
//             <h1 className="UserTitles" ><i class="fas fa-mobile-alt"></i> Phone Number</h1>
//             <input type="text" name="PhoneNumber" className="UserInput"onChange={this.handelUserChange.bind(this)} required />
//             <h1 className="UserTitles"><i class="fas fa-store"></i> The Restaurant</h1>
//             <input type="text" className="UserInput" name="Restaurant" onChange={this.handelUserChange.bind(this)}required />
//             <h1 className="UserTitles"><i class="fas fa-dollar-sign"></i>Restaurant Info</h1>
//             <input type="text" className="UserInput" name="PriceandMeal" onChange={this.handelUserChange.bind(this)} />
//             <div>{this.state.PriceandMealErr}</div> */}

//             <button type="submit" className="ButtonLog" >register</button>
//             </form>
//             </div>
            
//         )
//     }
// } 
// export default register;

