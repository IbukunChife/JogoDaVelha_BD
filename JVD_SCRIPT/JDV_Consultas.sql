
-- verificar se o tabuleiro esta cheia ou possui elemento vazia
-- se for cheio CaixaVazia == 0;
SELECT COUNT(*) as CaixaVazia FROM tabuleiro
WHERE JOTAB_JOGADA is null;

