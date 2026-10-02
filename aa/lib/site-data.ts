export const navLinks = [
  { href: '/projeler', label: 'projeler' },
  { href: '/hizmetler', label: 'hizmetler' },
  { href: '/ekip', label: 'ekip' },
  { href: '/hakkimizda', label: 'hakkımızda' },
  { href: '/iletisim', label: 'iletişim' },
] as const

export type Project = {
  slug: string
  src: string
  title: string
  category: string
  year: string
  location: string
  area: string
  summary: string
  description: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'emirgan-evi',
    src: '/images/proje-1.png',
    title: 'Emirgan Evi',
    category: 'Konut · Mimari Tasarım',
    year: '2025',
    location: 'Emirgan, İstanbul',
    area: '320 m²',
    summary: 'Boğaz’a bakan, ışıkla nefes alan sakin bir aile evi.',
    description: [
      'Emirgan Evi, yamaçtaki konumunu bir avantaja çeviren kademeli bir kütle olarak tasarlandı. Her kat, Boğaz manzarasını farklı bir açıdan çerçeveliyor.',
      'Kireç sıva, meşe ve traverten; evin bütününde tekrarlanan sınırlı bir malzeme paletiyle sakin ve zamansız bir atmosfer kuruyor.',
    ],
    gallery: ['/images/proje-1.png', '/images/hikaye.png', '/images/sade.png'],
  },
  {
    slug: 'mese-mutfak',
    src: '/images/proje-2.png',
    title: 'Meşe Mutfak',
    category: 'İç Mimari',
    year: '2025',
    location: 'Nişantaşı, İstanbul',
    area: '42 m²',
    summary: 'Masif meşe ve doğal taşla kurulmuş, yaşayan bir mutfak.',
    description: [
      'Ailenin günün çoğunu geçirdiği mutfak, evin kalbi olarak yeniden düşünüldü. Ada tezgah hem çalışma hem buluşma alanı.',
      'Ölçüye özel üretilen masif meşe dolaplar, kolsuz kapaklar ve gizli aydınlatmayla sade bir yüzey oluşturuyor.',
    ],
    gallery: ['/images/proje-2.png', '/images/proje-4.png', '/images/hikaye.png'],
  },
  {
    slug: 'keten-yatak-odasi',
    src: '/images/proje-3.png',
    title: 'Keten Yatak Odası',
    category: 'İç Mimari · Mobilya',
    year: '2024',
    location: 'Bebek, İstanbul',
    area: '36 m²',
    summary: 'Yumuşak dokular ve süzülen ışıkla dinginlik veren bir oda.',
    description: [
      'Keten perdeler gün ışığını yumuşatarak odaya gün boyu değişen sıcak bir ton katıyor.',
      'Başlık panosu ve komodinler, stüdyomuzda tasarlanıp ustalarımızca el işçiliğiyle üretildi.',
    ],
    gallery: ['/images/proje-3.png', '/images/proje-5.png', '/images/sade.png'],
  },
  {
    slug: 'traverten-banyo',
    src: '/images/proje-4.png',
    title: 'Traverten Banyo',
    category: 'Yenileme',
    year: '2024',
    location: 'Cihangir, İstanbul',
    area: '14 m²',
    summary: 'Tek bir taşla örülmüş, spa hissi veren bir banyo.',
    description: [
      'Eski bir apartman dairesinin banyosu, duvardan zemine kesintisiz traverten kaplamayla yeniden yorumlandı.',
      'Niş rafları ve gömme armatürler, küçük alanı ferah ve sade tutuyor.',
    ],
    gallery: ['/images/proje-4.png', '/images/proje-2.png', '/images/proje-1.png'],
  },
  {
    slug: 'kemerli-salon',
    src: '/images/proje-5.png',
    title: 'Kemerli Salon',
    category: 'Konut · Dekorasyon',
    year: '2023',
    location: 'Kuzguncuk, İstanbul',
    area: '85 m²',
    summary: 'Yumuşak kemerlerle akışkan bir yaşam alanı.',
    description: [
      'Salon ile yemek alanı arasındaki duvar kaldırılarak yerine geniş bir kemer açıldı; mekanlar birbirine akıyor.',
      'Krem sıva, keten döşemeler ve eskitme ahşap mobilyalar sıcak bir bütünlük oluşturuyor.',
    ],
    gallery: ['/images/proje-5.png', '/images/proje-3.png', '/images/hikaye.png'],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const steps = [
  {
    no: '01',
    title: 'Tanışma',
    text: 'Hayallerinizi, alışkanlıklarınızı ve mekanınızı dinliyoruz. Her şey doğru soruyla başlar.',
  },
  {
    no: '02',
    title: 'Konsept',
    text: 'Malzeme, renk ve ışık üzerine size özel bir tasarım dili oluşturuyoruz.',
  },
  {
    no: '03',
    title: 'Proje',
    text: 'Detaylı çizimler, üç boyutlu görseller ve uygulama planı ile fikri netleştiriyoruz.',
  },
  {
    no: '04',
    title: 'Uygulama',
    text: 'Ustalarımızla şantiyenin her adımını takip ediyor, mekanı anahtar teslim hazırlıyoruz.',
  },
] as const

export const services = [
  { title: 'Mimari Tasarım', text: 'Konut ve butik yapılar için bütüncül mimari projeler.' },
  { title: 'İç Mimarlık', text: 'Yaşam alanlarınıza karakter katan iç mekan çözümleri.' },
  { title: 'Yenileme', text: 'Mevcut mekanların ruhunu koruyarak yeniden yorumlanması.' },
  { title: 'Özel Mobilya', text: 'Mekana özel ölçülerde tasarlanan, el işçiliği parçalar.' },
] as const

export const team = [
  { name: 'Lale Ateş', role: 'Kurucu Mimar' },
  { name: 'Teoman Ekin', role: 'İç Mimar' },
  { name: 'Elif Mert', role: 'Proje Yöneticisi' },
] as const

export const posts = [
  {
    slug: 'traverten',
    date: '12 Ocak 2026',
    title: 'Travertenin sessiz zarafeti',
    excerpt:
      'Gözenekli dokusu ve sıcak tonlarıyla traverten, mekana zamansız bir sakinlik katıyor. Projelerimizde neden sıkça tercih ettiğimizi anlatıyoruz.',
  },
  {
    slug: 'isik',
    date: '28 Aralık 2025',
    title: 'Doğal ışıkla tasarlamak',
    excerpt:
      'Pencere oranlarından perde seçimine kadar, gün ışığını mekanın asıl malzemesi olarak nasıl kullandığımızı paylaşıyoruz.',
  },
  {
    slug: 'kemer',
    date: '3 Kasım 2025',
    title: 'Kemerlerin geri dönüşü',
    excerpt:
      'Yumuşak hatlar, sert köşelerin yerini alıyor. Kemerli geçişler ve nişlerle mekanlarda akışkan bir deneyim kurmak.',
  },
] as const
