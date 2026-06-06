import { useState } from 'react'
import Navbar from './components/Navbar'
import ClientsPage from './pages/ClientsPage'
import WorksPage from './pages/WorksPage'
import { useLocalStorage } from './hooks/useLocalStorage'
import { DEMO_DATA } from './utils/helpers'
import './App.css'

function App() {
  // البيانات الرئيسية — تُحفظ تلقائياً في localStorage
  const [clients, setClients] = useLocalStorage('omran_lab_clients', DEMO_DATA)

  // null = صفحة العملاء / string = id العميل المفتوح
  const [activeClientId, setActiveClientId] = useState(null)

  // العميل الحالي المفتوح
  const activeClient = clients.find(c => c.id === activeClientId)

  return (
    <>
      <Navbar
        clientName={activeClient?.name}
        onBack={() => setActiveClientId(null)}
      />

      {activeClientId && activeClient ? (
        /* صفحة الأعمال */
        <WorksPage
          client={activeClient}
          clients={clients}
          setClients={setClients}
        />
      ) : (
        /* صفحة العملاء */
        <ClientsPage
          clients={clients}
          setClients={setClients}
          onSelectClient={setActiveClientId}
        />
      )}
    </>
  )
}

export default App