import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image-common/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    const navigate = useNavigate();

    function navigateTo(link: string) {
        navigate(link);
    }

    return (
        <div>
            <div className='max-w-[1280px] mx-auto'>
                <div className="flex justify-between items-center h-14 ">
                    <div className="h-full" onClick={() => navigateTo('/homepage')}>
                        <img className='h-full' src={logo} alt="" />
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='flex overflow-hidden items-center w-[400px] h-9 border-2 border-primary rounded-lg'>
                            <div className='flex-1 px-1 py-1 rounded-md overflow-hidden'>
                                <input className='w-full focus:outline-none px-2' type="text" placeholder='Tìm kiếm sản phẩm' />
                            </div>
                            <div className='bg-primary h-full aspect-[1.2] grid place-items-center text-[16px] text-white cursor-pointer hover:bg-purple-800 transition-all duration-700'>
                                <FaSearch />
                            </div>
                        </div>

                        <div className='flex flex-col justify-evenly font-bold'>
                            <div onClick={() => navigateTo('/homepage')}>Dương Thanh Phụng</div>
                            <div onClick={() => navigateTo('/abcd')}>Thoát</div>
                        </div>
                    </div>
                    <div className='relative '>
                        <div className='absolute grid place-items-center left-full top-0 rounded-full h-5 aspect-square bg-red-500 text-white text-[13px] -translate-x-1/2 -translate-y-1/2'>1</div>
                        <FaShoppingCart className='text-[30px]' />
                    </div>
                </div>
            </div>
            <div className=' bg-primary p-4 w-screen'>
                <div className='flex justify-between max-w-7xl mx-auto font-bold'>
                    <div className='cursor-pointer'>
                        <p>Ốp điện thoại</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p>Tai nghe/Phụ kiện tai nghe</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p>Dây đeo điện thoại</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p>Mojipop/Móc cầm điện thoại</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p>Túi chống nước điện thoại</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p>Phụ kiện điện thoại khác</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;