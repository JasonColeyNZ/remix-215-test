import { LoaderFunctionArgs } from "@remix-run/node";
import { NavLink, Outlet, redirect, useParams } from "@remix-run/react";
import { cn } from "~/utils";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const clientId = params.clientId;
	const endPath = url.pathname.split("/").pop();
	if (clientId === endPath) throw redirect("detail");
	// console.log("clientId", clientId, endPath);

	return {};
};

const pages = [
	{ name: "Details", path: "detail" },
	{ name: "Notes", path: "notes" },
];

const ClientId = () => {
	const { clientId } = useParams();
	return (
		<div className="border rounded border-green-400 p-2 flex gap-2 flex-col items-center">
			<div className="text-lg font-medium">Client {clientId}</div>
			<div className="flex gap-4 bg-green-200 rounded-md p-3">
				{pages.map((page) => (
					<div key={page.path}>
						<NavLink
							className={({ isActive }) =>
								cn(isActive && "bg-green-500 text-white", "p-1 rounded")
							}
							to={page.path}>
							{page.name}
						</NavLink>
					</div>
				))}
			</div>
			<Outlet />
		</div>
	);
};

export default ClientId;
