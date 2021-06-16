import { Route, withRouter } from "react-router";
import { useRouteMatch, Link } from "react-router-dom"
import ListCakes from './ListCakes'
import WelcomeAdmin from './WelcomeAdmin'
import AddCake from './AddCake'
function AdminDashboard() {
    var route = useRouteMatch();
    var url = route.url
    var path = route.path
    return (
        <div style={{ fontFamily: "URW Chancery L, cursive" }}>
            <Route exact path={path} component={WelcomeAdmin} />
            <Route exact path={path + '/cakeListing'} component={ListCakes} />
            <Route exact path={path + '/addcake'} component={AddCake} />
        </div>
    )
}
export default AdminDashboard