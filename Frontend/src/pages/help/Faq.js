import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import ClockLoader from "react-spinners/ClockLoader";
import TimeAgo from 'react-timeago';

const Faq = () => {
  const [responses, setResponses] = useState([]);
  const { user } =  useAuthContext();
  const [isLoading,setIsLoading] = useState();


  useEffect(() => {
    const fetchHelpData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('/api/contacts/read', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          setResponses(data);
          setIsLoading(false)
        } else {
          throw new Error('Failed to fetch help data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHelpData();
  }, []);

  return (
    <div className="faq">
      {isLoading?<ClockLoader color="#ad36d6" size={100} />:responses.map((response) => (
        <div className="question" key={response.id}>
          <p>
          <strong>Q. </strong>
            <strong>{response.message}</strong>
          </p>
          <p>
            <strong>Ans. </strong>{response.reply == null?"Response not yet":response.reply}
            </p>
            <p><TimeAgo date={response.createdAt} />
          </p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
