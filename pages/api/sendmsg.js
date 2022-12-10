import axios from 'axios';

export default async function handler(req, res) {

	const currDate=new Date().toISOString();

	const options = {
		method: 'POST',
		url: 'http://192.168.1.14:4000/api/v1/Messages',
		data: {
			"IssueDate": currDate,
			"Priority": "1",
			"ExternalSystem": "Web App",
			"Contents": {
				"Content": req.body
			}
		}
	};

	try {
		let response = await axios(options);
		// Sends response to the client side
		console.log(options.data)
		res.status(200).json(response.status);
	} catch (error) {
		// Send error to the client side
		console.log(error.Content)
		res.status(500).send('Internal API Error.');
	}

}