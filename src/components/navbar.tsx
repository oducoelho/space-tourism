import Image from 'next/image';
import Logo from  '../assets/shared/logo.svg'
import { NavContainer, Options } from '../styles/pages/NavBar'

export const NavBar = () => {
  return (
    <NavContainer>
      <Image src={Logo} alt="" />

      <Options>
        <ul>
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </Options>
    </NavContainer>
  )
}