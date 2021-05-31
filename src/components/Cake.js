function Cake(props) {

        return (
            <div className="cake" style={{ width: "15rem",marginLeft:"-20px"}}>

                <div class="card-body">
                    <img style={{ height: "15rem" }} src={props.data.image} class="card-img-top" alt=".." />
                    <h5 class="card-title"> {props.data.name}</h5>
                    <p class="card-text">{props.data.price}</p>

                </div>
            </div>
        )
  
}
export default Cake