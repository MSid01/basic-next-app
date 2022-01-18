import Link from "next/link";

const Home= ()=> {
  return (
  <div>
  <nav>
    <ul>
      <li>
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </li>
      <li>
        <Link href="/product">
          <a>products</a>
        </Link>
      </li>
    </ul>
  </nav>
  <h1>HOme paGE</h1>;
  </div>
  )}
export default Home;
