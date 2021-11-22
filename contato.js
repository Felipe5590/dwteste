function validarCampos() {
    let ret = true;
    let form = document.forms["formContato"];
    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";

    /* --- Validação de nome --- */

    if (form.nomeSobrenome.value.trim() == "") {
        /* alert('Preencha o campo nome, por favor.'); */
        msgErro.innerHTML = "Preencha o campo nome, por favor. <br>";
        form.mensagem.focus();
        ret = false;
    }



    /* --- Validação de email --- */

    if ((form.email.value.indexOf(".") == -1) ||
        (form.email.value.indexOf("@") == -1) ||
        (form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1)) {

        /* alert('Preencha o campo email, por favor.'); */
        msgErro.innerHTML = "Preencha o campo email, por favor. <br>";
        form.mensagem.focus();
        ret = false;
    }

    /* --- Validação de periodo --- */

    if(form.periodo.selectedIndex < 0){
        msgErro.innerHTML = "Selecione um periodo, por favor. <br>";
        form.mensagem.focus();
        ret = false;
    }

    return ret;
}