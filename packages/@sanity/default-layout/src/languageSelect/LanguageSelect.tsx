import React, {useState} from 'react'
import {Select} from '@sanity/ui'
import config from 'config:sanity'
import i18n from '../i18next'

const LANGUAGES = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'French',
    code: 'fr',
  },
]

export function LanguageSelect(props: Omit<React.HTMLProps<HTMLSelectElement>, 'ref'>) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    localStorage.getItem('language') || config.language
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value
    i18n.changeLanguage(value)
    setCurrentLanguage(value)
    localStorage.setItem('language', value)
  }

  return (
    <Select
      {...props}
      onChange={handleChange}
      value={(currentLanguage && currentLanguage) || undefined}
      radius={2}
    >
      {LANGUAGES.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </Select>
  )
}
