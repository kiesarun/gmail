var data = {
    email: "email@example.com",
    displayName: "email example",
    allMail: [{
        id: "1",
        sender: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "Let's go home!",
        text: "yark kub barn laew kie, hiwwwwwwwwwwwwwwwwwwwwwwwwwwww makkkkk",
        sentAt: new Date(),
        type:"inbox"
    },{
        id: "2",
        sender: {
            name: "beam",
            email: "beam@example.com"
        },
        header: "Let's go home!",
        text: "yark kub barn laew kie, hiwwwwwwwwwwwwwwwwwwwwwwwwwwww makkkkk",
        sentAt: new Date(),
        type:"inbox"
    }, {
        id: "3",
        sender: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "Let's go home!",
        text: "yark kub barn laew kie, hiwwwwwwwwwwwwwwwwwwwwwwwwwwww makkkkk",
        sentAt: new Date(),
        type:"inbox"
    }, {
        id: "4",
        receiver: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "Let's go home!",
        text: "yark kub barn laew kie, hiwwwwwwwwwwwwwwwwwwwwwwwwwwww makkkkk",
        sentAt: new Date(),
        type:"sent"
    }, {
        id: "5",
        receiver: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "",
        text: "eiei",
        sentAt: "",
        type:"draft"
    }, {
        id: "6",
        sender: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "QQQQQQQQQQ",
        text: "eieieieieieieieieieieiei",
        sentAt: new Date(),
        type:"inbox"
    }, {
        id: "7",
        sender: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "QQQQQQQQQQ",
        text: "eieieieieieieieieieieiei",
        sentAt: new Date(),
        type:"inbox"
    }, {
        id: "8",
        sender: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "QQQQQQQQQQ",
        text: "eieieieieieieieieieieiei",
        sentAt: new Date(),
        type:"inbox"
    }, {
        id: "9",
        sender: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "QQQQQQQQQQ",
        text: "eieieieieieieieieieieiei",
        sentAt: new Date(),
        type:"inbox"
    }
    ]
}

var modal = $("#myModal")[0];

var allEmail = data.allMail

function mailTitleBox(mail) {
    return '<div class="mail-title-box" id="' + mail.id + '">\
                <div class="mail-sender-profile">\
                    <div class="sender-profile-icon">\
                        <img class="profile-pic" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">\
                    </div>\
                </div>\
                <div class="header-text-title">\
                    <div class="mail-sent-info">\
                        <div class="sender-name">' + mail.sender.name + '</div>\
                        <div class="sent-time">\
                            <div class="date-time">' + mail.sentAt.getDate() + ' ' + mail.sentAt.toLocaleString('default', { month: 'short' }) + '</div>\
                        </div>\
                    </div>\
                    <div class="content-box">\
                        <div class="mail-content">\
                            <div class="mail-header-text">' + mail.header + '</div>\
                            <div class="mail-content-text">' + mail.text + '</div>\
                        </div>\
                        <div class="fav-icon">\
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>\
                            </svg>\
                        </div>\
                    </div>\
                </div>\
            </div>'
}

function inbox() {
    var inboxList = ''
    allEmail.forEach(mail => {
        if (mail.type === 'inbox'){
            inboxList = inboxList + mailTitleBox(mail)
        }
    });

    return inboxList
}

$(".inbox-mail").html(inbox())


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#myBtn").click(function() {
    modal.style.display = "block";
})

$(".close").click(function() {
    modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}