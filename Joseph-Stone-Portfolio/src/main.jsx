import ReactDom from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import AboutMe from './pages/aboutMe.jsx';
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      }
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
