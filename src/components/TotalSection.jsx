import { WORK_TYPES, TYPE_STYLES, formatCurrency } from '../utils/helpers'
import './TotalSection.css'

function TotalSection({ works, filter }) {
  // إجمالي كل الأعمال
  const grandTotal = works.reduce((sum, w) => sum + Number(w.cost), 0)
  const paidTotal = works.filter(w => w.paid).reduce((sum, w) => sum + Number(w.cost), 0)
  const remainingTotal = grandTotal - paidTotal

  // إجمالي الفئة المختارة
  const filtered = filter === 'all'
    ? works
    : works.filter(w => w.type === filter)
  const filteredTotal = filtered.reduce((sum, w) => sum + Number(w.cost), 0)

  return (
    <div className="total-section">
      {filter === 'all' ? (
        /* ===== عند "الكل": تفصيل لكل نوع ===== */
        <>
          <h4 className="total-title">ملخص الحساب</h4>
          <div className="total-breakdown">
            {WORK_TYPES.map(t => {
              const typeWorks = works.filter(w => w.type === t.value)
              const typeTotal = typeWorks.reduce((s, w) => s + Number(w.cost), 0)
              if (typeWorks.length === 0) return null
              const styles = TYPE_STYLES[t.value]
              return (
                <div
                  key={t.value}
                  className="total-row"
                  style={{ borderColor: styles.border }}
                >
                  <span
                    className="total-row-label"
                    style={{ color: styles.color }}
                  >
                    {t.label}
                  </span>
                  <span className="total-row-count">
                    {typeWorks.length} عمل
                  </span>
                  <span className="total-row-amount">
                    {formatCurrency(typeTotal)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="total-grand">
            <span>الإجمالي الكلي</span>
            <span className="total-grand-amount">{formatCurrency(grandTotal)}</span>
          </div>
          {paidTotal > 0 && (
            <div className="total-grand" style={{ color: 'green', fontSize: '13px', opacity: 0.85 }}>
              <span>المدفوع</span>
              <span>- {formatCurrency(paidTotal)}</span>
            </div>
          )}
          {paidTotal > 0 && (
            <div className="total-grand" style={{ fontWeight: 700 }}>
              <span>المتبقي</span>
              <span className="total-grand-amount">{formatCurrency(remainingTotal)}</span>
            </div>
          )}
        </>
      ) : (
        /* ===== عند فئة محددة ===== */
        <>
          <div className="total-single">
            <span className="total-single-label">
              إجمالي {WORK_TYPES.find(t => t.value === filter)?.label}
            </span>
            <span className="total-single-amount">
              {formatCurrency(filteredTotal)}
            </span>
          </div>
          {grandTotal !== filteredTotal && (
            <div className="total-hint">
              الإجمالي الكلي (جميع الأنواع): {formatCurrency(grandTotal)}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default TotalSection