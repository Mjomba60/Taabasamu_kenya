import Slider from 'react-slick'
import { promotext } from './componentdata/homehero'


export default function HomeCarouselSlider() {

    const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: false,
        className: "carouselslide",
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 3200,
        vertical: true,
        pauseOnHover: false,
        arrows: false
    }

    return (
        <Slider {...settings}>
            {promotext.map((el) => {
                return (<div key={el} className="promotextcontainer">
                    <h2>{el}</h2>
                </div>)
            })}
        </Slider>
    )
}