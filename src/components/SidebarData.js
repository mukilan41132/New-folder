import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { FaTruckMoving } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'MY MOVES',
    path: '/',
    icon: <FaTruckMoving />,
    cName: 'nav-text'
  },
  {
    title: 'PROFILE',
    path: '/reports',
    icon: <BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'GET QUOTE',
    path: '/products',
    icon: <BsFileEarmarkText />,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    path: '/team',
    icon: <RiLogoutCircleLine />,
    cName: 'nav-text'
  }
];
