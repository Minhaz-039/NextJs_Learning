import { Suspense } from "react";
import Button from "../../components/Button";

export const metadata = {
  title: "Settings Page",
  description: "Manage your application settings here.",
};

export default function SettingsPage() {

  return (
    <div>
      <h1 className="m-2 font-extrabold text-6xl">Settings Page</h1>
      <p className="m-2 text-2xl">Manage your application settings here.</p>
      <Suspense fallback={<div className="text-xl font-bold">Loading......</div>}>
        <Button></Button>
      </Suspense>
    </div>
  );
}