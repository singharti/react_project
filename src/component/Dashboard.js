import { Route, withRouter } from "react-router";
import { useRouteMatch, Link } from "react-router-dom"
import Orders from './Orders'

function Dashboard(props) {
    var route = useRouteMatch();
    var url = route.url
    var path = route.path
    if (!localStorage.token) {
        props.history.push('/login')
        return false;
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li aria-current="page" className="breadcrumb-item active">My orders</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-lg-3">

                        <div className="card sidebar-menu">
                            <div className="card-header">
                                <h3 className="h4 card-title">Customer section</h3>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-pills flex-column">
                                    <Link to={url + '/orders'} className="nav-link active"><i className="fa fa-list"></i> My Orders</Link>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div>
                        {/* <Route exact path={path + "/orders"} component={MyAccount} /> */}
                        <Route exact path={path} component={Orders} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Dashboard