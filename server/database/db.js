import mongoose from 'mongoose';

const Connection = async (user,password) => {
    const URL = `mongodb+srv://${user}:${password}@chatapp.emp12.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully ');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;