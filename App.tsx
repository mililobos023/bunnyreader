import { useMemo, useRef, useState } from "react";

type IconName =
  | "home"
  | "library"
  | "groups"
  | "users"
  | "user"
  | "search"
  | "bell"
  | "arrow"
  | "play"
  | "book"
  | "plus"
  | "more"
  | "chevron"
  | "sun"
  | "moon"
  | "settings"
  | "heart"
  | "message"
  | "bookmark"
  | "edit"
  | "upload"
  | "filter"
  | "close"
  | "share"
  | "lock"
  | "send"
  | "eye"
  | "image"
  | "external"
  | "trash"
  | "sync";

const paths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  library: (
    <>
      <path d="M4 19V5M9 19V5M14 19V5M19 19V5" />
      <path d="M2 19h20M3 5h17" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c4 0 6 2 6 5" />
    </>
  ),
  users: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M2 20c0-4 2-6 6-6s6 2 6 6M15 13c4 0 7 2 7 6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-5 3-7 8-7s8 2 8 7" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 8H3c0-1 3-1 3-8M10 21h4" />
    </>
  ),
  arrow: (
    <>
      <path d="m15 18-6-6 6-6" />
    </>
  ),
  play: <path d="m9 6 9 6-9 6Z" />,
  book: (
    <>
      <path d="M3 5c5-2 8 0 9 2v14c-1-2-4-4-9-2Z" />
      <path d="M21 5c-5-2-8 0-9 2v14c1-2 4-4 9-2Z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </>
  ),
  moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5L9 6.1a8 8 0 0 0-1.7 1L5 6.1 3 9.5 5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.3-1a8 8 0 0 0 1.7 1l.5 3.1h5l.5-3.1a8 8 0 0 0 1.7-1l2.3 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z" />
    </>
  ),
  heart: (
    <path d="M20.8 5.8c-2-2-5.1-2-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />
  ),
  message: <path d="M4 4h16v13H8l-4 4Z" />,
  bookmark: <path d="M6 3h12v18l-6-4-6 4Z" />,
  edit: (
    <>
      <path d="m4 20 4.5-1 11-11-3.5-3.5-11 11Z" />
      <path d="m14.5 6 3.5 3.5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V3M7 8l5-5 5 5" />
      <path d="M4 14v7h16v-7" />
    </>
  ),
  filter: <path d="M3 5h18l-7 8v6l-4 2v-8Z" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  share: (
    <>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8 11 8-5M8 13l8 5" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  send: <path d="m3 3 18 9-18 9 3-9Zm3 9h15" />,
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="m4 18 5-5 4 4 2-2 5 4" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6M20 4 11 13" />
      <path d="M19 13v7H4V5h7" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 3h6l1 4H8ZM7 7l1 14h8l1-14" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  sync: (
    <>
      <path d="M20 7h-6V1" />
      <path d="M20 7a9 9 0 1 0 2 8M4 17h6v6" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const covers = [
  { title: "El jardín de las horas", author: "Elena Valdemar", cls: "cover-garden", mark: "GV" },
  { title: "La casa en el bosque azul", author: "Mara Bell", cls: "cover-house", mark: "CB" },
  { title: "Cartas a la luna", author: "Inés Montalvo", cls: "cover-moon", mark: "CL" },
  { title: "Mujercitas", author: "Louisa May Alcott", cls: "cover-women", mark: "M" },
  { title: "El jardín secreto", author: "Frances H. Burnett", cls: "cover-secret", mark: "JS" },
];

function Cover({ index = 0, small = false }: { index?: number; small?: boolean }) {
  const item = covers[index % covers.length];
  return (
    <div className={`book-cover ${item.cls} ${small ? "small" : ""}`}>
      <span className="cover-ornament">❧</span>
      <b>{item.mark}</b>
      <i>{item.title}</i>
    </div>
  );
}

function Avatar({
  name,
  tone = 0,
  size = "md",
}: {
  name: string;
  tone?: number;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className={`avatar tone-${tone % 4} avatar-${size}`}>
      {name
        .split(" ")
        .map((x) => x[0])
        .slice(0, 2)
        .join("")}
    </div>
  );
}

function Progress({ value, light = false }: { value: number; light?: boolean }) {
  return (
    <div className={`progress ${light ? "light" : ""}`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function Header({
  title,
  subtitle,
  back,
  onBack,
  action,
}: {
  title: string;
  subtitle?: string;
  back?: boolean;
  onBack?: () => void;
  action?: React.ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="header-title">
        {back && (
          <button className="icon-btn" onClick={onBack} aria-label="Volver">
            <Icon name="arrow" />
          </button>
        )}
        <div>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {action}
    </header>
  );
}

function SearchBar({
  onClick,
  value,
  onChange,
}: {
  onClick?: () => void;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className="search-bar">
      <Icon name="search" size={19} />
      <input
        placeholder="Busca usuarios, libros, autores, ISBN"
        value={value}
        onClick={onClick}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <span className="filter-chip">
        <Icon name="filter" size={15} />
      </span>
    </label>
  );
}

function SectionTitle({
  title,
  link,
  onClick,
}: {
  title: string;
  link?: string;
  onClick?: () => void;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {link && (
        <button onClick={onClick}>
          {link} <Icon name="chevron" size={14} />
        </button>
      )}
    </div>
  );
}

function Home({
  openReader,
  openSearch,
  openNotifications,
  go,
}: {
  openReader: () => void;
  openSearch: () => void;
  openNotifications: () => void;
  go: (s: string) => void;
}) {
  return (
    <div className="screen-content home-screen">
      <header className="home-header">
        <div>
          <span className="eyebrow">BUENOS DÍAS</span>
          <h1>
            Hola, Clara <span className="tiny-flower">✦</span>
          </h1>
          <p>¿Dónde leeremos hoy?</p>
        </div>
        <button className="avatar-button" onClick={() => go("profile")}>
          <Avatar name="Clara Soto" tone={1} />
        </button>
        <button className="notify-btn" onClick={openNotifications}>
          <Icon name="bell" />
          <i>3</i>
        </button>
      </header>
      <SearchBar onClick={openSearch} />
      <SectionTitle title="Seguir leyendo" link="Mi estantería" onClick={() => go("shelf")} />
      <article className="continue-card home-reading-card">
        <div className="continue-background">
          <Cover index={0} />
        </div>
        <div className="reading-overlay" />
        <div className="reading-card-top">
          <span>
            <Icon name="book" size={13} /> EN LECTURA
          </span>
          <button aria-label="Más opciones">
            <Icon name="more" size={19} />
          </button>
        </div>
        <div className="continue-copy">
          <span className="soft-label">CAPÍTULO 12 · LA PUERTA VERDE</span>
          <h3>El jardín de las horas</h3>
          <p>Elena Valdemar</p>
          <div className="reading-progress-label">
            <span>Tu progreso</span>
            <b>68%</b>
          </div>
          <Progress value={68} light />
          <div className="reading-card-actions">
            <span>184 de 271 páginas</span>
            <button className="primary-btn light-btn" onClick={openReader}>
              <Icon name="play" size={15} /> Seguir leyendo
            </button>
          </div>
        </div>
      </article>
      <SectionTitle title="Actividad de amigos" link="Ver todo" onClick={() => go("friends")} />
      <div className="home-friend-activity">
        <article className="friend-card">
          <div className="friend-card-head">
            <Avatar name="Lucía Mar" tone={2} />
            <div>
              <b>Lucía Mar</b>
              <span>Hace 18 min</span>
            </div>
            <Cover index={2} small />
          </div>
          <p>
            Está leyendo <strong>Cartas a la luna</strong>
          </p>
          <div className="friend-progress-label">
            <span>Capítulo 8</span>
            <b>42%</b>
          </div>
          <Progress value={42} />
        </article>
        <article className="friend-card">
          <div className="friend-card-head">
            <Avatar name="Nora Abril" tone={3} />
            <div>
              <b>Nora Abril</b>
              <span>Hace 1 h</span>
            </div>
            <Cover index={4} small />
          </div>
          <p>
            Continúa con <strong>El jardín secreto</strong>
          </p>
          <div className="friend-progress-label">
            <span>Capítulo 6</span>
            <b>73%</b>
          </div>
          <Progress value={73} />
        </article>
      </div>
      <div className="friends-summary">
        <div className="mini-avatars">
          <Avatar name="Ana P" tone={0} size="sm" />
          <Avatar name="Eva R" tone={1} size="sm" />
          <Avatar name="Nora A" tone={3} size="sm" />
        </div>
        <p>
          <b>8 amigas</b> han leído hoy
        </p>
        <button onClick={() => go("friends")}>
          <Icon name="chevron" size={15} />
        </button>
      </div>
      <SectionTitle title="Para tu próxima lectura" link="Explorar" onClick={openSearch} />
      <div className="book-row home-recommendations">
        {covers.slice(1, 4).map((book, i) => (
          <button className="book-item" key={book.title} onClick={openSearch}>
            <div className="recommendation-cover">
              <Cover index={i + 1} />
              <span>{i === 0 ? "96% afín" : i === 1 ? "Popular" : "Un clásico"}</span>
            </div>
            <b>{book.title}</b>
            <span>{book.author}</span>
          </button>
        ))}
      </div>
      <SectionTitle title="Tu madriguera" link="Ver estadísticas" onClick={() => go("profile")} />
      <div className="stats-card home-stats">
        <div className="reading-streak">
          <span className="streak-mark">
            <Icon name="book" />
          </span>
          <div>
            <b>18 días</b>
            <span>Racha de lectura</span>
          </div>
          <small>Tu mejor racha</small>
        </div>
        <div className="stats-grid">
          <div>
            <b>24</b>
            <span>Terminados</span>
          </div>
          <div>
            <b>3</b>
            <span>En lectura</span>
          </div>
          <div>
            <b>86 h</b>
            <span>Este año</span>
          </div>
          <div>
            <b>4.8k</b>
            <span>Páginas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const shelfCatalog: Record<string, { color: string; description: string; books: number[] }> = {
  "Biblioteca personal": {
    color: "#7e668c",
    description: "Todos los libros guardados en tu madriguera.",
    books: [0, 1, 2, 3, 4],
  },
  "Fantasía botánica": {
    color: "#776082",
    description: "Bosques encantados, jardines imposibles y un poco de magia entre las hojas.",
    books: [0, 1, 4, 2],
  },
  "Lecturas de invierno": {
    color: "#758797",
    description: "Historias lentas para tardes de lluvia, mantas y una taza de té.",
    books: [2, 3, 0],
  },
  "Favoritos de siempre": {
    color: "#a56f68",
    description: "Los libros que siempre encuentran el camino de vuelta a mi mesilla.",
    books: [3, 0, 4, 1, 2],
  },
  "Por leer": {
    color: "#9b825e",
    description: "Próximas historias esperando su momento.",
    books: [1, 2, 4, 3],
  },
  Confort: {
    color: "#66857b",
    description: "Lecturas conocidas para volver a casa.",
    books: [4, 3, 0],
  },
  Clásicos: {
    color: "#876652",
    description: "Voces que siguen acompañándonos a través del tiempo.",
    books: [3, 4, 2, 0],
  },
};

type MarkerColor = { id: string; name: string; hex: string };
type MarkerPalette = {
  id: string;
  name: string;
  general: boolean;
  books: number[];
  colors: MarkerColor[];
};

const defaultMarkerPalettes: MarkerPalette[] = [
  {
    id: "garden",
    name: "Jardín de las horas",
    general: false,
    books: [0],
    colors: [
      { id: "g1", name: "Recuerdos", hex: "#c7a8cf" },
      { id: "g2", name: "Naturaleza", hex: "#8fb59a" },
      { id: "g3", name: "Misterios", hex: "#7fa6bd" },
      { id: "g4", name: "Frases favoritas", hex: "#e4c66d" },
    ],
  },
  {
    id: "thoughts",
    name: "Mis pensamientos",
    general: true,
    books: [],
    colors: [
      { id: "t1", name: "Romance", hex: "#dfa5b7" },
      { id: "t2", name: "Favoritas", hex: "#e5c867" },
      { id: "t3", name: "Reflexiones", hex: "#b99bc6" },
      { id: "t4", name: "Importante", hex: "#87b095" },
      { id: "t5", name: "Personajes", hex: "#82a8c2" },
    ],
  },
  {
    id: "night",
    name: "Noches de tinta",
    general: false,
    books: [2, 4],
    colors: [
      { id: "n1", name: "Luna", hex: "#a9b8d7" },
      { id: "n2", name: "Emoción", hex: "#c293ad" },
      { id: "n3", name: "Pistas", hex: "#d4a76d" },
    ],
  },
];

function loadMarkerPalettes() {
  try {
    const saved = localStorage.getItem("bunny-marker-palettes");
    return saved ? (JSON.parse(saved) as MarkerPalette[]) : defaultMarkerPalettes;
  } catch {
    return defaultMarkerPalettes;
  }
}

function ShelfBookDetail({
  bookIndex,
  shelfName,
  back,
  openReader,
}: {
  bookIndex: number;
  shelfName: string;
  back: () => void;
  openReader: () => void;
}) {
  const [tab, setTab] = useState<"info" | "notes" | "progress" | "shelf">("info");
  const book = covers[bookIndex % covers.length];
  const progress = [68, 24, 42, 100, 12][bookIndex % 5];
  return (
    <div className="shelf-inner book-detail-screen">
      <Header
        title="Ficha del libro"
        subtitle={shelfName}
        back
        onBack={back}
        action={
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        }
      />
      <section className="book-detail-hero">
        <Cover index={bookIndex} />
        <div>
          <span className="book-detail-status">{progress > 0 ? "EN LECTURA" : "POR LEER"}</span>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <div className="book-detail-progress">
            <span>Progreso</span>
            <b>{progress}%</b>
          </div>
          <Progress value={progress} />
          <small>
            {progress > 0
              ? `Capítulo ${Math.max(2, Math.round(progress / 6))} · 184 de 271 páginas`
              : "Aún no has comenzado"}
          </small>
        </div>
      </section>
      <div className="book-detail-actions">
        <button className="primary-btn" onClick={openReader}>
          <Icon name="play" size={16} /> {progress > 0 ? "Continuar leyendo" : "Comenzar a leer"}
        </button>
        <button onClick={() => setTab("notes")}>
          <Icon name="edit" />
          <span>Anotaciones</span>
        </button>
        <button>
          <Icon name="share" />
          <span>Compartir</span>
        </button>
      </div>
      <div className="book-detail-tabs">
        {[
          ["info", "Información"],
          ["notes", "Anotaciones"],
          ["progress", "Progreso"],
          ["shelf", "Estantería"],
        ].map(([value, label]) => (
          <button
            className={tab === value ? "active" : ""}
            onClick={() => setTab(value as typeof tab)}
            key={value}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "info" && (
        <div className="book-info-panel">
          <p>
            Una historia envolvente sobre los lugares que guardamos, la memoria y la magia
            silenciosa de comenzar de nuevo.
          </p>
          <div>
            <span>
              <b>Editorial</b>Ediciones Silvestres
            </span>
            <span>
              <b>Publicación</b>2022
            </span>
            <span>
              <b>Género</b>Fantasía
            </span>
            <span>
              <b>Formato</b>EPUB
            </span>
          </div>
        </div>
      )}
      {tab === "notes" && (
        <div className="book-notes-panel">
          <article>
            <i className="note-color lilac" />
            <p>“Todo lugar guarda una historia...”</p>
            <span>Capítulo 12 · Reflexiones</span>
          </article>
          <article>
            <i className="note-color gold" />
            <p>“El jardín parecía contener la respiración.”</p>
            <span>Capítulo 12 · Frases favoritas</span>
          </article>
        </div>
      )}
      {tab === "progress" && (
        <div className="book-progress-panel">
          <div className="progress-ring">
            <b>{progress}%</b>
            <span>completado</span>
          </div>
          <div>
            <p>
              <b>184</b> páginas leídas
            </p>
            <p>
              <b>6 h 24 min</b> de lectura
            </p>
            <p>
              <b>14</b> anotaciones
            </p>
          </div>
        </div>
      )}
      {tab === "shelf" && (
        <div className="book-shelf-panel">
          <div>
            <span style={{ background: shelfCatalog[shelfName]?.color }}>
              <Icon name="library" />
            </span>
            <div>
              <b>{shelfName}</b>
              <p>Estantería actual</p>
            </div>
            <i>✓</i>
          </div>
          <button>
            <Icon name="library" /> Mover a otra estantería <Icon name="chevron" />
          </button>
          <button className="remove-only">
            <Icon name="trash" /> Quitar de esta estantería
          </button>
          <small>El archivo original y tu progreso no se eliminarán.</small>
        </div>
      )}
    </div>
  );
}

function ShelfCollectionDetail({
  name,
  back,
  openSearch,
  openReader,
  openEdit,
}: {
  name: string;
  back: () => void;
  openSearch: () => void;
  openReader: () => void;
  openEdit: () => void;
}) {
  const shelf = shelfCatalog[name] ?? shelfCatalog["Fantasía botánica"];
  const [books, setBooks] = useState(shelf.books);
  const [query, setQuery] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [bookMenu, setBookMenu] = useState<number | null>(null);
  const visibleBooks = books.filter((index) =>
    `${covers[index % covers.length].title} ${covers[index % covers.length].author}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  if (selectedBook !== null) {
    return (
      <ShelfBookDetail
        bookIndex={selectedBook}
        shelfName={name}
        back={() => setSelectedBook(null)}
        openReader={openReader}
      />
    );
  }

  return (
    <div className="shelf-inner collection-detail-screen">
      <Header
        title={name}
        subtitle={`${books.length} libros en esta estantería`}
        back
        onBack={back}
        action={
          <button className="icon-btn" onClick={openEdit}>
            <Icon name="edit" size={18} />
          </button>
        }
      />
      <section
        className="collection-detail-hero"
        style={{ "--shelf-color": shelf.color } as React.CSSProperties}
      >
        <div className="collection-detail-cover">
          <span>{name[0]}</span>
          <div>
            {shelf.books.slice(0, 3).map((index) => (
              <Cover index={index} small key={index} />
            ))}
          </div>
        </div>
        <div>
          <span>COLECCIÓN PERSONAL</span>
          <h2>{name}</h2>
          <p>{shelf.description}</p>
          <button onClick={openEdit}>
            <Icon name="edit" size={13} /> Editar estantería
          </button>
        </div>
      </section>
      <div className="collection-search">
        <Icon name="search" size={17} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar dentro de esta estantería"
        />
        <button>
          <Icon name="filter" size={16} />
        </button>
      </div>
      <div className="collection-controls">
        <div>
          <button className="active">Todos</button>
          <button>En lectura</button>
          <button>Terminados</button>
        </div>
        <button>
          <Icon name="filter" size={15} /> Ordenar
        </button>
        <button
          onClick={() => setLayout(layout === "grid" ? "list" : "grid")}
          aria-label="Cambiar diseño"
        >
          <Icon name={layout === "grid" ? "library" : "book"} size={16} />
        </button>
      </div>
      <div className={`collection-books collection-books-${layout}`}>
        {visibleBooks.map((index, position) => {
          const book = covers[index % covers.length];
          const progress = [68, 24, 42, 100, 12][index % 5];
          return (
            <article className="collection-book-card" key={`${index}-${position}`}>
              <button className="collection-book-open" onClick={() => setSelectedBook(index)}>
                <Cover index={index} />
                <div>
                  <b>{book.title}</b>
                  <p>{book.author}</p>
                  <span>
                    Capítulo {Math.max(1, Math.round(progress / 7))} · {progress}%
                  </span>
                  <Progress value={progress} />
                </div>
              </button>
              <button className="collection-book-more" onClick={() => setBookMenu(index)}>
                <Icon name="more" size={17} />
              </button>
            </article>
          );
        })}
      </div>
      <div className="collection-add-actions">
        <button onClick={openSearch}>
          <Icon name="plus" />
          <div>
            <b>Añadir de mi biblioteca</b>
            <span>Busca libros que ya tienes</span>
          </div>
          <Icon name="chevron" />
        </button>
        <button>
          <Icon name="upload" />
          <div>
            <b>Importar nuevo EPUB</b>
            <span>Desde el almacenamiento</span>
          </div>
          <Icon name="chevron" />
        </button>
      </div>
      {bookMenu !== null && (
        <>
          <div className="scrim collection-menu-scrim" onClick={() => setBookMenu(null)} />
          <div className="bottom-sheet collection-book-menu">
            <div className="grabber" />
            <h3>{covers[bookMenu % covers.length].title}</h3>
            <button>
              <Icon name="library" /> Mover a otra estantería <Icon name="chevron" />
            </button>
            <button
              className="danger"
              onClick={() => {
                setBooks((current) => current.filter((item) => item !== bookMenu));
                setBookMenu(null);
              }}
            >
              <Icon name="trash" /> Quitar de esta estantería
            </button>
            <p>El archivo original permanecerá en tu biblioteca.</p>
          </div>
        </>
      )}
    </div>
  );
}

function MarkerPaletteEditor({
  initial,
  close,
  save,
}: {
  initial?: MarkerPalette;
  close: () => void;
  save: (palette: MarkerPalette) => void;
}) {
  const [name, setName] = useState(initial?.name ?? "Nueva paleta");
  const [general, setGeneral] = useState(initial?.general ?? true);
  const [assignedBooks, setAssignedBooks] = useState<number[]>(initial?.books ?? []);
  const [colors, setColors] = useState<MarkerColor[]>(
    initial?.colors ?? [{ id: `color-${Date.now()}`, name: "Nuevo color", hex: "#b99bc6" }],
  );
  const [bookPicker, setBookPicker] = useState(false);
  const [bookQuery, setBookQuery] = useState("");
  const [colorWheel, setColorWheel] = useState<string | null>(null);

  const updateColor = (id: string, patch: Partial<MarkerColor>) =>
    setColors((current) =>
      current.map((color) => (color.id === id ? { ...color, ...patch } : color)),
    );

  const moveColor = (index: number, direction: -1 | 1) => {
    const next = [...colors];
    const destination = index + direction;
    if (destination < 0 || destination >= next.length) return;
    [next[index], next[destination]] = [next[destination], next[index]];
    setColors(next);
  };

  const finish = () =>
    save({
      id: initial?.id ?? `palette-${Date.now()}`,
      name,
      general,
      books: general ? [] : assignedBooks,
      colors,
    });

  return (
    <div className="shelf-inner marker-editor">
      <Header
        title={initial ? "Editar paleta" : "Crear paleta"}
        subtitle="Personaliza tus resaltados y subrayados"
        back
        onBack={close}
        action={
          <button className="text-button" onClick={finish}>
            Guardar
          </button>
        }
      />
      <section className="palette-preview-card">
        <span>VISTA PREVIA</span>
        <h2>{name || "Paleta sin nombre"}</h2>
        <div>
          {colors.map((color) => (
            <i style={{ background: color.hex }} title={color.name} key={color.id} />
          ))}
        </div>
        <small>
          {colors.length} colores ·{" "}
          {general ? "Todos los libros" : `${assignedBooks.length} libros designados`}
        </small>
      </section>
      <label className="marker-field">
        Nombre de la paleta
        <input value={name} onChange={(event) => setName(event.target.value)} maxLength={36} />
        <span>{name.length}/36</span>
      </label>
      <div className="marker-section-heading">
        <div>
          <b>Colores</b>
          <span>Pulsa para editar · Arrastra para ordenar</span>
        </div>
        <button
          onClick={() =>
            setColors((current) => [
              ...current,
              { id: `color-${Date.now()}`, name: "Nuevo color", hex: "#d9b07a" },
            ])
          }
        >
          <Icon name="plus" size={14} /> Añadir
        </button>
      </div>
      <div className="marker-colors-editor">
        {colors.map((color, index) => (
          <article key={color.id}>
            <button className="drag-color" aria-label="Reordenar">
              <Icon name="more" size={16} />
            </button>
            <button
              className="color-swatch-edit"
              style={{ background: color.hex }}
              onClick={() => setColorWheel(color.id)}
            />
            <div>
              <input
                value={color.name}
                onChange={(event) => updateColor(color.id, { name: event.target.value })}
              />
              <label>
                <span>#</span>
                <input
                  value={color.hex.replace("#", "")}
                  onChange={(event) =>
                    updateColor(color.id, {
                      hex: `#${event.target.value.replace("#", "").slice(0, 6)}`,
                    })
                  }
                />
              </label>
            </div>
            <div className="color-order-actions">
              <button onClick={() => moveColor(index, -1)}>↑</button>
              <button onClick={() => moveColor(index, 1)}>↓</button>
              <button
                onClick={() =>
                  setColors((current) => current.filter((item) => item.id !== color.id))
                }
              >
                <Icon name="trash" size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <button
        className="extract-cover-colors"
        onClick={() =>
          setColors((current) => [
            ...current,
            { id: `cover-dark-${Date.now()}`, name: "Sombra de portada", hex: "#4d3f5b" },
            { id: `cover-lilac-${Date.now()}`, name: "Lila de portada", hex: "#8c748f" },
            { id: `cover-gold-${Date.now()}`, name: "Dorado de portada", hex: "#c9aa78" },
          ])
        }
      >
        <span>
          <Icon name="image" />
        </span>
        <div>
          <b>Extraer colores de una portada</b>
          <p>Crea una armonía basada en uno de tus libros</p>
        </div>
        <div className="extracted-colors">
          <i style={{ background: "#4d3f5b" }} />
          <i style={{ background: "#8c748f" }} />
          <i style={{ background: "#c9aa78" }} />
        </div>
        <Icon name="chevron" />
      </button>
      <div className="marker-section-heading assign-heading">
        <div>
          <b>Designar libro</b>
          <span>Decide dónde aparecerá primero esta paleta</span>
        </div>
      </div>
      <div className="palette-scope">
        <button className={general ? "active" : ""} onClick={() => setGeneral(true)}>
          <span>
            <Icon name="library" />
          </span>
          <div>
            <b>Paleta general</b>
            <p>Disponible para todos tus libros</p>
          </div>
          <i>{general ? "✓" : ""}</i>
        </button>
        <button
          className={!general ? "active" : ""}
          onClick={() => {
            setGeneral(false);
            setBookPicker(true);
          }}
        >
          <span>
            <Icon name="book" />
          </span>
          <div>
            <b>Paleta asignada</b>
            <p>Prioritaria en libros seleccionados</p>
          </div>
          <i>{!general ? "✓" : ""}</i>
        </button>
      </div>
      {!general && (
        <div className="assigned-books-preview">
          <div>
            {assignedBooks.map((index) => (
              <button
                key={index}
                onClick={() =>
                  setAssignedBooks((current) => current.filter((item) => item !== index))
                }
              >
                <Cover index={index} small />
                <i>
                  <Icon name="close" size={9} />
                </i>
              </button>
            ))}
          </div>
          <button onClick={() => setBookPicker(true)}>
            <Icon name="plus" size={14} />{" "}
            {assignedBooks.length ? "Cambiar asignaciones" : "Seleccionar libros"}
          </button>
        </div>
      )}
      <button className="primary-btn full marker-save" onClick={finish}>
        {initial ? "Guardar cambios" : "Crear paleta"}
      </button>

      {colorWheel && (
        <>
          <div className="scrim" onClick={() => setColorWheel(null)} />
          <div className="bottom-sheet color-wheel-sheet">
            <div className="grabber" />
            <div className="sheet-heading">
              <div>
                <span className="sheet-eyebrow">COLOR PERSONALIZADO</span>
                <h2>Rueda cromática</h2>
              </div>
              <button onClick={() => setColorWheel(null)}>
                <Icon name="close" />
              </button>
            </div>
            <div className="color-wheel-visual">
              <span style={{ background: colors.find((color) => color.id === colorWheel)?.hex }} />
            </div>
            <div className="color-wheel-values">
              <label>
                HEX
                <input
                  value={colors.find((color) => color.id === colorWheel)?.hex ?? ""}
                  onChange={(event) => updateColor(colorWheel, { hex: event.target.value })}
                />
              </label>
              <label>
                Opacidad
                <input type="range" defaultValue="80" />
              </label>
            </div>
            <div className="saved-color-row">
              {["#e5c867", "#dfa5b7", "#b99bc6", "#87b095", "#82a8c2"].map((hex) => (
                <button
                  style={{ background: hex }}
                  onClick={() => updateColor(colorWheel, { hex })}
                  key={hex}
                />
              ))}
            </div>
            <button className="primary-btn full" onClick={() => setColorWheel(null)}>
              Aplicar color
            </button>
          </div>
        </>
      )}
      {bookPicker && (
        <>
          <div className="scrim" onClick={() => setBookPicker(false)} />
          <div className="bottom-sheet designate-books-sheet">
            <div className="grabber" />
            <div className="sheet-heading">
              <div>
                <span className="sheet-eyebrow">DESIGNAR LIBRO</span>
                <h2>Elige uno o varios libros</h2>
              </div>
              <button onClick={() => setBookPicker(false)}>
                <Icon name="close" />
              </button>
            </div>
            <label className="message-search">
              <Icon name="search" size={16} />
              <input
                value={bookQuery}
                onChange={(event) => setBookQuery(event.target.value)}
                placeholder="Buscar en tu biblioteca"
              />
            </label>
            <div className="designate-book-list">
              {covers.map(
                (book, index) =>
                  `${book.title} ${book.author}`
                    .toLowerCase()
                    .includes(bookQuery.toLowerCase()) && (
                    <button
                      className={assignedBooks.includes(index) ? "active" : ""}
                      onClick={() =>
                        setAssignedBooks((current) =>
                          current.includes(index)
                            ? current.filter((item) => item !== index)
                            : [...current, index],
                        )
                      }
                      key={book.title}
                    >
                      <Cover index={index} small />
                      <div>
                        <b>{book.title}</b>
                        <span>{book.author}</span>
                      </div>
                      <i>{assignedBooks.includes(index) ? "✓" : ""}</i>
                    </button>
                  ),
              )}
            </div>
            <div className="designate-actions">
              <span>{assignedBooks.length} seleccionados</span>
              <button
                className="primary-btn"
                onClick={() => {
                  setGeneral(false);
                  setBookPicker(false);
                }}
              >
                Confirmar asignación
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MarkersManager() {
  const [palettes, setPalettes] = useState<MarkerPalette[]>(loadMarkerPalettes);
  const [editing, setEditing] = useState<MarkerPalette | "new" | null>(null);
  const [deleting, setDeleting] = useState<MarkerPalette | null>(null);

  const persist = (next: MarkerPalette[]) => {
    setPalettes(next);
    localStorage.setItem("bunny-marker-palettes", JSON.stringify(next));
  };

  const savePalette = (palette: MarkerPalette) => {
    persist(
      palettes.some((item) => item.id === palette.id)
        ? palettes.map((item) => (item.id === palette.id ? palette : item))
        : [...palettes, palette],
    );
    setEditing(null);
  };

  if (editing) {
    return (
      <MarkerPaletteEditor
        initial={editing === "new" ? undefined : editing}
        close={() => setEditing(null)}
        save={savePalette}
      />
    );
  }

  return (
    <div className="markers-manager">
      <div className="markers-hero">
        <div>
          <span>TUS COLORES DE LECTURA</span>
          <h2>Mis marcadores</h2>
          <p>Organiza las paletas que utilizas para resaltar, subrayar y recordar.</p>
        </div>
        <div className="markers-hero-samples">
          {["#dfa5b7", "#e5c867", "#b99bc6", "#87b095"].map((hex) => (
            <i style={{ background: hex }} key={hex} />
          ))}
        </div>
      </div>
      <div className="markers-toolbar">
        <div>
          <b>{palettes.length} paletas</b>
          <span>Sincronizadas con tu cuenta</span>
        </div>
        <button onClick={() => setEditing("new")}>
          <Icon name="plus" size={15} /> Crear paleta
        </button>
      </div>
      <div className="palette-list">
        {palettes.map((palette) => (
          <article className="palette-card" key={palette.id}>
            <div className="palette-card-head">
              <div>
                <span className={palette.general ? "general" : "assigned"}>
                  {palette.general ? "GENERAL" : "ASIGNADA"}
                </span>
                <h3>{palette.name}</h3>
              </div>
              <button onClick={() => setEditing(palette)}>
                <Icon name="edit" size={14} />
              </button>
            </div>
            <div className="palette-color-preview">
              {palette.colors.map((color) => (
                <span style={{ background: color.hex }} key={color.id}>
                  <i>{color.name}</i>
                </span>
              ))}
            </div>
            <div className="palette-meta">
              <span>{palette.colors.length} colores</span>
              <i>·</i>
              <span>
                {palette.general ? "Todos los libros" : `${palette.books.length} libros asignados`}
              </span>
            </div>
            {!palette.general && (
              <div className="palette-books">
                {palette.books.map((index) => (
                  <Cover index={index} small key={index} />
                ))}
                <span>Prioritaria en estos libros</span>
              </div>
            )}
            <div className="palette-card-actions">
              <button onClick={() => setEditing(palette)}>
                <Icon name="edit" size={13} /> Editar
              </button>
              <button
                onClick={() =>
                  persist([
                    ...palettes,
                    {
                      ...palette,
                      id: `copy-${Date.now()}`,
                      name: `${palette.name} · copia`,
                      colors: palette.colors.map((color) => ({
                        ...color,
                        id: `${color.id}-${Date.now()}`,
                      })),
                    },
                  ])
                }
              >
                <Icon name="plus" size={13} /> Duplicar
              </button>
              <button onClick={() => setDeleting(palette)}>
                <Icon name="trash" size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <button className="new-palette-card" onClick={() => setEditing("new")}>
        <span>
          <Icon name="plus" />
        </span>
        <div>
          <b>Crear una nueva paleta</b>
          <p>Añade tantos colores como necesites</p>
        </div>
        <Icon name="chevron" />
      </button>
      {deleting && (
        <>
          <div className="scrim" onClick={() => setDeleting(null)} />
          <div className="bottom-sheet delete-palette-sheet">
            <div className="grabber" />
            <span>
              <Icon name="trash" />
            </span>
            <h2>¿Eliminar “{deleting.name}”?</h2>
            <p>
              Los resaltados existentes conservarán su color, pero la paleta dejará de estar
              disponible.
            </p>
            <div>
              <button onClick={() => setDeleting(null)}>Cancelar</button>
              <button
                onClick={() => {
                  persist(palettes.filter((item) => item.id !== deleting.id));
                  setDeleting(null);
                }}
              >
                Eliminar paleta
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Shelf({
  openSearch,
  openReader,
  openShelf,
}: {
  openSearch: () => void;
  openReader: () => void;
  openShelf: (mode: "create" | "edit") => void;
}) {
  const [view, setView] = useState<"library" | "collections" | "markers">("library");
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedLibraryBook, setSelectedLibraryBook] = useState<number | null>(null);

  if (selectedLibraryBook !== null) {
    return (
      <div className="screen-content shelf-screen">
        <ShelfBookDetail
          bookIndex={selectedLibraryBook}
          shelfName="Biblioteca personal"
          back={() => setSelectedLibraryBook(null)}
          openReader={openReader}
        />
      </div>
    );
  }

  if (selectedCollection) {
    return (
      <div className="screen-content shelf-screen">
        <ShelfCollectionDetail
          name={selectedCollection}
          back={() => setSelectedCollection(null)}
          openSearch={openSearch}
          openReader={openReader}
          openEdit={() => openShelf("edit")}
        />
      </div>
    );
  }

  return (
    <div className="screen-content shelf-screen">
      <Header
        title="La estantería"
        subtitle="32 libros en tu madriguera"
        action={
          <button className="icon-btn filled" onClick={() => openShelf("create")}>
            <Icon name="plus" />
          </button>
        }
      />
      <SearchBar onClick={openSearch} />
      <div className="shelf-tabs">
        <button className={view === "library" ? "active" : ""} onClick={() => setView("library")}>
          Biblioteca
        </button>
        <button
          className={view === "collections" ? "active" : ""}
          onClick={() => setView("collections")}
        >
          Mis colecciones
        </button>
        <button className={view === "markers" ? "active" : ""} onClick={() => setView("markers")}>
          Mis marcadores
        </button>
      </div>
      {view === "library" ? (
        <>
          <div className="library-heading">
            <div>
              <span>TODOS LOS LIBROS</span>
              <b>Tu biblioteca personal</b>
            </div>
            <button>
              <Icon name="filter" size={16} /> Ordenar
            </button>
          </div>
          <div className="wood-library">
            <div className="wood-library-top">
              <span>MI MADRIGUERA</span>
              <i>32 volúmenes</i>
            </div>
            <div className="wood-row">
              <div className="shelf-books">
                {covers.slice(0, 4).map((book, i) => (
                  <button
                    className={`shelved-book book-height-${i}`}
                    key={book.title}
                    onClick={() => setSelectedLibraryBook(i)}
                    aria-label={book.title}
                  >
                    <Cover index={i} />
                    {i === 0 && <span className="reading-ribbon">68%</span>}
                  </button>
                ))}
              </div>
              <div className="wood-plank">
                <span />
              </div>
            </div>
            <div className="wood-row">
              <div className="shelf-books">
                {covers
                  .concat(covers)
                  .slice(4, 8)
                  .map((book, i) => (
                    <button
                      className={`shelved-book book-height-${3 - (i % 4)}`}
                      key={`${book.title}${i}`}
                      onClick={() => setSelectedLibraryBook((i + 4) % covers.length)}
                      aria-label={book.title}
                    >
                      <Cover index={i + 4} />
                    </button>
                  ))}
                <button className="shelf-bookend" onClick={openSearch}>
                  <Icon name="plus" />
                  <span>Añadir</span>
                </button>
              </div>
              <div className="wood-plank">
                <span />
              </div>
            </div>
          </div>
          <button className="import-banner shelf-import">
            <span>
              <Icon name="upload" />
            </span>
            <div>
              <b>Importar un EPUB</b>
              <p>Añade libros desde tu dispositivo</p>
            </div>
            <Icon name="chevron" />
          </button>
        </>
      ) : view === "collections" ? (
        <>
          <div className="collections-intro">
            <div>
              <span>6 COLECCIONES</span>
              <h2>Cada libro tiene su rincón</h2>
            </div>
            <div className="collection-leaf">❧</div>
          </div>
          <div className="collection-grid">
            {[
              ["Fantasía botánica", "4 libros", "#776082"],
              ["Lecturas de invierno", "3 libros", "#758797"],
              ["Favoritos de siempre", "5 libros", "#a56f68"],
              ["Por leer", "4 libros", "#9b825e"],
              ["Confort", "3 libros", "#66857b"],
              ["Clásicos", "4 libros", "#876652"],
            ].map(([name, count, color], i) => (
              <article className="collection-card" key={name}>
                <button
                  className="collection-edit"
                  onClick={() => openShelf("edit")}
                  aria-label={`Editar ${name}`}
                >
                  <Icon name="edit" size={14} />
                </button>
                <button
                  className="collection-cover"
                  style={{ background: color }}
                  onClick={() => setSelectedCollection(name)}
                >
                  <span className="collection-letter">{name[0]}</span>
                  <div className="collection-mini-books">
                    {[i, i + 1, i + 2].map((x) => (
                      <Cover index={x} small key={x} />
                    ))}
                  </div>
                </button>
                <div className="collection-info">
                  <b>{name}</b>
                  <span>{count}</span>
                </div>
              </article>
            ))}
            <button className="new-collection-card" onClick={() => openShelf("create")}>
              <span>
                <Icon name="plus" />
              </span>
              <b>Nueva colección</b>
              <small>Crea otro rincón</small>
            </button>
          </div>
          <button className="new-shelf wide" onClick={() => openShelf("create")}>
            <Icon name="plus" /> Crear una estantería personalizada
          </button>
        </>
      ) : (
        <MarkersManager />
      )}
    </div>
  );
}

function Groups({ openGroup, openCreate }: { openGroup: () => void; openCreate: () => void }) {
  return (
    <div className="screen-content groups-screen">
      <Header
        title="Círculos de lectura"
        subtitle="Historias que se disfrutan en compañía"
        action={
          <button className="icon-btn filled" onClick={openCreate}>
            <Icon name="plus" />
          </button>
        }
      />
      <div className="groups-welcome">
        <div className="group-welcome-copy">
          <span>TU LECTURA ACTIVA</span>
          <h2>Un rincón para leer juntas</h2>
          <p>Comparte ideas sin miedo a spoilers y avanza a tu propio ritmo.</p>
        </div>
        <div className="group-welcome-avatars">
          <Avatar name="Nora Abril" tone={3} size="sm" />
          <Avatar name="Lucía Mar" tone={2} size="sm" />
          <Avatar name="Ana Sol" tone={1} size="sm" />
        </div>
      </div>
      <SectionTitle title="Continúa con tu grupo" link="Ver todos" />
      <div
        className="group-feature social-group-feature"
        onClick={openGroup}
        role="button"
        tabIndex={0}
      >
        <div className="group-art">
          <Cover index={3} />
        </div>
        <span className="live-pill">
          <i /> 8 leyendo
        </span>
        <div className="group-feature-copy">
          <span>CLÁSICOS CON TÉ</span>
          <h2>Mujercitas</h2>
          <p>Capítulos 8–12 · Semana 3 de 6</p>
          <Progress value={54} light />
          <div className="feature-group-footer">
            <div className="mini-avatars">
              <Avatar name="Ana P" tone={0} size="sm" />
              <Avatar name="Eva R" tone={2} size="sm" />
              <Avatar name="Nora A" tone={3} size="sm" />
              <span>+5</span>
            </div>
            <b>54% del grupo</b>
          </div>
        </div>
      </div>
      <SectionTitle title="Tus círculos" link="Explorar" />
      {[
        ["Madriguera nocturna", "Cartas a la luna", "7 integrantes", 3, 38, 2],
        ["Jardines y misterios", "El jardín secreto", "10 integrantes", 5, 71, 4],
      ].map((g, i) => (
        <button className="group-row detailed-group-row" onClick={openGroup} key={g[0]}>
          <div className="group-row-cover">
            <Cover index={g[5] as number} small />
          </div>
          <div className="group-row-copy">
            <b>{g[0]}</b>
            <p>
              {g[1]} · {g[2]}
            </p>
            <div className="group-progress-line">
              <Progress value={g[4] as number} />
              <span>{g[4]}%</span>
            </div>
            <small>
              Tu capítulo: {i === 0 ? "8" : "6"} · {i === 0 ? "2 mensajes nuevos" : "Al día"}
            </small>
          </div>
          <div className="mini-avatars">
            <Avatar name="Ana P" tone={i} size="sm" />
            <Avatar name="Eva R" tone={i + 2} size="sm" />
            <span>+{g[3]}</span>
          </div>
        </button>
      ))}
      <div className="create-group-banner">
        <span className="create-group-mark">
          <Icon name="groups" />
        </span>
        <div>
          <b>Crea tu propio círculo</b>
          <p>Elige un libro e invita a tus amistades.</p>
        </div>
        <button onClick={openCreate}>
          <Icon name="plus" size={17} />
        </button>
      </div>
      <SectionTitle title="Próximo encuentro" />
      <div className="event-card">
        <div className="date-box">
          <b>18</b>
          <span>JUN</span>
        </div>
        <div>
          <span className="event-label">MAÑANA</span>
          <b>Conversación: capítulos 8–12</b>
          <p>Clásicos con té · 19:00 · 8 participantes</p>
        </div>
        <Icon name="chevron" />
      </div>
    </div>
  );
}

function Messages({ openGroup }: { openGroup: () => void }) {
  const [view, setView] = useState<"inbox" | "chat" | "requests" | "profile">("inbox");
  const [filter, setFilter] = useState<"all" | "unread" | "groups">("all");
  const [query, setQuery] = useState("");
  const [activeUser, setActiveUser] = useState("Lucía Mar");
  const [composer, setComposer] = useState("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [attachmentMenu, setAttachmentMenu] = useState(false);
  const [pendingShare, setPendingShare] = useState<string | null>(null);
  const [messageMenu, setMessageMenu] = useState<number | null>(null);
  const [deletedOwnMessage, setDeletedOwnMessage] = useState(false);
  const [replying, setReplying] = useState<string | null>(null);
  const [followed, setFollowed] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const [messagePrivacy, setMessagePrivacy] = useState("Personas que sigo");
  const [requestNotice, setRequestNotice] = useState<string | null>(null);
  const conversations = [
    {
      name: "Lucía Mar",
      preview: "Ese fragmento también me hizo pensar en...",
      time: "18:42",
      unread: 2,
      tone: 2,
      online: true,
      image: true,
      group: false,
    },
    {
      name: "Nora Abril",
      preview: "Te compartió una frase de El jardín secreto",
      time: "16:08",
      unread: 0,
      tone: 3,
      online: true,
      image: false,
      group: false,
    },
    {
      name: "Clásicos con té",
      preview: "Ana: Nos vemos mañana para comentar...",
      time: "12:25",
      unread: 5,
      tone: 0,
      online: false,
      image: false,
      group: true,
    },
    {
      name: "Mateo Linde",
      preview: "Gracias por la recomendación, lo añado.",
      time: "Ayer",
      unread: 0,
      tone: 0,
      online: false,
      image: false,
      group: false,
    },
  ];
  const visibleConversations = conversations.filter((conversation) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && conversation.unread > 0) ||
      (filter === "groups" && conversation.group);
    return matchesFilter && conversation.name.toLowerCase().includes(query.toLowerCase());
  });

  const openConversation = (name: string, group: boolean) => {
    if (group) {
      openGroup();
      return;
    }
    setActiveUser(name);
    setView("chat");
  };

  const sendMessage = () => {
    if (!composer.trim() && !pendingShare) return;
    setSentMessages((current) => [...current, composer.trim() || `Compartiste: ${pendingShare}`]);
    setComposer("");
    setPendingShare(null);
    setReplying(null);
  };

  if (view === "profile") {
    return (
      <div className="screen-content message-profile-view">
        <Header
          title="Perfil lector"
          back
          onBack={() => setView("chat")}
          action={
            <button className="icon-btn">
              <Icon name="share" />
            </button>
          }
        />
        <div className="message-profile-cover profile-cover-forest">
          <span className="cover-rabbit-mark">⌇</span>
        </div>
        <section className="message-profile-hero">
          <Avatar name={activeUser} tone={2} size="lg" />
          <span className="online-label">
            <i /> EN LÍNEA
          </span>
          <h2>{activeUser}</h2>
          <small>@luciaentrepaginas</small>
          <p>
            Leo para encontrar jardines, casas antiguas y personajes que se sienten como amigas.
          </p>
          <div>
            <span>
              <b>2,4 mil</b> seguidores
            </span>
            <span>
              <b>47</b> libros
            </span>
            <span>
              <b>6</b> grupos
            </span>
          </div>
          <button className={followed ? "following" : ""} onClick={() => setFollowed(!followed)}>
            {followed ? "Siguiendo" : "Seguir"}
          </button>
        </section>
        <SectionTitle title="Actualmente leyendo" />
        <div className="message-profile-book">
          <Cover index={2} small />
          <div>
            <b>Cartas a la luna</b>
            <span>Inés Montalvo · Capítulo 8</span>
            <Progress value={42} />
          </div>
        </div>
        <SectionTitle title="Libros públicos" link="Ver todos" />
        <div className="book-row">
          {[2, 4, 0].map((index) => (
            <button className="book-item" key={index}>
              <Cover index={index} />
              <b>{covers[index].title}</b>
              <span>{covers[index].author}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (view === "requests") {
    return (
      <div className="screen-content message-requests">
        <Header
          title="Solicitudes"
          subtitle="Personas fuera de tu círculo"
          back
          onBack={() => setView("inbox")}
        />
        <div className="message-privacy-card">
          <span>
            <Icon name="lock" />
          </span>
          <div>
            <b>Quién puede enviarte mensajes</b>
            <p>{messagePrivacy}</p>
          </div>
          <select
            value={messagePrivacy}
            onChange={(event) => setMessagePrivacy(event.target.value)}
          >
            <option>Todos</option>
            <option>Personas que sigo</option>
            <option>Solo seguidores</option>
            <option>Nadie</option>
          </select>
        </div>
        <p className="message-section-label">PENDIENTES · {blocked ? "1" : "2"}</p>
        {requestNotice && (
          <div className="request-notice">
            <Icon name="message" size={14} /> {requestNotice}
          </div>
        )}
        <article className="message-request-card">
          <Avatar name="Elena Bosque" tone={1} />
          <div>
            <b>Elena Bosque</b>
            <span>@elena.lee · 3 libros en común</span>
            <p>Hola, vi tu estantería de fantasía botánica y quería recomendarte...</p>
          </div>
          <div className="request-actions">
            <button onClick={() => setRequestNotice("Solicitud aceptada. Ya podéis conversar.")}>
              Aceptar
            </button>
            <button onClick={() => setRequestNotice("Solicitud rechazada.")}>Rechazar</button>
            <button onClick={() => setBlocked(true)}>
              <Icon name="lock" size={13} /> Bloquear
            </button>
            <button onClick={() => setRequestNotice("Reporte enviado para revisión.")}>
              <Icon name="more" size={13} /> Reportar
            </button>
          </div>
        </article>
        {!blocked ? (
          <article className="message-request-card">
            <Avatar name="Tomás Río" tone={0} />
            <div>
              <b>Tomás Río</b>
              <span>@rioentrelibros · Sin conexiones</span>
              <p>Te envió una solicitud para conversar.</p>
            </div>
            <div className="request-actions">
              <button onClick={() => setRequestNotice("Solicitud aceptada. Ya podéis conversar.")}>
                Aceptar
              </button>
              <button onClick={() => setRequestNotice("Solicitud rechazada.")}>Rechazar</button>
              <button onClick={() => setBlocked(true)}>
                <Icon name="lock" size={13} /> Bloquear
              </button>
              <button onClick={() => setRequestNotice("Reporte enviado para revisión.")}>
                <Icon name="more" size={13} /> Reportar
              </button>
            </div>
          </article>
        ) : (
          <div className="blocked-message-state">
            <Icon name="lock" />
            <b>Usuario bloqueado</b>
            <p>Ya no podrá enviarte mensajes ni ver tu actividad privada.</p>
            <button onClick={() => setBlocked(false)}>Desbloquear</button>
          </div>
        )}
      </div>
    );
  }

  if (view === "chat") {
    const offline = activeUser === "Mateo Linde";
    return (
      <div className="screen-content direct-chat-screen">
        <header className="direct-chat-header">
          <button onClick={() => setView("inbox")}>
            <Icon name="arrow" />
          </button>
          <button className="chat-person" onClick={() => setView("profile")}>
            <span className="chat-avatar-wrap">
              <Avatar name={activeUser} tone={activeUser === "Nora Abril" ? 3 : 2} size="sm" />
              {!offline && <i />}
            </span>
            <div>
              <b>{activeUser}</b>
              <span>{offline ? "Última vez ayer" : "En línea"}</span>
            </div>
          </button>
          <button>
            <Icon name="search" />
          </button>
          <button>
            <Icon name="more" />
          </button>
        </header>
        {offline && (
          <div className="chat-offline-banner">
            <Icon name="eye" size={14} /> Sin conexión · Los mensajes se enviarán cuando vuelvas a
            conectarte.
          </div>
        )}
        <div className="direct-chat-content">
          <div className="chat-date-divider">
            <span>HOY</span>
          </div>
          <div className="direct-message incoming">
            <Avatar name={activeUser} tone={2} size="sm" />
            <div>
              <p>He llegado a la frase que compartiste ayer. Tenías razón, es preciosa.</p>
              <span>18:34</span>
              <div className="direct-message-actions">
                <button
                  onClick={() => setReplying("He llegado a la frase que compartiste ayer...")}
                >
                  Responder
                </button>
                <button>♡ 2</button>
              </div>
            </div>
          </div>
          <div className="shared-literary-card">
            <div className="shared-card-label">
              <Icon name="bookmark" size={13} /> FRAGMENTO COMPARTIDO
            </div>
            <blockquote>
              “Hay jardines que solo florecen cuando alguien se atreve a recordarlos.”
            </blockquote>
            <div>
              <Cover index={4} small />
              <span>
                <b>El jardín secreto</b>Frances H. Burnett · Capítulo 6
              </span>
            </div>
            <small>Fragmento breve compartido respetando los límites de contenido.</small>
          </div>
          <div className="direct-message outgoing">
            <div onClick={() => setMessageMenu(messageMenu === 1 ? null : 1)}>
              <p>
                {deletedOwnMessage
                  ? "Mensaje eliminado"
                  : "Es de esas frases que se quedan contigo. Creo que este libro te va a encantar."}
              </p>
              <span>{deletedOwnMessage ? "Eliminado para ti" : "18:38 · Leído"}</span>
              {messageMenu === 1 && !deletedOwnMessage && (
                <div className="message-context-actions">
                  <button onClick={() => setReplying("Es de esas frases que se quedan contigo...")}>
                    <Icon name="message" size={13} /> Responder
                  </button>
                  <button
                    onClick={() =>
                      navigator.clipboard?.writeText("Es de esas frases que se quedan contigo.")
                    }
                  >
                    <span>Aa</span> Copiar
                  </button>
                  <button
                    onClick={() => {
                      setDeletedOwnMessage(true);
                      setMessageMenu(null);
                    }}
                  >
                    <Icon name="trash" size={13} /> Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="shared-book-message">
            <Cover index={0} small />
            <div>
              <span>RECOMENDACIÓN</span>
              <b>El jardín de las horas</b>
              <p>Elena Valdemar</p>
              <button>
                Ver libro <Icon name="chevron" size={12} />
              </button>
            </div>
          </div>
          {sentMessages.map((message, index) => (
            <div className="direct-message outgoing" key={`${message}-${index}`}>
              <div>
                <p>{message}</p>
                <span>Ahora · Enviado ✓</span>
              </div>
            </div>
          ))}
        </div>
        {replying && (
          <div className="reply-preview">
            <div>
              <b>Respondiendo a {activeUser}</b>
              <p>{replying}</p>
            </div>
            <button onClick={() => setReplying(null)}>
              <Icon name="close" size={14} />
            </button>
          </div>
        )}
        {attachmentMenu && (
          <div className="message-attachment-menu">
            {[
              ["book", "Libro", "Tu biblioteca"],
              ["bookmark", "Frase", "Fragmento breve"],
              ["edit", "Nota", "Anotación de lectura"],
              ["image", "Tarjeta", "Imagen personalizada"],
              ["upload", "Imagen", "Desde el dispositivo"],
            ].map(([icon, title, text]) => (
              <button
                key={title}
                onClick={() => {
                  setPendingShare(title);
                  setAttachmentMenu(false);
                }}
              >
                <span>
                  <Icon name={icon as IconName} />
                </span>
                <b>{title}</b>
                <small>{text}</small>
              </button>
            ))}
          </div>
        )}
        {pendingShare && (
          <div className="pending-share-preview">
            <span>
              <Icon
                name={
                  pendingShare === "Imagen" || pendingShare === "Tarjeta"
                    ? "image"
                    : pendingShare === "Libro"
                      ? "book"
                      : "bookmark"
                }
              />
            </span>
            <div>
              <b>{pendingShare} lista para compartir</b>
              <p>Se enviará junto a tu mensaje.</p>
            </div>
            <button onClick={() => setPendingShare(null)}>
              <Icon name="close" size={14} />
            </button>
          </div>
        )}
        <div className="direct-chat-composer">
          <button onClick={() => setAttachmentMenu(!attachmentMenu)}>
            <Icon name={attachmentMenu ? "close" : "plus"} />
          </button>
          <button
            className="sticker-button"
            aria-label="Stickers"
            onClick={() => setComposer((value) => `${value} ✦`)}
          >
            ✦
          </button>
          <div>
            <input
              value={composer}
              onChange={(event) => setComposer(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
              placeholder="Escribe un mensaje..."
            />
            <button
              onClick={() => setComposer((value) => `${value} ♡`)}
              aria-label="Añadir reacción"
            >
              ♡
            </button>
          </div>
          <button className="message-send" onClick={sendMessage}>
            <Icon name="send" size={17} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-content messages-inbox">
      <Header
        title="Mensajes"
        subtitle="Tu rincón para conversar sobre libros"
        action={
          <button
            className="icon-btn filled"
            onClick={() => {
              setActiveUser("Nora Abril");
              setView("chat");
            }}
          >
            <Icon name="edit" size={17} />
          </button>
        }
      />
      <label className="message-search">
        <Icon name="search" size={17} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar conversaciones"
        />
      </label>
      <div className="message-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          Todos
        </button>
        <button className={filter === "unread" ? "active" : ""} onClick={() => setFilter("unread")}>
          No leídos <i>7</i>
        </button>
        <button className={filter === "groups" ? "active" : ""} onClick={() => setFilter("groups")}>
          Grupos
        </button>
      </div>
      <button className="message-requests-link" onClick={() => setView("requests")}>
        <span>
          <Icon name="message" />
        </span>
        <div>
          <b>Solicitudes de mensajes</b>
          <p>2 personas quieren conversar contigo</p>
        </div>
        <i>2</i>
        <Icon name="chevron" />
      </button>
      <div className="inbox-heading">
        <b>Conversaciones</b>
        <span>{visibleConversations.length} activas</span>
      </div>
      {visibleConversations.length ? (
        <div className="conversation-list">
          {visibleConversations.map((conversation) => (
            <button
              className={conversation.unread ? "conversation-row unread" : "conversation-row"}
              onClick={() => openConversation(conversation.name, conversation.group)}
              key={conversation.name}
            >
              <span className="conversation-avatar">
                {conversation.group ? (
                  <span className="group-conversation-avatar">
                    <Icon name="groups" />
                  </span>
                ) : (
                  <Avatar name={conversation.name} tone={conversation.tone} />
                )}
                {conversation.online && <i />}
              </span>
              <div>
                <div>
                  <b>{conversation.name}</b>
                  <time>{conversation.time}</time>
                </div>
                <p>{conversation.preview}</p>
                {conversation.image && (
                  <span className="shared-preview">
                    <Icon name="image" size={11} /> Imagen compartida
                  </span>
                )}
              </div>
              {conversation.unread > 0 && <i className="unread-count">{conversation.unread}</i>}
            </button>
          ))}
        </div>
      ) : (
        <div className="empty-inbox-state">
          <span>
            <Icon name="message" />
          </span>
          <b>No hay conversaciones aquí</b>
          <p>Prueba otro filtro o inicia una conversación con una persona lectora.</p>
          <button
            onClick={() => {
              setFilter("all");
              setQuery("");
            }}
          >
            Ver todos los mensajes
          </button>
        </div>
      )}
      <div className="groups-message-note">
        <Icon name="groups" />
        <div>
          <b>Chats de grupos de lectura</b>
          <p>Los chats generales y por capítulo permanecen separados.</p>
        </div>
        <button onClick={openGroup}>Abrir grupos</button>
      </div>
    </div>
  );
}

function Profile({ openSettings }: { openSettings: () => void }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Clara Soto");
  const [handle, setHandle] = useState("claraleehistorias");
  const [bio, setBio] = useState(
    "Lectora de fantasía tranquila, jardines imposibles y finales que se quedan contigo.",
  );
  const [avatarTone, setAvatarTone] = useState(1);
  const [coverStyle, setCoverStyle] = useState("burrow");
  const [isPublic, setIsPublic] = useState(true);
  const [showProgress, setShowProgress] = useState(true);

  return (
    <>
      <div className="screen-content profile-screen personal-profile">
        <div className={`profile-cover profile-cover-${coverStyle}`}>
          <div className="profile-cover-top">
            <button onClick={openSettings} aria-label="Ajustes">
              <Icon name="settings" />
            </button>
            <button aria-label="Compartir perfil">
              <Icon name="share" />
            </button>
          </div>
          <span className="cover-rabbit-mark">⌇</span>
          <div className="cover-foliage">
            <i />
            <i />
            <i />
          </div>
        </div>
        <section className="profile-hero personal-profile-hero">
          <div className="profile-avatar">
            <Avatar name={name} tone={avatarTone} size="lg" />
            <button onClick={() => setEditing(true)}>
              <Icon name="edit" size={14} />
            </button>
          </div>
          <span className={isPublic ? "profile-visibility" : "profile-visibility private"}>
            <Icon name={isPublic ? "eye" : "lock"} size={11} />{" "}
            {isPublic ? "PERFIL PÚBLICO" : "PERFIL PRIVADO"}
          </span>
          <h2>{name}</h2>
          <span className="profile-handle">@{handle}</span>
          <p>{bio}</p>
          <div className="profile-social-counts">
            <button>
              <b>128</b>
              <span>Seguidores</span>
            </button>
            <button>
              <b>96</b>
              <span>Seguidos</span>
            </button>
            <button>
              <b>24</b>
              <span>Libros</span>
            </button>
          </div>
          <div className="profile-main-actions">
            <button className="edit-profile-button" onClick={() => setEditing(true)}>
              <Icon name="edit" size={15} /> Editar perfil
            </button>
            <button aria-label="Compartir perfil">
              <Icon name="share" size={17} />
            </button>
          </div>
        </section>

        <SectionTitle title="Actualmente leyendo" link="Ver libro" />
        <article className="profile-current-book">
          <div className="current-book-visual">
            <Cover index={0} />
            <span>68%</span>
          </div>
          <div>
            <span className="current-label">
              <i /> EN LECTURA
            </span>
            <h3>El jardín de las horas</h3>
            <p>Elena Valdemar</p>
            <div className="current-chapter">
              <span>Capítulo 12</span>
              <b>184 / 271 páginas</b>
            </div>
            <Progress value={68} />
            <button>
              Visitar el libro <Icon name="chevron" size={14} />
            </button>
          </div>
        </article>

        <SectionTitle title="Mi año lector" link="Ver detalles" />
        <div className="profile-stats-grid">
          {[
            ["24", "Leídos", "book"],
            ["3", "En curso", "play"],
            ["4.820", "Páginas", "library"],
            ["86 h", "Lectura", "moon"],
            ["18", "Favoritos", "heart"],
          ].map(([value, label, icon], index) => (
            <div className={index === 0 ? "featured" : ""} key={label}>
              <Icon name={icon as IconName} size={16} />
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <SectionTitle
          title="Estanterías públicas"
          link="Gestionar"
          onClick={() => setEditing(true)}
        />
        <div className="profile-public-shelves">
          {[
            ["Fantasía botánica", "12 libros", "#776082", 0],
            ["Para volver", "8 libros", "#66857b", 2],
            ["Favoritos de siempre", "18 libros", "#a56f68", 3],
          ].map(([title, count, color, cover]) => (
            <button key={title as string}>
              <div style={{ background: color as string }}>
                <Cover index={cover as number} small />
                <Cover index={(cover as number) + 1} small />
              </div>
              <b>{title}</b>
              <span>
                <Icon name="eye" size={10} /> {count}
              </span>
            </button>
          ))}
        </div>

        <SectionTitle title="Actividad reciente" />
        <div className="profile-recent-activity">
          <span>
            <Icon name="bookmark" />
          </span>
          <div>
            <b>Guardaste un fragmento</b>
            <p>El jardín de las horas · Capítulo 12</p>
            <small>Hoy, 18:42</small>
          </div>
        </div>
      </div>
      {editing && (
        <>
          <div className="scrim" onClick={() => setEditing(false)} />
          <div className="bottom-sheet edit-profile-sheet">
            <div className="grabber" />
            <div className="sheet-heading">
              <div>
                <span className="sheet-eyebrow">TU IDENTIDAD LECTORA</span>
                <h2>Editar perfil</h2>
              </div>
              <button onClick={() => setEditing(false)}>
                <Icon name="close" />
              </button>
            </div>
            <div className="profile-editor-cover">
              <div className={`profile-cover profile-cover-${coverStyle}`}>
                <span className="cover-rabbit-mark">⌇</span>
              </div>
              <div className="editor-avatar">
                <Avatar name={name} tone={avatarTone} size="lg" />
                <button>
                  <Icon name="upload" size={15} />
                </button>
              </div>
              <button className="upload-header">
                <Icon name="image" size={14} /> Subir portada
              </button>
            </div>
            <div className="editor-section-title">
              <b>Avatar</b>
              <span>Elige uno o sube tu imagen</span>
            </div>
            <div className="avatar-presets">
              {[0, 1, 2, 3].map((tone) => (
                <button
                  className={avatarTone === tone ? "active" : ""}
                  onClick={() => setAvatarTone(tone)}
                  key={tone}
                >
                  <Avatar name={name} tone={tone} />
                </button>
              ))}
              <button className="upload-avatar">
                <Icon name="upload" />
                <span>Subir</span>
              </button>
            </div>
            <div className="editor-section-title">
              <b>Encabezado</b>
              <span>Galería de Bunny Reader</span>
            </div>
            <div className="header-presets">
              {[
                ["burrow", "Madriguera"],
                ["forest", "Bosque"],
                ["books", "Libros"],
                ["lavender", "Lavanda"],
              ].map(([style, label]) => (
                <button
                  className={`profile-cover-${style} ${coverStyle === style ? "active" : ""}`}
                  onClick={() => setCoverStyle(style)}
                  key={style}
                >
                  <i>❧</i>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="profile-fields">
              <label>
                Nombre visible
                <input value={name} onChange={(event) => setName(event.target.value)} />
              </label>
              <label>
                Nombre de usuario
                <div>
                  <span>@</span>
                  <input value={handle} onChange={(event) => setHandle(event.target.value)} />
                </div>
                <small>Este nombre está disponible</small>
              </label>
              <label>
                Biografía
                <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
                <small>{bio.length}/160</small>
              </label>
            </div>
            <div className="editor-section-title privacy-title">
              <b>Privacidad</b>
              <span>Controla quién ve tu actividad</span>
            </div>
            <button className="profile-privacy-row" onClick={() => setIsPublic(!isPublic)}>
              <span>
                <Icon name={isPublic ? "eye" : "lock"} />
              </span>
              <div>
                <b>Perfil público</b>
                <p>Cualquiera puede encontrar tu perfil</p>
              </div>
              <span className={isPublic ? "toggle on" : "toggle"}>
                <i />
              </span>
            </button>
            <button className="profile-privacy-row" onClick={() => setShowProgress(!showProgress)}>
              <span>
                <Icon name="book" />
              </span>
              <div>
                <b>Mostrar progreso de lectura</b>
                <p>Visible para seguidores y grupos</p>
              </div>
              <span className={showProgress ? "toggle on" : "toggle"}>
                <i />
              </span>
            </button>
            <div className="privacy-audience">
              <span>Quién puede ver tus estanterías</span>
              <button>
                Seguidores <Icon name="chevron" size={13} />
              </button>
            </div>
            <button className="primary-btn full save-profile" onClick={() => setEditing(false)}>
              Guardar cambios
            </button>
          </div>
        </>
      )}
    </>
  );
}

function SearchScreen({ close }: { close: () => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"books" | "users" | "authors">("books");
  const [recent, setRecent] = useState(["El jardín secreto", "Nora Abril", "Louisa May Alcott"]);
  const [following, setFollowing] = useState<Record<string, boolean>>({ "Nora Abril": true });
  const [detail, setDetail] = useState<{ type: "user" | "author"; name: string } | null>(null);
  const results = useMemo(() => (query ? covers : covers.slice(0, 3)), [query]);
  const users = [
    {
      name: "Nora Abril",
      handle: "@noraentrepaginas",
      bio: "Clásicos, té negro y notas en los márgenes.",
      followers: "2,4 mil",
      tone: 3,
    },
    {
      name: "Mateo Linde",
      handle: "@bosquedetinta",
      bio: "Fantasía botánica y clubes de lectura lentos.",
      followers: "986",
      tone: 0,
    },
    {
      name: "Inés Romero",
      handle: "@ineslee",
      bio: "Traductora, lectora y coleccionista de primeras frases.",
      followers: "1,8 mil",
      tone: 2,
    },
  ];
  const authors = [
    {
      name: "Louisa May Alcott",
      life: "1832–1888 · Estados Unidos",
      bio: "Novelista y poeta, reconocida por sus historias sobre la familia, la independencia y la vida cotidiana.",
      works: "34 obras",
      available: 12,
      tone: 1,
      cover: 3,
    },
    {
      name: "Frances H. Burnett",
      life: "1849–1924 · Reino Unido",
      bio: "Autora de literatura infantil cuyas novelas exploran la amistad, la naturaleza y la transformación.",
      works: "53 obras",
      available: 18,
      tone: 2,
      cover: 4,
    },
    {
      name: "Inés Montalvo",
      life: "Autora contemporánea · España",
      bio: "Escribe ficción íntima sobre la memoria, los vínculos y los pequeños misterios de la vida.",
      works: "7 obras",
      available: 5,
      tone: 0,
      cover: 2,
    },
  ];

  const searchFor = (term: string) => {
    setQuery(term);
    setRecent((current) => [term, ...current.filter((item) => item !== term)].slice(0, 5));
  };

  if (detail) {
    const author = authors.find((item) => item.name === detail.name);
    const user = users.find((item) => item.name === detail.name);
    return (
      <div className="overlay-screen universal-search profile-result">
        <Header
          title={detail.type === "author" ? "Perfil de autora" : "Perfil lector"}
          back
          onBack={() => setDetail(null)}
        />
        {detail.type === "user" && (
          <div className="other-profile-cover profile-cover-forest">
            <span className="cover-rabbit-mark">⌇</span>
          </div>
        )}
        <section
          className={`search-profile-hero ${detail.type === "user" ? "other-user-hero" : ""}`}
        >
          <Avatar name={detail.name} tone={(author ?? user)?.tone ?? 0} size="lg" />
          <span>{detail.type === "author" ? author?.life : user?.handle}</span>
          <h2>{detail.name}</h2>
          <p>{detail.type === "author" ? author?.bio : user?.bio}</p>
          {detail.type === "user" ? (
            <>
              <div className="other-social-counts">
                <div>
                  <b>2,4 mil</b>
                  <span>Seguidores</span>
                </div>
                <div>
                  <b>318</b>
                  <span>Seguidos</span>
                </div>
                <div>
                  <b>47</b>
                  <span>Libros</span>
                </div>
              </div>
              <div className="other-profile-actions">
                <button
                  className={following[detail.name] ? "follow-button following" : "follow-button"}
                  onClick={() =>
                    setFollowing((current) => ({
                      ...current,
                      [detail.name]: !current[detail.name],
                    }))
                  }
                >
                  {following[detail.name] ? "Siguiendo" : "Seguir"}
                </button>
                <button aria-label="Compartir perfil">
                  <Icon name="share" size={16} />
                </button>
              </div>
            </>
          ) : (
            <div className="author-stats">
              <div>
                <b>{author?.works}</b>
                <span>publicadas</span>
              </div>
              <div>
                <b>{author?.available}</b>
                <span>en el catálogo</span>
              </div>
            </div>
          )}
        </section>
        <SectionTitle
          title={detail.type === "author" ? "Obras disponibles" : "Favoritos públicos"}
          link="Ver todos"
        />
        <div className="book-row profile-books">
          {[author?.cover ?? 0, 1, 4].map((cover, index) => (
            <button className="book-item" key={index}>
              <Cover index={cover + index} />
              <b>{covers[(cover + index) % covers.length].title}</b>
              <span>{detail.name}</span>
            </button>
          ))}
        </div>
        {detail.type === "user" && (
          <>
            <SectionTitle title="Actividad reciente" />
            <div className="profile-activity-snippet">
              <Icon name="book" />
              <div>
                <b>Está leyendo Cartas a la luna</b>
                <span>Capítulo 8 · 42% completado</span>
              </div>
              <Progress value={42} />
            </div>
            <SectionTitle title="Estanterías públicas" link="Ver todas" />
            <div className="other-public-shelves">
              <button>
                <span style={{ background: "#776082" }}>
                  <Cover index={2} small />
                </span>
                <b>Libros de luna</b>
                <small>11 libros</small>
              </button>
              <button>
                <span style={{ background: "#66857b" }}>
                  <Cover index={4} small />
                </span>
                <b>Para conversar</b>
                <small>8 libros</small>
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="overlay-screen universal-search">
      <Header title="Buscar en Bunny" subtitle="Libros, lectoras y autoras" back onBack={close} />
      <div className="universal-searchbar">
        <Icon name="search" size={19} />
        <input
          autoFocus
          placeholder={
            category === "books"
              ? "Título, autor, ISBN, editorial..."
              : category === "users"
                ? "Nombre o @usuario..."
                : "Nombre de la autora o autor..."
          }
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && query.trim() && searchFor(query.trim())}
        />
        {query && (
          <button onClick={() => setQuery("")}>
            <Icon name="close" size={16} />
          </button>
        )}
      </div>
      <div className="content-tabs">
        <button
          className={category === "books" ? "active" : ""}
          onClick={() => setCategory("books")}
        >
          <Icon name="book" size={17} /> Libros
        </button>
        <button
          className={category === "users" ? "active" : ""}
          onClick={() => setCategory("users")}
        >
          <Icon name="users" size={17} /> Usuarios
        </button>
        <button
          className={category === "authors" ? "active" : ""}
          onClick={() => setCategory("authors")}
        >
          <Icon name="edit" size={17} /> Autores
        </button>
      </div>

      {!query && recent.length > 0 && (
        <section className="recent-searches">
          <div className="section-title">
            <h2>Búsquedas recientes</h2>
            <button onClick={() => setRecent([])}>Borrar historial</button>
          </div>
          <div className="recent-list">
            {recent.map((item) => (
              <button key={item} onClick={() => searchFor(item)}>
                <span className="history-icon">↗</span>
                {item}
                <Icon name="arrow" size={14} />
              </button>
            ))}
          </div>
        </section>
      )}

      {category === "books" && (
        <>
          <div className="book-search-filters">
            {["Todo", "Título", "Autor", "ISBN", "Editorial", "Género"].map((filter, index) => (
              <button className={index === 0 ? "active" : ""} key={filter}>
                {filter}
              </button>
            ))}
          </div>
          <p className="source-note">
            <span /> Catálogo global · Google Books + Open Library
          </p>
          <SectionTitle
            title={query ? `Libros para “${query}”` : "Sugeridos para ti"}
            link="Filtrar"
          />
          <div className="search-results">
            {results.map((book, i) => (
              <article className="result-card" key={book.title}>
                <Cover index={i} />
                <div>
                  <span className={i === 0 ? "owned-pill" : "catalog-pill"}>
                    {i === 0 ? "EN TU BIBLIOTECA" : "CATÁLOGO"}
                  </span>
                  <h3>{book.title}</h3>
                  <p>
                    {book.author} · {2018 + i} · Ediciones Silvestres
                  </p>
                  <small>
                    Una historia envolvente sobre los lugares que guardamos, el tiempo y la magia de
                    comenzar de nuevo.
                  </small>
                  <div className="genre-row">
                    <i>Fantasía</i>
                    <i>Ficción</i>
                  </div>
                  <button className="compact-btn">
                    {i === 0 ? "Abrir libro" : "Añadir a mi estantería"}
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button className="link-epub">
            <Icon name="upload" />
            <div>
              <b>¿Ya tienes el EPUB?</b>
              <span>Vincúlalo con un libro del catálogo</span>
            </div>
            <Icon name="chevron" />
          </button>
        </>
      )}

      {category === "users" && (
        <>
          <SectionTitle
            title={query ? `Personas para “${query}”` : "Personas que podrían interesarte"}
            link="Ver más"
          />
          <div className="people-results">
            {users.map((person) => (
              <article className="person-result" key={person.name}>
                <button
                  className="person-main"
                  onClick={() => setDetail({ type: "user", name: person.name })}
                >
                  <Avatar name={person.name} tone={person.tone} />
                  <div>
                    <h3>{person.name}</h3>
                    <span>{person.handle}</span>
                    <p>{person.bio}</p>
                    <small>{person.followers} seguidores</small>
                  </div>
                </button>
                <button
                  className={following[person.name] ? "follow-button following" : "follow-button"}
                  onClick={() =>
                    setFollowing((current) => ({
                      ...current,
                      [person.name]: !current[person.name],
                    }))
                  }
                >
                  {following[person.name] ? "Siguiendo" : "Seguir"}
                </button>
              </article>
            ))}
          </div>
          <div className="social-suggestion">
            <div className="suggestion-mark">
              <Icon name="users" />
            </div>
            <div>
              <b>Amplía tu círculo lector</b>
              <p>Estas recomendaciones se basan en libros, grupos y amistades en común.</p>
            </div>
          </div>
        </>
      )}

      {category === "authors" && (
        <>
          <SectionTitle
            title={query ? `Autores para “${query}”` : "Autores para descubrir"}
            link="Ordenar"
          />
          <div className="author-results">
            {authors.map((author) => (
              <article className="author-result" key={author.name}>
                <button
                  className="author-head"
                  onClick={() => setDetail({ type: "author", name: author.name })}
                >
                  <Avatar name={author.name} tone={author.tone} size="lg" />
                  <div>
                    <h3>{author.name}</h3>
                    <span>{author.life}</span>
                    <p>{author.bio}</p>
                  </div>
                </button>
                <div className="author-meta">
                  <span>
                    <b>{author.works}</b> publicadas
                  </span>
                  <span>
                    <b>{author.available}</b> disponibles
                  </span>
                  <button onClick={() => setDetail({ type: "author", name: author.name })}>
                    Ver perfil <Icon name="chevron" size={13} />
                  </button>
                </div>
                <div className="author-books">
                  {[author.cover, author.cover + 1, author.cover + 2].map((cover) => (
                    <Cover index={cover} small key={cover} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Reader({ close }: { close: () => void }) {
  const [panel, setPanel] = useState<"none" | "navigation" | "settings" | "selection">("none");
  const [tab, setTab] = useState("Contenido");
  const [settingsTab, setSettingsTab] = useState<"Texto" | "Página">("Texto");
  const [selectionTool, setSelectionTool] = useState<"menu" | "highlight" | "note" | "image">(
    "menu",
  );
  const [annotationKind, setAnnotationKind] = useState<"highlight" | "underline">("highlight");
  const [highlightColor, setHighlightColor] = useState("#d8b4df");
  const [draftAnnotationColor, setDraftAnnotationColor] = useState("#d8b4df");
  const [underlineStyle, setUnderlineStyle] = useState<"solid" | "dotted" | "double">("solid");
  const [underlineThickness, setUnderlineThickness] = useState(2);
  const [customColorOpen, setCustomColorOpen] = useState(false);
  const [readerMarkersOpen, setReaderMarkersOpen] = useState(false);
  const [readerPalettes, setReaderPalettes] = useState<MarkerPalette[]>(loadMarkerPalettes);
  const [bookmarked, setBookmarked] = useState(false);
  const [immersive, setImmersive] = useState(false);
  const [selectionActive, setSelectionActive] = useState(false);
  const [selectionExpanded, setSelectionExpanded] = useState(true);
  const [savedAnnotation, setSavedAnnotation] = useState<"none" | "highlight" | "underline">(
    "none",
  );
  const [pageFeedback, setPageFeedback] = useState<string | null>(null);
  const [noteSaved, setNoteSaved] = useState(false);
  const [cardBackground, setCardBackground] = useState("lavender");
  const [fontSize, setFontSize] = useState(17);
  const [readerMargin, setReaderMargin] = useState(32);
  const [lineHeight, setLineHeight] = useState(1.9);
  const [brightness, setBrightness] = useState(82);
  const [font, setFont] = useState(() => localStorage.getItem("bunny-reader-font") || "Lora");
  const [fontWeight, setFontWeight] = useState(400);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [fontLibraryOpen, setFontLibraryOpen] = useState(false);
  const [fontCategory, setFontCategory] = useState("Todas");
  const [fontQuery, setFontQuery] = useState("");
  const [favoriteFonts, setFavoriteFonts] = useState<string[]>(["Lora", "Literata"]);
  const [customFonts, setCustomFonts] = useState<string[]>([]);
  const customFontInput = useRef<HTMLInputElement | null>(null);
  const [readerTheme, setReaderTheme] = useState("warm");
  const [flow, setFlow] = useState("Paginado");
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerOrigin = useRef({ x: 0, y: 0 });
  const longPressTriggered = useRef(false);
  const textGestureMoved = useRef(false);
  const pageGesture = useRef({ x: 0, y: 0, moved: false });
  const assignedReaderPalettes = readerPalettes.filter((palette) => palette.books.includes(0));
  const generalReaderPalettes = readerPalettes.filter((palette) => palette.general);
  const draftColorName =
    readerPalettes
      .flatMap((palette) => palette.colors)
      .find((color) => color.hex.toLowerCase() === draftAnnotationColor.toLowerCase())?.name ??
    "Color personalizado";
  const fontFamilies: {
    name: string;
    category: string;
    type: string;
    unavailable?: boolean;
  }[] = [
    { name: "Literata", category: "Serif clásicas", type: "serif" },
    { name: "Merriweather", category: "Serif clásicas", type: "serif" },
    { name: "Libre Baskerville", category: "Serif clásicas", type: "serif" },
    { name: "Lora", category: "Serif elegantes", type: "serif" },
    { name: "Crimson Pro", category: "Serif elegantes", type: "serif" },
    { name: "EB Garamond", category: "Serif elegantes", type: "serif" },
    { name: "Playfair Display", category: "Serif elegantes", type: "serif" },
    { name: "Cormorant Garamond", category: "Serif elegantes", type: "serif" },
    { name: "Bodoni Moda", category: "Serif elegantes", type: "serif" },
    { name: "Roboto", category: "Sans serif", type: "sans-serif" },
    { name: "Open Sans", category: "Sans serif", type: "sans-serif" },
    { name: "Lato", category: "Sans serif", type: "sans-serif" },
    { name: "Nunito", category: "Sans serif", type: "sans-serif" },
    { name: "Montserrat", category: "Sans serif", type: "sans-serif" },
    { name: "Inter", category: "Sans serif", type: "sans-serif" },
    { name: "Atkinson Hyperlegible", category: "Accesibilidad", type: "sans-serif" },
    { name: "Lexend", category: "Lectura prolongada", type: "sans-serif" },
    { name: "OpenDyslexic", category: "Accesibilidad", type: "sans-serif", unavailable: true },
    ...customFonts.map((name) => ({ name, category: "Personalizadas importadas", type: "serif" })),
  ];
  const readingFonts = ["Literata", "Lora", "Merriweather", "Lexend"];
  const categories = [
    "Todas",
    "Favoritas",
    "Serif clásicas",
    "Serif elegantes",
    "Sans serif",
    "Lectura prolongada",
    "Accesibilidad",
    "Personalizadas importadas",
  ];
  const visibleFonts = fontFamilies.filter((item) => {
    const inCategory =
      fontCategory === "Todas" ||
      (fontCategory === "Favoritas" && favoriteFonts.includes(item.name)) ||
      (fontCategory === "Lectura prolongada" && readingFonts.includes(item.name)) ||
      item.category === fontCategory;
    return inCategory && item.name.toLowerCase().includes(fontQuery.toLowerCase());
  });
  const sansFonts = [
    "Roboto",
    "Open Sans",
    "Lato",
    "Nunito",
    "Montserrat",
    "Inter",
    "Atkinson Hyperlegible",
    "Lexend",
  ];
  const activeFontStack = `"${font}", ${sansFonts.includes(font) ? "sans-serif" : "serif"}`;

  const applyFont = (name: string) => {
    setFont(name);
    localStorage.setItem("bunny-reader-font", name);
  };

  const importCustomFont = async (file?: File) => {
    if (!file) return;
    const name = file.name.replace(/\.(woff2?|ttf|otf)$/i, "");
    try {
      const data = await file.arrayBuffer();
      const face = new FontFace(name, data);
      await face.load();
      document.fonts.add(face);
      setCustomFonts((current) => [...current.filter((item) => item !== name), name]);
      setFontCategory("Personalizadas importadas");
      applyFont(name);
    } catch {
      setFontCategory("Personalizadas importadas");
    }
  };

  const openSelection = () => {
    setReaderPalettes(loadMarkerPalettes());
    setSelectionActive(true);
    setDraftAnnotationColor(highlightColor);
    setSelectionTool("menu");
    setPanel("selection");
  };

  const closeSelection = () => {
    setPanel("none");
    setSelectionActive(false);
    setSelectionTool("menu");
  };

  const applyAnnotation = () => {
    setHighlightColor(draftAnnotationColor);
    setSavedAnnotation(annotationKind);
    localStorage.setItem(
      "bunny-last-marker",
      JSON.stringify({ book: 0, kind: annotationKind, color: draftAnnotationColor }),
    );
    setSelectionTool("menu");
    setCustomColorOpen(false);
    setReaderMarkersOpen(false);
  };

  const beginLongPress = (event: React.PointerEvent) => {
    event.stopPropagation();
    pointerOrigin.current = { x: event.clientX, y: event.clientY };
    longPressTriggered.current = false;
    textGestureMoved.current = false;
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;
      openSelection();
    }, 480);
  };

  const moveLongPress = (event: React.PointerEvent) => {
    const distance = Math.hypot(
      event.clientX - pointerOrigin.current.x,
      event.clientY - pointerOrigin.current.y,
    );
    if (distance > 9) {
      textGestureMoved.current = true;
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
    }
  };

  const endLongPress = (event: React.PointerEvent) => {
    event.stopPropagation();
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    if (!selectionActive && !longPressTriggered.current && !textGestureMoved.current) {
      toggleImmersive();
    }
    window.setTimeout(() => {
      longPressTriggered.current = false;
      textGestureMoved.current = false;
    }, 0);
  };

  const toggleImmersive = () => {
    if (panel === "none" || panel === "selection") setImmersive((current) => !current);
  };

  const beginPageGesture = (event: React.PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest(".selectable")) return;
    pageGesture.current = { x: event.clientX, y: event.clientY, moved: false };
  };

  const movePageGesture = (event: React.PointerEvent<HTMLElement>) => {
    const distance = Math.hypot(
      event.clientX - pageGesture.current.x,
      event.clientY - pageGesture.current.y,
    );
    if (distance > 10) pageGesture.current.moved = true;
  };

  const finishPageGesture = (event: React.PointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest(".selectable")) return;
    const horizontalDistance = event.clientX - pageGesture.current.x;
    if (pageGesture.current.moved) {
      if (Math.abs(horizontalDistance) > 36) {
        setPageFeedback(horizontalDistance < 0 ? "Página siguiente" : "Página anterior");
        window.setTimeout(() => setPageFeedback(null), 900);
      }
      return;
    }
    toggleImmersive();
  };

  const effectiveAnnotation = selectionActive ? annotationKind : savedAnnotation;

  return (
    <div
      className={`reader-screen reader-theme-${readerTheme} ${immersive ? "immersive" : "controls-visible"}`}
      style={{ "--reader-brightness": `${brightness}%` } as React.CSSProperties}
    >
      <header className="reader-topbar">
        <button onClick={close} aria-label="Cerrar lector">
          <Icon name="arrow" />
        </button>
        <div className="reader-title">
          <b>El jardín de las horas</b>
          <span>Elena Valdemar</span>
        </div>
        <button aria-label="Buscar en el libro">
          <Icon name="search" />
        </button>
        <button onClick={() => setPanel("settings")} aria-label="Ajustes de lectura">
          <Icon name="settings" />
        </button>
        <button
          className={bookmarked ? "reader-bookmark active" : "reader-bookmark"}
          onClick={() => setBookmarked(!bookmarked)}
          aria-label="Guardar marcador"
        >
          <Icon name="bookmark" />
        </button>
      </header>
      <main
        className="reader-page"
        onPointerDown={beginPageGesture}
        onPointerMove={movePageGesture}
        onPointerUp={finishPageGesture}
        style={{
          paddingLeft: readerMargin,
          paddingRight: readerMargin,
          fontFamily: activeFontStack,
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
        }}
      >
        <button
          className="reader-free-zone reader-free-zone-left"
          data-reader-free-zone
          aria-label="Mostrar u ocultar controles"
        />
        <button
          className="reader-free-zone reader-free-zone-right"
          data-reader-free-zone
          aria-label="Mostrar u ocultar controles"
        />
        <div className="reader-page-rule">
          <span>184</span>
          <i />
          <span>CAP. XII</span>
        </div>
        <span className="chapter-kicker">CAPÍTULO DOCE</span>
        <h1>La puerta verde</h1>
        <div className="chapter-flourish">❧</div>
        <p>
          Al llegar la tarde, el jardín parecía contener la respiración. Las hojas de los tilos
          giraban hacia la luz como pequeñas manos abiertas, y el sendero, aún húmedo, conservaba
          las huellas de quien lo había cruzado antes.
        </p>
        <p>
          Vera apoyó la palma sobre la puerta verde. La pintura se desprendió bajo sus dedos,
          dejando una constelación de polvo en la piel.
        </p>
        <p
          onClick={(event) => {
            event.stopPropagation();
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            openSelection();
          }}
          onPointerDown={beginLongPress}
          onPointerMove={moveLongPress}
          onPointerUp={endLongPress}
          onPointerCancel={endLongPress}
          className={selectionActive ? "selectable selected" : "selectable"}
          aria-label="Fragmento seleccionable. Mantén pulsado para seleccionar."
        >
          <span
            className="selection-handle start"
            onPointerDown={(event) => {
              event.stopPropagation();
              setSelectionExpanded(false);
            }}
            onPointerMove={(event) => {
              if (event.buttons) setSelectionExpanded(false);
            }}
            onPointerUp={(event) => event.stopPropagation()}
          />
          <mark
            className={effectiveAnnotation === "underline" ? "underlined" : ""}
            style={{
              background:
                effectiveAnnotation === "highlight"
                  ? `${selectionTool === "highlight" ? draftAnnotationColor : highlightColor}80`
                  : "transparent",
              textDecorationColor:
                selectionTool === "highlight" ? draftAnnotationColor : highlightColor,
              textDecorationStyle: underlineStyle,
              textDecorationThickness: `${underlineThickness}px`,
            }}
          >
            «Todo lugar guarda una historia», había dicho su abuela.
            {selectionExpanded && " «Pero algunos esperan a que seas tú quien la recuerde»."}
          </mark>
          <span
            className="selection-handle end"
            onPointerDown={(event) => {
              event.stopPropagation();
              setSelectionExpanded(true);
            }}
            onPointerMove={(event) => {
              if (event.buttons) setSelectionExpanded(true);
            }}
            onPointerUp={(event) => event.stopPropagation()}
          />
        </p>
        <p>
          Entonces oyó el reloj. No venía de la casa, ni de la torre del pueblo, sino de algún lugar
          bajo la tierra: un latido pequeño y preciso que parecía llamarla por su nombre.
        </p>
        <span className="page-number">— 184 —</span>
      </main>
      {pageFeedback && <div className="page-gesture-feedback">{pageFeedback}</div>}
      <button className="reader-footer" onClick={() => setPanel("navigation")}>
        <div className="reader-footer-copy">
          <span>Capítulo 12 de 18</span>
          <b>La puerta verde</b>
        </div>
        <div className="reader-footer-progress">
          <div>
            <Progress value={68} />
            <small>68%</small>
          </div>
          <span>
            Página <b>184</b> de 271
          </span>
        </div>
        <Icon name="chevron" size={16} />
      </button>
      {panel === "selection" && (
        <div className={`selection-menu selection-${selectionTool}`}>
          {selectionTool === "menu" && (
            <>
              <button
                onClick={() => {
                  setAnnotationKind("highlight");
                  setSelectionTool("highlight");
                }}
              >
                <i className="dot" style={{ background: highlightColor }} /> Resaltar
              </button>
              <button
                onClick={() => {
                  setAnnotationKind("underline");
                  setSelectionTool("highlight");
                }}
              >
                <u>A</u> Subrayar
              </button>
              <button onClick={() => setSelectionTool("note")}>
                <Icon name="message" size={16} /> Nota
              </button>
              <button
                onClick={() =>
                  navigator.clipboard?.writeText(
                    "Todo lugar guarda una historia, había dicho su abuela.",
                  )
                }
              >
                <span className="copy-mark">Aa</span> Copiar
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/search?q=${encodeURIComponent("Todo lugar guarda una historia")}`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <Icon name="external" size={16} /> Buscar
              </button>
              <button
                onClick={() => {
                  setPageFeedback("Fragmento listo para compartir");
                  window.setTimeout(() => setPageFeedback(null), 1100);
                }}
              >
                <Icon name="share" size={16} /> Compartir
              </button>
            </>
          )}
          {selectionTool === "highlight" && (
            <div className={`reader-annotation-panel ${annotationKind}`}>
              <div className="reader-palette-head">
                <button
                  className="picker-back"
                  onClick={() => {
                    setSelectionTool("menu");
                    setCustomColorOpen(false);
                    setReaderMarkersOpen(false);
                  }}
                >
                  <Icon name="arrow" size={16} />
                </button>
                <div>
                  <b>
                    {readerMarkersOpen
                      ? "Mis marcadores"
                      : annotationKind === "highlight"
                        ? "Configurar resaltado"
                        : "Configurar subrayado"}
                  </b>
                  <span>
                    {readerMarkersOpen
                      ? `${readerPalettes.length} paletas guardadas`
                      : "Vista previa en tiempo real"}
                  </span>
                </div>
              </div>
              {readerMarkersOpen ? (
                <div className="reader-marker-library">
                  {readerPalettes.map((palette) => (
                    <div className={palette.books.includes(0) ? "priority" : ""} key={palette.id}>
                      <span>
                        {palette.books.includes(0)
                          ? "DESIGNADA PARA ESTE LIBRO"
                          : palette.general
                            ? "GENERAL"
                            : `${palette.books.length} LIBROS`}
                      </span>
                      <b>{palette.name}</b>
                      <div>
                        {palette.colors.map((color) => (
                          <button
                            className={draftAnnotationColor === color.hex ? "active" : ""}
                            style={{ background: color.hex }}
                            onClick={() => {
                              setDraftAnnotationColor(color.hex);
                              setReaderMarkersOpen(false);
                            }}
                            title={color.name}
                            key={color.id}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="annotation-live-preview">
                    <span>VISTA PREVIA</span>
                    <p>
                      <mark
                        style={
                          annotationKind === "highlight"
                            ? { background: `${draftAnnotationColor}80` }
                            : {
                                textDecoration: `underline ${underlineStyle} ${draftAnnotationColor}`,
                                textDecorationThickness: `${underlineThickness}px`,
                                textUnderlineOffset: "4px",
                              }
                        }
                      >
                        Todo lugar guarda una historia.
                      </mark>
                    </p>
                    <small>
                      {draftColorName} ·{" "}
                      {annotationKind === "highlight"
                        ? "Transparencia suave"
                        : `${underlineStyle === "solid" ? "Continua" : underlineStyle === "dotted" ? "Punteada" : "Doble"} · ${underlineThickness}px`}
                    </small>
                  </div>
                  {assignedReaderPalettes.slice(0, 1).map((palette) => (
                    <div className="reader-palette-row assigned" key={palette.id}>
                      <div>
                        <span>PARA ESTE LIBRO</span>
                        <b>{palette.name}</b>
                      </div>
                      <div>
                        {palette.colors.map((color) => (
                          <button
                            className={draftAnnotationColor === color.hex ? "active" : ""}
                            style={{ background: color.hex }}
                            onClick={() => setDraftAnnotationColor(color.hex)}
                            title={color.name}
                            key={color.id}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  {generalReaderPalettes.slice(0, 1).map((palette) => (
                    <div className="reader-palette-row" key={palette.id}>
                      <div>
                        <span>PALETA GENERAL</span>
                        <b>{palette.name}</b>
                      </div>
                      <div>
                        {palette.colors.map((color) => (
                          <button
                            className={draftAnnotationColor === color.hex ? "active" : ""}
                            style={{ background: color.hex }}
                            onClick={() => setDraftAnnotationColor(color.hex)}
                            title={color.name}
                            key={color.id}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  {annotationKind === "underline" && (
                    <div className="underline-options">
                      <div>
                        <span>Estilo de línea</span>
                        <div>
                          {(["solid", "dotted", "double"] as const).map((style) => (
                            <button
                              className={underlineStyle === style ? "active" : ""}
                              onClick={() => setUnderlineStyle(style)}
                              key={style}
                            >
                              <i className={`line-${style}`} />
                              {style === "solid"
                                ? "Continua"
                                : style === "dotted"
                                  ? "Punteada"
                                  : "Doble"}
                            </button>
                          ))}
                        </div>
                      </div>
                      <label>
                        <span>Grosor</span>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={underlineThickness}
                          onChange={(event) => setUnderlineThickness(Number(event.target.value))}
                        />
                        <b>{underlineThickness}px</b>
                      </label>
                    </div>
                  )}
                  {customColorOpen && (
                    <div className="reader-custom-color">
                      <div className="mini-color-wheel">
                        <i style={{ background: draftAnnotationColor }} />
                      </div>
                      <label>
                        HEX
                        <div>
                          <span>#</span>
                          <input
                            value={draftAnnotationColor.replace("#", "")}
                            onChange={(event) =>
                              setDraftAnnotationColor(
                                `#${event.target.value.replace("#", "").slice(0, 6)}`,
                              )
                            }
                          />
                        </div>
                      </label>
                      <button onClick={() => setCustomColorOpen(false)}>Listo</button>
                    </div>
                  )}
                  <div className="reader-palette-links">
                    <button onClick={() => setReaderMarkersOpen(true)}>
                      <Icon name="bookmark" size={13} /> Mis marcadores
                    </button>
                    <button onClick={() => setCustomColorOpen(!customColorOpen)}>
                      <span className="mini-wheel-icon" /> Personalizar
                    </button>
                    <button
                      onClick={() => {
                        const quickPalette: MarkerPalette = {
                          id: `quick-${Date.now()}`,
                          name: "Paleta rápida",
                          general: true,
                          books: [],
                          colors: [
                            {
                              id: `quick-color-${Date.now()}`,
                              name: draftColorName,
                              hex: draftAnnotationColor,
                            },
                          ],
                        };
                        const next = [...readerPalettes, quickPalette];
                        setReaderPalettes(next);
                        localStorage.setItem("bunny-marker-palettes", JSON.stringify(next));
                      }}
                    >
                      <Icon name="plus" size={13} /> Nueva paleta
                    </button>
                  </div>
                  <div className="annotation-panel-actions">
                    <button
                      onClick={() => {
                        setDraftAnnotationColor(highlightColor);
                        setSelectionTool("menu");
                      }}
                    >
                      Cancelar
                    </button>
                    <button onClick={applyAnnotation}>Aplicar</button>
                  </div>
                </>
              )}
            </div>
          )}
          {selectionTool === "note" && (
            <div className="quick-note">
              <div className="quick-note-head">
                <button onClick={() => setSelectionTool("menu")}>
                  <Icon name="arrow" size={16} />
                </button>
                <b>Añadir una nota</b>
                <span>{noteSaved ? "Guardada" : "Autoguardado"}</span>
              </div>
              <blockquote>“Todo lugar guarda una historia...”</blockquote>
              <textarea
                autoFocus
                defaultValue={
                  noteSaved
                    ? "Este fragmento me recuerda que la memoria también construye lugares."
                    : ""
                }
                onChange={() => setNoteSaved(true)}
                placeholder="Escribe lo que te hizo pensar este fragmento..."
              />
              <div className="note-actions">
                <div className="note-privacy">
                  <Icon name="lock" size={13} /> Solo yo <Icon name="chevron" size={12} />
                </div>
                <button onClick={() => setNoteSaved(false)}>
                  <Icon name="trash" size={14} /> Eliminar
                </button>
                <button onClick={closeSelection}>Listo</button>
              </div>
            </div>
          )}
          {selectionTool === "image" && (
            <div className="quote-image-creator">
              <div className="quote-image-head">
                <button onClick={() => setSelectionTool("menu")}>
                  <Icon name="arrow" size={16} />
                </button>
                <div>
                  <b>Crear imagen</b>
                  <span>Vista previa del fragmento</span>
                </div>
                <button onClick={closeSelection}>Guardar</button>
              </div>
              <div className={`quote-image-preview card-${cardBackground}`}>
                <span className="quote-decoration">❧</span>
                <blockquote>
                  “Todo lugar guarda una historia, pero algunos esperan a que seas tú quien la
                  recuerde.”
                </blockquote>
                <div>
                  <b>El jardín de las horas</b>
                  <span>Elena Valdemar</span>
                </div>
              </div>
              <div className="quote-customizer">
                <div>
                  <span>Fondo</span>
                  {["cream", "lavender", "wood", "night"].map((item) => (
                    <button
                      className={
                        cardBackground === item ? `active swatch-${item}` : `swatch-${item}`
                      }
                      onClick={() => setCardBackground(item)}
                      key={item}
                    />
                  ))}
                </div>
                <button>
                  <span className="type-mark">Aa</span>
                  <small>Tipografía</small>
                </button>
                <button>
                  <span>❧</span>
                  <small>Decoración</small>
                </button>
              </div>
              <div className="quote-meta-options">
                <span className="toggle on">
                  <i />
                </span>{" "}
                Incluir título y autora
              </div>
            </div>
          )}
          <button
            className="selection-close"
            onClick={closeSelection}
            aria-label="Cerrar selección"
          >
            <Icon name="close" size={14} />
          </button>
        </div>
      )}
      {panel !== "none" && panel !== "selection" && (
        <div className="scrim" onClick={() => setPanel("none")} />
      )}
      {panel === "navigation" && (
        <div className="bottom-sheet reader-sheet">
          <div className="grabber" />
          <div className="reader-sheet-title">
            <div>
              <span>EL JARDÍN DE LAS HORAS</span>
              <h2>Tu lectura</h2>
            </div>
            <button onClick={() => setPanel("none")}>
              <Icon name="close" />
            </button>
          </div>
          <div className="sheet-tabs">
            {["Contenido", "Anotaciones", "Marcadores"].map((x) => (
              <button className={tab === x ? "active" : ""} onClick={() => setTab(x)} key={x}>
                {x}
                {x !== "Contenido" && <i>{x === "Anotaciones" ? 6 : 3}</i>}
              </button>
            ))}
          </div>
          {tab === "Contenido" && (
            <div className="chapter-list">
              {[
                ["09", "El invernadero cerrado"],
                ["10", "Las cartas de mayo"],
                ["11", "Donde duerme el tiempo"],
                ["12", "La puerta verde"],
                ["13", "Un jardín bajo la lluvia"],
              ].map((x, i) => (
                <button className={i === 3 ? "current" : ""} key={x[0]}>
                  <i>{x[0]}</i>
                  <span>{x[1]}</span>
                  <small>{i === 3 ? "Leyendo ahora" : `${42 + i * 17}`}</small>
                </button>
              ))}
            </div>
          )}
          {tab === "Anotaciones" && (
            <div className="note-list">
              <article>
                <i className="note-color lilac" />
                <p>“Todo lugar guarda una historia...”</p>
                <span>Capítulo 12 · Reflexiones</span>
                <small>Este fragmento me recuerda a la casa de mi abuela.</small>
                <div className="saved-note-actions">
                  <button
                    onClick={() => {
                      setSelectionActive(true);
                      setPanel("selection");
                      setSelectionTool("note");
                    }}
                  >
                    <Icon name="edit" size={13} /> Editar
                  </button>
                  <button>
                    <Icon name="trash" size={13} />
                  </button>
                </div>
              </article>
              <article>
                <i className="note-color gold" />
                <p>“El jardín parecía contener la respiración.”</p>
                <span>Capítulo 12 · Frases favoritas</span>
              </article>
            </div>
          )}
          {tab === "Marcadores" && (
            <div className="bookmarks-panel">
              <article className="bookmark-list">
                <Icon name="bookmark" />
                <div>
                  <b>La puerta verde</b>
                  <p>Página 184 · Hoy, 18:42</p>
                  <span>Volver a este momento.</span>
                </div>
                <Icon name="chevron" size={15} />
              </article>
              <article className="bookmark-list">
                <Icon name="bookmark" />
                <div>
                  <b>Las cartas de mayo</b>
                  <p>Página 142 · 12 de junio</p>
                  <span>Una pista importante.</span>
                </div>
                <Icon name="chevron" size={15} />
              </article>
            </div>
          )}
        </div>
      )}
      {panel === "settings" && (
        <div className="bottom-sheet settings-sheet">
          <div className="grabber" />
          <div className="sheet-heading">
            <div>
              <span className="sheet-eyebrow">PERSONALIZA TU PÁGINA</span>
              <h2>Ajustes de lectura</h2>
            </div>
            <button onClick={() => setPanel("none")}>
              <Icon name="close" />
            </button>
          </div>
          <div className="reader-settings-tabs">
            {["Texto", "Página"].map((item) => (
              <button
                className={settingsTab === item ? "active" : ""}
                onClick={() => setSettingsTab(item as "Texto" | "Página")}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          {settingsTab === "Texto" ? (
            <>
              <div
                className="text-preview"
                style={{ fontFamily: activeFontStack, fontWeight, letterSpacing }}
              >
                <span>Vista previa</span>
                <p>Todo lugar guarda una historia.</p>
              </div>
              <div className="range-label">
                <label>Tipografía</label>
                <span>{font}</span>
              </div>
              <button className="selected-font-card" onClick={() => setFontLibraryOpen(true)}>
                <span style={{ fontFamily: activeFontStack }}>Ag</span>
                <div>
                  <b>{font}</b>
                  <p>Explorar biblioteca de tipografías</p>
                </div>
                <i>ACTIVA</i>
                <Icon name="chevron" size={15} />
              </button>
              <div className="range-label">
                <label>Tamaño de texto</label>
                <span>{fontSize} px</span>
              </div>
              <input
                type="range"
                min="14"
                max="24"
                value={fontSize}
                onChange={(event) => setFontSize(Number(event.target.value))}
              />
              <div className="dual-range">
                <div>
                  <div className="range-label">
                    <label>Interlineado</label>
                    <span>{lineHeight.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.4"
                    max="2.2"
                    step=".1"
                    value={lineHeight}
                    onChange={(event) => setLineHeight(Number(event.target.value))}
                  />
                </div>
                <div>
                  <div className="range-label">
                    <label>Márgenes</label>
                    <span>{readerMargin}px</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="54"
                    value={readerMargin}
                    onChange={(event) => setReaderMargin(Number(event.target.value))}
                  />
                </div>
              </div>
              <div className="range-label">
                <label>Grosor</label>
                <span>
                  {fontWeight === 400 ? "Regular" : fontWeight === 500 ? "Medio" : "Seminegrita"}
                </span>
              </div>
              <div className="font-weight-options">
                {[400, 500, 600].map((weight) => (
                  <button
                    className={fontWeight === weight ? "active" : ""}
                    onClick={() => setFontWeight(weight)}
                    key={weight}
                    style={{ fontWeight: weight }}
                  >
                    Aa
                  </button>
                ))}
              </div>
              <div className="range-label">
                <label>Espaciado entre letras</label>
                <span>{letterSpacing.toFixed(1)} px</span>
              </div>
              <input
                type="range"
                min="-.5"
                max="2"
                step=".1"
                value={letterSpacing}
                onChange={(event) => setLetterSpacing(Number(event.target.value))}
              />
            </>
          ) : (
            <>
              <label>Flujo de lectura</label>
              <div className="flow-options">
                {[
                  ["Paginado", "book"],
                  ["Animado", "play"],
                  ["Vertical", "more"],
                ].map(([item, icon]) => (
                  <button
                    className={flow === item ? "active" : ""}
                    onClick={() => setFlow(item)}
                    key={item}
                  >
                    <Icon name={icon as IconName} />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
              <label>Tema de página</label>
              <div className="reader-themes">
                {[
                  ["white", "Blanco", "#fff"],
                  ["warm", "Cálido", "#f3ead9"],
                  ["gray", "Gris", "#d5d5d2"],
                  ["dark", "Noche", "#252229"],
                ].map(([value, label, color]) => (
                  <button
                    className={readerTheme === value ? "active" : ""}
                    onClick={() => setReaderTheme(value)}
                    key={value}
                  >
                    <i style={{ background: color }} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              <div className="range-label">
                <label>Brillo</label>
                <span>{brightness}%</span>
              </div>
              <div className="brightness-range">
                <Icon name="sun" size={15} />
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={brightness}
                  onChange={(event) => setBrightness(Number(event.target.value))}
                />
                <Icon name="sun" size={21} />
              </div>
              <button className="auto-brightness">
                <span>
                  <Icon name="sun" /> Brillo automático
                </span>
                <span className="toggle on">
                  <i />
                </span>
              </button>
            </>
          )}
        </div>
      )}
      {fontLibraryOpen && (
        <div className="font-library-overlay">
          <Header
            title="Biblioteca de fuentes"
            subtitle="La tipografía cambia, tu página no"
            back
            onBack={() => setFontLibraryOpen(false)}
            action={
              <button className="icon-btn" onClick={() => customFontInput.current?.click()}>
                <Icon name="upload" size={18} />
              </button>
            }
          />
          <input
            ref={customFontInput}
            className="hidden-font-input"
            type="file"
            accept=".woff,.woff2,.ttf,.otf"
            onChange={(event) => importCustomFont(event.target.files?.[0])}
          />
          <div className="font-library-search">
            <Icon name="search" size={17} />
            <input
              value={fontQuery}
              onChange={(event) => setFontQuery(event.target.value)}
              placeholder="Buscar una tipografía"
            />
            {fontQuery && (
              <button onClick={() => setFontQuery("")}>
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
          <div className="font-category-tabs">
            {categories.map((category) => (
              <button
                className={fontCategory === category ? "active" : ""}
                onClick={() => setFontCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="font-library-heading">
            <div>
              <span>{fontCategory.toUpperCase()}</span>
              <b>{visibleFonts.length} tipografías</b>
            </div>
            <button onClick={() => customFontInput.current?.click()}>
              <Icon name="plus" size={14} /> Importar
            </button>
          </div>
          <div className="font-library-list">
            {visibleFonts.map((item) => (
              <article
                className={`font-library-card ${font === item.name ? "active" : ""} ${item.unavailable ? "unavailable" : ""}`}
                key={item.name}
              >
                <div className="font-card-head">
                  <div>
                    <b>{item.name}</b>
                    <span>{item.unavailable ? "Requiere archivo compatible" : item.category}</span>
                  </div>
                  <button
                    className={favoriteFonts.includes(item.name) ? "favorite active" : "favorite"}
                    onClick={() =>
                      setFavoriteFonts((current) =>
                        current.includes(item.name)
                          ? current.filter((name) => name !== item.name)
                          : [...current, item.name],
                      )
                    }
                    aria-label="Guardar como favorita"
                  >
                    <Icon name="heart" size={15} />
                  </button>
                </div>
                <p
                  style={{
                    fontFamily: item.unavailable ? "sans-serif" : `"${item.name}", ${item.type}`,
                  }}
                >
                  En el jardín silencioso, cada página guardaba una historia por descubrir.
                </p>
                <div className="font-card-actions">
                  <span>
                    {item.unavailable
                      ? "OpenDyslexic no está instalada en este archivo."
                      : "Aa · 17 px · Regular"}
                  </span>
                  {item.unavailable ? (
                    <button onClick={() => customFontInput.current?.click()}>
                      <Icon name="upload" size={13} /> Importar
                    </button>
                  ) : (
                    <button
                      className={font === item.name ? "selected" : ""}
                      onClick={() => applyFont(item.name)}
                    >
                      {font === item.name ? "✓ Seleccionada" : "Usar fuente"}
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="font-import-note">
            <Icon name="lock" size={15} />
            <p>
              Usa archivos WOFF, WOFF2, TTF u OTF con licencia compatible. Las fuentes importadas se
              aplican solo a tu lector.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupDetail({ close }: { close: () => void }) {
  const [revealed, setRevealed] = useState(false);
  const [groupTab, setGroupTab] = useState<"general" | "chapters" | "notes" | "members">("general");
  const [chapter, setChapter] = useState(9);
  const participants = [
    ["Clara Soto", "Capítulo 9", 62, 1, "Leyendo ahora"],
    ["Nora Abril", "Capítulo 11", 76, 3, "Hace 18 min"],
    ["Lucía Mar", "Capítulo 10", 69, 2, "Hace 1 h"],
    ["Mateo Linde", "Capítulo 7", 48, 0, "Ayer"],
  ] as const;

  const ChatMessages = ({ chapterMode = false }: { chapterMode?: boolean }) => (
    <>
      <div className="chat-day">{chapterMode ? `CAPÍTULO ${chapter}` : "HOY"}</div>
      <div className="chat-message">
        <Avatar name="Nora Abril" tone={3} size="sm" />
        <div>
          <span>
            <b>Nora</b> · 18:04
          </span>
          <p>
            {chapterMode
              ? "La conversación entre Jo y Marmee me ha parecido preciosa. ¿Os fijasteis en la última frase?"
              : "Me ha encantado cómo cambia la relación entre Jo y Beth en este capítulo."}
          </p>
          <div className="message-actions">
            <button>♡ 4</button>
            <button>Responder</button>
          </div>
        </div>
      </div>
      <div className="chat-message">
        <Avatar name="Lucía Mar" tone={2} size="sm" />
        <div>
          <span>
            <b>Lucía</b> · 18:16
          </span>
          {revealed ? (
            <div className="revealed-spoiler">
              <span>
                <Icon name="eye" size={12} /> SPOILER REVELADO
              </span>
              <p>
                La escena del manuscrito me rompió el corazón. Jo por fin entiende lo que estaba
                evitando.
              </p>
              <button onClick={() => setRevealed(false)}>Ocultar de nuevo</button>
            </div>
          ) : (
            <button className="hidden-spoiler" onClick={() => setRevealed(true)}>
              <Icon name="lock" />
              <b>Spoiler del capítulo 11</b>
              <span>Estás en el capítulo 9 · Toca para revelar</span>
            </button>
          )}
        </div>
      </div>
      <div className="chat-message mine">
        <div>
          <span>
            <b>Tú</b> · 18:21
          </span>
          <p>Voy por el capítulo 9. Esta noche os alcanzo.</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="overlay-screen group-detail">
      <Header
        title="Clásicos con té"
        back
        onBack={close}
        action={
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        }
      />
      <div className="group-book-head">
        <Cover index={3} />
        <div>
          <span>LECTURA ACTUAL</span>
          <h2>Mujercitas</h2>
          <p>Louisa May Alcott</p>
          <Progress value={62} />
          <small>Tu progreso · 62% · Capítulo 9</small>
        </div>
        <div className="group-member-count">
          <Icon name="groups" size={14} /> 8
        </div>
      </div>
      <div className="group-tabs">
        <button
          className={groupTab === "general" ? "active" : ""}
          onClick={() => setGroupTab("general")}
        >
          General
        </button>
        <button
          className={groupTab === "chapters" ? "active" : ""}
          onClick={() => setGroupTab("chapters")}
        >
          Capítulos
        </button>
        <button
          className={groupTab === "notes" ? "active" : ""}
          onClick={() => setGroupTab("notes")}
        >
          Notas
        </button>
        <button
          className={groupTab === "members" ? "active" : ""}
          onClick={() => setGroupTab("members")}
        >
          Miembros
        </button>
      </div>

      {(groupTab === "general" || groupTab === "chapters") && (
        <>
          <div className="spoiler-warning">
            <Icon name="eye" />
            <div>
              <b>Protección de spoilers activa</b>
              <span>Ocultaremos mensajes posteriores al capítulo 9.</span>
            </div>
            <span className="toggle on">
              <i />
            </span>
          </div>
          {groupTab === "chapters" && (
            <div className="chapter-chat-picker">
              <div>
                <span>CONVERSACIONES</span>
                <b>Elige un capítulo</b>
              </div>
              <div>
                {[7, 8, 9, 10, 11].map((item) => (
                  <button
                    className={chapter === item ? "active" : ""}
                    onClick={() => setChapter(item)}
                    key={item}
                  >
                    <span>{item}</span>
                    <small>{item === 9 ? "12" : item === 10 ? "5" : "2"}</small>
                  </button>
                ))}
              </div>
            </div>
          )}
          <ChatMessages chapterMode={groupTab === "chapters"} />
        </>
      )}

      {groupTab === "notes" && (
        <div className="shared-notes">
          <div className="shared-notes-intro">
            <Icon name="edit" />
            <div>
              <b>Notas compartidas</b>
              <p>Reflexiones que el grupo decidió compartir.</p>
            </div>
          </div>
          {[
            [
              "Nora Abril",
              3,
              "“Quería hacer algo espléndido...”",
              "La ambición de Jo es lo que hace que esta historia se sienta tan actual.",
              "#b99bc2",
            ],
            [
              "Lucía Mar",
              2,
              "“El amor echa fuera el temor.”",
              "Una frase pequeña para un momento enorme.",
              "#d4bd64",
            ],
          ].map((note) => (
            <article className="shared-note" key={note[2]}>
              <i style={{ background: note[4] }} />
              <div className="shared-note-author">
                <Avatar name={note[0] as string} tone={note[1] as number} size="sm" />
                <div>
                  <b>{note[0]}</b>
                  <span>Capítulo {note[1] === 3 ? "9" : "8"}</span>
                </div>
              </div>
              <blockquote>{note[2]}</blockquote>
              <p>{note[3]}</p>
              <div>
                <button>
                  <Icon name="heart" size={14} /> 6
                </button>
                <button>
                  <Icon name="message" size={14} /> Comentar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {groupTab === "members" && (
        <div className="group-members">
          <div className="members-summary">
            <div>
              <b>62%</b>
              <span>Promedio del grupo</span>
            </div>
            <div className="mini-avatars">
              {participants.slice(0, 3).map((person) => (
                <Avatar name={person[0]} tone={person[3]} size="sm" key={person[0]} />
              ))}
              <span>+5</span>
            </div>
          </div>
          {participants.map((person, index) => (
            <article className="member-progress-card" key={person[0]}>
              <Avatar name={person[0]} tone={person[3]} />
              <div>
                <div className="member-name">
                  <b>{person[0]}</b>
                  {index === 0 && <span>TÚ</span>}
                  <small>{person[4]}</small>
                </div>
                <p>
                  {person[1]} · {person[2]}%
                </p>
                <Progress value={person[2]} />
              </div>
              {person[2] > 62 && (
                <span className="ahead-badge">
                  <Icon name="eye" size={11} /> Va por delante
                </span>
              )}
            </article>
          ))}
        </div>
      )}

      {(groupTab === "general" || groupTab === "chapters") && (
        <div className="chat-compose">
          <button>
            <Icon name="plus" />
          </button>
          <input
            placeholder={
              groupTab === "chapters"
                ? `Mensaje sobre el capítulo ${chapter}...`
                : "Escribe al grupo..."
            }
          />
          <button className="spoiler-compose">
            <Icon name="eye" size={16} />
          </button>
          <button className="send-btn">
            <Icon name="send" size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

function CreateGroupSheet({ close }: { close: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedBook, setSelectedBook] = useState(3);
  const [invited, setInvited] = useState<string[]>(["Nora Abril"]);
  const friends = [
    ["Nora Abril", 3],
    ["Lucía Mar", 2],
    ["Mateo Linde", 0],
  ] as const;

  return (
    <>
      <div className="scrim" onClick={close} />
      <div className="bottom-sheet create-group-sheet">
        <div className="grabber" />
        <div className="sheet-heading">
          <div>
            <span className="sheet-eyebrow">NUEVO CÍRCULO</span>
            <h2>Crear grupo de lectura</h2>
          </div>
          <button onClick={close}>
            <Icon name="close" />
          </button>
        </div>
        <div className="creation-steps">
          {["Grupo", "Libro", "Invitaciones"].map((label, index) => (
            <button
              className={step >= index + 1 ? "active" : ""}
              onClick={() => setStep(index + 1)}
              key={label}
            >
              <span>{index + 1}</span>
              <b>{label}</b>
            </button>
          ))}
        </div>
        {step === 1 && (
          <div className="group-form-step">
            <div className="group-cover-uploader">
              <div>
                <Icon name="image" />
                <span>
                  <Icon name="plus" size={14} />
                </span>
              </div>
              <p>Añade una imagen de portada</p>
            </div>
            <label>Nombre del grupo</label>
            <input className="text-input" defaultValue="Lecturas bajo el tilo" />
            <label>Descripción</label>
            <textarea
              className="group-description"
              defaultValue="Un rincón tranquilo para leer clásicos, compartir notas y conversar sin prisas."
            />
            <button className="private-line">
              <div>
                <b>Grupo privado</b>
                <span>Solo podrán entrar personas invitadas</span>
              </div>
              <span className="toggle on">
                <i />
              </span>
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="group-form-step">
            <SearchBar />
            <p className="step-helper">Elige la lectura principal del grupo</p>
            <div className="group-book-options">
              {[3, 4, 2].map((index) => (
                <button
                  className={selectedBook === index ? "active" : ""}
                  onClick={() => setSelectedBook(index)}
                  key={index}
                >
                  <Cover index={index} small />
                  <div>
                    <b>{covers[index].title}</b>
                    <span>{covers[index].author}</span>
                    <small>EPUB compatible</small>
                  </div>
                  <i>{selectedBook === index ? "✓" : ""}</i>
                </button>
              ))}
            </div>
            <button className="link-book-epub">
              <Icon name="upload" />
              <div>
                <b>Vincular otro EPUB</b>
                <span>Selecciona un archivo de tu biblioteca</span>
              </div>
              <Icon name="chevron" />
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="group-form-step">
            <SearchBar />
            <div className="invite-summary">
              <b>
                {invited.length} invitación{invited.length !== 1 ? "es" : ""}
              </b>
              <span>Podrán unirse cuando acepten</span>
            </div>
            <div className="invite-list">
              {friends.map(([name, tone]) => (
                <button
                  className={invited.includes(name) ? "selected" : ""}
                  onClick={() =>
                    setInvited((current) =>
                      current.includes(name)
                        ? current.filter((item) => item !== name)
                        : [...current, name],
                    )
                  }
                  key={name}
                >
                  <Avatar name={name} tone={tone} />
                  <div>
                    <b>{name}</b>
                    <span>3 libros en común</span>
                  </div>
                  <i>{invited.includes(name) ? "✓" : <Icon name="plus" size={14} />}</i>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="group-form-actions">
          {step > 1 && <button onClick={() => setStep(step - 1)}>Atrás</button>}
          <button className="primary-btn" onClick={() => (step < 3 ? setStep(step + 1) : close())}>
            {step < 3 ? "Continuar" : "Crear grupo"} {step < 3 && <Icon name="chevron" size={15} />}
          </button>
        </div>
      </div>
    </>
  );
}

function SettingsSheet({
  close,
  openProfile,
  dark,
  toggle,
}: {
  close: () => void;
  openProfile: () => void;
  dark: boolean;
  toggle: () => void;
}) {
  type SettingsSection =
    | "appearance"
    | "reading"
    | "controls"
    | "account"
    | "notifications"
    | "privacy"
    | "storage"
    | "accessibility"
    | "about";
  const [section, setSection] = useState<SettingsSection | null>(null);
  const [appearance, setAppearance] = useState<"day" | "night" | "auto">(dark ? "night" : "day");
  const [syncState, setSyncState] = useState<"synced" | "syncing" | "offline" | "error">("synced");
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    animations: true,
    keepAwake: true,
    preventSleep: true,
    fullscreen: true,
    autoHide: true,
    autoBrightness: true,
    tapSides: true,
    tapCenter: true,
    swipePages: true,
    volumePages: false,
    invertVolume: false,
    autoSync: true,
    friendActivity: true,
    followers: true,
    privateMessages: true,
    groupActivity: true,
    readingReminders: true,
    syncNotifications: false,
    publicAccount: true,
    showProgress: true,
    showShelves: true,
    screenReader: true,
    highContrast: false,
    reduceMotion: false,
    accessibleControls: true,
  });

  const flip = (key: string) => setSwitches((current) => ({ ...current, [key]: !current[key] }));

  const SettingToggle = ({
    id,
    title,
    description,
    warning,
  }: {
    id: string;
    title: string;
    description?: string;
    warning?: string;
  }) => (
    <button className="settings-option" onClick={() => flip(id)}>
      <div>
        <b>{title}</b>
        {description && <p>{description}</p>}
        {warning && <small>{warning}</small>}
      </div>
      <span className={switches[id] ? "toggle on" : "toggle"}>
        <i />
      </span>
    </button>
  );

  const SettingLink = ({
    title,
    value,
    danger,
  }: {
    title: string;
    value?: string;
    danger?: boolean;
  }) => (
    <button className={`settings-option settings-link ${danger ? "danger" : ""}`}>
      <div>
        <b>{title}</b>
        {value && <p>{value}</p>}
      </div>
      <Icon name="chevron" size={16} />
    </button>
  );

  const chooseAppearance = (value: "day" | "night" | "auto") => {
    setAppearance(value);
    if (value === "day" && dark) toggle();
    if (value === "night" && !dark) toggle();
  };

  const cycleSyncState = () => {
    const next = {
      synced: "syncing",
      syncing: "offline",
      offline: "error",
      error: "synced",
    } as const;
    setSyncState(next[syncState]);
  };

  const sectionMeta: Record<SettingsSection, [string, string, IconName]> = {
    appearance: ["Apariencia", "Tema, colores, idioma y animaciones", "sun"],
    reading: ["Pantalla y lectura", "Brillo, orientación y pantalla completa", "book"],
    controls: ["Controles de lectura", "Toques, gestos y botones de volumen", "play"],
    account: ["Cuenta y sincronización", "Google, seguridad y progreso", "user"],
    notifications: ["Notificaciones", "Amistades, grupos y recordatorios", "bell"],
    privacy: ["Privacidad y seguridad", "Visibilidad, seguidores y sesiones", "lock"],
    storage: ["Almacenamiento", "EPUB, portadas y copias de seguridad", "library"],
    accessibility: ["Accesibilidad", "Contraste, legibilidad y asistencia", "eye"],
    about: ["Información", "Ayuda, legal y versión de la aplicación", "more"],
  };

  const DetailHeader = () => (
    <Header
      title={section ? sectionMeta[section][0] : "Ajustes"}
      subtitle={section ? sectionMeta[section][1] : "Tu madriguera, a tu manera"}
      back
      onBack={() => setSection(null)}
    />
  );

  return (
    <div className="overlay-screen app-settings-page">
      {!section ? (
        <>
          <Header
            title="Ajustes"
            subtitle="Tu madriguera, a tu manera"
            back
            onBack={close}
            action={
              <button
                className="settings-profile-mini"
                onClick={openProfile}
                aria-label="Ir al perfil"
              >
                <Avatar name="Clara Soto" tone={1} size="sm" />
              </button>
            }
          />
          <div className="settings-status-card">
            <span className="settings-status-icon">
              <Icon name={dark ? "moon" : "sun"} />
            </span>
            <div>
              <b>{dark ? "Madriguera nocturna" : "Luz de mañana"}</b>
              <p>Apariencia actual · Sincronizado hace 2 min</p>
            </div>
            <span className="sync-dot" />
          </div>
          <div className="settings-search">
            <Icon name="search" size={17} />
            <input placeholder="Buscar en ajustes" />
          </div>
          <p className="settings-group-label">PREFERENCIAS</p>
          <div className="settings-category-grid">
            {(["appearance", "reading", "controls", "accessibility"] as SettingsSection[]).map(
              (key) => (
                <button onClick={() => setSection(key)} key={key}>
                  <span>
                    <Icon name={sectionMeta[key][2]} />
                  </span>
                  <div>
                    <b>{sectionMeta[key][0]}</b>
                    <p>{sectionMeta[key][1]}</p>
                  </div>
                  <Icon name="chevron" size={15} />
                </button>
              ),
            )}
          </div>
          <p className="settings-group-label">CUENTA Y DATOS</p>
          <div className="settings-category-grid">
            {(["account", "notifications", "privacy", "storage"] as SettingsSection[]).map(
              (key) => (
                <button onClick={() => setSection(key)} key={key}>
                  <span>
                    <Icon name={sectionMeta[key][2]} />
                  </span>
                  <div>
                    <b>{sectionMeta[key][0]}</b>
                    <p>{sectionMeta[key][1]}</p>
                  </div>
                  {key === "account" && <i className="category-state">AL DÍA</i>}
                  <Icon name="chevron" size={15} />
                </button>
              ),
            )}
          </div>
          <p className="settings-group-label">BUNNY READER</p>
          <div className="settings-category-grid">
            <button onClick={() => setSection("about")}>
              <span>
                <Icon name="more" />
              </span>
              <div>
                <b>Información de la aplicación</b>
                <p>Ayuda, legal, contacto y versión</p>
              </div>
              <Icon name="chevron" size={15} />
            </button>
          </div>
          <button className="settings-signout">
            <Icon name="arrow" size={16} /> Cerrar sesión
          </button>
          <span className="settings-version">Bunny Reader · Versión 1.0.0</span>
        </>
      ) : (
        <>
          <DetailHeader />
          {section === "appearance" && (
            <div className="settings-detail">
              <div className="appearance-preview">
                <span className={appearance === "night" ? "night" : ""}>
                  <i />
                  <i />
                  <i />
                </span>
                <div>
                  <b>Vista previa</b>
                  <p>
                    {appearance === "auto"
                      ? "Se adapta al dispositivo"
                      : appearance === "night"
                        ? "Madriguera nocturna"
                        : "Luz de mañana"}
                  </p>
                </div>
              </div>
              <SettingsCard title="Tema">
                <div className="appearance-choices">
                  {[
                    ["day", "sun", "Día"],
                    ["night", "moon", "Noche"],
                    ["auto", "settings", "Automático"],
                  ].map(([value, icon, label]) => (
                    <button
                      className={appearance === value ? "active" : ""}
                      onClick={() => chooseAppearance(value as "day" | "night" | "auto")}
                      key={value}
                    >
                      <Icon name={icon as IconName} />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </SettingsCard>
              <SettingsCard title="Personalización">
                <SettingLink title="Color de acento" value="Lavanda silvestre" />
                <SettingLink title="Tamaño de la interfaz" value="Estándar" />
                <SettingLink title="Idioma de la aplicación" value="Español" />
                <SettingToggle
                  id="animations"
                  title="Animaciones suaves"
                  description="Transiciones y movimiento de página"
                />
              </SettingsCard>
            </div>
          )}
          {section === "reading" && (
            <div className="settings-detail">
              <SettingsCard title="Pantalla durante la lectura">
                <SettingToggle
                  id="keepAwake"
                  title="Mantener pantalla activa"
                  description="Evita que se apague mientras estás leyendo"
                />
                <SettingToggle
                  id="preventSleep"
                  title="Evitar suspensión durante la lectura"
                  description="Mantiene el dispositivo despierto hasta cerrar el lector"
                />
                <SettingToggle
                  id="fullscreen"
                  title="Lectura en pantalla completa"
                  description="Oculta las barras del sistema"
                />
                <SettingToggle
                  id="autoHide"
                  title="Ocultar controles automáticamente"
                  description="Esconde las barras superior e inferior"
                />
              </SettingsCard>
              <SettingsCard title="Brillo">
                <div className="settings-slider">
                  <div>
                    <Icon name="sun" size={15} />
                    <b>Brillo dentro de Bunny Reader</b>
                    <span>72%</span>
                  </div>
                  <input type="range" defaultValue="72" />
                </div>
                <SettingToggle
                  id="autoBrightness"
                  title="Usar brillo del dispositivo"
                  description="Ajuste automático según la luz ambiental"
                />
              </SettingsCard>
              <SettingsCard title="Orientación">
                <div className="orientation-options">
                  {["Automática", "Vertical", "Horizontal"].map((item, index) => (
                    <button className={index === 0 ? "active" : ""} key={item}>
                      {item}
                    </button>
                  ))}
                </div>
                <SettingLink
                  title="Ajustes independientes del lector"
                  value="Tipografía, márgenes, temas y flujo"
                />
              </SettingsCard>
            </div>
          )}
          {section === "controls" && (
            <div className="settings-detail">
              <div className="tap-map">
                <span>
                  <Icon name="arrow" /> Anterior
                </span>
                <span>Mostrar controles</span>
                <span>
                  Siguiente <Icon name="chevron" />
                </span>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <SettingsCard title="Toques y gestos">
                <SettingToggle
                  id="tapSides"
                  title="Tocar los laterales"
                  description="Izquierda retrocede · Derecha avanza"
                />
                <SettingToggle
                  id="tapCenter"
                  title="Tocar el centro"
                  description="Mostrar u ocultar los controles"
                />
                <SettingToggle
                  id="swipePages"
                  title="Deslizar para cambiar página"
                  description="Gestos horizontales de izquierda y derecha"
                />
              </SettingsCard>
              <SettingsCard title="Botones físicos de volumen">
                <SettingToggle
                  id="volumePages"
                  title="Cambiar página con volumen"
                  description="Subir avanza · Bajar retrocede"
                  warning={
                    switches.volumePages
                      ? "Mientras lees, estos botones dejarán de controlar el volumen."
                      : undefined
                  }
                />
                <SettingToggle
                  id="invertVolume"
                  title="Invertir comportamiento"
                  description="Subir retrocede · Bajar avanza"
                />
              </SettingsCard>
            </div>
          )}
          {section === "account" && (
            <div className="settings-detail">
              <div className="account-identity">
                <Avatar name="Clara Soto" tone={1} />
                <div>
                  <b>Clara Soto</b>
                  <span>@claraleehistorias</span>
                  <small>clara@ejemplo.com · Verificado</small>
                </div>
                <Icon name="chevron" />
              </div>
              <SettingsCard title="Cuenta">
                <SettingLink title="Correo electrónico" value="clara@ejemplo.com · Verificado" />
                <SettingLink title="Nombre de usuario" value="@claraleehistorias" />
                <SettingLink title="Cambiar contraseña" value="Actualizada hace 3 meses" />
                <SettingLink
                  title="Recuperación de cuenta"
                  value="Correo y códigos de recuperación"
                />
              </SettingsCard>
              <div className="google-sync-card">
                <span className="google-mark">G</span>
                <div>
                  <b>
                    ¿Quieres sincronizar tu madriguera con Google para mantener tus libros y tu
                    progreso seguros?
                  </b>
                  <p>
                    Perfil, estanterías, progreso, marcadores, notas, resaltados y preferencias.
                  </p>
                </div>
                <button onClick={() => setSyncState(syncState === "synced" ? "syncing" : "synced")}>
                  {syncState === "synced" ? "Conectado con Google" : "Continuar con Google"}
                </button>
                <button className="without-google">Usar cuenta sin Google</button>
              </div>
              <SettingsCard title="Sincronización">
                <div className={`sync-status sync-${syncState}`}>
                  <span />
                  <div>
                    <b>
                      {syncState === "synced"
                        ? "Sincronizado"
                        : syncState === "syncing"
                          ? "Sincronizando..."
                          : syncState === "offline"
                            ? "Sin conexión"
                            : "Error de sincronización"}
                    </b>
                    <p>
                      {syncState === "synced"
                        ? "Última sincronización: hace 2 minutos"
                        : "Tus cambios se conservarán en este dispositivo"}
                    </p>
                  </div>
                  <button onClick={cycleSyncState} aria-label="Cambiar estado de sincronización">
                    <Icon name="sync" size={15} />
                  </button>
                </div>
                <SettingToggle
                  id="autoSync"
                  title="Sincronización automática"
                  description="Al guardar progreso, notas o estanterías"
                />
                <SettingLink
                  title="Sincronizar ahora"
                  value="Cuenta, perfil, biblioteca y preferencias"
                />
              </SettingsCard>
              <div className="backup-separation">
                <Icon name="upload" />
                <div>
                  <b>Copia de archivos EPUB</b>
                  <p>
                    La sincronización de cuenta no guarda los archivos EPUB originales. Gestiona sus
                    copias por separado.
                  </p>
                </div>
                <Icon name="chevron" />
              </div>
              <SettingsCard title="Zona de seguridad">
                <SettingLink title="Cerrar sesión" />
                <SettingLink
                  title="Eliminar cuenta"
                  value="Elimina tu cuenta y datos asociados"
                  danger
                />
              </SettingsCard>
            </div>
          )}
          {section === "notifications" && (
            <div className="settings-detail">
              <SettingsCard title="Actividad social">
                <SettingToggle
                  id="friendActivity"
                  title="Actividad de amigos"
                  description="Libros, progreso y notas compartidas"
                />
                <SettingToggle id="followers" title="Nuevos seguidores" />
                <SettingToggle id="privateMessages" title="Mensajes privados" />
                <SettingToggle
                  id="groupActivity"
                  title="Actividad de grupos"
                  description="Mensajes, encuentros e invitaciones"
                />
              </SettingsCard>
              <SettingsCard title="Lectura y cuenta">
                <SettingToggle
                  id="readingReminders"
                  title="Recordatorios de lectura"
                  description="Todos los días a las 20:30"
                />
                <SettingToggle
                  id="syncNotifications"
                  title="Notificaciones de sincronización"
                  description="Solo errores o acciones requeridas"
                />
                <SettingLink title="Horario silencioso" value="22:00–08:00" />
              </SettingsCard>
            </div>
          )}
          {section === "privacy" && (
            <div className="settings-detail">
              <SettingsCard title="Visibilidad">
                <SettingToggle
                  id="publicAccount"
                  title="Cuenta pública"
                  description="Cualquiera puede encontrarte y seguirte"
                />
                <SettingToggle id="showProgress" title="Mostrar progreso de lectura" />
                <SettingToggle id="showShelves" title="Mostrar estanterías públicas" />
              </SettingsCard>
              <SettingsCard title="Personas y sesiones">
                <SettingLink title="Gestionar seguidores" value="128 seguidores" />
                <SettingLink title="Usuarios bloqueados" value="2 personas" />
                <SettingLink title="Sesiones activas" value="2 dispositivos" />
                <SettingLink title="Cambiar contraseña" />
                <SettingLink title="Verificación de cuenta" value="Correo verificado" />
              </SettingsCard>
              <SettingsCard title="Tus datos">
                <SettingLink title="Solicitar descarga de datos" />
                <SettingLink title="Eliminar cuenta y datos" danger />
              </SettingsCard>
            </div>
          )}
          {section === "storage" && (
            <div className="settings-detail">
              <div className="storage-overview">
                <div>
                  <b>1,84 GB</b>
                  <span>de 8 GB utilizados</span>
                </div>
                <div className="storage-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <ul>
                  <li>
                    <i /> EPUB <b>1,42 GB</b>
                  </li>
                  <li>
                    <i /> Portadas <b>86 MB</b>
                  </li>
                  <li>
                    <i /> Copias <b>334 MB</b>
                  </li>
                </ul>
              </div>
              <SettingsCard title="Biblioteca local">
                <SettingLink title="Libros guardados" value="32 archivos EPUB" />
                <SettingLink title="Gestionar archivos" value="Mover, revisar o eliminar" />
                <SettingLink
                  title="Importar EPUB"
                  value="Desde el almacenamiento del dispositivo"
                />
                <SettingLink title="Archivos no disponibles" value="3 libros requieren atención" />
                <SettingLink
                  title="Eliminar descargas"
                  value="Conservará los datos de biblioteca"
                />
              </SettingsCard>
              <div className="storage-warning">
                <Icon name="lock" />
                <p>
                  Bunny Reader nunca eliminará los archivos originales de tu dispositivo sin pedir
                  confirmación.
                </p>
              </div>
              <SettingsCard title="Copias de seguridad de archivos">
                <SettingLink
                  title="Gestionar copias de EPUB"
                  value="Independiente de la sincronización con Google"
                />
              </SettingsCard>
            </div>
          )}
          {section === "accessibility" && (
            <div className="settings-detail">
              <div className="accessibility-preview">
                <span>Aa</span>
                <div>
                  <b>Lee a tu manera</b>
                  <p>Los cambios se aplican en toda la interfaz.</p>
                </div>
              </div>
              <SettingsCard title="Visual y movimiento">
                <SettingLink title="Tamaño de textos de interfaz" value="Estándar" />
                <SettingToggle id="highContrast" title="Contraste mejorado" />
                <SettingToggle id="reduceMotion" title="Reducir animaciones" />
                <SettingLink
                  title="Opciones de legibilidad"
                  value="Espaciado, peso y fuentes accesibles"
                />
              </SettingsCard>
              <SettingsCard title="Asistencia">
                <SettingToggle
                  id="screenReader"
                  title="Optimizar para lector de pantalla"
                  description="Etiquetas y orden de navegación mejorados"
                />
                <SettingToggle
                  id="accessibleControls"
                  title="Controles de lectura accesibles"
                  description="Áreas táctiles más grandes y ayudas visibles"
                />
              </SettingsCard>
            </div>
          )}
          {section === "about" && (
            <div className="settings-detail">
              <div className="about-bunny">
                <span>BR</span>
                <h2>Bunny Reader</h2>
                <p>Versión 1.0.0 · Construcción 2025.06</p>
              </div>
              <SettingsCard title="Ayuda y contacto">
                <SettingLink title="Centro de ayuda" />
                <SettingLink title="Contactar con soporte" />
                <SettingLink title="Enviar comentarios" />
                <SettingLink title="Reportar un error" />
              </SettingsCard>
              <SettingsCard title="Información legal">
                <SettingLink title="Términos y condiciones" />
                <SettingLink title="Política de privacidad" />
                <SettingLink title="Licencias de terceros" />
              </SettingsCard>
              <button className="settings-signout">
                <Icon name="arrow" size={16} /> Cerrar sesión
              </button>
              <p className="made-with-care">Diseñado para leer con calma.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function SettingsCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="settings-card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function ShelfSheet({ close, mode }: { close: () => void; mode: "create" | "edit" }) {
  const colors = ["#7d678b", "#9d7e73", "#668b82", "#a28b5f", "#7b8498", "#805f51"];
  const [color, setColor] = useState(mode === "edit" ? "#776082" : colors[0]);
  const [coverStyle, setCoverStyle] = useState<"letter" | "botanical" | "custom">(
    mode === "edit" ? "botanical" : "letter",
  );
  const [isPublic, setIsPublic] = useState(mode === "edit");
  return (
    <>
      <div className="scrim" onClick={close} />
      <div className="bottom-sheet create-shelf">
        <div className="grabber" />
        <div className="sheet-heading">
          <div>
            <span className="sheet-eyebrow">
              {mode === "edit" ? "PERSONALIZAR" : "NUEVO RINCÓN"}
            </span>
            <h2>{mode === "edit" ? "Editar estantería" : "Nueva estantería"}</h2>
          </div>
          <button onClick={close}>
            <Icon name="close" />
          </button>
        </div>
        <div className="shelf-editor-preview">
          <div className="preview-collection" style={{ background: color }}>
            <span className={coverStyle === "letter" ? "" : "hidden"}>N</span>
            {coverStyle === "botanical" && <i>❧</i>}
            {coverStyle === "custom" && <Icon name="upload" size={25} />}
            <div>
              {[0, 2, 4].map((index) => (
                <Cover index={index} small key={index} />
              ))}
            </div>
          </div>
          <div>
            <b>Vista previa</b>
            <span>Así se verá en tus colecciones</span>
          </div>
        </div>
        <label>Nombre de la estantería</label>
        <div className="named-input">
          <input
            className="text-input"
            defaultValue={mode === "edit" ? "Fantasía botánica" : "Noches de invierno"}
          />
          <span>{mode === "edit" ? "18" : "19"}/30</span>
        </div>
        <label>Color de cubierta</label>
        <div className="palette-row">
          {colors.map((swatch) => (
            <button
              className={swatch === color ? "active" : ""}
              style={{ background: swatch }}
              key={swatch}
              onClick={() => setColor(swatch)}
              aria-label={`Usar color ${swatch}`}
            />
          ))}
          <button className="color-wheel" aria-label="Elegir color personalizado" />
        </div>
        <div className="field-label">
          <label>Portada</label>
          <span>Elige un estilo</span>
        </div>
        <div className="cover-options shelf-cover-options">
          <button
            className={coverStyle === "letter" ? "active" : ""}
            onClick={() => setCoverStyle("letter")}
          >
            N<span>Inicial</span>
          </button>
          <button
            className={coverStyle === "botanical" ? "active botanical-option" : "botanical-option"}
            onClick={() => setCoverStyle("botanical")}
          >
            ❧<span>Botánica</span>
          </button>
          <button
            className={coverStyle === "custom" ? "active" : ""}
            onClick={() => setCoverStyle("custom")}
          >
            <Icon name="upload" />
            <span>Tu imagen</span>
          </button>
        </div>
        <button className="upload-cover-row" onClick={() => setCoverStyle("custom")}>
          <span>
            <Icon name="upload" />
          </span>
          <div>
            <b>Subir una portada personalizada</b>
            <p>JPG o PNG · Máximo 8 MB</p>
          </div>
          <Icon name="chevron" />
        </button>
        <button className="private-line" onClick={() => setIsPublic(!isPublic)}>
          <div>
            <b>Estantería pública</b>
            <span>Visible para tus amigas lectoras</span>
          </div>
          <span className={isPublic ? "toggle on" : "toggle"}>
            <i />
          </span>
        </button>
        <div className="shelf-form-actions">
          {mode === "edit" && (
            <button className="delete-shelf" onClick={close}>
              Eliminar
            </button>
          )}
          <button className="primary-btn full" onClick={close}>
            {mode === "edit" ? "Guardar cambios" : "Crear estantería"}
          </button>
        </div>
      </div>
    </>
  );
}

function Notifications({ close }: { close: () => void }) {
  return (
    <div className="overlay-screen notifications">
      <Header
        title="Notificaciones"
        back
        onBack={close}
        action={<button className="text-button">Marcar leídas</button>}
      />
      <p className="day-label">HOY</p>
      {[
        ["Lucía comentó tu actividad", "“Este libro también me encantó...”", "message"],
        ["Clásicos con té", "El encuentro empieza mañana a las 19:00", "groups"],
        ["Nora Abril comenzó a seguirte", "Tenéis 7 libros en común", "user"],
      ].map((n, i) => (
        <button className="notification-row" key={n[0]}>
          <span className="notification-icon">
            <Icon name={n[2] as IconName} />
          </span>
          <div>
            <b>{n[0]}</b>
            <p>{n[1]}</p>
            <small>Hace {i + 1} h</small>
          </div>
          {i < 2 && <i className="unread" />}
        </button>
      ))}
    </div>
  );
}

const nav = [
  ["home", "Inicio"],
  ["library", "Estantería"],
  ["groups", "Grupos"],
  ["users", "Mensajes"],
  ["user", "Perfil"],
] as [IconName, string][];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [overlay, setOverlay] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const render = () => {
    if (screen === "shelf")
      return (
        <Shelf
          openSearch={() => setOverlay("search")}
          openReader={() => setOverlay("reader")}
          openShelf={(mode) => setOverlay(mode === "edit" ? "shelf-edit" : "shelf")}
        />
      );
    if (screen === "groups")
      return (
        <Groups
          openGroup={() => setOverlay("group")}
          openCreate={() => setOverlay("create-group")}
        />
      );
    if (screen === "friends") return <Messages openGroup={() => setOverlay("group")} />;
    if (screen === "profile") return <Profile openSettings={() => setOverlay("settings")} />;
    return (
      <Home
        openReader={() => setOverlay("reader")}
        openSearch={() => setOverlay("search")}
        openNotifications={() => setOverlay("notifications")}
        go={setScreen}
      />
    );
  };
  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="phone-shell">
        <div className="status-bar">
          <span>9:41</span>
          <div>
            <span>●●●</span>
            <span>⌁</span>
            <span className="battery" />
          </div>
        </div>
        {render()}
        <nav className="bottom-nav">
          {nav.map(([icon, label]) => (
            <button
              key={label}
              className={
                screen === icon || (screen === "shelf" && icon === "library") ? "active" : ""
              }
              onClick={() => setScreen(icon === "library" ? "shelf" : icon)}
            >
              <span>
                <Icon name={icon} />
              </span>
              <small>{label}</small>
            </button>
          ))}
        </nav>
        {overlay === "search" && <SearchScreen close={() => setOverlay(null)} />}
        {overlay === "reader" && <Reader close={() => setOverlay(null)} />}
        {overlay === "group" && <GroupDetail close={() => setOverlay(null)} />}
        {overlay === "create-group" && <CreateGroupSheet close={() => setOverlay(null)} />}
        {overlay === "settings" && (
          <SettingsSheet
            close={() => setOverlay(null)}
            openProfile={() => {
              setOverlay(null);
              setScreen("profile");
            }}
            dark={dark}
            toggle={() => setDark(!dark)}
          />
        )}
        {(overlay === "shelf" || overlay === "shelf-edit") && (
          <ShelfSheet
            close={() => setOverlay(null)}
            mode={overlay === "shelf-edit" ? "edit" : "create"}
          />
        )}
        {overlay === "notifications" && <Notifications close={() => setOverlay(null)} />}
      </div>
    </div>
  );
}
