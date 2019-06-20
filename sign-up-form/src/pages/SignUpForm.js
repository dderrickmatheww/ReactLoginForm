import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            npi: "",
            name: "",
            address: "",
            tele: "",
            hasAgreed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name

        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault();

        console.log("The form was submitted!")
        console.log(this.state);
        
        //This is where an axios request would go to a database for auth
    }
render() {
    return (
        <div className="FormCenter">

              <form className="FormFields" onSubmit={this.handleSubmit}>

                <div className="FormField">

                  <label className="FormField__Label" htmlFor="name">

                    Full name

                  </label>

                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <label className="FormField__Label" htmlFor="email">

                    Email Address

                  </label>

                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <label className="FormField__Label" htmlFor="npi">

                    NPI Number

                  </label>

                  <input type="password" id="NPI" className="FormField__Input" placeholder="Enter your NPI number" name="npi" value={this.state.npi} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <label className="FormField__Label" htmlFor="address">

                    Buiness Address

                  </label>

                  <input type="text" id="address" className="FormField__Input" placeholder="Enter your buisness address" name="address" value={this.state.address} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <label className="FormField__Label" htmlFor="tele">

                    Telephone Number

                  </label>

                  <input type="number" id="tele" className="FormField__Input" placeholder="Enter your telephone number" name="tele" value={this.state.tele} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <label className="FormField__CheckBoxLabel">

                    <input className="FormFeild__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all
                    statements in <a href="#" className="FormField__TermsLink">terms of service</a>

                  </label>

              </div>

                <div className="FormField">

                  <button className="FormField__Button mr-20">
                    Sign up
                  </button>

                  <Link to="/sign-in" className="FormField__Link">I'm already a member</Link>
                
                </div>

              </form>

            </div>
    )
}
}


export default SignUpForm;