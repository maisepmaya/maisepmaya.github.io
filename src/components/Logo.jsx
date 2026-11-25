import { useLang } from '../lib/i18n.jsx'
export const Cursor = () => (
  <svg viewBox="0 0 28 36" aria-hidden="true">
    <path
      d="M3 2 L3 30 L10 23 L15 34 L20 32 L15 21 L25 21 Z"
      fill="#FFFFFF" stroke="#1F1B1D" strokeWidth="2.6" strokeLinejoin="round"
    />
  </svg>
)

export default function Logo() {
  const { t } = useLang()
  return (
    <a className="logo" href="#" aria-label={t('Maíse Maya, página inicial', 'Maíse Maya, home page')}>
      <span className="leve">MAÍSE&nbsp;</span>
      <span className="forte">M</span>
      <Cursor />
      <span className="forte">YA</span>
    </a>
  )
}
