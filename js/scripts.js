 console.log('It works')
 $(documents).ready(function(){
   $('.submit').click(function(event) {
      event.preventDefault()
      console.log('Clicked button')

      var email = &('.email').valueOf()
      var subject = $('.subject').val()
      var message = $('.message').val()

      if(email.length > 5 && email.includes('e') && email.includes('.'))
      console.log('email is valid') 
      } else {
      console.log('email is not valid')
      }
  })
})