import { generatePreHash, generateSignature } from "./generatePaymentSignature";
import {merchant_id, merchant_key, passphrase, paymentURL } from "./config";

export const handlePayfastCallback = async () => {
    const process = {
        merchant_id: merchant_id,
        merchant_key: merchant_key,
        return_url: "",
        cancel_url: "",
        notify_url: "",
        name_first: "",
        email_address: "",
        m_payment_id: "",
        amount: 39,
        item_name: 123456789,
        item_description: "",
        custom_int1: "",
        custom_str1: "",
        custom_str2: "",
    };

    const encodeURL = paymentURL + '?signature' + generateSignature(process, passphrase) + '&' + generatePreHash(process)
    return{ actionURL : encodeURL }
}