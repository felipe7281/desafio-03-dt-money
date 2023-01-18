import styled, { css } from 'styled-components'

export const MovementsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`
interface MovementCardProps {
  variant?: 'green'
}

export const MovementCard = styled.div<MovementCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${(props) => props.theme['green-700']};
    `}
`
/* .body{
    height: 100vh;
    background-color: var(--gray-2);
    
}
.balance{
    display: flex;
    gap: 2rem;
    justify-content: center;
    
    
   
}
.deposit{
    height: 8.56rem;
    width: 22rem;
    background-color: var(--gray-4);
    border-radius: 6px;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    margin-top: calc(0px - 5.125rem);
}
.deposit span{
    display: flex;
    color: var(--gray-7);
    font-size: 1rem;
    font-family: sans-serif;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1.6;
}
.deposit p:nth-child(2){
    color: var(--gray-7);
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
}
.output{
    height: 8.56rem;
    width: 22rem;
    background-color: var(--gray-4);
    border-radius: 6px;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    margin-top: calc(0px - 5.125rem);
}
.output span{
    display: flex;
    color: var(--gray-7);
    font-size: 1rem;
    font-family: sans-serif;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1.6;
}
.output p:nth-child(2){
    color: var(--gray-7);
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
}
.total{
    height: 8.56rem;
    width: 22rem;
    background-color: var(--green-dark);
    border-radius: 6px;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    margin-top: calc(0px - 5.125rem);
}
.total span{
    display: flex;
    color: var(--gray-7);
    font-size: 1rem;
    font-family: sans-serif;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1.6;
}
.total p:nth-child(2){
    color: var(--gray-7);
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.4;
}
.searchPlusHistory{
    margin-top: 4rem;;
}

.search{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.searchBar{
    width: 59.8125rem;
    height:3.375rem;
    background-color: var(--gray-1);
    border: none;
    border-radius: 6px;
    padding: 1rem;
    color: var(--gray-7);
    font-size: 1rem;
    font-family: sans-serif;
    
    
}
.searchBar ::placeholder{
    color: var(--gray-5);
}
.searchButton{
    height: 3.375rem;
    width: 9.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--green-light);
    border-radius: 6px;
    color: var(--green-light);
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: bold;
    
}
.searchButton img{
    width: 1.25rem;
    height: 1.25rem;
} */
