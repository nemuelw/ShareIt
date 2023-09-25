import {Routes, Route} from 'react-router-dom'
import Upload from './pages/Upload'
import FileViewer from './pages/FileViewer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Upload /> } />
        <Route path="/:path" element={ <FileViewer /> } />
      </Routes>
    </div>
  );
}

export default App;
