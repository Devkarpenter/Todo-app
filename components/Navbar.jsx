import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="flex justify-between items-center ;
 px-8 py-3">
      <Link className="bg-gray-800 text-white rounded-lg p-2" href={'/addTodo'}>Add Todo</Link>  
        <Link className="font-bold"  href={"/"}>
        Home
        </Link>
        
    </nav>
  )
}