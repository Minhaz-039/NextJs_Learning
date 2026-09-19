import blogs from "../../data/data";
import { notFound } from "next/navigation";

async function Single_Blog({ params }) {
    const { id } = await params;
    const Blog = blogs.find((blog) => String(blog.blogId) === id);

    if (!Blog) {
        notFound();
    }

    const { blogId, title, description } = Blog;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">{blogId} {title}</h1>
      <p className="text-gray-200">{description}</p>
    </div>
  )
}

export default Single_Blog
