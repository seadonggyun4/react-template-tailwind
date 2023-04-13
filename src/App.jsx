import {RouterProvider} from "react-router-dom";
import router from 'routes/routes' // 라우터 연결


function App() {
  return <RouterProvider router={router} />;
}

export default App;
