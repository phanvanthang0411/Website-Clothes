import logoWeb from './logo_web.png'
import logo_2 from './logo_2.png'
import image_slider_1 from './image_slider_1.png'
import image_slider_2 from './image_slider_2.png'
import image_slider_3 from './image_slider_3.png'

export interface IImage {
    logoWeb : string,
    logo_2 : string
    image_slider_1 : string
    image_slider_2 : string
    image_slider_3 : string
}

export default {
    logoWeb, logo_2, image_slider_1, image_slider_2, image_slider_3
} as IImage