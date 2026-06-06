// أنواع الأعمال الأربعة مع لون كل نوع
export const WORK_TYPES = [
  { value: 'vacuum',      label: 'فاكيوم'  },
  { value: 'flexible',   label: 'مرن'     },
  { value: 'industrial', label: 'صناعة'   },
  { value: 'flex',       label: 'مؤقت'   },
]

// أنماط الألوان لكل نوع (مستخرجة من لون الشعار الأزرق)
export const TYPE_STYLES = {
  vacuum:      { bg: '#e8f4f8', color: '#1a7fa0', border: '#a8d4e6' },
  flexible:    { bg: '#e6f3f0', color: '#1a8c70', border: '#9fd4c6' },
  industrial:  { bg: '#f0eaf8', color: '#6b42a8', border: '#c4a8e0' },
  flex:        { bg: '#fef3e8', color: '#b86a1a', border: '#f0c490' },
}

// توليد ID فريد
export const generateId = () =>
  `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`

// تنسيق المبلغ كعملة
export const formatCurrency = (amount) =>
  new Intl.NumberFormat('ar-SY', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(amount) + ' ل.س'

// بيانات تجريبية عند أول تشغيل
export const DEMO_DATA = [
  {
    id: generateId(),
    name: 'أحمد الخطيب',
    phone: '0912345678',
    works: [
      { id: generateId(), type: 'vacuum',     desc: 'طقم كامل علوي',      cost: 15000 },
      { id: generateId(), type: 'flexible',   desc: 'جسر أمامي',          cost: 8000  },
      { id: generateId(), type: 'industrial', desc: 'تاج خزفي',           cost: 12000 },
    ],
  },
  {
    id: generateId(),
    name: 'سارة محمود',
    phone: '0923456789',
    works: [
      { id: generateId(), type: 'flex',       desc: 'تعويض جزئي سفلي',   cost: 9000  },
      { id: generateId(), type: 'vacuum',     desc: 'طقم كامل سفلي',      cost: 14000 },
    ],
  },
  {
    id: generateId(),
    name: 'محمد الحسن',
    phone: '0934567890',
    works: [
      { id: generateId(), type: 'industrial', desc: 'جسر خلفي معدني',    cost: 7000  },
      { id: generateId(), type: 'flex',       desc: 'تعويض أمامي',       cost: 11000 },
      { id: generateId(), type: 'flexible',   desc: 'طقم جزئي علوي',     cost: 6500  },
    ],
  },
]