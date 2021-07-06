//inputs 
const name = document.getElementById('name');
const log = document.getElementById('log');
const tel = document.getElementById('phone');
const last = document.getElementById('last');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2')
const email = document.getElementById('email');
//labels
const elab = document.getElementById('elab');
const namelab = document.getElementById('namelab');
const loglab = document.getElementById('loglab');
const tellab = document.getElementById('tellab');
const lastlab = document.getElementById('lastlab');
const passlab = document.getElementById('passlab');
const passlab2 = document.getElementById('passlab2');

elab.style.visibility = 'hidden';
namelab.style.visibility = 'hidden';
loglab.style.visibility = 'hidden';
tellab.style.visibility = 'hidden';
lastlab.style.visibility = 'hidden';
passlab.style.visibility = 'hidden';
passlab2.style.visibility = 'hidden';


email.onfocus = function(){
    elab.style.visibility = 'visible';
    email.setAttribute('placeholder', '');
}
log.onfocus = function(){
    loglab.style.visibility = 'visible';
    log.setAttribute('placeholder', '');
}
pass.onfocus = function(){
    passlab.style.visibility = 'visible';
    pass.setAttribute('placeholder', '');
}
name.onfocus = function(){
    namelab.style.visibility = 'visible';
    name.setAttribute('placeholder', '');
}
last.onfocus = function(){
    lastlab.style.visibility = 'visible';
    last.setAttribute('placeholder', '');
}
pass.onfocus = function(){
    passlab.style.visibility = 'visible';
    pass.setAttribute('placeholder', '');
}
pass2.onfocus = function(){
    passlab2.style.visibility = 'visible';
    pass2.setAttribute('placeholder', '');
}
tel.onfocus = function(){
    tellab.style.visibility = 'visible';
    tel.setAttribute('placeholder', '')
}


name.onblur = function(){
    if (name.value === ''){
        namelab.style.visibility = 'hidden';
        name.setAttribute('placeholder','Имя')
    }
    
        
    
}
pass.onblur = function(){
    if (pass.value === ''){
        passlab.style.visibility='hidden';
        pass.setAttribute('placeholder','Пароль')

    }
}
log.onblur = function(){
    if (log.value === ''){
        loglab.style.visibility = 'hidden';
        log.setAttribute('placeholder','Логин')
    }
    
        
    
}
pass2.onblur = function(){
    if (pass2.value === ''){
        passlab2.style.visibility='hidden';
        pass2.setAttribute('placeholder','Пароль (еще раз)')

    }
}
last.onblur = function(){
    if (last.value === ''){
        lastlab.style.visibility = 'hidden';
        last.setAttribute('placeholder','Фамилия')
    }
    
        
    
}
email.onblur = function(){
    if (email.value === ''){
        elab.style.visibility='hidden';
        email.setAttribute('placeholder','Почта')

    }
}
tel.onblur = function(){
    if (tel.value === ''){
        tellab.style.visibility = 'hidden';
        tel.setAttribute('placeholder','Телефон')
    }
    
        
    
}
