import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Common Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <App></App>
      </RouterProvider>
    </div>
  );
}

export default App;
