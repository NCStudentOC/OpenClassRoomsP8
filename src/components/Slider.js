import { useState } from 'react';

import chevron_left from '../assets/chevron_carousel_left.png'
import chevron_right from '../assets/chevron_carousel_right.png'



export default function Slider({ PicturesSlider }) {

    const [currentPicture, setCurrentPicture] = useState(0)

    const nextSlide = () => {
        setCurrentPicture(currentPicture + 1)
        if (currentPicture === PicturesSlider.length - 1)
            setCurrentPicture(0)
    }

    const prevSlide = () => {
        setCurrentPicture(currentPicture - 1)
        if (currentPicture === 0)
            setCurrentPicture(PicturesSlider.length - 1)
    }



    return (
        <section className="slider">
            <img className="slider_pictures" src={PicturesSlider[currentPicture]} alt='photo du logement'></img>

           
            {PicturesSlider.length > 1 && <>

                <img
                    className='chevron_right' src={chevron_right} alt="next slider"
                    onClick={nextSlide}
                />

                <img
                    className='chevron_left' src={chevron_left} alt="previous slider"
                    onClick={prevSlide}
                />

                <p className='slider-Counter'>{currentPicture + 1} / {PicturesSlider.length}</p>
            </>
            }
        </section>
    )

}