import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link aria-label="Home" href="/">
      <Image
        src="/logo.svg"
        width={20}
        height={20}
        alt="Protocol"
        className="h-6 w-auto"
      />
    </Link>
  );
}

export default Logo;
