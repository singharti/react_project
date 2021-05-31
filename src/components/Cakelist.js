import Cake from "./Cake"
import cakes from "./data"

function Cakelist() {

    return (
        <div class="container">
            <div class="row">
                {cakes.map((each, index) => {
                    return (<Cake data={each} key={index} ></Cake>)
                })}

            </div>
        </div>
    )

}
export default Cakelist