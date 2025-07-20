
import './App.css'
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import ListStudent from './pages/ListStudent'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListStudent/>}/>
        <Route path='/add-student' element={<AddStudent/>}/>
        <Route path='/edit-student/:id' element={<EditStudent />}/>
        
        
      </Routes>
    </Router>
  )
}

export default App
