import blogs from "../data/data"
import BlogItem from "../components/BlogItem"
import Link from "next/link"

function Blogs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4 p-4">Blogs</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogs.map((blog) => (
                <Link href={`/blogs/${blog.blogId}`} key={blog.blogId}>
                    <BlogItem title={blog.title} description={blog.description} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blogs