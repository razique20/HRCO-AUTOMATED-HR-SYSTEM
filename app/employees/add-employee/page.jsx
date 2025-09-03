import React from 'react'
import EmployeeForm from '@/components/EmployeeForm'

const page = () => {
  return (
   <div>
        
         <main className="flex-1 p-6 overflow-auto">
           <h1 className="text-3xl font-bold mb-6">Add New Employee</h1>
           <EmployeeForm />
         </main>
       </div>
  )
}

export default page