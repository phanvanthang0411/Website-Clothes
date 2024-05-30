import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar, Box, TextField } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { Popover } from 'antd'
import 'antd/dist/reset.css'
import '../scss/loginForm.scss'

export default function LoginForm() {
    const [show, setShow] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const title = (
        <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
            <div className='common-form-login-title'>ĐĂNG NHẬP VÀO TÀI KHOẢN</div>
            <div className='common-form-login-description'>Nhập email và mật khẩu của bạn:</div>
        </div>
    )
    const content = (
        <Box component='form' noValidate>
            <div>
                <TextField id='input-email' sx={{ width: '100%', height: '42px'}} label='Email' variant='outlined' />
            </div>
            <TextField id='input-password' sx={{ width: '100%' }} label='Mật khẩu' variant='outlined' />
            <button>đăng nhập</button>
        </Box>
    )

    return (
        <>
            <Popover content={content} title={title} placement='bottom' trigger='click'>
                <div style={{ display: 'flex', cursor: 'pointer', position: 'relative' }}>
                    <Avatar sx={{ marginRight: '8px' }}></Avatar>
                    <div className='common-header-login'>
                        <div className='common-header-login-title'>
                            {isLogin ? 'Đăng nhập/Đăng ký' : 'Tài khoản của'}
                        </div>
                        <div className='common-header-login-name' onClick={() => setShow(!show)}>
                            {isLogin ? 'Tài khoản của tôi' : 'Phan Văn Thắng'}
                            <ArrowDropDownIcon></ArrowDropDownIcon>
                        </div>
                    </div>
                </div>
            </Popover>
        </>
    )
}
