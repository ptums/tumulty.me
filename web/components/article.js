import Image from 'next/image';
import Link from 'next/link';

const Article = ({title, link, description, date, image}) => {
  return (
    <div className="card">
      <Link href={link}>
        <a>
        <p><strong>{title}</strong></p>
     
      <p>{date}</p>
      <p>{description}</p>
        </a>
      </Link>

      <style jsx>{`
        .card {
          border-radius: .25rem;
          box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
          margin-bottom: 1em;
          padding: 1em;
           /* This timing applies on the way IN */
  transition-timing-function: ease-out;

/* A litttttle slower on the way in */
transition: 0.20s;
        }

        .card:hover {
          cursor:pointer;
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
      
      `}</style>
    </div>
  )
};

export default Article