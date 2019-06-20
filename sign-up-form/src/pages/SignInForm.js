import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignInForm extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            npi: ""
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

                    <label className="FormField__Label" htmlFor="email">

                    Email Address

                    </label>

                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}/>

                </div>
                <div className="FormField">

                  <label className="FormField__Label" htmlFor="npi">

                    NPI Number

                  </label>

                  <input type="password" id="npi" className="FormField__Input" placeholder="Enter your NPI number" name="npi" value={this.state.npi} onChange={this.handleChange}/>

                </div>

                <div className="FormField">

                  <button className="FormField__Button mr-20">
                    Sign in
                  </button>

                  <Link exact="true" to="/" className="FormField__Link">Create Account</Link>
                
                </div>

              </form>

            </div>
        )
    }
}


export default SignInForm;