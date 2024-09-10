import { router } from '@/routes';
import { RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';
function App() {
  return <RouterProvider router={router} />;
}

export default App;
