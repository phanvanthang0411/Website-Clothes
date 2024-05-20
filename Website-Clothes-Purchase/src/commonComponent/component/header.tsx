import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Typography } from '@mui/material'
import image from '../../assets/image'
import '../scss/header.scss'
import LoginPopup from './loginPopup'
import { useLocation, Link } from 'react-router-dom'
import { RoutePath } from '../../structure/router/utils'

export function Header() {
    const location = useLocation()
    console.log(location)

    return (
        <header className='common-header' id='header'>
            <div className='common-header-logo'>
                <Link to={RoutePath.Index}>
                    <img src={`${image.logoWeb}`} alt='logo-shop' />
                </Link>
            </div>
            <div className='common-header-search'>
                <input className='input-search' type='text' placeholder='Tìm kiếm sản phẩm...' required />
                <div>
                    <SearchIcon sx={{ width: '50px', cursor: 'pointer' }}></SearchIcon>
                </div>
            </div>
            <div className='common-header-right'>
                <LoginPopup></LoginPopup>
                <div className='common-header-right-cart'>
                    <AddShoppingCartIcon />
                    <Typography variant='body1' sx={{ marginLeft: '8px' }}>
                        Giỏ hàng
                    </Typography>
                </div>
            </div>
        </header>
    )
}
