import '../scss/footer.scss'
import {
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    FacebookOutlined,
    InstagramOutlined,
    YoutubeFilled
} from '@ant-design/icons'

const items = [
    {
        id: 'phone-number-support',
        icon: <PhoneOutlined></PhoneOutlined>,
        title: 'ĐIỆN THOẠI',
        description: '0968046093'
    },
    {
        id: 'email-support',
        icon: <MailOutlined></MailOutlined>,
        title: 'EMAIL HỖ TRỢ',
        description: 'phanvanthang20012001@gmail.com'
    },
    {
        id: 'time-open',
        icon: <ClockCircleOutlined></ClockCircleOutlined>,
        title: 'GIỜ MỞ CỬA',
        description: 'Thứ 2 - CN : 9:00 - 22:00'
    }
]

const BaseFooter = () => {
    return (
        <footer className='common-footer' id='footer'>
            <div className='footer-top'>
                <div className='footer-top-container'>
                    {items.map((item, index) => {
                        return (
                            <div className='footer-top-container-item' key={`item-${index}`}>
                                <div className='footer-top-container-item-icon'>{item.icon}</div>
                                <div>
                                    <div className='footer-top-container-item-title'>{item.title}</div>
                                    <div className='footer-top-container-item-description'>{item.description}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='footer-center'>
                <div className='footer-center-sub'>
                    <div className='footer-center-tỉtle'>FACEBOOK</div>
                </div>
                <div className='footer-center-menu'>
                    <div className='footer-center-tỉtle'>CHÍNH SÁCH</div>
                    <ul>
                        <li>Tìm kiếm</li>
                        <li>Giới thiệu</li>
                        <li>Chính sách đổi trả</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>
                <div className='footer-center-menu'>
                    <div className='footer-center-tỉtle'>HỖ TRỢ MUA HÀNG</div>
                    <ul>
                        <li>Tất cả sản phẩm</li>
                    </ul>
                </div>
                <div className='footer-center-sub'>
                    <div className='footer-center-tỉtle'>KẾT NỐI VỚI CHÚNG TÔI</div>
                    <div></div>
                    <ul>
                        <li>
                            <span>
                                <FacebookOutlined></FacebookOutlined>
                            </span>
                            <span>Facebook</span>
                        </li>
                        <li>
                            <span>
                                <InstagramOutlined></InstagramOutlined>
                            </span>
                            <span>Instagram</span>
                        </li>
                        <li>
                            <span>
                                <YoutubeFilled></YoutubeFilled>
                            </span>
                            <span>Youtube</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>©2024 Kevin Phan. All rights reserved.</div>
        </footer>
    )
}

export default BaseFooter
