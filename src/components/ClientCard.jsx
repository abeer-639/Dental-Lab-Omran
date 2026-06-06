import { formatCurrency, WORK_TYPES } from '../utils/helpers'
import './ClientCard.css'

function ClientCard({ client, onSelect, onEdit, onDelete }) {
  const total = client.works.reduce((sum, w) => sum + Number(w.cost), 0)

  // عدد أعمال كل نوع
  const typeCounts = WORK_TYPES.map(t => ({
    label: t.label,
    count: client.works.filter(w => w.type === t.value).length,
  })).filter(t => t.count > 0)

  return (
    <div className="client-card" onClick={() => onSelect(client.id)}>
      {/* رأس البطاقة */}
      <div className="client-card-header">
        <h3 className="client-card-name">{client.name}</h3>
        {client.phone && (
          <span className="client-card-phone">{client.phone}</span>
        )}
      </div>

      {/* إحصائيات */}
      <div className="client-card-stats">
        <div className="client-stat">
          <span className="client-stat-value">{client.works.length}</span>
          <span className="client-stat-label">عمل</span>
        </div>
        <div className="client-stat client-stat-total">
          <span className="client-stat-value">{formatCurrency(total)}</span>
          <span className="client-stat-label">الإجمالي</span>
        </div>
      </div>

      {/* أنواع الأعمال الموجودة */}
      {typeCounts.length > 0 && (
        <div className="client-card-types">
          {typeCounts.map(t => (
            <span key={t.label} className="client-type-pill">
              {t.label} ({t.count})
            </span>
          ))}
        </div>
      )}

      {/* أزرار الإجراءات */}
      <div
        className="client-card-actions"
        onClick={(e) => e.stopPropagation()} /* منع فتح صفحة الأعمال */
      >
        <button
          className="client-action-btn edit"
          onClick={() => onEdit(client)}
          title="تعديل"
        >
          ✏️
        </button>
        <button
          className="client-action-btn delete"
          onClick={() => onDelete(client.id)}
          title="حذف"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default ClientCard