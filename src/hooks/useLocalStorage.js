import { useState, useEffect } from 'react'

// Hook مخصص لحفظ البيانات في المتصفح
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      // إذا وجدنا بيانات محفوظة نستخدمها، وإلا نستخدم القيمة الابتدائية
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  // كلما تغيرت القيمة نحفظها تلقائياً
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.error('localStorage error')
    }
  }, [key, value])

  return [value, setValue]
}