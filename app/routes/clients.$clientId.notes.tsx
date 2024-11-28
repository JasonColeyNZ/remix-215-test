export const loader = async () => {
	const data = new Promise((resolve) => {
		setTimeout(() => {
			resolve("data");
		}, 100);
	});

	return { data };
};

const Notes = () => {
	return <div className="text-blue-500 font-light text-2xl">Client Notes</div>;
};

export default Notes;
