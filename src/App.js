import { CssBaseline } from '@mui/material';
import { Layout } from './components/Layout/layout';
import { ToDoWrapper } from './components/Todo/todo-wrapper';

function App() {
	return (
		<>
			<CssBaseline/>
			<Layout>
				<ToDoWrapper/>
			</Layout>
		</>
	);
}

export default App;
