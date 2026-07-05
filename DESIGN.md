# Design

## Theme

Dark, single-hue. Body background `#0a0a0c` with two violet aurora blobs (CSS-animated, GPU-composited), a 4% dot grid, and a fixed film-grain overlay (`.grain`). No light mode.

## Color

- Accent (only one): violet — `#8b5cf6` (`--accent`), `#a78bfa` (`--accent-bright`), `#7c3aed` (`--accent-deep`). Tailwind `violet-400/500/600`.
- Neutrals: Tailwind `neutral-*` cool grays on `#0a0a0c`; borders `neutral-800`, body text `neutral-300/400`.
- Status green (`emerald-400/500`) is reserved for the availability dot and "Live" badge only.
- Banned: gradient text, multi-hue gradients, pink/fuchsia, gradient-filled buttons.

## Typography

- Display: Space Grotesk 500–700, tracking -0.03em, `text-wrap: balance`. Section titles `text-4xl/5xl`, hero `text-5xl/7xl`.
- Body: Inter, `neutral-300/400`, max ~65ch.
- Mono: JetBrains Mono 400–500 for eyebrows, dates, stats labels, tech badges, the hero typing line.
- All three load from Google Fonts via preloaded non-blocking `<link>` in index.html.

## Components

- **SectionHeader** (`src/components/SectionHeader.jsx`): left-aligned, numbered mono eyebrow (`01 / about`), display title with one violet word, short violet hairline underneath. Used by every section.
- **SpotlightCard**: `rounded-2xl border-neutral-800 bg-neutral-900/40`, cursor-following violet spotlight, hover lift + violet border.
- **Tech badges**: `rounded-md border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-300`.
- **Primary button**: solid `bg-violet-600 hover:bg-violet-500 active:scale-[0.98] rounded-lg`, optional `.shine` sweep.
- **Secondary button**: `border-neutral-700 hover:border-violet-500 hover:bg-white/5 rounded-lg`.

## Motion

- framer-motion entrances: fade + y-offset, 0.6s, `viewport={{ once: true }}`, staggered by delay.
- Compositor-only CSS keyframes for ambient motion (aurora drift, float).
- `prefers-reduced-motion: reduce` collapses all animation/transitions globally (index.css).

## Layout

- Content in `max-w-screen-xl mx-auto px-8`; hero `min-h-[100dvh]`, other sections natural height with `pt-12 pb-24` rhythm.
- Fixed navbar (`left-0 top-0`, blur + border once scrolled), mobile drawer from the left.
