import { generatePreHash, generateSignature } from "./generatePaymentSignature";

const passphrase = "Afrikare54321"
   const merchant_id =  "21257869"
   const merchant_key = "kb9yekwzczh4r"
   const paymentURL = "www.payfast.co.za/eng/process"

export const handlePayfastSession =  (orderId, totalPrice) => {

    

    const process = {
        merchant_id: merchant_id,
        merchant_key: merchant_key,
        return_url: `http://localhost:3000/success/${orderId}`,
        cancel_url: `http://localhost:3000/failed/${orderId}`,
        notify_url: `http://localhost:3000/failed/${orderId}`,
        name_first: "",
        email_address: "",
        m_payment_id: "",
        amount: totalPrice,
        item_name: orderId,
        item_description: "",
        custom_int1: "",
        custom_str1: "",
        custom_str2: "",
    };

    const encodeURL = paymentURL + '?signature' + generateSignature(process, passphrase) + '&' + generatePreHash(process)
    return{ actionURL : encodeURL }
}

