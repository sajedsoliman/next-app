import Link from "next/link";

function NavLink({ where, children }) {
	return (
		<Link href={where}>
			<a className="uppercase font-semibold mr-2 group hover:text-blue-600 active:opacity-70">
				{children}
			</a>
		</Link>
	);
}

export default NavLink;
