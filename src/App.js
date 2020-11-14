import './App.css';
import { FullPageContainer, FullPagePanel } from 'fullpage-react-fs'
import 'fullpage-react-fs/dist/index.css'


function App() {
  return (
    <FullPageContainer showIndicators={true}>
      <FullPagePanel bgColor =  'azure'>
      풀페이지 테스트 1
      </FullPagePanel>
      <FullPagePanel bgColor =  'lightgoldenrodyellow'>
        풀페이지 테스트2

      </FullPagePanel>
      <FullPagePanel bgColor =  'azure'>
        <h1>테스트3</h1>

      </FullPagePanel>
      
    </FullPageContainer>
  );
}

export default App;
