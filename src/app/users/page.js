import Link from "next/link";
function page() {
    return (
        <div className="flex gap-5 px-20 py-10 font-bold">
        <Link href="users/1" className="hover:text-red-700">
        User 1
        </Link>
        <Link href="users/2" className="hover:text-red-700">
        User 2
        </Link>
        <Link href="users/3" className="hover:text-red-700">
        User 3
        </Link>
        <Link href="users/4" className="hover:text-red-700">
        User 4
        </Link>
        </div>
    );
}

export default page;