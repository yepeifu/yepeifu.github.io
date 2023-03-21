import logo from './logo.svg';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Button</Button>
        <div>测试一下</div>
      </header>
    </div>
  );
}

export default App;
