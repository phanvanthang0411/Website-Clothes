import { Spin } from 'antd'

function LoadingArea() {
    return (
        <div className='LoadingArea'>
            <Spin tip='Loading...'></Spin>
        </div>
    )
}
export default LoadingArea
