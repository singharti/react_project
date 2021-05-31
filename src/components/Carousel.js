let Carousel = () => {
    return (
        // <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        //     <ol class="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        //     </ol>
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <img class="d-block w-100" src="/image/cake.jpeg" alt="First slide" />
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="/image/cake.jpeg" alt="Second slide" />
        //         </div>

        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="/image/cake.jpeg" alt="Third slide" />
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="/image/cake.jpeg" alt="Forth slide" />
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/image/cake.jpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/image/cake.jpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/image/cake.jpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carousel