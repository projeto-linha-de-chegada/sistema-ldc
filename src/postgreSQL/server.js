var usuarios;

function getUsers(){
    
    const {Client} = require('pg');
    const connectionString = 'postgressql://postgres:postgres@localhost:5432/postgres';
    const client = new Client({
    connectionString:connectionString
    });

    client.connect();

    client.query('SELECT * from aluno',(err,res)=>{
        
        if(err){
            console.log(err.stack);
            main();
        }
        else{ 
            //console.log(res.rows);
            usuarios = res.rows;
            main();
        }
        client.end();
    });
}

function setUser(nome,email,senha,matricula){
    const {Client} = require('pg');
    const connectionString = 'postgressql://postgres:lollol@localhost:5432/postgres';
    const client = new Client({
    connectionString:connectionString
    });

    client.connect();

    client.query("INSERT INTO usuarios (nome,email,senha,matricula) VALUES ($1,$2,$3,$4)",
        [nome,email,senha,matricula],(err,res)=>{
        if(err){
            console.log(err.stack);
            main();
        }
        else{
            console.log("Insert bem sucedido");
            main();
        }
        client.end();
    });
}

getUsers();

function main(){
    console.log(usuarios);
    //setUser("Outro Cara","felipe@gmail.com","pass","412649");
    
}