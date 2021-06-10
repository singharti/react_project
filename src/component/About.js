import WhatWeDo from './WhatWeDo.js';



function About() {
    return (
        <div style={{ fontFamily: "URW Chancery L, cursive" }}>

            <h1 className="text-center"  >ABOUT US</h1>
            <img style={{ width: "10rem" }} src="image/line.png" className="card-img-top text-center" alt="" />
            <br></br>
            <img style={{ width: "50%" }} src="image/cake/about.jpg" className="card-img-top text-center" alt="" />
            <br></br>
            <p className="text-center">We aim to provide you with absolutely everything you need to run a great function, whether it’s a wedding, corporate event or </p>
            <p className="text-center">private party. Our company provides marquees, dance floors, tables, glassware and more. We pride ourselves on our excellent </p>
            <p className="text-center">service, competitive prices, and attractive hire items. We can cater to any event, whether it be a small get-together, or a large scale</p>

            <p className="text-center">corporate event or wedding. No job is too big or too small. If you are looking to hire multiple items, please call or email our sales </p>
            <p className="text-center">team, and we might be able to do you a package deal. We are committed to offering the best prices, so if you find a better price</p>
            <p className="text-center">for a comparable hire item, simply email us the quote and we will endeavour to beat it.</p>
            <img style={{ width: "10rem" }} src="image/line_1.png" className="card-img-top text-center" alt="" />

            <hr></hr>
            <WhatWeDo></WhatWeDo>


        </div>
    )

}

export default About