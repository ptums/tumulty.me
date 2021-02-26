import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from 'components/dark-mode-toggle'

const Header = () => {
  const router = useRouter()
  const isPost = router.asPath.includes('post')

  return (
    <header>
      <div className="title">
        <div>
          <Link href="/">
            <a className="header-link">
              {isPost ? (
                <>
                  <h4>
                    <strong>Personal Blog</strong>
                  </h4>
                  <h5>On coding, how the internet works, and interpreting documentation</h5>
                </>
              ) : (
                <>
                  <h1>
                    <strong>Personal Blog</strong>
                  </h1>
                  <h2>On coding, how the internet works, and interpreting documentation</h2>
                </>
              )}
            </a>
          </Link>
        </div>
        <DarkModeToggle />
      </div>
      <hr />
      <div className="me">
        <Image src="/me.png" width={100} height={118} alt="Peter F. Tumulty" />
        <div className="details">
          <h3>
            <strong>That's me</strong> Peter F. Tumulty
          </h3>
          <p>developer and web enthusiast</p>
          <ul>
            <li>
              <a href="https://github.com/ptums">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/ptums923">Twitter</a>
            </li>
            <li>
              <a href="https://tumulty.me">Dev Shop</a>
            </li>            
          </ul>
        </div>
      </div>
      <h3></h3>
      <style jsx>{`
        h1,
        h4 {
          font-size: 3rem;
          margin-bottom: 0;
        }

        h4 {
          margin-block-start: 0.67em;
        }

        h2,
        h5 {
          font-weight: normal;
          color: #444;
          margin-top: 2px;
          font-size: 1.3rem;
        }

        h5 {
          margin-block-end: 0.83em;
        }

        h3 {
          font-weight: normal;
          font-size: 1.4rem;
          margin-top: 10px;
        }

        .header-link {
          color: black;
          text-decoration: none;
        }

        .header-link:hover {
          text-decoration: underline;
        }

        .title {
          display: flex;
          justify-content: space-between;
        }

        .me {
          margin-top: 1.9rem;
          display: flex;
        }

        .details {
          margin-left: 1em;
          font-size:1.3rem;
        }

        .details > h3 {
          margin-bottom: 0;
        }

        .details > p {
          margin-top: 3px;
          margin-bottom: 5px;
        }

        .details > ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        .details > ul > li {
          display: inline-block;
          margin-right: 14px;
        }
      `}</style>
    </header>
  )
}

export default Header
