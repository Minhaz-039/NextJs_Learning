import Link from "next/link";

function Tag({ tag }) {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 m-2 p-2 ml-0 rounded-md mr-2 text-xs"
    >
      {tag}
    </Link>
  );
}

export default Tag;
