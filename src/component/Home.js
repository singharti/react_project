import Carousel from './Carousel.js';
import Cake from './CakeHome.js';
import Cakelist from './Cakelist.js';
import cakes from './data';
import Footer from './Footer'

function Home(props) {
	var details = { projectname: "Sprinkles Bakery", home: "Home", about: "About", cake: "Cake", contact: "Contact" }

	return (
		<div style={{ fontFamily:"URW Chancery L, cursive" }}>
			<Carousel></Carousel>
			<h1 className="text-center"  >WELCOME TO OUR WEBSITE</h1>
			<img style={{ width: "10rem" }} src="image/line.png" className="card-img-top text-center" alt="" />
			<p className="text-center">Our restaurant's goal is to have each visitor leaving us well-fed and in a better mood than before! </p>
			<p className="text-center">That is why we put our focus on two things at once. Firstly, on maintaining our menu as fresh and diverse, as possible. </p>
			<p className="text-center">And secondly, on creating the atmosphere of home-like coziness and friendliness.</p>
			<img style={{ width: "10rem" }} src="image/line_1.png" className="card-img-top text-center" alt="" />
			<div className="container">
				<div className="row">
					{cakes.map((each, index) => {
						return (<Cake data={each} key={index} ></Cake>)
					})}
				</div>
			</div>
			<hr></hr>
			<Footer details={details}></Footer>
			
			
		</div>
	)
}

export default Home;