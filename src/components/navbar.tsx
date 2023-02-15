import Image from 'next/image';
import Logo from  '../assets/shared/logo.svg'
import { NavContainer, Options } from '../styles/pages/NavBar'

export const NavBar = () => {
  return (
    <NavContainer>
      <div>
        <Image src={Logo} alt="" />  
      </div>

      <Options>
        <ul>
          <li><strong>00</strong> HOME</li>
          <li><strong>01</strong> DESTINATION</li>
          <li><strong>02</strong> CREW</li>
          <li><strong>03</strong> TECHNOLOGY</li>
        </ul>
      </Options>
    </NavContainer>
  )
}