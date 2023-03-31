function func1()
{
    email=document.getElementById("email").value
    pat_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!pat_email.test(email))
    {
        alert("Entered Email is  not valid!!!! ")
    }
    else{
        alert('i will reach out you soon...')
    }
}