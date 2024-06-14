import React from 'react'
import '../scss/nav.scss'
import { Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../structure/router/utils'

interface NavItem {
    id: string
    text: string
    url: string
    item: Array<string>
}
const getNavs = (): NavItem[] => [
    {
        id: 'nav-shop',
        text: 'CỬA HÀNG',
        url: RoutePath.HomeShop,
        item: []
    },
    {
        id: 'nav-product',
        text: 'SẢN PHẨM',
        url: RoutePath.Collection,
        item: ['ÁO POLO', 'QUẦN', 'SƠ MI']
    },
    {
        id: 'nav-policy-guideline',
        text: 'CHÍNH SÁCH-HƯỚNG DẪN',
        url: RoutePath.Index,
        item: ['Chính sách đổi trả', 'Chính sách bảo hành']
    },
    {
        id: 'nav-blog-news',
        text: 'TIN TỨC THỜI TRANG',
        url: RoutePath.BlogNews,
        item: []
    },
    {
        id: 'nav-check-order',
        text: 'KIỂM TRA ĐƠN HÀNG',
        url: RoutePath.CheckOrder,
        item: []
    },
    {
        id: 'nav-contact',
        text: 'LIÊN HỆ',
        url: RoutePath.Contact,
        item: []
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
                {navigation.map((_v, index) => {
                    return (
                        <Dropdown
                            overlay={
                                <Menu>
                                    {_v.item.length > 0 &&
                                        _v.item.map((a) => {
                                            return (
                                                <Menu.Item key='0'>
                                                    <Link to={'/'}>{a}</Link>
                                                </Menu.Item>
                                            )
                                        })}
                                </Menu>
                            }
                            trigger={['hover']}
                        >
                            <div className='common-navs-item' key={`navigation-item-${index}`}>
                                <Link to={_v.url}>{_v.text}</Link>
                            </div>
                        </Dropdown>
                    )
                })}
            </div>
        )
    }
}
