
'use client';

import { Sidebar } from 'flowbite-react';
import {
    HiChartPie,
    HiInbox,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';


let SidebarComp = () => {
    return (
        <div className="min-h-screen ">
            <Sidebar aria-label="Sidebar with multi-level dropdown example" style={{ width: '150px' }}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to="/">
                            <Sidebar.Item icon={HiChartPie} className=''>
                                Home
                            </Sidebar.Item>
                        </Link>
                        <Link to="/create-post">
                            <Sidebar.Item icon={HiInbox} className=''>
                                Create Post
                            </Sidebar.Item>
                        </Link>

                        {/* <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="E-commerce"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Sidebar.Item href="#">Products</Sidebar.Item>
                            <Sidebar.Item href="#">Sales</Sidebar.Item>
                            <Sidebar.Item href="#">Refunds</Sidebar.Item>
                            <Sidebar.Item href="#">Shipping</Sidebar.Item>
                        </Sidebar.Collapse> */}

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>

    );
}
export default SidebarComp