console.log('socket-client.js');

const btnEnviar=document.querySelector("#btnEnviar");
const txtMensaje=document.querySelector("#txtMensaje");

const lblOnline= document.querySelector("#lblOnline");
const lblOffline= document.querySelector("#lblOffline");


//Esto seria la parte del cliente

//Conecta el socket
const socket =io();

//CON EL SOCKET.ON SE ESCUCHA UN EVENTO
//CON EL SOCKET.EMIT SE EMITE UN MENSAJE

//Escucho el evento Connect
socket.on('connect',()=>{
    console.log('Conectado al Servidor');

    lblOffline.style.display='none';
    lblOnline.style.display='';
    
});

//Escucho el evento Disconnect
socket.on('disconnect',()=>{
    console.log('Desconectado del Servidor');

    lblOnline.style.display='none';
    lblOffline.style.display='';
});

//Escucho el evento enviar-mensaje que me envia el SERVER.
socket.on('enviar-mensaje',(payload)=>{
    console.log('El servidor me mando, ', payload);
})


btnEnviar.addEventListener('click', ()=>{

    const mensaje= txtMensaje.value;

    const payload={
        mensaje, 
        id:'123ABC'
    };

    //Envia un mensaje al servidor, con el titulo "enviar-mensaje"
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id);
    });

})