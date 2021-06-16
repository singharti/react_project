
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
function Footer(props) {
    let logout = () => {
        props.dispatch({
            type: "LOGOUT"
        })
        //localStorage.token = ''
        //setLoginStatus(false)
    }
    return (

        <footer className="text-white" style={{ fontFamily: "URW Chancery L, cursive", backgroundImage: "url('image/footer.png')", width: "100%" }}>

            {/* <img style={{ width: "50%" }} src="image/cake/about.jpg" className="card-img-top text-center" alt="" /> */}
            <br></br>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light " style={{margin: "8% 0% 0%"}} >
                    <ul className="navbar-nav mr-auto" style={{ margin: "0% 30%" }}>
                        <li className="nav-item" style={{ padding: "9% 8%" }}>
                            <Link to="/" style={{color:"white"}}><FontAwesomeIcon icon={faTwitter} style={{width:"54px", height:"54px"}} /></Link>

                        </li>
                        <li className="nav-item" style={{ padding: "9% 8%" }}>
                            <Link to="/"  style={{color:"white"}}><FontAwesomeIcon icon={faFacebook} style={{width:"54px", height:"54px"}}/></Link>

                        </li>
                        <li className="nav-item active" style={{ padding: "9% 8%" }}>
                            <Link to="/"  style={{color:"white"}}><FontAwesomeIcon icon={faInstagram} style={{width:"54px", height:"54px"}}/></Link>
                        </li>

                        <li className="nav-item active" style={{ padding: "9% 8%" }}>
                            <Link to="/"  style={{color:"white"}}><FontAwesomeIcon icon={faYoutube} style={{width:"54px", height:"54px"}} /></Link>
                        </li>
                        <li className="nav-item active" style={{ padding: "9% 8%" }}>
                            <Link to="/"  style={{color:"white"}}><FontAwesomeIcon icon={faPinterest} style={{width:"54px", height:"54px"}}/></Link>
                        </li>




                    </ul>
                </nav>

                <img style={{ width: "80%", margin: "3% 0% 4% 0%" }} src="image/mt-0532-home-line01.png" className="card-img-top text-center" alt="" />
                <br></br>
                <div className="container" style={{ margin: "4% ​5% 0% 2%" }}>
                    <div className="row" style={{ margin: "4% ​5% " }}>
                        <div className="col-md-4"> <h3 className="text-center"> NEWSLETTER :</h3></div>
                        <div className="col-md-4"><input className="form-control " placeholder="Email" /></div>
                        <div className="col-md-4"> <button className="btn btn-light" style={{

                            background: " #cca99b"

                        }}>Subscripe</button></div>
                    </div>

                    <img style={{ width: "80%", margin: "4% ​0% 10% 0%" }} src="image/mt-0532-home-line01.png" className="card-img-top text-center" alt="" />
                    <br></br>
                </div>
            </div>
            <div className="container n" style={{ margin: "4% ​5% " }}>
                <Link to="/"><a style={{
                    color: "white",
                    fontSize: "45px"
                }}>
                    <img style={{ width: "4%", margin: "2% 1% 2% 0" }} src="/image/mt-0532-logo-footer.png" className="card-img-top text-center text-white" alt="" />
                    {props.details.projectname}</a>
                </Link>
            </div>




        </footer >

    )
}


export default Footer;
