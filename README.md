
# Git Flow - Testes

Repositório destinado à prática dos principais comandos
do Git, GitHub e Git Flow.

## 1. Configuração do Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "Seu Email"
```

## 2. Clonagem de repositório

```bash
git clone URL_DO_REPOSITORIO
```

## 3. Inicialização de repositório

```bash
git init
```

## 4. Verificar alterações

```bash
git status
git diff
```

## 5. Adicionar arquivos

Adicionar um arquivo específico:

```bash
git add README.md
```

Adicionar todos os arquivos:

```bash
git add .
```

## 6. Criar um commit

```bash
git commit -m "Mensagem do commit"
```

## 7. Enviar alterações ao GitHub

```bash
git push origin main
```

## 8. Atualizar repositório local

```bash
git pull origin main
git fetch origin
```

## 9. Criar branches

```bash
git branch develop
git branch feature/cadastro
```

## 10. Listar branches

```bash
git branch
git branch -a
```

## 11. Trocar de branch

```bash
git switch develop
```

Outra opção:

```bash
git checkout develop
```

## 12. Criar e acessar uma branch

```bash
git switch -c feature/cadastro
```

## 13. Enviar uma nova branch

```bash
git push -u origin feature/cadastro
```

## 14. Unir branches

```bash
git switch develop
git merge feature/cadastro
```

## 15. Corrigir a mensagem do último commit

```bash
git commit --amend -m "Nova mensagem"
```

Utilizar preferencialmente antes do push.

## 16. Adicionar arquivo esquecido ao último commit

```bash
git add arquivo.txt
git commit --amend --no-edit
```

Utilizar preferencialmente antes do push.

## 17. Desfazer o último commit mantendo alterações

```bash
git reset --soft HEAD~1
```

Utilizar em commits locais ainda não publicados.

## 18. Reverter um commit publicado

```bash
git revert ID_DO_COMMIT
```

Cria um novo commit que desfaz as alterações anteriores.

## 19. Visualizar histórico de commits

```bash
git log
git log --oneline
git log --oneline --graph --all
```

## 20. Excluir branches

Excluir branch local:

```bash
git branch -d feature/cadastro
```

Excluir branch remota:

```bash
git push origin --delete feature/cadastro
```

## 21. Guardar alterações temporariamente

```bash
git stash
git stash list
git stash pop
```

## 22. Git Flow

Git Flow é um modelo de organização de branches
para o desenvolvimento de projetos.

### Principais branches

- main: versão estável do projeto.
- develop: versão em desenvolvimento.
- feature: desenvolvimento de funcionalidades.
- release: preparação de novas versões.
- hotfix: correções urgentes na versão estável.

### Inicializar Git Flow

```bash
git flow init
```

### Criar uma funcionalidade

```bash
git flow feature start cadastro
```

### Finalizar uma funcionalidade

```bash
git flow feature finish cadastro
```

### Criar uma release

```bash
git flow release start 1.0.0
git flow release finish 1.0.0
```

### Criar um hotfix

```bash
git flow hotfix start 1.0.1
git flow hotfix finish 1.0.1
```

Os comandos git flow precisam da extensão Git Flow
instalada. O fluxo também pode ser realizado
manualmente com os comandos tradicionais do Git.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Objetivo

Praticar versionamento de código, criação de commits,
gerenciamento de branches e desenvolvimento FrontEnd.