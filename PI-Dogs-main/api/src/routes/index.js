const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const dog = require('./dogRoute');
const temperaments = require('./temperaments');


router.use('/',dog);
router.use('/',temperaments);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
