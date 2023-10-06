'use client'

import { useTranslations } from 'next-intl'
import { Hero } from 'src/components/hero'

export default function Home() {
  const t = useTranslations('home')

  return (
    <div className="flex h-screen items-center justify-center">
      {t('title')}
      <Hero></Hero>
    </div>
  )
}
