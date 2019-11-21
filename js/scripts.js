// contact form 
 $(documents).ready(function(){
   $('.submit').click(function(event) {
      event.preventDefault()
      console.log('Clicked button')

      var email = $('.email').val()
      var subject = $('.subject').val()
      var message = $('.message').val()
      var statusEln = $('.status')
      statusEln.empty()

      if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusEln.append('<div>Email is  valid</div>')
      } else {
        event.preventDefault()
        statusEln.append('<div>Email is not valid</div>')
      }

      if(subject.legth > 2) {
        statusEln.append('<div>Subject is valid</div>')
      } else {
        event.preventDefault()
        statusEln.append('<div>Subject is not valid</div>')
      }
      if(message.legth > 20) {
        statusEln.append('<div>messaje is valid</div>')
      } else {
        event.preventDefault()
        statusEln.append('<div>message is not valid</div>')
      }
  })
})