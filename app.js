const express = require('express');

let app = express() 

app.get('/', (req, res) => {
    res.send('Pagina Inicial')
})

app.listen(3030, () => console.info('Servidor Funcionando! Booooa!'
));