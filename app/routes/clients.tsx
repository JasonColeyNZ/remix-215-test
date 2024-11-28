import {
	Await,
	NavLink,
	Outlet,
	ShouldRevalidateFunctionArgs,
	useLoaderData,
} from "@remix-run/react";
import { Suspense } from "react";
import { cn } from "~/utils";

export function shouldRevalidate({
	defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs) {
	return defaultShouldRevalidate;
}

export const loader = async () => {
	const data = new Promise<{ message: string }>((resolve) => {
		setTimeout(() => {
			resolve({ message: "Finished Loading" });
		}, 3000);
	});

	return { myData: data };
};

const clients = [
	{ id: 1, name: "Client 1" },
	{ id: 2, name: "Client 2" },
];

const Clients = () => {
	const { myData } = useLoaderData<typeof loader>();
	return (
		<div className="flex h-screen items-center justify-center flex-col gap-2">
			<div className="p-2 bg-gray-200 rounded-md">
				<NavLink to="..">Back to Root</NavLink>
			</div>
			<div className="flex flex-col items-center gap-2 border rounded p-2 border-blue-400">
				<div className="text-xl font-semibold">Clients</div>
				<Suspense fallback={<div>Loading...</div>}>
					<Await resolve={myData}>{(data) => <div>{data.message}</div>}</Await>
				</Suspense>
				<nav className="flex bg-blue-200 gap-4 rounded-md p-2">
					{clients.map((client) => (
						<div key={client.id}>
							<NavLink
								className={({ isActive }) =>
									cn(isActive && "bg-blue-500 text-white", "p-1 rounded ")
								}
								to={client.id.toString()}>
								{client.name}
							</NavLink>
						</div>
					))}
				</nav>
				<Outlet />
			</div>
		</div>
	);
};

export default Clients;
