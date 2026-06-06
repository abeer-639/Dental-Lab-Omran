import Badge from './Badge'
import { formatCurrency } from '../utils/helpers'
import './WorkRow.css'

function WorkRow({ work, onDelete }) {
  return (
    <div className="work-row">
      <Badge type={work.type} />
      <span className="work-desc">{work.desc}</span>
      <span className="work-cost">{formatCurrency(work.cost)}</span>
      <button
        className="work-delete"
        onClick={() => onDelete(work.id)}
        title="حذف"
      >
        ✕
      </button>
    </div>
  )
}

export default WorkRow