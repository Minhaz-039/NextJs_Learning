import Image from "next/image";
import { getDocumentContent } from "../lib/doc";
import Link from "next/link";
import Tag from "./Tag";

async function ContentDisplay({ id }) {
  const DocumentContent = await getDocumentContent({ id });
  console.log(DocumentContent);
  return (
    <article className="">
      <div className="relative">
        <div className=" relative mx-auto px-4 ">
          <div className="mx-auto grid max-w-160 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
              <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-14">
                {DocumentContent.title}
              </h1>

              <div>
                <span>Published On : {DocumentContent.date}</span> by{" "}
                {DocumentContent.author}{" "}
                <Link
                  className="text-blue-800"
                  href={`/categories/${DocumentContent.category}`}
                >
                  {DocumentContent.category}
                </Link>{" "}
                category
              </div>

              {DocumentContent.tags &&
                DocumentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}

              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{
                  __html: DocumentContent.contentHtml,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ContentDisplay;
