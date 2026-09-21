import Image from "next/image";
import Logo from "./Logo";
import Mob_res_Header from "./Mob_res_Header";
import Search from "./Search";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="contents lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
      {/* <!-- Logo  --> */}
      <div className="hidden lg:flex">
        <Logo />
      </div>
      {/* <!-- Logo Ends --> */}

      {/* <!-- Header --> */}
      <div
        className="fixed inset-x-0 top-0 z-50 bg-white/(--bg-opacity-light) px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
        style={{ "--bg-opacity-light": 0.5, "--bg-opacity-dark": 0.2 }}
      >
        <div className="container flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <div className="hidden lg:block lg:max-w-md lg:flex-auto">
            <Search />
          </div>

          {/* <!-- Mobile Responsive Header Starts --> */}
          <Mob_res_Header />
          {/* <!-- Mobile Responsive Header Ends --> */}

          <div className="flex items-center gap-5">
            <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
            <div className="flex gap-4">
              <div className="contents lg:hidden">
                <button
                  type="button"
                  className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                  aria-label="Find something..."
                >
                  <Image
                    src="/search.svg"
                    width={20}
                    height={20}
                    alt="Search"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Ends --> */}

      {/* <!-- sidebar nav --> */}
      <Sidebar />
      {/* <!-- Sidebar nav ends --> */}
    </header>
  );
}

export default Header;
