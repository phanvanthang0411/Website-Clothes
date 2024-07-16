import React from 'react'
import '../scss/nav.scss'
import { Dropdown, MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../structure/router/utils'

interface NavItem {
    id: string
    text: string
    url: string
    items?: MenuProps['items']
}
const getNavs = (): NavItem[] => [
    {
        id: 'nav-shop',
        text: 'CỬA HÀNG',
        url: RoutePath.HomeShop
    },
    {
        id: 'nav-product',
        text: 'SẢN PHẨM',
        url: RoutePath.Collection,
        items: [
            {
                key: '1',
                label: <div>ÁO POLO</div>
            },
            {
                key: '2',
                label: <div>QUẦN</div>
            },
            {
                key: '3',
                label: <div>SƠ MI</div>
            }
        ]
    },
    {
        id: 'nav-policy-guideline',
        text: 'CHÍNH SÁCH-HƯỚNG DẪN',
        url: RoutePath.Index,
        items: [
            {
                key: '1',
                label: <div>Chính sách bảo hành</div>
            },
            {
                key: '2',
                label: <div>Chính sách đổi trả</div>
            }
        ]
    },
    {
        id: 'nav-blog-news',
        text: 'TIN TỨC THỜI TRANG',
        url: RoutePath.BlogNews
    },
    {
        id: 'nav-check-order',
        text: 'KIỂM TRA ĐƠN HÀNG',
        url: RoutePath.CheckOrder
    },
    {
        id: 'nav-contact',
        text: 'LIÊN HỆ',
        url: RoutePath.Contact
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
                            menu={{ items: _v.items ? _v.items : [] }}
                            placement='bottom'
                            trigger={['hover']}
                            key={`navigation-item-${index}`}
                        >
                            <div id={_v.id} className='common-navs-item'>
                                <Link to={_v.url}>{_v.text}</Link>
                            </div>
                        </Dropdown>
                    )
                })}
            </div>
        )
    }
}
