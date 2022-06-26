export const sortByCompleted = (item1, item2) => {
	if (item1.completed === item2.completed) return 0;
	return item1.completed ?
		1 :
		-1;
};

export const sortByDate = (item1, item2) => +item2.createdAt - +item1.createdAt;
