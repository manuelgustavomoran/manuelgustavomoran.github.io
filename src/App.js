import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
    
      
 
  );
}

export default App;
