'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from '@/app/actions'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-0 transition-colors'

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, null)

  return (
    <form action={action} className="space-y-8">
      <div>
        <label htmlFor="name" className="text-sm tracking-wider text-muted-foreground">
          Adınız
        </label>
        <input id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" className={fieldClass} />
      </div>

      <fieldset>
        <legend className="text-sm tracking-wider text-muted-foreground">Evini değiştirmek ister misin?</legend>
        <div className="mt-4 flex flex-wrap gap-6">
          {[
            { value: 'mutlaka', label: 'Mutlaka' },
            { value: 'yapamam', label: 'Üzgünüm yapamam' },
          ].map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="change"
                value={opt.value}
                required
                className="size-4 accent-[var(--foreground)]"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="likes" className="text-sm tracking-wider text-muted-foreground">
          Nelerden hoşlandığını söyle
        </label>
        <textarea id="likes" name="likes" rows={3} maxLength={1000} className={cn(fieldClass, 'resize-none')} />
      </div>

      <div>
        <label htmlFor="color" className="text-sm tracking-wider text-muted-foreground">
          Sevdiğin bir rengi yaz
        </label>
        <input id="color" name="color" maxLength={60} className={fieldClass} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-primary px-10 py-3.5 text-sm tracking-[0.3em] text-primary-foreground transition-all hover:scale-105 hover:bg-accent disabled:opacity-60"
      >
        {pending ? 'gönderiliyor…' : 'gönder'}
      </button>

      <p role="status" aria-live="polite" className={cn('text-sm', state?.ok ? 'text-foreground' : 'text-destructive')}>
        {state?.message}
      </p>

      <p className="text-xs text-muted-foreground">
        Bilgileriniz paylaşılmayacak. Şifrelerinizi asla göndermeyin.
      </p>
    </form>
  )
}
