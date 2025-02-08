"use client"
import Avatar from 'react-avatar';

// Definir la interfaz para las props
interface UserProfileProps {
  userName: string;
}

export default  function UserProfile({ userName }:UserProfileProps){
  return <Avatar name={userName} size={"40"} round={true}  fgColor='black' color='#ffff' className='font-bold cursor-pointer'/>

};

