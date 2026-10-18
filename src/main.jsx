import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom';
import Layout from '../components/ui/Layout.jsx';
import SavedArticles from '../components/pages/SavedArticles.jsx';
import About from '../components/pages/About.jsx';
import Contact from '../components/pages/Contact.jsx';
import { createBrowserRouter } from 'react-router';
import Article from '../components/pages/Article.jsx';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/saved", element: <SavedArticles /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/article", element: <Article /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
