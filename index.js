import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const app = express();

const PORT = 5050;
const DB_URL = 'mongodb+srv://root:user@cluster0.qwvz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
		app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
}

startApp();