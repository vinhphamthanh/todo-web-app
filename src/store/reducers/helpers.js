import { createAction } from '@reduxjs/toolkit'

export const createActionList = list => list.reduce(
	(a, c) => {
		const actionStart = `${c}_start`;

		return ({
			...a,
			[actionStart]: createAction(actionStart),
			[c]: createAction(c)
		})
	}, {}
)
