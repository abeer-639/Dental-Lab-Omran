import Badge from './Badge'
import { formatCurrency } from '../utils/helpers'
import './WorkRow.css'

function WorkRow({ work, onDelete, onToggle }) {
  const handleDelete = () => {
  if (window.confirm('هل تريد حذف هذا العمل؟')) onDelete(work.id)
}
  return (
   <div className={`work-row ${work.delivered && work.paid ? 'work-done' : ''}`}>
      <Badge type={work.type} />
      <span className="work-desc">{work.desc}</span>
      <span className="work-cost">{formatCurrency(work.cost)}</span>
      <label htmlFor="go">التسليم</label>
      <input type="checkbox" checked={work.delivered} id='go' onChange={() => onToggle(work.id, 'delivered')} title="تم التسليم" />
      <label htmlFor="goo">الدفع</label>
      <input type="checkbox" checked={work.paid} id='goo'  onChange={() => onToggle(work.id, 'paid')} title="تم الدفع" />
      <button
        className="work-delete"
        onClick={handleDelete}
        title="حذف"
      >
        ✕
      </button>
    </div>
  )
}

export default WorkRow