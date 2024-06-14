import { DownOutlined, LockOutlined, UpOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from '@mui/material'
import { Button, Form, Input, Popover } from 'antd'
import 'antd/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import '../scss/loginForm.scss'

export default function LoginForm() {
    const [isLogin] = useState<boolean>(false)
    const [openPopover, setOpenPopover] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('Phan Van Thang')

    // const onFinish = (values : ChangeEvent<HTML>) => {
    //     console.log('Received values of form: ', values)
    // }
    const handleOpenPopover = (open: boolean) => {
        setOpenPopover(open)
    }

    const title = (
        <div
            className='form-login-header'
            style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}
        >
            <div className='form-login-header-title'>ĐĂNG NHẬP VÀO TÀI KHOẢN</div>
            <div className='form-login-header-description'>Nhập email và mật khẩu của bạn:</div>
        </div>
    )
    const content = (
        <Form
            name='form_login'
            className='form-login-body'
            initialValues={{
                remember: false
            }}
            // onFinish={onFinish}
        >
            <Form.Item
                name='username'
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập Tên đăng nhập!'
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className='form-login-body-item-icon' />}
                    className='form-login-body-item'
                    placeholder='Tên đăng nhập'
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập Mật khẩu!'
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className='form-login-body-item-icon' />}
                    type='password'
                    className='form-login-body-item'
                    placeholder='Mật khẩu'
                />
            </Form.Item>
            <div className='form-login-body-description'>
                This site is protected by reCAPTCHA and the Google <a href=''>Privacy Policy</a> and{' '}
                <a href=''>Terms of Service</a> apply.
            </div>
            <Form.Item>
                <Button type='primary' htmlType='submit' className='form-login-body-item-button'>
                    Đăng nhập
                </Button>
            </Form.Item>
            <div className='form-login-body-footer'>
                <div>
                    Khách hàng mới? <a href=''>Tạo tài khoản</a>
                </div>
                <div>
                    Quên mật khẩu? <a href=''>Khôi phục mật khẩu</a>
                </div>
            </div>
        </Form>
    )

    return (
        <>
            <Popover
                content={content}
                title={title}
                placement='bottomRight'
                trigger='click'
                open={openPopover}
                onOpenChange={handleOpenPopover}
            >
                <div
                    style={{ display: 'flex', cursor: 'pointer', maxWidth: '200px' }}
                    onClick={() => setOpenPopover(!openPopover)}
                >
                    <Avatar sx={{ marginRight: '8px' }}></Avatar>
                    <div className='common-header-login'>
                        <div className='common-header-login-title'>
                            {isLogin ? 'Đăng nhập/Đăng ký' : 'Tài khoản của'}
                        </div>
                        <span className='common-header-login-infor'>
                            {isLogin ? 'Tài khoản của tôi' : `${userName} `}{' '}
                            {openPopover ? (
                                <UpOutlined style={{ fontSize: '14px', marginLeft: '8px' }}></UpOutlined>
                            ) : (
                                <DownOutlined style={{ fontSize: '14px', marginLeft: '8px' }}></DownOutlined>
                            )}
                        </span>
                    </div>
                </div>
            </Popover>
        </>
    )
}
