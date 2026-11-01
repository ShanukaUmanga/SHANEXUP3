const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Queen-MD WhatsApp Bot is running successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// ඔබේ මුල් බොට් ෆයිල් එක මෙතැනින් ක්‍රියාත්මක වේ
require('./index.js');
