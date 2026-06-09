import { WORK_TYPES } from '../utils/helpers'
import './FilterBar.css'

// filter: 'all' أو أي قيمة من WORK_TYPES
function FilterBar({ filter, setFilter }) {
 const tabs = [
  { value: 'all', label: 'الكل' },
  ...WORK_TYPES,
  { value: 'paid', label: 'مدفوع' },
  { value: 'unpaid', label: 'غير مدفوع' },
  { value: 'delivered', label: 'مستلم' },
  { value: 'undelivered', label: 'غير مستلم' },
]
  return (
    <div className="filter-bar">
      {tabs.map(tab => (
        <button
          key={tab.value}
          className={`filter-btn ${filter === tab.value ? 'active' : ''}`}
          onClick={() => setFilter(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar