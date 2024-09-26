import { FacebookOutlined, GooglePlusOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Radio, RadioChangeEvent } from 'antd'
import React, { useState } from 'react'
import './scss/register.scss'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [valueRadio, setValueRadio] = useState<number>(1)
    const navigate = useNavigate()

    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value)
        setValueRadio(e.target.value)
    }

    const handleClickBackButton = () => {
        navigate('/')
    }

    return (
        <React.Fragment>
            <div className='register-container'>
                <div className='register-content-left'>
                    <div className='register-content-left-title'>TẠO TÀI KHOẢN</div>
                    <div style={{ width: '90%', background: '#e6e7e8', height: '1px', marginBottom: '16px' }}></div>
                    <div className='register-content-left-items'>
                        <div className='register-by-google'>
                            <span>
                                <GooglePlusOutlined
                                    style={{ marginRight: '8px', fontSize: '18px' }}
                                ></GooglePlusOutlined>
                            </span>
                            <span>Đăng nhập Google</span>
                        </div>
                        <div className='register-by-facebook'>
                            <span>
                                <FacebookOutlined style={{ marginRight: '8px', fontSize: '18px' }}></FacebookOutlined>
                            </span>
                            <span>Đăng nhập Facebook</span>
                        </div>
                    </div>
                </div>
                <div className='register-content-right'>
                    <form className='register-form'>
                        <input type='text' placeholder='Họ' />
                        <input type='text' placeholder='Tên' />
                        <Radio.Group onChange={onChangeRadio} value={valueRadio} style={{ marginBottom: '16px' }}>
                            <Radio value={1}>Nam</Radio>
                            <Radio value={2}>Nữ</Radio>
                        </Radio.Group>
                        <input type='text' placeholder='mm/dd/yyyy' />
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Mật khẩu' />
                        <div className='register-form-description'>
                            This site is protected by reCAPTCHA and the Google <a href=''>Privacy Policy</a> and{' '}
                            <a href=''>Terms of Service</a> apply.
                        </div>
                        <button className='btn-register-user'>Đăng ký</button>
                    </form>
                    <div
                        className='register-content-right-back'
                        tabIndex={0}
                        onClick={handleClickBackButton}
                        onKeyDown={handleClickBackButton}
                    >
                        <ArrowLeftOutlined style={{ marginRight: '8px' }} />
                        <div>Quay lại trang chủ</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register
