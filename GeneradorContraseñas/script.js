
function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_-+=<>?.,";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}

function copyToClipboard() {
    var passwordField = document.getElementById("password");

    if (passwordField.value.trim()=="") {
        Swal.fire({
            title:"Advertencia",
            text:"Genera una contraseña antes de copiar",
            icon:"warning",
            confirmButtonText:"Ok",
            width: 300,
            backdrop:true,
            position:"center",
            /*cuando el usuario aga clik fuera no se cierre la ventana*/
            allowOutsideClick: false,
            allowEscapeKey: false,
            alloyEnterKey:false,
            stopKeydownPropagation: false
        })
    } else {
        passwordField.select();
        document.execCommand("copy");
        Swal.fire({
            title: "Contraseña Copiada!",
            text: "😊",
            icon: "success",
            width: 300,
            showConfirmButton: false,
            timer: 2000
        });
        passwordField.value="";
    }
}
