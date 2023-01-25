const express = require('express');
const sequelize = require('./database/database');
const app = express(); 
const RouterMarcas = require('./routers/RouterMarcas');
const RouterModels = require('./routers/RouterModels');
const { errorHandler, logErrors, BoomerrorHandler } = require('./middlewares/errorHandler')



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//routers 
app.use('/marcas', RouterMarcas)
app.use('/models', RouterModels)

//errors  
app.use(logErrors); 
app.use(BoomerrorHandler);
app.use(errorHandler); 
 

app.listen(process.env.PORT || 4000 , async (req, res) => {
    console.log('running server on port', process.env.PORT || 4000);
}) 