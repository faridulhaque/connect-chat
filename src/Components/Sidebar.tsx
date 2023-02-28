import React from 'react';
import SidebarTop from './SidebarTop';
import UserList from './UsersList';

const Sidebar = () => {
    return (
        <div className='w-5/12 h-full bg-white overflow-y-scroll'>
            <SidebarTop></SidebarTop>
            <UserList></UserList>
        </div>
    );
};

export default Sidebar;