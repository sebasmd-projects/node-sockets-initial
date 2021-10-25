class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-al-server
            socket.on('mensaje-al-servidor', ( data ) => {
                console.log( data );

                // Para un solo cliente
                // socket.emit('mensaje-al-cliente', data );

                // Para todos los clientes
                this.io.emit('mensaje-al-cliente', data );
            });
        
        });
    }


}


module.exports = Sockets;