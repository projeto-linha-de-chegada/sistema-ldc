DROP TABLE IF EXISTS aluno;

--tabela para os alunos já aprovados pelo administrador
CREATE TABLE IF NOT EXISTS aluno(
	id SERIAL NOT NULL,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(20),
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	matricula VARCHAR(50) NOT NULL,
	curso VARCHAR(100) NOT NULL,
	usertoken VARCHAR(100) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE,
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO aluno (nome,email,senha,matricula,curso,usertoken) VALUES ('Felipe','01234567890','felipe@gmail.com','lollol',412649,'engenharia',123);
SELECT * FROM aluno;

DROP TABLE IF EXISTS aluno_pendente;

--tabela para alunos que ainda não tiveram cadastro aprovado pela coordenação
CREATE TABLE IF NOT EXISTS aluno_pendente(
	id SERIAL NOT NULL,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(20),
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	matricula VARCHAR(50) NOT NULL,
	curso VARCHAR(100) NOT NULL,
	usertoken VARCHAR(100) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE,
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO aluno_pendente (nome,email,senha,matricula,curso,usertoken) VALUES ('Felipe','01234567890','felipe@gmail.com','lollol',412649,'engenharia',123);
SELECT * FROM aluno_pendente;