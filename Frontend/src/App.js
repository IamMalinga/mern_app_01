import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/events/Events'
import EventDetails,{EventDetailsLoader} from './pages/events/EventDetails';
import RegistrationLayout from './layouts/RegistrationLayout'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Logout from './pages/registration/Logout';
import MyEvents from './pages/MyEvents';

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="events" element={<RegistrationLayout />}>
      <Route 
          index 
          element={<Events />} 
          // errorElement={<CareersError />}
        />
        <Route 
          path=":id" 
          element={<EventDetails />}
          loader={EventDetailsLoader}
        />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="select" element={<MyEvents />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
