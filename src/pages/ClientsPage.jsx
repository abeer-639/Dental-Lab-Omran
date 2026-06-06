import { useState } from 'react'
import ClientCard from '../components/ClientCard'
import Modal from '../components/Modal'
import Button from '../components/Button'
import { generateId } from '../utils/helpers'
import './ClientsPage.css'
import heroBg from '../assets/hero2.jpg'

function ClientsPage({ clients, setClients, onSelectClient }) {
  const [showModal, setShowModal]   = useState(false)
  const [editTarget, setEditTarget] = useState(null)  // العميل المراد تعديله
  const [form, setForm]             = useState({ name: '', phone: '' })
  const [search, setSearch]         = useState('')

  // فتح modal الإضافة
  const openAdd = () => {
    setEditTarget(null)
    setForm({ name: '', phone: '' })
    setShowModal(true)
  }

  // فتح modal التعديل مع تعبئة البيانات الحالية
  const openEdit = (client) => {
    setEditTarget(client)
    setForm({ name: client.name, phone: client.phone || '' })
    setShowModal(true)
  }

  // حفظ (إضافة أو تعديل)
  const handleSave = () => {
    if (!form.name.trim()) return
    if (editTarget) {
      // تعديل عميل موجود
      setClients(prev =>
        prev.map(c =>
          c.id === editTarget.id
            ? { ...c, name: form.name.trim(), phone: form.phone.trim() }
            : c
        )
      )
    } else {
      // إضافة عميل جديد
      const newClient = {
        id:    generateId(),
        name:  form.name.trim(),
        phone: form.phone.trim(),
        works: [],
      }
      setClients(prev => [newClient, ...prev])
    }
    setShowModal(false)
  }

  // حذف بعد تأكيد
  const handleDelete = (id) => {
    if (window.confirm('هل تريد حذف هذا العميل وجميع أعماله؟')) {
      setClients(prev => prev.filter(c => c.id !== id))
    }
  }

  // فلترة البحث
  const filtered = clients.filter(c =>
    c.name.includes(search) || c.phone?.includes(search)
  )

  return (
    <div className="clients-page">
      {/* رأس الصفحة */}
      <div className="page-header">
        <div className="page-header-info">
          <h1 className="page-title">العملاء</h1>
          <span className="page-count">{clients.length} عميل</span>
        </div>
        <Button onClick={openAdd}>+ إضافة عميل</Button>
      </div>

      {/* شريط البحث */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="ابحث باسم العميل أو رقم الهاتف..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* شبكة العملاء */}
      {filtered.length > 0 ? (
        <div className="clients-grid">
          {filtered.map(client => (
            <ClientCard
              key={client.id}
              client={client}
              onSelect={onSelectClient}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="clients-empty">
          <div className="empty-icon">🦷</div>
          <p className="empty-title">
            {search ? 'لا نتائج للبحث' : 'لا يوجد عملاء بعد'}
          </p>
          {!search && (
            <Button onClick={openAdd}>+ إضافة أول عميل</Button>
          )}
        </div>
      )}

      {/* Modal الإضافة / التعديل */}
      {showModal && (
        <Modal
          title={editTarget ? 'تعديل بيانات العميل' : 'إضافة عميل جديد'}
          onClose={() => setShowModal(false)}
        >
          <div className="client-form">
            <div className="form-group">
              <label className="form-label">الاسم *</label>
              <input
                className="form-input"
                type="text"
                placeholder="اسم العميل"
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">رقم الهاتف</label>
              <input
                className="form-input"
                type="tel"
                placeholder="09XXXXXXXX"
                value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                dir="ltr"
              />
            </div>
            <div className="form-actions">
              <Button onClick={handleSave} disabled={!form.name.trim()}>
                {editTarget ? 'حفظ التعديلات' : 'إضافة'}
              </Button>
              <Button variant="ghost" onClick={() => setShowModal(false)}>
                إلغاء
              </Button>
            </div>
          </div>
        </Modal>
      )}
         {/* هيرو المخبر */}
        <div className="lab-hero">
        <img src={heroBg} alt="" className="lab-hero-img" />
        <div className="lab-hero-overlay">
            <p className="lab-hero-text"> Molar Dental Works </p>
        </div>
        </div>
    </div>
  )
}

export default ClientsPage