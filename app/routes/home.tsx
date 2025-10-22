import { useNavigate } from "react-router";
import type { Route } from "./+types/home";
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StudyFlow" },
    { name: "description", content: "Welcome to your study center" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen">
      {/* <Header /> */}
      <Sidebar />
    </main>
  );
}
