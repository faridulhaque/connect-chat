
import React from 'react';
import SidebarTop from './SidebarTop';
import UserList from './UsersList';

const Sidebar = () => {


    return (
        <div className='xl:w-5/12 pc:w-5/12 ipad:w-5/12 notebook:w-5/12 tablet:w-full mobile:w-full micro:w-full  h-full bg-white overflow-y-scroll'>
            <SidebarTop></SidebarTop>
            <UserList></UserList>
        </div>
    );
};

export default Sidebar;