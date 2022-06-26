const httpOptions = (data, method = 'GET') => (
	{
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data),
	}
);

const createHttpRequest = method => (url, data) => fetch(url, {
	...httpOptions(data, method)
}).then(response => response.json());

export default createHttpRequest
