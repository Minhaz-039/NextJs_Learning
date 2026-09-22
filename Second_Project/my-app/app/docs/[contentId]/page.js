import ContentDisplay from "../../../component/ContentDisplay";

async function page({ params }) {
  const { contentId } = await params;

  return (
    <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
      <main className="flex-auto py-12">
        {/* <!-- Green Top Overlay --> */}
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 -ml-152 h-100 w-325 dark:mask-[linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-linear-to-r from-[#36b49f] to-[#DBFF75] opacity-40 mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
          </div>
        </div>
        {/* <!-- Green Top Overlay End--> */}

        <ContentDisplay id={contentId} />
      </main>
    </div>
  );
}

export default page;
