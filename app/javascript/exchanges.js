document.addEventListener('turbolinks:load', function(){
    document.getElementById('exchange_form').addEventListener('ajax:success', function(event){
        console.log(event)
        let [result] = event.detail
        document.getElementById('result').value = result.value
    })
})