import mongoose from "mongoose";

const url = process.env.MONGO_URI;
async function connect() {
    try {
        await mongoose.connect(url, {
            dbName: 'blogs',
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log(error);
    }
}

export default connect;