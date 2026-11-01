const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// මෙතනින් ඔබේ බොට් ෆයිල් එක Require කර Run කරගන්න පුළුවන් 
require('./index.js');
