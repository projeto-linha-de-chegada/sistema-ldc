function validar_aluno(email,senha){

const connection = require("./Connection");
let client = connection();

client.query('SELECT * from aluno',(err,res)=>{
        
    if(err){
        client.end();
        return false;
        
    }
    else{ 
        for(var i = 0; i < res.rowCount; i++){
            if(res.rows[i].email == email && res.rows[i].senha == senha){
                console.log("true");
                client.end();
                return true;
            }
        }
        
    }
    client.end();
});

}

validar_aluno("felipe@gmail.com","lollol");

module.exports = validar_aluno;