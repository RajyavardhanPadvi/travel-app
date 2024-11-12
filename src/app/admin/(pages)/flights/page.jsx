import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import CreateFlightModal from '../../modals/flight-modal/CreateFlightModal'

const Flights = () => {
  return (
    <AdminLayout>
          <div className='mx-auto '>
            <CreateFlightModal/>
          </div>
    </AdminLayout>
    )
}

export default Flights