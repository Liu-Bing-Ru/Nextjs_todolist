import Link from "next/link";

export default function Navbar() {
  //function
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        all task list
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        add Topic
      </Link>
      <Link className="bg-white p-2" href={"/doneTopic"}>
        done task list
      </Link>
    </nav>
  );
}
