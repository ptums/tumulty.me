import Link from 'next/link'
import formatDate from 'utils/format-date'
import limitBrief from 'utils/limit-brief'

const Article = ({ title, link, description, date, categories }) => {
  return (
    <div className="card">
      <Link href={`/post/${link}`}>
        <a>
          <p>
            <strong className="title">{title}</strong>
          </p>
          <p>{formatDate(date)}</p>
          <p>{limitBrief(description)}</p>
          <p className="topic">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </p>
        </a>
      </Link>
      <style jsx>{`
        .card {
          border-radius: 0.25rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          margin-bottom: 1em;
          padding: 1em;
          border: 0.4px solid #e9e9e9;
          transition-timing-function: ease-out;
          transition: 0.2s;
        }
        .title {
          font-size:1.3rem;
        }
        .topic {
          margin-bottom: 0;
          padding-bottom: 0;
          font-weight: bold;
        }

        a {
          color: #000;
          text-decoration: none;
        }

        strong {
          font-size: 1rem;
        }

        .card:hover {
          cursor: pointer;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }


      `}</style>
    </div>
  )
}

export default Article
