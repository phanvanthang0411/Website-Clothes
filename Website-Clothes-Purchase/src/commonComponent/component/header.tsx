import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/image'
import { RoutePath } from '../../structure/router/utils'
import '../scss/header.scss'
import LoginForm from './loginForm'
import { Dropdown, MenuProps } from 'antd'

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

export default function Header() {
    const [currentValueSearch, setCurrentValueSearch] = useState<string>('')

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValueSearch(e.target.value)
    }
    const navigation: NavItem[] = getNavs()
    return (
        <header className='common-header' id='header'>
            <div className='common-header-introduce'>
                <div className='common-header-logo'>
                    <Link to={RoutePath.Index}>
                        <img src={`${image.kevin_phan_logo}`} alt='logo-shop' />
                    </Link>
                </div>
                <div className='common-header-search'>
                    <input
                        className='input-search'
                        type='text'
                        placeholder='Tìm kiếm sản phẩm...'
                        value={currentValueSearch}
                        onChange={handleChangeValue}
                    />
                    {currentValueSearch?.length > 0 && (
                        <ClearIcon
                            sx={{ cursor: 'pointer', opacity: '0.6' }}
                            onClick={() => setCurrentValueSearch('')}
                        ></ClearIcon>
                    )}
                    <div>
                        <SearchIcon sx={{ cursor: 'pointer', opacity: '0.6' }}></SearchIcon>
                    </div>
                </div>
                <div className='common-header-right'>
                    <LoginForm></LoginForm>
                    <div className='common-header-right-cart'>
                        <Link to={RoutePath.CheckOrder}>
                            <LocalMallIcon sx={{ fontSize: '20px', opacity: '0.6' }} />
                            <span style={{ marginLeft: '8px' }}>Giỏ hàng</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='common-header-navs'>
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
        </header>
    )
}
