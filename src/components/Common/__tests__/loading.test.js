import AppStore from '../../../store';
import extraReducer from '../../../store/reducers/extra.reducer';
import { Loading } from '../loading';

const { store } = AppStore;

const { extraActions: { setLoading } } = extraReducer;

describe('Loading', () => {
	it('should not show loading state', () => {
		cy.mount(<Loading/>, { reduxStore: store });
	});

	it('should show loading state', () => {
		store.dispatch(setLoading(true));

		cy.mount(<Loading/>, { reduxStore: store });
	});
});
