const app = require('./app');
const { sequelize } = require('./models/index');

async function main (){
    await app.listen(app.get('PORT'), () => {
        console.log(`Server on http://localhost:${app.get('PORT')}`,);
    });
    try {
        await sequelize.sync({force:false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();