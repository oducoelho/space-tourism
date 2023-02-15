import { styled } from "..";

export const NavContainer = styled('div', {
  background: 'red',
  padding: '50px 50px',

  display: 'flex',
  justifyContent: 'space-between',
})

export const Options = styled('div', {
  ul: {
    background: '#ffffff',
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
    gap: '20px',
    padding: '19px 100px 19px 50px',
    li: {
      listStyle: 'none',
    }
  }
})