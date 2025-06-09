const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'thegioikisinhtrung.aternos.me',
  port: 52981,
  username: 'BotAternos'
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Chào ${username}, tôi là bot đây!`);
});

bot.on('error', err => console.log('Lỗi:', err));
bot.on('end', () => console.log('Bot đã bị ngắt kết nối'));
