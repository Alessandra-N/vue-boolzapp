const app = new Vue ({

    el: "#app",

    data: {
        
        newMessage: "",
        sentMessages: [],
        openedChat: [],

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
            name: 'Luisa',
            avatar: '_4',
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
    ]},

    methods: {

        sendMessage () {
            console.log(this.newMessage);
            console.log(this.sentMessages);
            //this.sentMessages.push(this.newMessage);
        },
            
        openChat (contact, index) {
            const contactMessages = this.contacts[index].messages;
            contactMessages.forEach(message => {
                const {date, text, status} = message;
                console.log(date, text, status);

                document.getElementById("prova").innerHTML = `
                <div class="received p-3" v-if="${status} === 'received'">

                    <span class="chat_message bg_green">${text }</span>
            
                </div>

                <div class="sent" v-if="${status} === 'sent'">

                    <span class="chat_message bg-white">${text }</span>
                
                </div>`

            });
            /* console.log(contactMessages[0].text);
            console.log(contact, index); */
        },

        /* completeTask(index) {
            var taskCompleted = this.tasks.splice(index, 1);
            this.doneList.push(taskCompleted[0]);
        }, */
       
    },

})