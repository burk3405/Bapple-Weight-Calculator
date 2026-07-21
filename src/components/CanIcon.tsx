interface CanIconProps {
  animated?: boolean
}

export function CanIcon({ animated = false }: CanIconProps) {
  return (
    <img className={animated ? 'can-icon can-icon--animated' : 'can-icon'} src="/can.webp" alt="" aria-hidden="true" />
  )
}