//a)
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3101, () => console.log("Rodando..."))

//b)
app.use((req, res) => res.send("Caminho raiz"));


//c)
    app.get('/:v1/:v2', (req, res) =>{
    let v1 = req.params.v1;
    let v2 = req.params.v2;
    v1 = parseInt(v1);
    v2 = parseInt(v2);
    res.send(v1 + v2 +'');
})


//d)
app.get('/:dif1/:dif2', (req, res)=>{
    let dif1 = req.params.dif1
    dif1 = parseInt(dif1);
    let dif2 = req.params.dif2
    dif2 = parseInt(dif2);
    res.send(dif1 - dif2 + '')
})

//e)
app.post('/:dif1/:dif2', (req, res)=>{
    let dif1 = req.params.dif1
    dif1 = parseInt(dif1);
    let dif2 = req.params.dif2
    dif2 = parseInt(dif2);
    res.send(dif1 - dif2 + '')
})

//f)
app.post('/:dif1/:dif2', (req, res)=>{
    let dif1 = req.params.dif1
    dif1 = parseInt(dif1);
    let dif2 = req.params.dif2
    dif2 = parseInt(dif2);
    res.send(dif1 - dif2 + '')
})

//g)
app.all('/soma/:dif1/:dif2', (req, res)=>{
    let dif1 = req.params.dif1
    dif1 = parseInt(dif1);
    let dif2 = req.params.dif2
    dif2 = parseInt(dif2);
    res.send(dif1 * dif2 + '')
})

//h)
app.all('/oi/soma/:dif1/:dif2', (req, res)=>{
    res.send("Caminho inexistente")
})

//i)
app.use('/texto.txt', express.static("../public/texto.txt"))

//j) 
app.use('/arquivo/txt', express.static("../public/texto.txt"))
