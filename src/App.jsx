import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPage, ContactPage, HistoryPage, HomePage, ManagementPage, ProjectsPage, ProjectViewPage } from './pages';
import './App.css';
import "./i18n";
import { useState } from 'react';
import { Loader } from './Components';

function App() {

  const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/management", element: <ManagementPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/projects/:link", element: <ProjectViewPage /> },
  ]);

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false);
  }, 4400);

  return loading ? <Loader /> : <RouterProvider router={routes} />
}

export default App;