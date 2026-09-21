import Image from "next/image";
import Link from "next/link";

function Mob_res_Header() {
  return (
    <div className="flex items-center gap-5 lg:hidden">
      <button
        type="button"
        width={20}
        height={20}
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
      >
        <Image
          src="/hamburger.svg"
          alt="Menu"
          width={20}
          height={20}
          className="h-auto w-2.5 stroke-zinc-900 dark:stroke-white"
        />
      </button>
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="Protocol"
          className="h-6 w-auto"
        />
      </Link>
    </div>
  );
}

export default Mob_res_Header;
