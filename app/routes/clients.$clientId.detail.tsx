export const loader = async () => {
	const data = new Promise((resolve) => {
		setTimeout(() => {
			resolve("data");
		}, 100);
	});

	return { data };
};

const Detail = () => {
	return <div className="text-blue-500 font-light text-2xl">Client Detail</div>;
};

export default Detail;
