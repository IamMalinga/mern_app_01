import { NavLink, Outlet } from "react-router-dom"
import Contact from '../pages/help/Contact';

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>If you want a help from the us please contact us using the below contact form. Then admin panel will give solutions for your problems as reply or through the your email.</p>
      <nav>
        <NavLink to="faq">View the ChatBox</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />

    </div>
  )
}
