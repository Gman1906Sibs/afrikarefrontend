import React from 'react'
import SampleStore from './SampleStore'
import useScript from 'react-script-hook';
import config from './config';


const PopupSample = (props) => {

  const Id = props.Id
  const price = props.price * 100
  console.log(price)

  useScript({
    src: 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js',
    onload: () => {

      // eslint-disable-next-line no-undef
      const yoco = new YocoSDK({
        publicKey: config.sdk.PUBLIC_KEY,
      })

      var inline = yoco.inline({
          amountInCents: price,
          currency: 'ZAR',
          name: 'Afrikare',
          description: Id,
          displayMethod: 'MANUAL',
          callback: function (chargeToken) {
            alert(`Card tokenization completed, your server must now process the payment`)
          },
        });
        inline.mount('#card-frame')
    },
  })

  return (
    <form id="payment-form" method="POST">
  <div class="one-liner">
    <div id="card-frame">
      
    </div>
    <button id="pay-button">
      {price}
    </button>
  </div>
  <p class="success-payment-message" />
</form>
  )
}

export default PopupSample