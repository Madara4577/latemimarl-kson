'use server'

export type ContactState = { ok: boolean; message: string } | null

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const change = String(formData.get('change') ?? '')
  const likes = String(formData.get('likes') ?? '').trim()
  const color = String(formData.get('color') ?? '').trim()

  if (name.length < 2 || name.length > 80) {
    return { ok: false, message: 'Lütfen adınızı yazın.' }
  }
  if (change !== 'mutlaka' && change !== 'yapamam') {
    return { ok: false, message: 'Lütfen bir seçenek işaretleyin.' }
  }
  if (likes.length > 1000 || color.length > 60) {
    return { ok: false, message: 'Mesajınız çok uzun.' }
  }

  return {
    ok: true,
    message:
      change === 'mutlaka'
        ? `Teşekkürler ${name}! En kısa sürede sizinle iletişime geçeceğiz.`
        : `Teşekkürler ${name}, fikriniz değişirse buradayız.`,
  }
}
