import { Connectwallet } from "@/components";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Seo title'
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-x">Información general</span>
              <Connectwallet />
    </div>
  );
}