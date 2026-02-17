# Instruções para Adicionar Imagens

Para que o site funcione completamente, você precisa adicionar duas imagens:

## 1. Imagem do Foguete (rocket.png)

- **Localização**: Coloque o arquivo `rocket.png` na pasta `public/`
- **Descrição**: A imagem do foguete 3D (amarelo/laranja com detalhes vermelhos)
- **Formato recomendado**: PNG com fundo transparente
- **Tamanho sugerido**: 120x180px ou proporcional

## 2. Imagem da Logo (logo.png)

- **Localização**: Coloque o arquivo `logo.png` na pasta `public/`
- **Descrição**: A logo do Espaço da Criança (com as crianças e o texto)
- **Formato recomendado**: PNG com fundo transparente
- **Tamanho sugerido**: 200px de largura ou proporcional

## Estrutura de Pastas

```
espacodacrianca/
├── public/
│   ├── rocket.png    ← Adicione aqui
│   ├── logo.png      ← Adicione aqui
│   └── vite.svg
└── src/
    └── App.jsx
```

## Nota

O código está configurado para buscar as imagens em `/rocket.png` e `/logo.png` (na pasta public). Se você usar nomes diferentes ou localizações diferentes, atualize as referências no arquivo `App.jsx` nas linhas onde aparece:

```jsx
src="/rocket.png"
src="/logo.png"
```

