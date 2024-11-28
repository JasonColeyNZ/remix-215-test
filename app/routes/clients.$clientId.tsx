import { Link, Outlet, useParams } from "@remix-run/react";

const ClientId = () => {
	const { clientId } = useParams();
	return (
		<>
			<div className="mt-4 text-lg font-medium">Client {clientId}</div>
			<div className="flex gap-4 bg-green-200 rounded-md px-3">
				<div>
					<Link to="detail">Go to Detail</Link>
				</div>
				<div>
					<Link to="notes">Go to Notes</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default ClientId;
