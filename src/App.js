import './App.css';
import { FullPageContainer, FullPagePanel } from 'fullpage-react-fs'
import 'fullpage-react-fs/dist/index.css'


function App() {
  return (
    <FullPageContainer showIndicators={true}>
      <FullPagePanel>
        <div className="font">
           <div id = "title">스마트 마스크 거치대</div>
          <div >웰시와 괴짜들 - 선린인터넷고등학교 </div>

        </div>
        
      </FullPagePanel>
      <FullPagePanel>
        <div className="font">
        
        </div>
        
      </FullPagePanel>
      <FullPagePanel>
        <div className="font">
          반기문띠~
        </div>

      </FullPagePanel>
      
    </FullPageContainer>
  );
}

export default App;
