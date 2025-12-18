const bcrypt = require('bcryptjs');

async function generateAdminPassword() {
  const password = 'admin123';
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  
}

generateAdminPassword();
