import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import Header from './pages/share/Header'
import Footer from './pages/share/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))
          }

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
