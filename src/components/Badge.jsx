import { WORK_TYPES, TYPE_STYLES } from '../utils/helpers'
import './Badge.css'

function Badge({ type }) {
  const typeInfo = WORK_TYPES.find(t => t.value === type)
  const styles   = TYPE_STYLES[type] || {}
  
  return (
    <span
      className="badge"
      style={{
        background:   styles.bg,
        color:        styles.color,
        borderColor:  styles.border,
      }}
    >
      {typeInfo?.label || type}
    </span>
  )
}

export default Badge