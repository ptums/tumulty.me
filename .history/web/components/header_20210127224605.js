import Image from 'next/image'
import Link from 'next/link'
import DarkModeToggle from 'components/dark-mode-toggle'

const Header = () => (
  <header>
    <div className="title">
      <div>
        <Link href="/">
          <a className="header-link">
            <h1>
              <strong>Personal Blog</strong>
            </h1>
            <h2>On coding and "how the web works"</h2>
          </a>
        </Link>
      </div>
      <DarkModeToggle />
    </div>
    <hr />
    <div className="me">
      <Image src="/me.png" width="100" height="116" alt="Peter F. Tumulty" />
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
            <a href="https://tumultywebservices.dev">Dev Shop</a>
          </li>
        </ul>
      </div>
    </div>
    <h3></h3>
    <style jsx>{`
      h1 {
        font-size: 2rem;
        margin-bottom: 0;
      }
      h2 {
        font-weight: normal;
        color: #444;
        margin-top: 2px;
        font-size: 1rem;
      }

      h3 {
        font-weight: normal;
        font-size: 1rem;
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

export default Header
