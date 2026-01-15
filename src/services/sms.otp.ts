export interface IParamSendOTP {
   channel: string,
   sender: string,
   phone: string,
   template: string,
   code_length?: number
}

export interface IResultSendOTP {
   account_id: string,
   message_id: string,
   phone: string,
   create_date: string,
   expire_date: string
}

export async function API_SendOTP(param: IParamSendOTP): Promise<IResultSendOTP> {
   const endpoint = import.meta.env.VITE_API_SMS_OTP
   const keyAPI = import.meta.env.VITE_OTP_KEY || ""

   const payload = {
      channel: param.channel,
      sender: param.sender,
      phone: param.phone,
      template: btoa(param.template),
      code_length: param.code_length || 4,
   }

   const result = await fetch(endpoint, {
      method: "POST",
      headers: {
         "x-otp-key": keyAPI,
         "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
   })

   const parseResult = await result.json()
   return parseResult
}