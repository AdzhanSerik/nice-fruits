const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes'); // Подключаем userRoutes 
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware 
app.use(cors());
app.use(bodyParser.json());
// Использование роутов 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Подключаем защищенные маршруты  пользователей
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
}); 