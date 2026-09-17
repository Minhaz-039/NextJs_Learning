"use client";

import { useRouter } from "next/navigation";

function Button() {
  const router = useRouter();
  function handleButtonClick() {
    router.push("/dashboard/Analytics");
  }
  return (
    <button
      className="m-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      onClick={handleButtonClick}
    >
      Go to Analytics
    </button>
  );
}

export default Button;
