import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminList from './AdminList';
import axios from "axios";


function ListCakes() {
    var [cakes, setCakes] = useState([]);
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_BASE_URL + "/allcakes"
        axios({
            method: "GET",
            url: apiUrl,
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            setCakes(response.data.data);
         

        }, (error) => { })
    }, [])
    return (<>
        <div className="container">
            <h1 className="text-center"  >Cake Listing</h1>

            <div class="row">
                <div class="col-sm">
                    <h2 className="text-center">Image</h2>
                </div>
                <div class="col-sm">
                    <h2 className="text-center"> Name </h2>
                </div>
                <div class="col-sm">
                    <h2 className="text-center">  Price</h2>
                </div>


            </div>
            <div id="customer-orders" className="col-lg-12">
              

                <div className="container">

                    {
                        cakes.map((each, index) => {
                            return (
                                <AdminList data={each} key={index} page="cart" />
                            )
                        })
                    }

                </div>
            </div>
           
        </div>
    </>)
}
export default ListCakes