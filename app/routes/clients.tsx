import {
	Await,
	Link,
	Outlet,
	ShouldRevalidateFunctionArgs,
	useLoaderData,
} from "@remix-run/react";
import { Suspense } from "react";

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

	return data;
};

const Clients = () => {
	const data = useLoaderData<typeof loader>();
	return (
		<>
			<div className="mt-4 text-xl font-semibold">Clients</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={data}>{(data) => <div>{data.message}</div>}</Await>
			</Suspense>
			<div>
				<Link to="1/detail">Client 1</Link>
			</div>
			<div>
				<Link to="2/detail">Client 2</Link>
			</div>
			<Outlet />
		</>
	);
};

export default Clients;
