import image from '../../assets/image'
import { Header, BaseNavigation, ImageSlider } from '../../commonComponent'

export default function FullLayout() {
    const slides = [
        { url: `${image.image_slider_1}`, title: 'slide-1' },
        { url: `${image.image_slider_2}`, title: 'slide-2' },
        { url: `${image.image_slider_3}`, title: 'slide-3' }
    ]

    return (
        <div className='main-body'>
            <Header></Header>
            <BaseNavigation></BaseNavigation>
            <ImageSlider slides={slides}></ImageSlider>
        </div>
    )
}
