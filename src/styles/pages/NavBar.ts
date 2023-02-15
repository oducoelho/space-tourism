import { styled } from "..";

export const NavContainer = styled('div', {
  background: 'red',
  padding: '50px 30px',

  display: 'flex',
  justifyContent: 'space-between',
})

export const Options = styled('div', {
  ul: {
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '25px 300px 25px 50px',
    li: {
      listStyle: 'none',
      fontSize: '20px'
    }
  }
})