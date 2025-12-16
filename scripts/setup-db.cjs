const bcrypt = require('bcryptjs');

async function generateAdminPassword() {
  const password = 'admin123';
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  
  console.log('='.repeat(60));
  console.log('ADMIN CREDENTIALS');
  console.log('='.repeat(60));
  console.log('Email: admin@maghmela.com');
  console.log('Password: admin123');
  console.log('');
  console.log('Password Hash (for SQL):');
  console.log(hash);
  console.log('='.repeat(60));
  console.log('');
  console.log('IMPORTANT: Change this password in production!');
  console.log('');
  console.log('Run the SQL in supabase/migration.sql in your Supabase SQL Editor');
  console.log('URL: https://supabase.com/dashboard/project/kuzurhilvokvfzjofwek/sql');
}

generateAdminPassword();
