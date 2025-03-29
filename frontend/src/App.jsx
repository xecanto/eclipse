import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import AlbumPage from './pages/AlbumPage';

const router = createBrowserRouter(
  [
  { path: "/", element: <LandingPage /> },
  { path: "/menu", element: <MenuPage /> },
  // { path: "/reservations", element: <ReservationPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/album", element: <AlbumPage /> },
  { path: "*", element: <NotFound /> }
], 
{
  basename: "/eclipse"
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
