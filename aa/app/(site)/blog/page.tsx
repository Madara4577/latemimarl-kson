import type { Metadata } from 'next'
import { PageIntro } from '@/components/sections'
import { posts } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Blog',
  robots: { index: false, follow: false },
}

export default function BlogPage() {
  return (
    <main>
      <PageIntro eyebrow="notlar & ilhamlar" title="blog" />
      <section className="mx-auto max-w-3xl px-6 pb-28 md:px-10">
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug} className="py-12 transition-all duration-500 hover:pl-3">
              <article>
                <time className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{post.date}</time>
                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">{post.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
