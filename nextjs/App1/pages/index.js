import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  )
}

export default Index;