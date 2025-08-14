import Head from 'next/head';

export default function Home() {
return (
<>
<Head>
<title>Noelia Eizag – Creadora & Estratega</title>
<meta name="description" content="Transformo ideas en experiencias visuales y emocionales únicas que venden." />
</Head>

<main
style={{
minHeight: '100vh',
backgroundImage: "url('/images/portada.png')",
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat'
}}
className="flex items-center"
>
<div className="mx-auto max-w-5xl px-6 py-16 text-white">
<header className="mb-10">
<h1 className="text-4xl md:text-6xl font-bold leading-tight">
Soy Noelia Eizag: creadora, artista digital y estratega.
</h1>
<p className="mt-5 text-lg md:text-2xl max-w-3xl">
Transformo ideas en experiencias visuales y emocionales únicas. Bienvenida a mi universo creativo,
donde arte, diseño y estrategia se encuentran para construir proyectos con alma y resultados reales.
Explora, inspírate y dejemos juntos algo que deje huella.
</p>
</header>

<nav className="flex flex-wrap gap-3">
<a href="/projects" className="inline-block px-5 py-3 bg-white/10 hover:bg-white/20 rounded-md border border-white/30">
Proyectos
</a>
<a href="/info" className="inline-block px-5 py-3 bg-white/10 hover:bg-white/20 rounded-md border border-white/30">
Sobre mí
</a>
<a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 bg-white text-black hover:bg-gray-100 rounded-md">
Contrátame
</a>
</nav>
</div>
</main>
</>
);
}
