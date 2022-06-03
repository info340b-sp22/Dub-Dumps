import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 65px 60px;
  background: black;
  position: center;
  bottom: 0;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: -50px;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
   
export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  font-family: "Encode Sans", sans-serif;
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: purple;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-family: "Encode Sans", sans-serif;
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-family: "Encode Sans", sans-serif;
  font-size: 14px;
  color: #fff;
  margin-bottom: -40px;
  margin-top: 20px;
  text-align: center;
`;