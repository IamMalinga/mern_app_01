import { useLoaderData } from 'react-router-dom'
import Button from '../../components/RegBtn'

export default function EventDetails() {
  const event  = useLoaderData()
  return (
    <div>
      <div className="main">
      <div className ="article">
        <div className="header">
          <h2>{event.title}</h2>
          <p className="post-meta">Posted At : {event.createdAt}</p>
        </div>
        <img src={require(`../../assets/img/${event.image}`)} alt="" srcSet=""/>
        <p>
          {event.details}
        </p>
        <Button />
      </div>
    </div>
    <div className="footer">
      <p>&copy; 2023 My Blog</p>
    </div>
    </div> 
)
}

// data loader
export const EventDetailsLoader = async ({ params }) => {
  const { id } = params;
  

  const res = await fetch('/api/events/' + id)

  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}