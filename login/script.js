const passlab = document.getElementById('passlab');
const loglab = document.getElementById('loglab');
const log = document.getElementById('log');
const pass = document.getElementById('pass');



loglab.style.visibility = 'hidden';
passlab.style.visibility = 'hidden';

log.onfocus = function() {
    loglab.style.visibility = 'visible';
    log.setAttribute('placeholder', '');

}

pass.onfocus = function() {
    passlab.style.visibility = 'visible';
    pass.setAttribute('placeholder', '');
}

log.onblur = function(){
    if (log.value === ''){
        loglab.style.visibility = 'hidden';
        log.setAttribute('placeholder','Логин')
    }
    
        
    
}
pass.onblur = function(){
    if (pass.value === ''){
        passlab.style.visibility='hidden';
        pass.setAttribute('placeholder','Пароль')

    }
}