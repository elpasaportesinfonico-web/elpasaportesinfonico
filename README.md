[README.md](https://github.com/user-attachments/files/29412712/README.md)[Uploading README# El Pasaporte Sinfónico — Design System
## Guía de integración · Proyecto HTML / Web

---

## Estructura del paquete

```
design_handoff_pasaporte_sinfonico/
├── README.md           ← esta guía
├── starter.html        ← página de arranque con ejemplos de todos los componentes
├── ds/
│   ├── _ds_bundle.js   ← bundle compilado (componentes React)
│   ├── styles.css      ← hoja de estilos principal (importa tokens/)
│   └── tokens/         ← variables CSS (colores, tipografía, espaciados, efectos)
└── assets/
    ├── logo-white.png  ← logo blanco (sobre fondos oscuros)
    ├── logo-full.png   ← logo completo
    └── logo-ink.png    ← logo tinta
```

---

## Setup en 3 pasos

### 1. Incluir estilos y bundle

```html
<head>
  <link rel="stylesheet" href="./ds/styles.css">
</head>
<body>
  <!-- React (requerido) -->
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"
          integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L"
          crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"
          integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm"
          crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"
          integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y"
          crossorigin="anonymous"></script>

  <!-- Bundle del Design System -->
  <script src="./ds/_ds_bundle.js"></script>
</body>
```

### 2. Desestructurar los componentes

```js
const {
  Button, Card, SectionHeader,
  Timeline, TimelineItem,
  StatGrid, Stat,
  Quote, TipBox, Tag
} = window.PasaporteSinfNicoDesignSystem_fc650e;
```

### 3. Aplicar tema oscuro en el `<html>`

```html
<!-- Tema de casa (gold + crimson, predeterminado) -->
<html lang="es">

<!-- Temas de episodio alternativos -->
<html lang="es" data-theme="blues">       <!-- Delta del Blues: ámbar + azul río -->
<html lang="es" data-theme="psych">       <!-- Londres: gold + violeta eléctrico -->
<html lang="es" data-theme="merseybeat">  <!-- Liverpool: gold + rojo Liverpool -->
```

---

## Componentes

### `Button`

Botón Oswald en mayúsculas. `primary` es relleno dorado; `ghost` es contorno dorado; `quiet` es el link pequeño de las cards.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `variant` | `'primary' \| 'ghost' \| 'quiet'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño |
| `block` | `boolean` | `false` | Ocupa todo el ancho |
| `href` | `string` | — | Renderiza como `<a>` |
| `iconLeft` | `ReactNode` | — | Ícono a la izquierda del label |
| `iconRight` | `ReactNode` | — | Ícono a la derecha del label |
| `disabled` | `boolean` | — | Estado deshabilitado |

```jsx
<Button variant="primary">Escuchar episodio</Button>
<Button variant="ghost" href="#circuito">Ver circuito</Button>
<Button variant="quiet" size="sm" href="https://open.spotify.com">Spotify</Button>
```

---

### `Card`

Card de lugar / venue / hotel. Esquinas cuadradas, borde hairline, hover con borde dorado.

| Prop | Tipo | Descripción |
|---|---|---|
| `type` | `string` | Chip Oswald arriba (ej. `"Hotel · Boutique"`) |
| `typeColor` | `string` | Color CSS del chip (por defecto: `var(--secondary-glow)`) |
| `title` | `string` | Título Playfair |
| `meta` | `string` | Línea de metadata pequeña bajo el título |
| `description` | `string` | Cuerpo de texto |
| `image` | `string` | URL de imagen cover (proporción 16:10) |
| `links` | `string[]` | Array de etiquetas de link al fondo |
| `href` | `string` | Hace toda la card un enlace |

```jsx
<Card
  type="Hotel · Boutique"
  title="Hotel du Vin & Bistro"
  meta="Jewellery Quarter"
  description="Antiguo hospital victoriano reconvertido."
  links={['Web', 'Mapa']}
  href="https://www.hotelduvin.com"
/>
```

---

### `SectionHeader`

Lockup de sección: tag Oswald + línea + título Cinzel + lead.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `tag` | `string` | — | Micro-caps crimson (ej. `"Cómo llegar"`) |
| `title` | `string` | — | HTML — usa `<em>` para acento dorado, `<br>` para saltos |
| `lead` | `string` | — | Párrafo de introducción |
| `align` | `'left' \| 'center'` | `'left'` | Alineación del bloque |

```jsx
<SectionHeader
  tag="El circuito"
  title="Cinco días en<br><em>la cuna del metal</em>"
  lead="Nuestro itinerario fuera de lo convencional."
/>
```

---

### `Timeline` + `TimelineItem`

Línea de tiempo vertical con nodo dorado. Envuelve `TimelineItem`s como hijos directos.

**`TimelineItem`**

| Prop | Tipo | Descripción |
|---|---|---|
| `time` | `string` | Línea de tiempo Oswald crimson (ej. `"Día 1 · Mañana"`) |
| `place` | `string` | Nombre del lugar (Playfair) |
| `description` | `string` | Descripción del parada |
| `regen` | `boolean` | Nodo verde (turismo regenerativo) |

```jsx
<Timeline>
  <TimelineItem
    time="Día 1 · Mañana"
    place="Jewellery Quarter"
    description="Café y caminata por el barrio de los orfebres."
  />
  <TimelineItem
    time="Día 3 · Mañana"
    place="Reforestación del canal"
    description="Jornada de turismo regenerativo."
    regen
  />
</Timeline>
```

---

### `StatGrid` + `Stat`

Grilla de estadísticas con número Cinzel dorado y label Oswald.

**`Stat`**

| Prop | Tipo | Descripción |
|---|---|---|
| `value` | `ReactNode` | Número / valor grande (ej. `"1968"`, `"∞"`) |
| `label` | `string` | Oswald uppercase (ej. `"Año cero"`) |
| `description` | `string` | Línea descriptiva opcional |

```jsx
<StatGrid>
  <Stat value="1968" label="Año cero" description="Nace Black Sabbath" />
  <Stat value="6"    label="Bandas fundacionales" />
  <Stat value="12"   label="Venues en el circuito" />
  <Stat value="∞"    label="Decibeles" />
</StatGrid>
```

---

### `Quote`

Cita en bloque — Playfair itálica con borde izquierdo dorado o carmesí.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `source` | `string` | — | Atribución (Oswald caps) |
| `variant` | `'accent' \| 'secondary'` | `'accent'` | Color del borde izquierdo |

```jsx
<Quote source="— Tony Iommi, Black Sabbath">
  El sonido vino de la fábrica. Birmingham era acero, humo y ruido.
</Quote>
```

---

### `TipBox`

Caja de aviso con borde izquierdo. `regen` = verde, `warn` = carmesí.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `label` | `string` | `"Tip del viajero"` | Oswald label |
| `icon` | `ReactNode` | — | Emoji o nodo |
| `variant` | `'accent' \| 'regen' \| 'warn'` | `'accent'` | Color del acento |

```jsx
<TipBox variant="regen" icon="🌱" label="Turismo regenerativo">
  Reserva la jornada de reforestación con al menos una semana de anticipación.
</TipBox>

<TipBox variant="warn" icon="⚠️" label="Atención">
  El tour de fábricas requiere calzado cerrado.
</TipBox>
```

---

### `Tag`

Etiqueta Oswald micro-caps. Tres variantes visuales.

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `variant` | `'plain' \| 'boxed' \| 'solid'` | `'plain'` | `plain` = crimson; `boxed` = contorno; `solid` = relleno dorado |
| `color` | `string` | — | Override de color CSS |
| `dot` | `boolean` | `false` | Punto decorativo al inicio |

```jsx
<Tag variant="plain">Cómo llegar</Tag>
<Tag variant="boxed">Mapa</Tag>
<Tag variant="solid" color="var(--positive)">Regen</Tag>
```

---

## Tokens de color principales

```css
/* Fondos */
--base-1: #05050a        /* página */
--base-2: #0a080f        /* paneles profundos */
--base-3: #110d18        /* cards */
--base-4: #1a1020        /* raised / hover */

/* Acento (gold) */
--accent:        #d4aa3a
--accent-bright: #f0c84a
--accent-deep:   #8a6820

/* Secundario (crimson) */
--secondary:       #7a1515
--secondary-glow:  #b02020

/* Texto */
--bone:  #f0ece8   /* títulos */
--parch: #e0d5cc   /* cuerpo */
--smoke: #8a7a88   /* muted / labels */

/* Superficies semánticas */
--surface-nav:  rgba(5, 5, 10, 0.85)
--surface-deep: var(--base-2)
--surface-card: var(--base-3)

/* Feedback */
--positive: #70b050
--warning:  #d4aa3a
--danger:   #b02020
```

---

## Tipografía

```css
--f-display: 'Cinzel', serif          /* títulos hero — Cinzel caps */
--f-head:    'Playfair Display', serif /* h4–h6, citas */
--f-body:    'Libre Baskerville', serif/* cuerpo de texto */
--f-label:   'Oswald', sans-serif      /* labels, tags, navegación */
```

---

## Espaciados

```css
--container: 1100px   /* ancho máximo del contenido */
--nav-height: 62px
--section-y:  5rem    /* padding vertical de sección */
--section-x:  2rem    /* padding horizontal de sección */
```

---

## Ejemplo completo

Ver `starter.html` en este paquete — incluye nav, hero, cards, timeline y player en funcionamiento.
.md…]()
