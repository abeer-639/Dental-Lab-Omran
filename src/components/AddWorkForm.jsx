import { useState } from 'react'
import { WORK_TYPES, generateId } from '../utils/helpers'
import Button from './Button'
import './AddWorkForm.css'

function AddWorkForm({ onAdd, onCancel }) {
  const [form, setForm] = useState({
    type: 'vacuum',
    desc: '',
    cost: '',
    delivered: false, 
    paid: false, 
  })

  const handleSubmit = () => {
    if (!form.desc.trim() || !form.cost) return
    onAdd({
      id:   generateId(),
      type: form.type,
      desc: form.desc.trim(),
      cost: Number(form.cost),
      delivered: form.delivered,
      paid: form.paid,
      createdAt: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),createdAt: (() => { const d = new Date(); return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`; })(),
    })
    // إعادة ضبط النموذج
    setForm({ type: 'vacuum', desc: '', cost: '', delivered: false, paid: false })
  }

  return (
    <div className="add-work-form">
      <h4 className="add-form-title">إضافة عمل جديد</h4>
      <div className="add-form-fields">

        {/* نوع العمل */}
        <select
          className="form-select"
          value={form.type}
          onChange={(e) => setForm(f => ({ ...f, type: e.target.value }))}
        >
          {WORK_TYPES.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>

        {/* الوصف */}
        <input
          className="form-input"
          type="text"
          placeholder="وصف العمل"
          value={form.desc}
          onChange={(e) => setForm(f => ({ ...f, desc: e.target.value }))}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />

        {/* التكلفة */}
        <input
          className="form-input cost-input"
          type="number"
          placeholder="التكلفة"
          value={form.cost}
          onChange={(e) => setForm(f => ({ ...f, cost: e.target.value }))}
          min="0"
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </div>
      <div className="checkbox-group">
  <label>
      <input type="checkbox" checked={form.delivered} onChange={e => setForm(f => ({ ...f, delivered: e.target.checked }))} />
       تم التسليم
  </label>
  <label>
    <input type="checkbox" checked={form.paid} onChange={e => setForm(f => ({ ...f, paid: e.target.checked }))} />
    تم الدفع
  </label>
</div>
      <div className="add-form-actions">
        <Button
          onClick={handleSubmit}
          disabled={!form.desc.trim() || !form.cost}
        >
          + إضافة
        </Button>
        <Button variant="ghost" onClick={onCancel}>إلغاء</Button>
      </div>
    </div>
  )
}

export default AddWorkForm