import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useEffect, useState, useRef } from 'react'
import '../../scss/imageSlider.scss'

interface sliderProps {
    slides: Array<{ url: string; title: string }>
}

function ImageSlider({ slides }: sliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const imgRef = useRef<HTMLImageElement>(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         onClickNext()
    //     }, 3000)
    // }, [3000])

    // useEffect(() => {
    //     slides[currentIndex].style = { animation: 'slideIn 2s ease forwards' }
    // }, [currentIndex])

    const onClickPrevious = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        if (imgRef.current) {
            let el = imgRef.current
            el.className += 'active'
            el.style.animation = 'slideToLeft 2s ease forwards'
        }
        // slides[newIndex].style = { animation: 'slideIn 2s ease forwards' }
        setCurrentIndex(newIndex)
    }

    const onClickNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        // slides[currentIndex].style = { animation: 'slideOut 2s ease forwards' }
        if (imgRef.current) {
            let el = imgRef.current
            el.style.animation = 'slideFromRight 2s ease forwards'
        }
        // slides[newIndex].style = { animation: 'slideIn 2s ease forwards' }
        setCurrentIndex(newIndex)
    }

    return (
        <div className='common-slider-container'>
            <div
                className='common-slider-btn-arrow-left'
                onClick={() => {
                    onClickPrevious()
                }}
            >
                <LeftOutlined></LeftOutlined>
            </div>
            <div
                className='common-slider-btn-arrow-right'
                onClick={() => {
                    onClickNext()
                }}
            >
                <RightOutlined></RightOutlined>
            </div>
            <img
                ref={imgRef}
                // style={slides[currentIndex].style}
                className='common-slider-image'
                src={slides[currentIndex].url}
                alt='img-slide'
            />
        </div>
    )
}

export default ImageSlider
