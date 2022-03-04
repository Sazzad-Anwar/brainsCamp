import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Image from 'next/image';

const antIcon = <LoadingOutlined className="text-primary dark:text-secondary normal-transition" style={{ fontSize: 24 }} spin />;

const Loader = ({ fullScreen }) => {

    if (fullScreen) {
        return (
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                {/* <Spin indicator={antIcon} /> */}
                <h1 className="text-xl animate-pulse mb-2 text-primary dark:text-secondary normal-transition">Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className='w-full h-full lg:w-96 lg:h-96 lg:mx-auto flex flex-col justify-center items-center'>
                <Spin indicator={antIcon} />
                <h1 className="text-xl animate-pulse text-primary dark:text-secondary normal-transition">Loading...</h1>
            </div>
        )
    }

}

export default Loader;
