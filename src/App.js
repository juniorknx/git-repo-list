import { Rotas } from './routes';
import Global from './pages/styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Global />
      <Rotas />
      <ToastContainer />
    </>
  );
}

export default App;
