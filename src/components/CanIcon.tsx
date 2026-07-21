interface CanIconProps {
  animated?: boolean
}

export function CanIcon({ animated = false }: CanIconProps) {
  return (
    <img className={animated ? 'can-icon can-icon--animated' : 'can-icon'} src={`${import.meta.env.BASE_URL}can.webp`} alt="" aria-hidden="true" />
  )
}