const phone1 = "3114689389"
const phone2 = "3166471805"
const whatsapp1 = `https://api.whatsapp.com/send?phone=57${phone1}/`
const whatsapp2 = `https://api.whatsapp.com/send?phone=57${phone2}/`

export const add_phone = document.createElement('div')

add_phone.className = 'whatsapp_number'
add_phone.innerHTML = `

  <a href="${whatsapp1}" target="_blank"> 
    <span class="icon-whatsapp whatsapp wm"></span> ${phone1}
  </a>

  <a href="${whatsapp2}" target="_blank"> 
    <span class="icon-whatsapp whatsapp wm"></span> ${phone2}
  </a>

  `