import { useState } from 'react'
import FilterBar from '../components/FilterBar'
import WorkRow from '../components/WorkRow'
import AddWorkForm from '../components/AddWorkForm'
import TotalSection from '../components/TotalSection'
import Button from '../components/Button'
import './WorksPage.css'
import logo from '../assets/logo.jpg'

function WorksPage({ client, clients, setClients }) {
  const [filter, setFilter]       = useState('all')
  const [showForm, setShowForm]   = useState(false)

  // الأعمال المعروضة حسب الفلتر
  const displayedWorks = filter === 'all'
    ? client.works
    : client.works.filter(w => w.type === filter)

  // إضافة عمل جديد
  const handleAddWork = (work) => {
    setClients(prev =>
      prev.map(c =>
        c.id === client.id
          ? { ...c, works: [...c.works, work] }
          : c
      )
    )
  }

  // حذف عمل
  const handleDeleteWork = (workId) => {
    setClients(prev =>
      prev.map(c =>
        c.id === client.id
          ? { ...c, works: c.works.filter(w => w.id !== workId) }
          : c
      )
    )
  }

  return (
    <div className="works-page">
      {/* رأس الصفحة */}
      <div className="page-header">
        <div className="page-header-info">
          <h1 className="page-title">{client.name}</h1>
          {client.phone && (
            <span className="client-phone-badge">{client.phone}</span>
          )}
        </div>
        <Button onClick={() => setShowForm(s => !s)}>
          {showForm ? '✕ إغلاق' : '+ إضافة عمل'}
        </Button>
      </div>
          {/* ترويسة الطباعة */}
<div className="print-header">

  <div className="print-header-info">
    <span className="print-lab-name">DT. Omran Ali</span>
    <span className="print-lab-sub">Dentist Lab</span>
  </div>
    <div className="print-header-logo">
    <img src={logo} alt="logo" className="print-logo-img" />
  </div>
  <div className="print-header-client">
    <span className="print-client-label">العميل</span>
    <span className="print-client-name">{client.name}</span>
    {client.phone && (
      <span className="print-client-phone">{client.phone}</span>
    )}
  </div>
  <button className="print-btn" onClick={() => window.print()}>
    🖨️ طباعة
  </button>
</div>
      {/* فورم الإضافة */}
      {showForm && (
        <AddWorkForm
          onAdd={(work) => { handleAddWork(work); setShowForm(false) }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* شريط الفلتر */}
      <FilterBar filter={filter} setFilter={setFilter} />

      {/* قائمة الأعمال */}
      <div className="works-list">
        {displayedWorks.length > 0 ? (
          displayedWorks.map(work => (
            <WorkRow
              key={work.id}
              work={work}
              onDelete={handleDeleteWork}
            />
          ))
        ) : (
          <div className="works-empty">
            <p>
              {filter === 'all'
                ? 'لا يوجد أعمال بعد — أضف أول عمل'
                : `لا يوجد أعمال من نوع "${filter}" لهذا العميل`}
            </p>
          </div>
        )}
      </div>

      {/* الحساب النهائي — يظهر فقط إذا كانت هناك أعمال */}
      {client.works.length > 0 && (
        <TotalSection works={client.works} filter={filter} />
      )}
    </div>
  )
}

export default WorksPage