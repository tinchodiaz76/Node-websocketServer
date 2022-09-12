const socketController =(socket)=>{
    console.log('Cliente conectado ', socket.id);

    socket.on('disconnect', ()=>{
        console.log('Cliente Desconectado ', socket.id);
    })

    //Escucha el mensaje, enviado como "enviar-mensaje"
    socket.on('enviar-mensaje', (payload, callback)=>{

        const id= 123456;
        callback(id);
        //console.log('Recibi en el server el Mensaje ', payload)
        socket.broadcast.emit('enviar-mensaje', payload, id);   //Emite el enciar-mensaje para todos
    })

}

module.exports={
    socketController
}