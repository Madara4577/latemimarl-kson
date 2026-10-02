import { TransitionLink } from '@/components/page-transition'
import { Logo } from '@/components/site-header'
import { navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-[#b8665f] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <TransitionLink href="/" label="Late" aria-label="Late Mimarlık ana sayfa" className="inline-block">
            <Logo variant="light" />
          </TransitionLink>
          <address className="mt-6 text-sm not-italic leading-relaxed text-white/80">
            123 bilmemne sk.
            <br />
            istanbul | tr
          </address>
        </div>

        <div>
          <p className="font-serif text-xl italic">sorular? iletişime geçin!</p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li>
              Tel:{' '}
              <a href="tel:123456789" className="hover:text-white">
                123-456-789
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:late@gmail.com" className="hover:text-white">
                late@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-xl italic">instagramdan takip edin</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm tracking-widest text-white/80 hover:text-white"
          >
            @latemimarlık
          </a>
          <nav aria-label="Alt menü" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} label={link.label} className="hover:text-white">
                    <span data-transition-label>{link.label}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs tracking-wider text-white/80 md:flex-row md:px-10">
          <p>latemimarlık ©2026 | All rights reserved</p>
          <p>#late | #latemimarlik</p>
        </div>
      </div>
    </footer>
  )
}
