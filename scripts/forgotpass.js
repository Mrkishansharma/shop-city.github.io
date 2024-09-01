const fotgot_Base = `https://shopcity-mrkishansharma.vercel.app`
function handleSubmitForgotPass(e){

    e.preventDefault()


    document.getElementById('ResetPassbtn').innerHTML = '<i class="fa fa-refresh fa-spin"></i> Reset Password'
    document.getElementById('ResetPassbtn').disabled = true;


    console.log(e);
    
    const forgetpassuserEmail = document.getElementById('forgetpassuserEmail').value;

    fetch(`${fotgot_Base}/user/request-forgot-password`, {
        method : "PATCH",
        headers:{
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            Email : forgetpassuserEmail
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.Success){

            Swal.fire(data.msg, '', 'success')


        }else{

            Swal.fire(data.error, '', 'error')

        }
    })
    .catch(err => {
        console.log(err);
    })
    .finally(()=>{
        document.getElementById('ResetPassbtn').innerHTML = 'Reset Password'
        document.getElementById('ResetPassbtn').disabled = false;
    })

}