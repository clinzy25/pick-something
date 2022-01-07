import Header from './components/Header';
import Input from './components/Input';
import styled from 'styled-components';
import Resturants from './components/Resturants';
import Result from './components/Result';

const App = () => (
  <AppWrapper>
    <Header />
    <Result /> 
    <Input />
    <Resturants />
  </AppWrapper>
);

const AppWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
