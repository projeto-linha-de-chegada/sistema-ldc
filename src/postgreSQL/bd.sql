DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios(
	id SERIAL NOT NULL,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	matricula VARCHAR(50) NOT NULL,
	curso VARCHAR(100) NOT NULL,
	usertoken VARCHAR(100) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE,
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO USUARIOS (nome,email,senha,matricula,curso,usertoken) VALUES ('Felipe','felipe@gmail.com','lollol',412649,'engenharia',123);
SELECT * FROM USUARIOS;