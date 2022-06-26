import { CssBaseline } from '@mui/material';
import { Layout } from './components/Layout/layout';
import { TodoWrapper } from './components/Todo/todo-wrapper';

function App() {
	return (
		<>
			<CssBaseline/>
			<Layout>
				<TodoWrapper/>
			</Layout>
		</>
	);
}

export default App;
