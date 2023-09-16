import React from 'react';
import "./style.scss"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const NavIcon = ({title , Icon , avatar}) => {

  const user = useSelector(selectUser);

  return (
    <div className='navicon'>
        {
            Icon && Icon
        }
        {
            avatar && <Avatar src={user.photoURL} name="Muhammad Aashan"/>
        }
        <span>{title}</span>
      
    </div>
  )
}

export default NavIcon
