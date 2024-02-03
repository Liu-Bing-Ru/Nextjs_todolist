import Link from "next/link";

export default function Navbar() {
  //function
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        劉秉儒
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        add Topic
      </Link>
    </nav>
  );
}
