const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:lollol@localhost:5432/postgres';

const client = new Client({
    connectionString:connectionString
});

client.connect();

var dados;

client.query('SELECT * from usuarios',(err,res)=>{
    
    if(err){
        console.log(err.stack);
    }
    else{ 
        console.log(res.rows);
        dados = res.rows[0].nome;
    }
    client.end();
});

console.log(dados);

function verificaConteudoDosDados(){
    console.log(dados);
}
setInterval(verificaConteudoDosDados,10000);