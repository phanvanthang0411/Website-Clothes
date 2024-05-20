import React from 'react';
import '../scss/nav.scss'

interface NavItem {
    id: string
    text: string
    url: string
}
const getNavs = (): NavItem[] => [
    {
        id: 'nav-shop',
        text: 'CỬA HÀNG',
        url: '/page/about-us'
    },
    {
        id: 'nav-product',
        text: 'SẢN PHẨM',
        url: '/page/about-us'
    },
    {
        id: 'nav-policy-guideline',
        text: 'CHÍNH SÁCH-HƯỚNG DẪN',
        url: '/page/about-us'
    },
    {
        id: 'nav-fashion-news',
        text: 'TIN TỨC THỜI TRANG',
        url: '/page/about-us'
    },
    {
        id: 'nav-check-order',
        text: 'KIỂM TRA ĐƠN HÀNG',
        url: '/page/about-us'
    },
    {
        id: 'nav-contact',
        text: 'LIÊN HỆ',
        url: '/page/about-us'
    }
]
export class BaseNavigation extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
        this.state = {}
    }

    render(): React.ReactNode {
        const navigation: NavItem[] = getNavs()
        return (
            <div className='common-navs'>
                {navigation.map((item, index) => {
                    return (
                        <div className='common-navs-item' key={`navigation-item-${index}`}>
                            {item.text}
                        </div>
                    )
                })}
            </div>
        )
    }
}
