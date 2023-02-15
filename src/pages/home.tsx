import Image from 'next/image';
import BackgroundImage from '../assets/home/background-home-desktop.jpg'
import { HomeContainer } from "../styles/pages/Home";

export default function Home() {
  return (
    <HomeContainer>
      <Image src={BackgroundImage} alt='Imagem de fundo'/>
    </HomeContainer>
  )
}
