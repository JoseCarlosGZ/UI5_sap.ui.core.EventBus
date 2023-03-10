sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("josecarlos.html5module.controller.App", {
            onInit: function () {
                // HTML string bound to the formatted text control
				var oModel = new sap.ui.model.json.JSONModel(
                    {
					    HTML : "<p>• La clase EventBus de SAPUI5 se usa para ejecutar funciones de uno o varios controladores B, C, D… de la aplicación cuando se dispara un evento de un controlador A:</p>"+

                        "<p>En el controlador A se crea una instancia del EventBus y se publica mediante el método publish() en un canal y evento de canal determinados. Esta instrucción estará dentro de la función listener del evento que dispara la acción. Ejemplo un press='' de un sap.m.Button:</p>"+
                        "<pre style=\"color: darkblue;\">onPressBTN: function () {</pre>"+
                        "<pre style=\"color: darkblue;\">      this.getOwnerComponent().getEventBus().publish(sCanal?, sEventoCanal, oData?) // void → Siendo ? un parámetro opcional.</pre>"+
                        "<pre style=\"color: darkblue;\">}</pre>"+
                        
                        "<p>"+
                        "En el controlador/es B, C… se crea otra instancia del EventBus que suscribimos al mismo canal y evento del canal abiertos en el controlador A. De este modo cuando se lance el evento determinado en el controlador A (un press de un botón…), el controlador B lo estará escuchando y podrá realizar una acción."+
                        "</p>"+
                        "<pre style=\"color: darkblue;\">onInit: function () {</pre>"+
                        "<pre style=\"color: darkblue;\">      this.getOwnerComponent().getEventBus().subscribe(sCanal?, sEventoCanal, this.MiFuncion, this?) // this → Siendo ? un parámetro opcional.</pre>"+
                        "<pre style=\"color: darkblue;\">},</pre>"+
                        "<pre style=\"color: darkblue;\">MiFuncion: function (sCanal?, sEventoCanal, oData?) {</pre>"+
                        "<pre style=\"color: darkblue;\">     //Aquí hacemos lo que queramos cuando se presione el botón del controlador A. Incluso si nos ha enviado un objeto podemos usarlo</pre>"+
                        "<pre style=\"color: darkblue;\">},</pre>"+
                        
                        "<p>"+
                        "Nota. Si no se especifica un canal a la hora de crear la instancia del EventBus, se tomará el canal por defecto. En cambio al evento asociado al canal siempre tenermos que darle un nombre."+ 
                        "Nota. Para un canal y evento de canal publicados puede haber n instancias del EventBus en distintos controladores suscritos a la escucha, esperando a que el evento indicado del controlador A se"+ "dispare para realizar determinado acción que puede ser distinta en cada uno de los controladores suscritos al canal."+
                        "</p>"+
                        
                        "<p>• Se puede recuperar la instancia del EventBus de dos formas distintas:</p>"+
                        "<ul>"+
                            "<li>Llamando al core del framework: sap.ui.getCore().getEventBus(); → sólo recomendable para standalone apps o apps que no vayan a formar parte de un launchpad.</li>"+
                            "<li>Llamando al owner component o componente del controlador que es el Component.js: this.getOwnerComponent().getEventBus();</li>"+
                        "</ul>"+
                        
                        "<p>"+
                        "SAP recomienda la segunda forma porque una vez el usuario navega al home del launchap, se destruye el componente(Component.js) de dicha app y con este las funciones listener/event handler serán"+ "eliminadas. Por ende si usamos la primera forma en una app que está embebida en un Launchap, pero además hay más de una instancia EventBus con el mismo nombre de evento y canal en varias apps,"+"entonces se liará."+
                        "</p>"+
                        
                        "<p>"+
                        "• El statement/instrucción para recuperar el oEventBus la pondremos en la función listener del evento que publica el canal/evento para una instancia del EventBus. Esta función enviará los datos que"+ "le indiquemos como tercer parámetro y serán procesados en la función .subscribe por otra instancia del EventBus en otro controlador. En cambio la función del oEventBus.subscribe() del otro"+ "controlador puede ir tanto en el onInit como en otra función cualquiera (en este caso tendríamos que forzar su ejecución)."+
                        "</p>"+
                        
                        "<p >"+
                        "• Tanto si recuperamos en ambos controladores la instancia del EventBus con la instrucción/statement sap.ui.getCore().getEventBus() como con this.getOwnerComponent().getEventBus() la trasmisión del"+ " EventBus funcionará siempre y cuando se hayan cargado ya los dos controlares donde se publica y se suscribe el EventBus."+ 
                        "Pero ojo, si en uno de los controladores recuperamos la instancia del EventBus con this.getOwnerComponent().getEventBus() y en el otro con sap.ui.getCore().getEventBus() o viceversa, entonces la"+ "trasmisión del EventBus no funcionará independientemente de que se hayan cargado ambos controladores."+
                        "</p>"
                         
				    }
                );
				this.getView().setModel(oModel);


            },


            onNavToSecondary: function () {
                sap.ui.core.UIComponent.getRouterFor(this).navTo("Secondary");
            },
            onNavToTertiary: function () {
                sap.ui.core.UIComponent.getRouterFor(this).navTo("Tertiary");
            },



            onSendObjeto: function () {
                var oData = {nombre: "Juan"};
                var oEventBus = this.getOwnerComponent().getEventBus();
                oEventBus.publish("channel1", "event1", oData);
            },
            
            onReutilizarSaludarTertiary: function () {
                var oEventBus = this.getOwnerComponent().getEventBus();
                oEventBus.publish("channel1", "event2");
            }
        
        });
    });
