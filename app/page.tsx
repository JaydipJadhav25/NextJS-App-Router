// "use client";
import Link from "next/link";

export default function Home() {

  console.log(" User Page");
  return (
   <div>
    <h1>This home Page</h1>
    <Link href="/dashbord">Dashbord</Link>
    <Link href="/dashbord/movies">Movies</Link>
   </div>

  );
}

