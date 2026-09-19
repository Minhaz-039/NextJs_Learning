function BlogItem({ id, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg text-gray-950 font-semibold mb-2">
        {id} : {title}
      </h2>
      <p className="text-gray-900">{description}</p>
    </div>
  );
}
export default BlogItem;
