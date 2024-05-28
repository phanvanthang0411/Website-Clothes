import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { TextField, Box } from '@mui/material'
import '../scss/loginForm.scss'

export default function LoginForm() {
    const [show, setShow] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const FormInformationUser = (
        <Popover id='popover-positioned-bottom'>
            <Popover.Header style={{ background: '#FFF' }}>
                <div className='popover-title'>THÔNG TIN TÀI KHOẢN</div>
            </Popover.Header>
            <Popover.Body>
                <div className='popover-body-name' style={{ fontWeight: '600' }}>
                    Phan Văn Thắng
                </div>
                <div className='popover-body-account'>Tài khoản của tôi</div>
                <div className='popover-body-list-address'>Danh sách địa chỉ</div>
                <div className='popover-body-login-btn'>Đăng xuất</div>
            </Popover.Body>
        </Popover>
    )

    const FormLogin = (
        <Popover id='popover-positioned-bottom' style={{boxShadow: "0px 2px 12px #27313C29", borderRadius: '0'}}>
            <Popover.Header style={{ background: '#FFF', textAlign: 'center' }}>
                <div className='popover-title'>ĐĂNG NHẬP TÀI KHOẢN</div>
                <div className='popover-description'>Nhập email và mật khẩu của bạn:</div>
            </Popover.Header>
            <Popover.Body>
                <Box
                    component='form'
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' }
                    }}
                    noValidate
                    autoComplete='off'
                >
                    <TextField
                        id='filled-error'
                        label='Email'
                        defaultValue=''
                        variant='filled'
                    />
                    <TextField
                        id='filled-error-helper-text'
                        label='Mật khẩu'
                        defaultValue=''
                        variant='filled'
                    />
                </Box>
            </Popover.Body>
        </Popover>
    )

    return (
        <React.Fragment>
            <OverlayTrigger trigger='click' rootClose placement='bottom' overlay={isLogin ? FormInformationUser : FormLogin}>
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
            </OverlayTrigger>
        </React.Fragment>
    )
}