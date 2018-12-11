CREATE DATABASE JDV;

USE JDV;

CREATE TABLE jogadore (
	JOGD_ID SERIAL PRIMARY KEY,
    JOGD_NOME VARCHAR(45)
);

CREATE TABLE jogos(
	JOG_ID SERIAL PRIMARY KEY,
    JOG_JOGD_1 BIGINT(20) UNSIGNED,
    JOG_JOGD_2 BIGINT(20) UNSIGNED,
    JOG_PLAYTIME BIGINT(20) UNSIGNED DEFAULT 1,
    JOG_STATUS VARCHAR(45)NOT NULL DEFAULT 'EN ANDAMENTO',
    JOG_VENCEDOR BIGINT(20)UNSIGNED DEFAULT 0,
    FOREIGN KEY (JOG_JOGD_1) REFERENCES jogadore(JOGD_ID),
    FOREIGN KEY (JOG_JOGD_2) REFERENCES jogadore(JOGD_ID) 
);

CREATE TABLE tabuleiro(
	TAB_ID SERIAL,
    TAB_JOG_ID BIGINT(20) UNSIGNED,
    TAB_JOG_JOGD_1 BIGINT(20) UNSIGNED,
    TAB_JOG_JOGD_2 BIGINT(20) UNSIGNED,
	TAB_POSICAO CHAR(5),
    TAB_JOGADA VARCHAR(20),
    FOREIGN KEY (TAB_JOG_ID) REFERENCES jogos(JOG_ID),
    FOREIGN KEY (TAB_JOG_JOGD_1) REFERENCES jogos(JOG_JOGD_1),
    FOREIGN KEY (TAB_JOG_JOGD_2) REFERENCES jogos(JOG_JOGD_2),
    PRIMARY KEY (TAB_ID, TAB_JOG_ID, TAB_JOG_JOGD_1,TAB_JOG_JOGD_2)
    
);

DROP DATABASE JDV;