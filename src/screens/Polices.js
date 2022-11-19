import React from 'react'
import Header from '../components/Header'

function Polices() {
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <h1 className='pol-h1'>RETURN POLICES</h1>

        <h2 className='pol-h2'>Last updated 18/11/2022</h2>

        <p className='pol-p'>Thank you for your purchase. We hope you are happy with your purchase. However, if you are not
           completely satisfied with your purchase for any reason, you may return it to us for a full refund or an
           exchange. Please see below for more information on our return policy.
        </p>
        
        <h2 className='pol-h2'>RETURNS</h2>

        <p className='pol-p'>
            All returns must be postmarked within seven (7days of the purchase date. All returned items must
            be in new and unused condition, with the original proof of purchase.
            RETURN PROCESS
            To return an item, place the item securely in its original packaging and include your proof of
            purchase, then send your item to the following address
            The beauty box
            V&amp;A watershed
            Dock road
            Cape Town
            Please note, you will be responsible for all return shipping charges. We strongly recommend that
            you use a trackable method to send your return. 
        </p>
        
        <h2 className='pol-h2'> REFUNDS</h2>

        <p className='pol-p'>
                After receiving your return and inspecting the condition of your item, we will process your return or
                exchange Please allow at five (5)days from the receipt of your item to process return or exchange
                .We will notify you by email when your return has been processed
        </p>
        
        <h2 className='pol-h2'>EXCEPTIONS</h2>

        <p className='pol-p'>For defective or damaged products please contact us at the contact details below to arrange a
        refund or exchange
        Please note
         Sale items are FINALE SALE cannot be returned
        </p>
        
        <h2 className='pol-h2'>QUESTIONS</h2>
        
        <p className='pol-p'>If you have any questions concerning our return policy please contact us at
        info@afrikare.co.za
        </p>
        
      </div>
    </>
  )
}

export default Polices