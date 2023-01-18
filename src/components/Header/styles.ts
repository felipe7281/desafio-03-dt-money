import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;

  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  display: flex;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  height: 50px;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`

// .logoPlusButton{

// }
// .dtLogo{
//     display: flex;
//     align-items: center;
//     font-weight: bold;
//     font-size: 1.5rem;
//     font-family: sans-serif;

// }

// .buttonNew{
//     background-color: var(--green);
//     color: var(--white);
//     border-radius: 6px;
//     height: 3.125rem;
//     width: 9.5rem;
//     border: none;
//     font-weight: bold;
//     font-size: 1rem;

// }
