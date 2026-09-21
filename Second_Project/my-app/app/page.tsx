import Image from "next/image";

export default function Home() {
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

        <article className="">
          <div className="relative">
            <div className=" relative mx-auto px-4 ">
              <div className="mx-auto grid max-w-160 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
                <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
                  <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-14">
                    Protocol
                  </h1>

                  <p className="mt-6 text-base leading-7 text-slate-700">
                    It doesn&apos;t matter if you have an API if nobody knows
                    how to use it. Teach people the ins and outs of OAuth 2.0
                    and JWTs in style with Protocol, a beautiful API
                    documentation template.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                      target="_blank"
                    >
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div className="relative lg:col-span-3">
                  <Image
                    src="/banner.png"
                    width="1600"
                    height="1280"
                    className="relative z-20 -mb-36 aspect-853/682 max-w-157.5 rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
