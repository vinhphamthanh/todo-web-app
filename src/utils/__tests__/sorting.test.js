import { sortByDate } from '../sorting';

const todo1 = {
	createdAt: 1656252064005, // past
	completed: true,
};
const todo2 = {
	createdAt: 1656252105900,  // future
	completed: false,
};

describe('Sort Logic', function () {
	it('should sort by date', () => {

		expect([todo1, todo2].sort(sortByDate)).toEqual([todo2, todo1]);
	});

	it('should sort by completed', () => {
		expect([todo1, todo2].sort(sortByDate)).toEqual([todo2, todo1]);
	})
});
