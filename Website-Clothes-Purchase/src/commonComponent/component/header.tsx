import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../../assets/image'
import { RoutePath } from '../../structure/router/utils'
import '../scss/header.scss'
import LoginForm from './loginForm'
import { Menu, MenuProps } from 'antd'

interface NavItem {
    key: string
    label: string
    url: string
    children?: MenuProps['items']
}
const getNavs = (): NavItem[] => [
    {
        key: 'nav-shop',
        label: 'CỬA HÀNG',
        url: RoutePath.HomeShop
    },
    {
        key: 'nav-product',
        label: 'SẢN PHẨM',
        url: RoutePath.Collection,
        children: [
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
        key: 'nav-policy-guideline',
        label: 'CHÍNH SÁCH-HƯỚNG DẪN',
        url: RoutePath.Index,
        children: [
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
        key: 'nav-blog-news',
        label: 'TIN TỨC THỜI TRANG',
        url: RoutePath.BlogNews
    },
    {
        key: 'nav-check-order',
        label: 'KIỂM TRA ĐƠN HÀNG',
        url: RoutePath.CheckOrder
    },
    {
        key: 'nav-contact',
        label: 'LIÊN HỆ',
        url: RoutePath.Contact
    }
]

export default function Header() {
    const [currentValueSearch, setCurrentValueSearch] = useState<string>('')
    const [currentKeyMenu, setCurrentKeyMenu] = useState<string>('')

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValueSearch(e.target.value)
    }
    const navigation: NavItem[] = getNavs()
    const navigate = useNavigate()

    const onClickCart = () => {
        navigate(RoutePath.CheckOrder)
    }

    const hanldeChangeMenu = (e: React.ChangeEvent) => {

        console.log(e)
        // setCurrentKeyMenu(e.key)
        setCurrentKeyMenu(e.key)
    }

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
                    <div className='common-header-right-cart' onClick={onClickCart}>
                        <LocalMallIcon sx={{ fontSize: '20px', opacity: '0.6' }} />
                        <span style={{ marginLeft: '8px' }}>Giỏ hàng</span>
                    </div>
                </div>
            </div>
            <div className='common-header-navs'>
                {
                    <Menu
                        onClick={hanldeChangeMenu}
                        selectedKeys={[currentKeyMenu]}
                        mode='horizontal'
                        items={navigation}
                    />
                }
            </div>
        </header>
    )
}
