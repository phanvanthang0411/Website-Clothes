import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

export default function LoginPopup() {
    const [show, setShow] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const popoverBottom = (
        <Popover id='popover-positioned-bottom'>
            <Popover.Header style={{ background: '#FFF' }}>
                <div className='popover-title'>THÔNG TIN TÀI KHOẢN</div>
            </Popover.Header>
            <Popover.Body>
                <div className='popover-body-name' style={{fontWeight: '600'}}>Phan Văn Thắng</div>
                <div className='popover-body-account'>Tài khoản của tôi</div>
                <div className='popover-body-list-address'>Danh sách địa chỉ</div>
                <div className='popover-body-login-btn'>Đăng xuất</div>
            </Popover.Body>
        </Popover> 
    )
    const renderFormLoginAndSignIn = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <React.Fragment>
            <OverlayTrigger trigger='click' placement='bottom' overlay={popoverBottom}>
                <div style={{ display: 'flex', cursor: 'pointer', position: 'relative' }}>
                    <Avatar sx={{ marginRight: '8px' }}></Avatar>
                    <div className='common-header-login'>
                        <div className='common-header-login-title'>{isLogin ? "Đăng nhập/Đăng ký" : "Tài khoản của"}</div>
                        <div className='common-header-login-name' onClick={() => setShow(!show)}>
                            {isLogin ? "Tài khoản của tôi" : "Phan Văn Thắng"}
                            <ArrowDropDownIcon></ArrowDropDownIcon>
                        </div>
                    </div>
                </div>
            </OverlayTrigger>
        </React.Fragment>
    )
}
