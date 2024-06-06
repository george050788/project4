const Email = require("../models/emailModel")

const EmailData = () => {
  Email.create([{
    name: 'Tommy Sicilia',
    message: 'How to Succeed with Your Shopify Store',
    avatar: 'https://solelysneat.vercel.app/images/avatars/1.png',
    personal: false,
    company: false,
    important: false,
    private: true,
    time: '11.46 PM'
  }, {
    name: 'Tressa Gass',
    message: 'Please find attached the lastest Company Report',
    avatar: 'https://solelysneat.vercel.app/images/avatars/6.png',
    personal: false,
    company: true,
    important: false,
    private: true,
    time: '11.55 PM'
  }, {
    name: 'Louetta Esses',
    message: 'Update Can Change Your Personal Life',
    avatar: 'https://solelysneat.vercel.app/images/avatars/4.png',
    personal: false,
    company: false,
    important: true,
    private: false,
    time: '01.04 AM'
  }, {
    name: 'Waldemar Mannering',
    message: 'Refer friends. Get rewards',
    avatar: 'https://solelysneat.vercel.app/images/avatars/5.png',
    personal: false,
    company: false,
    important: false,
    private: true,
    time: '03.02 AM'
  }
    , {
    name: 'Eb Begg',
    message: 'App Update',
    avatar: 'https://solelysneat.vercel.app/images/avatars/8.png',
    personal: false,
    company: true,
    important: false,
    private: false,
    time: '03.12 PM'
  }
    , {
    name: 'Modestine Spat',
    message: 'Password Reset',
    avatar: 'https://solelysneat.vercel.app/images/avatars/3.png',
    personal: false,
    company: true,
    important: false,
    private: false,
    time: '04.25 AM'
  }
    , {
    name: 'Ardis Balderson',
    message: 'Bank transfer initiated',
    avatar: 'https://solelysneat.vercel.app/images/avatars/2.png',
    personal: false,
    company: true,
    important: false,
    private: false,
    time: '02.39 PM'
  }
    , {
    name: 'Dalila Ouldcott',
    message: 'Order Feedback',
    avatar: 'https://solelysneat.vercel.app/images/avatars/1.png',
    personal: true,
    company: false,
    important: false,
    private: false,
    time: '09.09 PM'

  }
    , {
    name: 'Lockwood Kubicek',
    message: 'Finally Start Running',
    avatar: 'https://solelysneat.vercel.app/images/avatars/2.png',
    personal: false,
    company: false,
    important: false,
    private: true,
    time: '09.09 PM'
  }
  ])
}
module.exports = EmailData