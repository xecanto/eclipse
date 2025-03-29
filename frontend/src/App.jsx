import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/reservations", element: <ReservationPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*", element: <NotFound /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
