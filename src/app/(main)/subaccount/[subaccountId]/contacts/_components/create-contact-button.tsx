'use client'

import ContactUserForm from '@/components/forms/contact-user-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import React from 'react'

type Props = {
  subaccountId: string
}

const CreateContactButton = ({ subaccountId }: Props) => {
  const { setOpen } = useModal();

  const handleClickContact = async () => {
    setOpen( 
      <CustomModal 
        title='Create or Update Contact Information'
        subheading='Contacts are like customers'
        
      >
        <ContactUserForm subaccountId={subaccountId}/>
      </CustomModal>
     )
  }

  return (
    <Button onClick={handleClickContact}> Create Contact </Button>
  )
}

export default CreateContactButton