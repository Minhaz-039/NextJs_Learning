import Link from 'next/link'
import blogs from '../data/data'
import BlogItem from '../components/BlogItem'


function BlogStatic() {
  return (
        <div>
        <h1 className="text-2xl font-bold mb-4 p-4">Generate Static Blogs</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogs.map((blog) => (
                <Link href={`/blogs/${blog.blogId}`} key={blog.blogId}>
                    <BlogItem id={blog.blogId} title={blog.title} description={blog.description} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default BlogStatic