# Semana 02 WWRR: Tipos Primitivos + Unions & Narrowing

### Programación Móvil — 3° Bachillerato Técnico (2026–2027) · Piloto WWRR (0201 + 0202)

> [!IMPORTANT]
> **Modelo Evaluativo Dual MIT (10.0 puntos total):**
> - **Bloque A (50% · 5.0 pts):** Código en GitHub (`pnpm test`), check limpio (`pnpm run check`), commits semánticos y Pull Request.
> - **Bloque B (50% · 5.0 pts):** Video Screencast oral (3 a 5 min) con cámara y voz.

> [!NOTE]
> **Pruebas con Auto-Sync:**
> Al ejecutar `pnpm test`, tus suites se sincronizan con `main` del docente en segundo plano.

---

## Diapositivas & Portal

[![Ver Diapositivas en Vivo](https://img.shields.io/badge/Diapositivas_Interactivas-Ver_en_Linea-10B981?style=for-the-badge&logo=cloudflare)](https://uets-pm-portal.vgmiltonisaac.workers.dev/02-tipos-primitivos/)

👉 **[Abrir Slides Semana 02: /02-tipos-primitivos/](https://uets-pm-portal.vgmiltonisaac.workers.dev/02-tipos-primitivos/)**
👉 **[Ver Portal Principal](https://uets-pm-portal.vgmiltonisaac.workers.dev/)**
👉 **[Repo oficial: UETS-Programacion-Movil/02-est-tipos-primitivos-pm](https://github.com/UETS-Programacion-Movil/02-est-tipos-primitivos-pm)**

- Navegación: `[←]`, `[→]` o `[Espacio]` · Pantalla completa: `[F]`.

---

## Setup Diario Anti-Deep Freeze

```bash
git config --global user.name "TU_USUARIO_GITHUB"
git config --global user.email "tu_correo_registrado@ejemplo.com"
npm install -g pnpm
node -v
git --version
pnpm -v
```

---

## Los 2 Retos (WWRR)

```text
Reto 0201: Tipos Primitivos, Arrays y Ficha UETS (src/0201_tipos_primitivos.ts)
Reto 0202: Estados Móviles, Unions & Narrowing (src/0202_unions_narrowing.ts)
```

## Comandos

```bash
pnpm install
pnpm run start:0201   # Reto 0201
pnpm run start:0202   # Reto 0202
pnpm test             # Evaluación consolidada Semana 02 (2 retos)
pnpm run check        # tsc --noEmit
```

---

## Fork & Pull Request

1. Fork de [`UETS-Programacion-Movil/02-est-tipos-primitivos-pm`](https://github.com/UETS-Programacion-Movil/02-est-tipos-primitivos-pm).
2. Clona tu fork, `pnpm install`, crea rama `entrega/nombre-apellido`.
3. Commits semánticos (`feat:`, `fix:`…) y push.
4. Abre PR contra `base: main` del repo oficial. Incluye enlace al Screencast.

> Si solo completas 1 reto: haz commit parcial, abre PR y rescata el Bloque B con tu video.

---

*Módulo: Aplicaciones Web y Móviles — UETS 2026–2027 · Semana 02 piloto WWRR.*
