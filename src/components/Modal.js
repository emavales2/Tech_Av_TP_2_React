
"use client";

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export function BasicModal({buttonText, children}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button className="cust_button modal_button" onClick={() => setOpenModal(true)}>{buttonText}</Button>

            <Modal id="modal" dismissible show={openModal} size="lg" onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg_coral_lt border-b-0 black" />
                
                <Modal.Body className="bg_coral_lt">       
                    {children}  
                </Modal.Body>
            </Modal>
        </>
    );
}
