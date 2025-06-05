# cleverDetails-member

O microsite **cleverDetails member** foi concebido para apresentar as nossas empresas parceiras e partilhá-las com os clientes.

## Ligações para Traduções

- [Tradução PT](https://github.com/RicardoDoesDev/cleverDetails-member/edit/main/my-react-app/src/data/appDataPT.ts)  
- [Tradução EN](https://github.com/RicardoDoesDev/cleverDetails-member/edit/main/my-react-app/src/data/appData.ts)  
- [Tradução FR](https://github.com/RicardoDoesDev/cleverDetails-member/edit/main/my-react-app/src/data/appDataFR.ts)

---

# Guia de Gestão de Traduções

## 📁 Visão Geral da Estrutura

Os ficheiros de tradução seguem uma estrutura de objetos comum, com campos específicos que devem ser traduzidos.

## 📝 Diretrizes de Tradução

### 1. Manutenção da Estrutura

- Mantém a **mesma estrutura de objetos** em todos os ficheiros de idioma  
- Usa os **mesmos `id`s** para todos os itens  
- Os campos **não traduzíveis** (ex.: `email`, `phone`, `locationIds`, `images`, etc.) devem manter-se **iguais**

### 2. Campos Traduzíveis

Os seguintes campos devem ser traduzidos em **cada ficheiro de idioma**:

- `title`  
- `description`  
- `type`  
- `openingHours.day`  
- `specialOffer.type`  
- `specialOffer.description`

### 3. Exemplo de Item Traduzido

```typescript
// Inglês (appData.ts)
{
  id: "boat-tours",
  title: "Boat Tours",
  description: "Explore the Algarve coastline..."
}

// Francês (appDataFR.ts)
{
  id: "boat-tours",
  title: "Excursions en Bateau",
  description: "Explorez la côte de l'Algarve..."
}

// Português (appDataPT.ts)
{
  id: "boat-tours",
  title: "Passeios de Barco",
  description: "Explore a costa do Algarve..."
}
```

---

## ✅ Boas Práticas

1. **Consistência**  
   - Usa terminologia consistente em todas as traduções  
   - Mantém o mesmo estilo e formatação em todos os idiomas  
   - Mantém a pontuação e os caracteres especiais uniformes  

2. **Atualizações de Conteúdo**  
   - Atualiza todos os ficheiros de idioma ao adicionar novo conteúdo  
   - Mantém a mesma **ordem dos itens**  
   - Verifica que todos os campos traduzíveis estão preenchidos  

3. **Garantia de Qualidade**  
   - Revê traduções com falantes nativos sempre que possível  
   - Testa a interface com diferentes definições de idioma  
   - Verifica o conteúdo dinâmico (datas, números, etc.)  

4. **Manutenção**  
   - Faz revisões regulares das traduções  
   - Mantém um **registo de alterações**  
   - Considera ferramentas de gestão de traduções para grandes atualizações

---

## ⚠️ Problemas Comuns e Soluções

### 1. Traduções em Falta  
- Confirma sempre que todos os campos estão presentes  
- Usa o Inglês como idioma predefinido de recurso (fallback)

### 2. Formatação Inconsistente  
- Mantém a mesma formatação (HTML/Markdown)  
- Respeita as regras de capitalização para cada idioma  

### 3. Caracteres Especiais  
- Garante a codificação correta  
- Testa a exibição dos caracteres especiais na interface  

---

## 🔄 Controlo de Versões

Ao submeter alterações:
- Usa mensagens de commit claras (ex.: `Atualização PT - novo item de restaurante`)  
- Agrupa alterações por idioma  
- Indica claramente o conteúdo alterado  

---

## ✅ Verificação Antes de Publicar

1. Confirma que todas as traduções estão incluídas  
2. Verifica a formatação na interface  
3. Testa o conteúdo dinâmico (datas, números, etc.)  
4. Valida os caracteres especiais  
5. Garante a formatação correta por idioma

---

## 📬 Contacto

Para dúvidas ou para reportar problemas de tradução:

- Cria uma issue no repositório do projeto  
- Indica o **código do idioma** e o conteúdo em questão  
- Adiciona contexto e **capturas de ecrã**, se necessário
