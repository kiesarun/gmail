var modal = $("#myModal")[0];

var allEmail = data.allMail
var select = []

var isOpened = false

function start() {
    $(".header").html(header())
    $(".body").html(mainPage())
    $(".inbox-mail").html(inbox())
}

function mailTitleBox(mail, name) {
    return '<div class="mail-title-box">\
                <div class="mail-sender-profile">\
                    <div class="sender-profile-icon" id="icon-' + mail.id +'">\
                        <img class="profile-pic" id="pic-' + mail.id +'" onclick="selected(' + mail.id + ')" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">\
                    </div>\
                </div>\
                <div class="header-text-title">\
                    <div class="mail-sent-info">\
                        <div class="sender-name">' + name + '</div>\
                        <div class="sent-time">\
                            <div class="date-time">' + mail.createdAt.getDate() + ' ' + mail.createdAt.toLocaleString('default', { month: 'short' }) + '</div>\
                        </div>\
                    </div>\
                    <div class="content-box">\
                        <div class="mail-content">\
                            <div class="mail-header-text">' + mail.header + '</div>\
                            <div class="mail-content-text">' + mail.text + '</div>\
                        </div>\
                        <div class="fav-icon">\
                            <div class="icon">\
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                    <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>\
                                </svg>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>'
}

function inbox() {
    var inboxList = ''
    allEmail.forEach(function(mail) {
        if (mail.type === 'inbox' && !mail.isDeleted) {
            inboxList = inboxList + mailTitleBox(mail, mail.sender.name)
        }
    });

    return inboxList
}

function sentMail() {
    var sentList = ''
    allEmail.forEach(function(mail) {
        if (mail.type === 'sent' && !mail.isDeleted) {
            sentList = sentList + mailTitleBox(mail, 'To: ' + mail.receiver.name)
        }
    })

    return sentList
}

function draftsMail() {
    var draftsList = ''
    allEmail.forEach(function(mail) {
        if (mail.type === 'draft' && !mail.isDeleted) {
            draftsList = draftsList + mailTitleBox(mail, 'Draft')
        }
    })

    return draftsList
}

function deletedMail() {
    var deletedList = ''
    allEmail.forEach(function(mail) {
        if (mail.isDeleted) {
            if (mail.type === 'inbox') {
                deletedList = deletedList + mailTitleBox(mail, mail.sender.name)
            } else if (mail.type === 'sent'){
                deletedList = deletedList + mailTitleBox(mail, 'me')
            } else {
                deletedList = deletedList + mailTitleBox(mail, 'Draft')
            }
        }
    })

    return deletedList
}

function allMail() {
    var allList = ''
    allEmail.forEach(function(mail) {
        if (!mail.isDeleted) {
            if (mail.type === 'inbox') {
                allList = allList + mailTitleBox(mail, mail.sender.name)
            } else if (mail.type === 'sent'){
                allList = allList + mailTitleBox(mail, 'me')
            } else {
                allList = allList + mailTitleBox(mail, 'Draft')
            }
        }
    })
    return allList
}

function sentMailPage() {
    return '<div class="page-name">SENT</div>\
            <div class="inbox-mail"></div>'
}

function draftsMailPage() {
    return '<div class="page-name">DRAFTS</div>\
            <div class="inbox-mail"></div>'
}

function mainPage() {
    return '<div class="page-name">INBOX</div>\
            <div class="inbox-mail"></div>'
}

function deletedMailPage() {
    return '<div class="page-name">DELETED</div>\
            <div class="inbox-mail"></div>'
}

function allMailPage() {
    return '<div class="page-name">ALL MAIL</div>\
            <div class="inbox-mail"></div>'
}

function header() {
    return '<div class="main-header">\
                <div class="header-bar">\
                    <nav class="navbar navbar-light bg-light search-bar-style">\
                        <form class="form-inline">\
                            <div class="menu-list-icon" id="menu-toggle">\
                                <svg width="90%" height="90%" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
                                </svg>\
                            </div>\
                            <div class="search-bar">\
                                <input class="form-control" type="search" placeholder="Search in mail" aria-label="Search">\
                            </div>\
                            <div class="profile-icon">\
                                <img class="profile-pic" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">\
                            </div>\
                        </form>\
                    </nav>\
                </div>\
            </div>'
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function showSelector(id) {
    return '<div class="profile-pic selected-icon" id="selected-icon-' + id + '" onclick="deSelected(' + id +')">\
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-check icon-width" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\
                </svg>\
            </div>'
}

function showProfilePic(id) {
    return '<img class="profile-pic" id="pic-' + id +'" onclick="selected(' + id + ')" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">'
}

function showTool(){
    return '<div class="tool-bar">\
                <div class="tool-box">\
                    <div class="tool-box-left">\
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\
                        </svg>\
                        <div class="selected-count"> 1 </div>\
                    </div>\
                    <div class="tool-box-right">\
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-download space-between" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/>\
                            <path fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/>\
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/>\
                        </svg>\
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash space-between" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\
                        </svg>\
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-envelope space-between" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>\
                        </svg>\
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-three-dots space-between" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>\
                        </svg>\
                    </div>\
                </div>\
            </div>'
}

function sendEmail(email, subject, text) {
    var mail = {
        receiver: {
            name: email.split("@")[0],
            email: email
        },
        id: makeid(10),
        header: subject,
        text: text,
        createdAt: new Date(),
        type:"sent",
        isDeleted: false
    }

    allEmail.push(mail)
}

function draftEmail(email="", subject="", text="") {
    var mail = {
        receiver: {
            name: email.split("@")[0],
            email: email
        },
        id: makeid(10),
        header: subject,
        text: text,
        createdAt: new Date(),
        type:"draft",
        isDeleted: false
    }

    allEmail.push(mail)
}

function deleteMail(id) {
    allEmail.forEach(function(mail) {
        if(mail.id === id) {
            mail.isDeleted = true
        }
    })
}

function render(page, selector) {
    if (isOpened) {
        $("#wrapper").toggleClass("toggled");
        isOpened = false
    }
    $(".body").html(page)
    $(".inbox-mail").html(selector)
}

function selected(id) {
    $('#pic-' + id).hide()
    $('#icon-' + id).html(showSelector(id))
    $(".header").html(showTool())
}

function deSelected(id) {
    $('#selected-icon-'+ id).hide()
    $('#icon-' + id).html(showProfilePic(id))
}

start()

$("#inbox-mail-btn").click(function() {
    render(mainPage(), inbox())
})

$("#sent-mail-btn").click(function() {
    render(sentMailPage(), sentMail())
})

$("#drafts-mail-btn").click(function() {
    render(draftsMailPage(), draftsMail())
})

$("#all-mail-btn").click(function() {
    render(allMailPage(), allMail())
})

$("#deleted-mail-btn").click(function() {
    render(deletedMailPage(), deletedMail())
})

$("#menu-toggle").click(function() {
    $("#wrapper").toggleClass("toggled");
    isOpened = !isOpened
});

$("#myBtn").click(function() {
    modal.style.display = "block";
})

$("#send-btn").click(function() {
    var email = $("#email").val()
    var subject = $("#subject").val()
    var text = $("#compose-email").val()

    sendEmail(email, subject, text)

    modal.style.display = "none";
    render(sentMailPage(), sentMail())

    $("#email").val('')
    $("#subject").val('')
    $("#compose-email").val('')
})

$(".close").click(function() {
    var email = $("#email").val()
    var subject = $("#subject").val()
    var text = $("#compose-email").val()

    draftEmail(email, subject, text)
    render(draftsMailPage(), draftsMail())
    modal.style.display = "none";

    $("#email").val('')
    $("#subject").val('')
    $("#compose-email").val('')
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}