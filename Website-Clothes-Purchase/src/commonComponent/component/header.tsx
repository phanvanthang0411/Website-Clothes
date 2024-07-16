import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/image'
import { RoutePath } from '../../structure/router/utils'
import '../scss/header.scss'
import LoginForm from './loginForm'

export function Header() {
    const [currentValueSearch, setCurrentValueSearch] = useState<string>('')

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValueSearch(e.target.value)
    }

    return (
        <header className='common-header' id='header'>
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
        </header>
    )
}
