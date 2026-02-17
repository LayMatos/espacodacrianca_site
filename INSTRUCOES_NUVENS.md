# Instruções para Adicionar Nuvens

## Estrutura Criada

Criei um sistema flexível de nuvens que pode usar imagens ou SVG como fallback.

## Como Adicionar Imagens de Nuvens

### 1. Adicione as imagens na pasta:
```
src/assets/images/
```

### 2. Nomeie as imagens (exemplos):
- `cloud1.png` ou `cloud1.jpg`
- `cloud2.png` ou `cloud2.jpg`
- `cloud3.png` ou `cloud3.jpg`
- etc.

### 3. Descomente e atualize os imports no App.jsx:

```jsx
// No topo do arquivo, descomente e ajuste:
import cloudImg1 from "./assets/images/cloud1.png";
import cloudImg2 from "./assets/images/cloud2.png";
import cloudImg3 from "./assets/images/cloud3.png";
```

### 4. Use as imagens nas nuvens:

No código, você pode passar a imagem usando a prop `src`:

```jsx
<FloatCloud 
  top="10%" 
  left="-5%" 
  size={1.2} 
  opacity={0.15} 
  speed="30s" 
  delay="0s" 
  src={cloudImg1}  // ← Adicione aqui
/>
```

## Como Funciona

### Componente Cloud
- Se você passar `src`, usa a imagem
- Se não passar `src`, usa SVG como fallback
- Suporta diferentes variantes (1, 2, 3) para variedade

### Componente FloatCloud
- Posiciona nuvens de forma absoluta
- Animações suaves de movimento
- Opacidade configurável para não interferir no conteúdo

## Propriedades Disponíveis

### FloatCloud props:
- `left`, `right`, `top`, `bottom` - Posicionamento
- `size` - Tamanho (1 = tamanho padrão)
- `opacity` - Opacidade (0 a 1)
- `speed` - Velocidade da animação (ex: "30s")
- `delay` - Delay da animação (ex: "0s")
- `src` - Caminho da imagem (opcional)
- `variant` - Variante do SVG (1, 2 ou 3) se não usar imagem

## Exemplo de Uso

```jsx
{/* Nuvem com imagem */}
<FloatCloud 
  top="10%" 
  left="-5%" 
  size={1.2} 
  opacity={0.15} 
  speed="30s" 
  delay="0s" 
  src={cloudImg1}
/>

{/* Nuvem com SVG (fallback) */}
<FloatCloud 
  top="20%" 
  right="-3%" 
  size={0.9} 
  opacity={0.12} 
  speed="35s" 
  delay="5s" 
  variant={2}
/>
```

## Nuvens Já Adicionadas

Já adicionei nuvens decorativas nas seguintes seções:
- Hero (4 nuvens)
- Diferenciais (2 nuvens)
- Galeria (2 nuvens)
- Contato (3 nuvens)

Você pode ajustar a quantidade, posição, tamanho e opacidade conforme desejar!

## Dicas

1. **Opacidade**: Use valores baixos (0.1 a 0.2) para não interferir no conteúdo
2. **Posicionamento**: Use valores negativos em `left` ou `right` para nuvens que entram pela lateral
3. **Velocidade**: Valores maiores (30s+) criam movimento mais suave
4. **Delay**: Varie os delays para criar movimento mais natural

