import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 50px 30px;
  background: #101020;
  position: inherit;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 50px 20px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: grey;
      transition: 150ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 25px;
  color: #fff;
  text-shadow: 3px -1px 3px rgba(29, 12, 179, 0.79);
  margin-bottom: 30px;
  font-weight: bold;
`;