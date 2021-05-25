const app = new Vue ({

    el: "#app",

    data: {
        
        newText: "",
        contactSelected: 0,
        search: '',
        
        contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },

        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Paolo',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Andiamo al cinema stasera?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'In realtà, preferirei provare la nuova pizzeria',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_6',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Mario',
            avatar: '_7',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: "Hai letto l'ultimo libro di Stephen King?",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'No, era troppo lungo.',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Giuseppe',
            avatar: '_8',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: "Vieni a pranzo? Mamma ha fatto i cannelloni.",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Sono già lì.',
                    status: 'received'
                }
            ],
        },
    ]},

    methods: {

        selectContact(index) {
            return this.contactSelected = index
        },
        /**##Funzione per inviare messaggi
         * Crea un nuovo oggetto messaggio e poi lo pusha nell'array di mesaggi del contatto selezionato.*/
        sendMessage () {
            const newMessage = {};
            const selectedMessages = this.contacts[this.contactSelected].messages;
            newMessage.text = this.newText;
            newMessage.date = dayjs().format("DD/MM/YYYY HH:mm:ss");
            newMessage.status = "sent";
            selectedMessages.push(newMessage);
            this.newText = "";

           /** ##Funzione per ricevere un messaggio automatico
            * crea un messaggio di risposta, inviato dopo un secondo attraverso un setTimeout.
            * con l'aiuto della libreria day.js, la data e l'orario di riezione/invio sono queeli correnti*/ 
           
            function sendAnswer () {
                const newAnswer = {};
                newAnswer.text = "Ok";
                newAnswer.date = dayjs().format("DD/MM/YYYY HH:mm:ss");
                newAnswer.status = "received";
                selectedMessages.push(newAnswer);
            }
            setTimeout(sendAnswer, 1000);
        
        },

       
    },

    /* Computazione per filtrare i contatti, collegata all'input della barra di ricerca.
    il ToLowerCase è per ottenere risultato sia che si cerchi con la maiuscola che con la minuscola
    lo startsWith è per filtrare in base all'ordine di digitazione e non al contenuto generale dei messaggi */
    computed: {
        filteredContacts: function () {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().startsWith(this.search.toLowerCase());
            })
        }
    },

})