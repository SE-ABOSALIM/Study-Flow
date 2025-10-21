import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StudyFlow" },
    { name: "description", content: "Welcome to your study center" },
  ];
}

export default function Home() {
  return <div>HomePage</div>;
}
