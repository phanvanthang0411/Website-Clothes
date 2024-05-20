import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useEffect, useState, useRef } from 'react'
import '../../scss/imageSlider.scss'

interface sliderProps {
    slides: Array<{ url: string; title: string }>
}

function ImageSlider({ slides }: sliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const imgRef = useRef(null)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            setCurrentIndex(newIndex)
        }, 3000)

        // return clearTimeout(timeoutId)
    }, [currentIndex, 3000])

    const onClickPrevious = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const onClickNext = () => {
        debugger
        let elementImg = imgRef.current;
        // elementImg.style.animation = "slideFromRight 2s ease forwards"
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className='common-slider-container'>
            <div
                className='common-left-arrow-btn'
                onClick={() => {
                    onClickPrevious()
                }}
            >
                <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
            </div>
            <div
                className='common-right-arrow-btn'
                onClick={() => {
                    onClickNext()
                }}
            >
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </div>
            <img ref={imgRef} className='common-slider-image' src={slides[currentIndex].url} alt='img-slide' />
        </div>
    )
}

export default ImageSlider
