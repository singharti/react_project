import { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const defaultState = {
    name: null,
    email: null,
    password: null,
    emailError: null
}
class Login extends Component {

    constructor() {
        super();
        this.state = defaultState;

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    validate() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.email || reg.test(this.state.email) === false) {
            this.setState({ emailError: "Email Field is Invalid" });
            return false;
        }
        return true;
    }

    submit() {
        if (this.validate()) {
            this.setState(defaultState);
        }
    }

    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form>

                            <h3>Validation Form</h3>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.nameError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email :</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
