let Navbar = (props) => {
    let searchString = "start here"
    let search = (event) => {

        event.preventDefault()
        searchString = "end here"
        console.log("we have to earch for ", searchString)
    }
    let getSearch = function (event) {
        searchString = event.target.value
        console.log("event value", event.target.value)
    }
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.details.projectname}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">{props.details.home}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">{props.details.about}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">{props.details.product}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">{props.details.contact}</a>
                        </li>

                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>

                </div>
                <form class="d-flex">
                    <input onChange={getSearch} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={search} class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default Navbar
