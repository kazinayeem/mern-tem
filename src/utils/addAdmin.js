// backend/utils/setupAdmin.js
const User = require('../models/userModel');

const setupAdmin = async () => {
    const adminEmail = 'admin@example.com';
    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
        admin = new User({ 
            name: 'Main Admin', 
            email: adminEmail, 
            password: 'AdminPassword', 
            role: 'admin' 
        });
        await admin.save();
        console.log('Main admin created');
    }
};
module.exports = setupAdmin;
