# StyleGu

Design system compartilhado para os projetos pessoais (BinGu, Gamingu.Lab e futuros).

## Estrutura

```
stylegu/
├── packages/
│   ├── tokens/     # cores, spacing, tipografia, preset do Tailwind
│   └── react/      # componentes React que consomem os tokens
├── .storybook/     # documentação visual dos componentes
└── .changeset/     # versionamento e changelog
```

## Uso local (dentro do monorepo)

```bash
pnpm install
pnpm dev            # build em watch mode dos pacotes
pnpm storybook       # abre o Storybook em http://localhost:6006
pnpm test            # roda os testes de todos os pacotes
```

## Consumindo nos outros projetos (BinGu, Gamingu.Lab)

Depois de publicado (npm ou GitHub Packages):

```bash
pnpm add @stylegu/tokens @stylegu/react
```

No `tailwind.config.ts` do projeto consumidor:

```ts
import { stylegPreset } from "@stylegu/tokens";

export default {
  presets: [stylegPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

## Fluxo de release

1. Fazer as alterações num branch
2. Rodar `pnpm changeset` e descrever a mudança
3. Merge para `main`
4. `pnpm release` faz build + publish dos pacotes com bump de versão automático
