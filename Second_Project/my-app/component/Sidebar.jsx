import Link from "next/link";

function Sidebar({ docs }) {
  const roots = docs.filter((doc) => doc.parent == null);
  const notRoot = Object.groupBy(
    docs.filter((doc) => doc.parent != null),
    ({ parent }) => parent,
  );

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {roots.map((root) => (
          <li className="relative" key={root.id}>
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${root.id}`}
            >
              <span className="truncate">{root.title}</span>
            </Link>
            {notRoot[root.id] && (
              <ul role="list" className="border-l border-transparent">
                {notRoot[root.id].map((subRoot) => (
                  <li className="relative" key={subRoot.id}>
                    <Link
                      aria-current="page"
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white"
                      href={`/docs/${root.id}/${subRoot.id}`}
                    >
                      <span className="truncate">{subRoot.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
