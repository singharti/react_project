import axios from "axios";
import { useState } from "react"
import { connect } from "react-redux";

function AddCake(props) {
    const [inputList, setInputList] = useState([{ value: null }]);

    var [cakeName, setCakeName] = useState();
    var [description, setDescription] = useState();
    var [price, setPrice] = useState();
    var [weight, setWeight] = useState();
    var [cakeType, setCakeType] = useState();
    var [flavour, setFlavour] = useState();
    var [cakeImage, setCakeImage] = useState();
    var [uploadCakeImage, setUploadCakeImage] = useState();
    var [eggless, setEggLess] = useState(false);
    var [error, setError] = useState({});
    let nameHandler = (e) => {
        setCakeName(e.target.value)
    }
    let descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    let priceHandler = (e) => {
        setPrice(e.target.value)
    }
    let weightHandler = (e) => {
        setWeight(e.target.value)
    }
    let cakeTypeHandler = (e) => {
        setCakeType(e.target.value)
    }
    let flavourHandler = (e) => {
        setFlavour(e.target.value)
    }
    let eggLessHandler = (e) => {
        // setEggLess(true)
        //alert(e.target.value)
        if (e.target.checked) {
            setEggLess(true);
        } else {
            setEggLess(false);
        }
        console.log(eggless)
    }

    const fileUpload = (event) => {
        setCakeImage(URL.createObjectURL(event.target.files[0]))
        let formData = new FormData();
        const addToCartApiUrl = process.env.REACT_APP_API_URL + "upload"
        formData.append('file', event.target.files[0]);
        axios({
            method: "post",
            url: addToCartApiUrl,
            data: formData,
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            setUploadCakeImage(response.data.imageUrl);
        }, (error) => { })
    }

    // handle input change
    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        // event.preventDefault();
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { value: null }]);
    };


    let submitHandler = (event) => {
        let error = {}
        if (!uploadCakeImage) {
            error['uploadCakeImage'] = 'Upload cake image'
            setError(error)
        }
        if (!cakeName) {
            error['cakeName'] = 'Please enter cake name'
            setError(error)
        }
        if (!description) {
            error['description'] = 'Please enter cake description'
            setError(error)
        }
        if (!weight) {
            error['weight'] = 'Please enter cake weight'
            setError(error)
        }
        if (!price) {
            error['price'] = 'Please enter cake price'
            setError(error)
        }
        if (!cakeType) {
            error['cakeType'] = 'Please select cake type'
            setError(error)
        }
        if (!flavour) {
            error['flavour'] = 'Please select cake flavour'
            setError(error)
        }
        if (!inputList) {
            error['inputList'] = 'Please enter ingredients'
            setError(error)
        }
        let anyValidationError = Object.keys(error).length;
        if (!anyValidationError) {
            var cakeData = {
                image: uploadCakeImage,
                name: cakeName,
                description: description,
                price: price,
                weight: weight,
                type: cakeType,
                flavour: flavour,
                eggless: eggless,
                ingredients: inputList
            }
            console.log(cakeData);
            props.dispatch({
                type: "ADD_CAKE",
                payload: cakeData
            })
        }

    }
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li aria-current="page" class="breadcrumb-item active">Add Cake</li>
                            </ol>
                        </nav>
                    </div>

                    <div class="col-lg-12">
                        <div class="box">
                            <h1>New Cake</h1>
                            <hr />
                            <form method="post">
                                <div class="form-group">
                                    <label for="name">Cake Image</label>
                                    <input type="file" onChange={fileUpload} class="form-control" />
                                    <p class="text-danger">{error.uploadCakeImage ? (error.uploadCakeImage) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="name">Cake Name</label>
                                    <input type="text" onChange={nameHandler} class="form-control" />
                                    <p class="text-danger">{error.cakeName ? (error.cakeName) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="email">Cake Description</label>
                                    <input id="description" type="text" onChange={descriptionHandler} class="form-control" />
                                    <p class="text-danger">{error.description ? (error.description) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="password">Cake Price</label>
                                    <input id="price" type="text" onChange={priceHandler} class="form-control" />
                                    <p class="text-danger">{error.price ? (error.price) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="password">Cake Weight</label>
                                    <input id="weight" type="text" onChange={weightHandler} class="form-control" />
                                    <p class="text-danger">{error.weight ? (error.weight) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="password">Cake Type</label>
                                    <select class="form-control" onChange={cakeTypeHandler}>
                                        <option value="">--Select--</option>
                                        <option value="Special">Special</option>
                                        <option value="General">General</option>
                                        <option value="birthday">Birthday</option>
                                    </select>
                                    <p class="text-danger">{error.cakeType ? (error.cakeType) : ''}</p>
                                </div>
                                <div class="form-group">
                                    <label for="password">Cake Flavour</label>
                                    <select class="form-control" onChange={flavourHandler}>
                                        <option value="">--Select--</option>
                                        <option value="Chocolate">Chocolate</option>
                                        <option value="Vanila">Vanila</option>
                                        <option value="rasmalai">Rasmalai</option>
                                    </select>
                                    <p class="text-danger">{error.flavour ? (error.flavour) : ''}</p>
                                </div>

                                <div class="form-group">
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <label>
                                                <input onChange={eggLessHandler} type="checkbox" value={eggless} /><span class="colour white"></span> Eggless
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {inputList.map((x, i) => {
                                    return (
                                        <div className="form-group">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <input className="form-control" placeholder="Enter Ingredients" onChange={e => handleInputChange(e, i)}
                                                    />
                                                    <p class="text-danger">{error.inputList ? (error.inputList) : ''}</p>
                                                </div>
                                                <div class="col-lg-3">
                                                    {inputList.length !== 1 &&
                                                        <button type="button" className="btn btn-danger"
                                                            onClick={() => handleRemoveClick(i)}>-</button>}
                                                    {inputList.length - 1 === i && <button type="button" className="btn btn-primary" onClick={handleAddClick}>+</button>}


                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* {<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>} */}
                                <div class="text-center">
                                    <button type="button" onClick={submitHandler} class="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect()(AddCake)