var data = {
    email: "email@example.com",
    displayName: "email example",
    allMail: [{
        id: "1",
        sender: {
            name: "Github",
            email: "Github@example.com"
        },
        header: "Bring your apps and people together with Heroku Teams.",
        text: "Hello sarunya, Heroku Teams is part of our complete, collaborative experience for app development teams of any size.\
        Create a Heroku Team* and manage pipelines, team members, resources, and billing across all your apps in one place.\
        Work better together with Heroku Teams\
        Get fine-grained control\
        Assign team member permissions based on user roles to enable collaboration and delegate administration.\
        Embrace team-ready continuous delivery\
        Roles and permissions automatically apply to review apps and team-owned apps in Heroku Pipelines.\
        Grow under one bill\
        Manage costs across all your apps, add-ons, and resources with one unified bill.\
        Read the Heroku Teams documentation to learn how to get the most out of your new Heroku Team",
        createdAt: new Date(2020, 6, 1),
        type:"inbox",
        isDeleted: false
    },{
        id: "2",
        sender: {
            name: "Taco from Trello",
            email: "trello@example.com"
        },
        header: "Trello account switcher",
        text: "Access Multiple Trello Accounts With The New Account Switcher\
        🎉 Checking off your work & household to-dos just got easier with the brand new Trello account switcher!\
        Switch It Up\
        How To Juggle Communication Styles In Difficult Times\
        Turbulent times are a stress test for every part of your organization. Learn how to navigate your team's diverse communication styles.\
        Talk It Out\
        Secure Your Team With Atlassian Access For Trello\
        Keeping your company's data secure doesn't have to be a hassle. Here's how Access makes company-wide visibility, control, & security a breeze.\
        Secure The Fort\
        8 Wellness Rituals To Refresh Your Productivity\
        It's never a bad time to give your happiness a boost. Practice wellness with this virtual trip around the globe!\
        Unearth Worldly Wisdom",
        createdAt: new Date(2020, 6, 15),
        type:"inbox",
        isDeleted: false
    }, {
        id: "3",
        sender: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "shopping kannn",
        text: "let's go to union mall",
        createdAt: new Date(2020, 6, 16),
        type:"inbox",
        isDeleted: false
    }, {
        id: "4",
        receiver: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "Test sent mail",
        text: "testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        createdAt: new Date(2020, 6, 21),
        type:"sent",
        isDeleted: false
    }, {
        id: "5",
        receiver: {
            name: "dream",
            email: "noey@example.com"
        },
        header: "test drafts",
        text: "",
        createdAt: new Date(2020, 6, 25),
        type:"draft",
        isDeleted: false
    }, {
        id: "6",
        sender: {
            name: "beam",
            email: "beam@example.com"
        },
        header: "Gmail Dev",
        text: "coding gmail app",
        createdAt: new Date(2020, 6, 30),
        type:"inbox",
        isDeleted: false
    }, {
        id: "7",
        sender: {
            name: "noey",
            email: "noey@example.com"
        },
        header: "silom line",
        text: "silom line bts",
        createdAt: new Date(2020, 7, 1),
        type:"inbox",
        isDeleted: false
    }, {
        id: "8",
        receiver: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "KKKKKKKK",
        text: "djfsdnfgiskfohmfghmf;kgmsfnglkfdmgkledfvskldfngkjljfgmlkdsfngvlndsfjngkjdfngkld",
        createdAt: new Date(2020, 7, 2),
        type:"draft",
        isDeleted: true
    }, {
        id: "9",
        receiver: {
            name: "dream",
            email: "dream@example.com"
        },
        header: "QQQQQQQQQQ",
        text: "eieieieieieieieieieieiei",
        createdAt: new Date(2020, 7, 8),
        type:"sent",
        isDeleted: true
    }, {
        id: "10",
        sender: {
            name: "pair",
            email: "pair@example.com"
        },
        header: "Ang",
        text: "hello kie ;)",
        createdAt: new Date(2020, 7, 20),
        type:"inbox",
        isDeleted: true
    },  {
        id: "11",
        receiver: {
            name: "pair",
            email: "pair@example.com"
        },
        header: "hello",
        text: "hello pair",
        createdAt: new Date(2020, 7, 20),
        type:"draft",
        isDeleted: false
    }
    ]
}

var allEmail = data.allMail
var selectedList = []

var isOpened = false
var previousPage = ''
var currentPage = ''

function start() {
    $(".header").html(header())
    $(".body").html(mainPage())
    $(".inbox-mail").html(inbox())
    currentPage = 'inbox'
}

function mailTitleBox(mail, name) {
    return '<div class="mail-title-box">\
                <div class="mail-sender-profile">\
                    <div class="sender-profile-icon" id="icon-' + mail.id +'">\
                        <img class="profile-pic" id="pic-' + mail.id +'" onclick="selected(\'' + mail.id + '\')" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">\
                    </div>\
                </div>\
                <div class="header-text-title" onclick="showEmailContent(\'' + mail.id + '\')">\
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

function mailContent(mail) {
    return '<div class="mail-content-page">\
                <div class="mail-content-header">\
                    <div class="mail-header-wrapper">\
                        <div class="mail-content-subject">' + mail.header + '</div>\
                        <div class="fav-icon">\
                            <div class="icon">\
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                    <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>\
                                </svg>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="mail-content-sender">\
                        <div class="mail-title-box">\
                            <div class="mail-sender-profile">\
                                <div class="sender-profile-icon" id="icon-' + mail.id +'">\
                                    <img class="profile-pic" id="pic-' + mail.id +'" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">\
                                </div>\
                            </div>\
                            <div class="header-text-title" onclick="showEmailContent(' + mail.id + ')">' + 
                                (mail.type === 'sent' ? ('<div class="mail-sent-info">\
                                                            <div class="sender-name"> Me </div>\
                                                            <div class="sent-time">\
                                                                <div class="date-time">' + mail.createdAt.getDate() + ' ' + mail.createdAt.toLocaleString('default', { month: 'short' }) + ' ' + mail.createdAt.getFullYear() + '</div>\
                                                            </div>\
                                                        </div>\
                                                        <div class="receiver-box">\
                                                            <div class="receiver-name">\
                                                                To:' +  mail.receiver.name +'\
                                                            </div>\
                                                        </div>'):   ( '<div class="mail-sent-info">\
                                                                        <div class="sender-name">' + mail.sender.name + '</div>\
                                                                        <div class="sent-time">\
                                                                            <div class="date-time">' + mail.createdAt.getDate() + ' ' + mail.createdAt.toLocaleString('default', { month: 'short' }) + ' ' + mail.createdAt.getFullYear() + '</div>\
                                                                        </div>\
                                                                    </div>\
                                                                    <div class="receiver-box">\
                                                                        <div class="receiver-name">\
                                                                            To: Me\
                                                                        </div>\
                                                                    </div>')) + 
                            '</div>\
                        </div>\
                    </div>\
                </div>\
                <div class="mail-content-compose">' + mail.text + '</div>\
            </div>'
}

function showModal(id='') {
    previousPage = currentPage
    currentPage = 'modal'
    return '<div class="modal-content">\
                <div class="modal-header">\
                    <div class="close" onclick="closeModal(\'' + id +'\')">\
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\
                        </svg>\
                    </div>\
                    <div class="tool">\
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-paperclip tool-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>\
                        </svg>\
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor tool-icon" onclick="sendMail(\'' + id + '\')" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>\
                        </svg>\
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots tool-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                            <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>\
                        </svg>\
                    </div>\
                </div>\
                <div class="modal-body">\
                    <form>\
                        <div class="form-group">\
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="To">\
                        </div>\
                        <div class="form-group">\
                            <input type="text" class="form-control" id="subject" placeholder="Subject">\
                        </div>\
                        <div class="form-group">\
                            <!-- <input type="text" class="form-control" id="compose-email" placeholder="Compose email"> -->\
                            <textarea class="form-control" id="compose-email" placeholder="Compose email"></textarea>\
                        </div>\
                    </form></div>\
            </div>'
}

function showEmailContent(id) {
    $(".header").html(showTool('color-grey', '', 'goBackward()'))
    var select = findEmail(allEmail, id)
    if (select.email.type !== 'draft') {
        render(mailContentPage(), mailContent(select.email))
    } else {
        $(".header").html(header())
        $("#myModal").html(showModal(id))
        $("#email").val(select.email.receiver.email)
        $("#subject").val(select.email.header)
        $("#compose-email").val(select.email.text)
        modal.style.display = "block"
    }
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
    previousPage = currentPage
    currentPage = 'sent'
    return '<div class="page-name">SENT</div>\
            <div class="inbox-mail"></div>'
}

function draftsMailPage() {
    previousPage = currentPage
    currentPage = 'drafts'
    return '<div class="page-name">DRAFTS</div>\
            <div class="inbox-mail"></div>'
}

function mainPage() {
    previousPage = currentPage
    currentPage = 'inbox'
    return '<div class="page-name">INBOX</div>\
            <div class="inbox-mail"></div>'
}

function allInboxPage() {
    previousPage = currentPage
    currentPage = 'all-inbox'
    return '<div class="page-name">ALL INBOX</div>\
            <div class="inbox-mail"></div>'
}

function mailContentPage() {
    previousPage = currentPage
    currentPage = 'mail-content'
    return '<div class="inbox-mail"></div>'
}

function deletedMailPage() {
    previousPage = currentPage
    currentPage = 'deleted'
    return '<div class="page-name">TRASH</div>\
            <div class="inbox-mail"></div>'
}

function allMailPage() {
    previousPage = currentPage
    currentPage = 'all-mail'
    return '<div class="page-name">ALL MAIL</div>\
            <div class="inbox-mail"></div>'
}

function header() {
    return '<div class="main-header">\
                <div class="header-bar">\
                    <nav class="navbar navbar-light bg-light search-bar-style">\
                        <form class="form-inline">\
                            <div class="menu-list-icon" id="menu-toggle" onclick="openMenuList()">\
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
    return '<div class="profile-pic selected-icon" id="selected-icon-' + id + '" onclick="deSelected(\'' + id + '\')">\
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-check icon-width" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\
                </svg>\
            </div>'
}

function showProfilePic(id) {
    return '<img class="profile-pic" id="pic-' + id +'" onclick="selected(\'' + id + '\')" src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/1525646_265856100228767_1613687809_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEmSbGT42jvvQxwNn6bmKDgf2d6VZnrfFV_Z3pVmet8VcUfaCjPA9tVGZB0ERvMLCvNUVLrQYcKtScx5wf1_wm9&_nc_ohc=I1fr_DRy28cAX9DeIu9&_nc_ht=scontent.fbkk22-6.fna&oh=4d57aba63b23885dbfc2c08f5ccfc0ea&oe=5F629809">'
}

function showTool(color='', position='', action=''){
    return '<div class="tool-bar '+ position + '" >\
                <div class="tool-box">\
                    <div class="tool-box-left ' + color + '">\
                        <div id="go-back-icon" onclick="' + action + '">\
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\
                            </svg>\
                        </div>\
                        <div class="selected-count"></div>\
                    </div>\
                    <div class="tool-box-right ' + color + '">\
                        <div class="space-between" id="archived-icon">\
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path fill-rule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/>\
                                <path fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/>\
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/>\
                            </svg>\
                        </div>\
                        <div class="space-between" id="delete-icon" onclick=deleteEmail()>\
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\
                            </svg>\
                        </div>\
                        <div class="space-between" id="envelope-icon">\
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>\
                            </svg>\
                        </div>\
                        <div class="space-between" id="three-dots-icon">\
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\
                                <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>\
                            </svg>\
                        </div>\
                    </div>\
                </div>\
            </div>'
}

function sendEmail(email, subject, text, id) {
    var isExist = allEmail.some(function(mail) {
        if (id == mail.id) {
            mail.receiver.email = email,
            mail.receiver.name = email.split("@")[0],
            mail.header = subject,
            mail.text =  text,
            mail.createdAt = new Date(),
            mail.type = "sent",
            mail.isDeleted = false
            return true
        }
    })

    if (!isExist) {
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
}

function draftEmail(email="", subject="", text="", id="") {
    var isExist = allEmail.some(function(mail) {
        if (id == mail.id) {
            mail.receiver.email = email,
            mail.header = subject,
            mail.text = text,
            mail.createdAt= new Date()
            return true
        }
    })
    
    if (!isExist) {
        var draftMail = {
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
        allEmail.push(draftMail)
    }
}

function render(page, selector) {
    if (isOpened) {
        $("#wrapper").toggleClass("toggled");
        isOpened = false
    }
    $(".body").html(page)
    $(".inbox-mail").html(selector)
}

function findEmail(list, id) {
    var email, emailId
    list.forEach(function(mail, index) {
        if (mail.id == id) {
            email = mail
            emailId = index
        }
    })

    return {email, emailId}
}

function selected(id) {
    if (isOpened) {
        $("#wrapper").toggleClass("toggled");
        isOpened = false
    }
    $('#pic-' + id).hide()
    $('#icon-' + id).html(showSelector(id))
    $(".header").html(showTool('', '' , "goBack()"))
    var select = findEmail(allEmail, id)
    selectedList.push(select.email)
    $(".selected-count").html(selectedList.length)
}

function deSelected(id) {
    $('#selected-icon-'+ id).hide()
    $('#icon-' + id).html(showProfilePic(id))

    var deselect = findEmail(selectedList, id)
    selectedList.pop(deselect.emailId)
    $(".selected-count").html(selectedList.length)

    if (selectedList.length === 0 ) {
        $(".header").html(header())
    }
}

function deselectAll() {
    selectedList.forEach(function(deselect) {
        $('#selected-icon-'+ deselect.id).hide()
        $('#icon-' + deselect.id).html(showProfilePic(deselect.id))
    })
    $(".header").html(header())
    selectedList = []
}

function deleteEmail() {
    allEmail.forEach(function(mail, index) {
        selectedList.forEach(function(select) {
            if (select.id == mail.id) {
                if (!mail.isDeleted) {
                    mail.isDeleted = true
                } else {
                    // var selected= findEmail(allEmail, id)
                    var pop = allEmail.splice(index, 1)
                    console.log(pop)
                }
            }
        })
    })

    selectedList = []
    $(".header").html(header())
    refresh()
}

function openMenuList() {
    $("#wrapper").toggleClass("toggled");
    isOpened = !isOpened
}

function goBack() {
    deselectAll()
}

function goBackward() {
    $(".header").html(header())

    if (previousPage === 'sent') {
        render(sentMailPage(), sentMail())
    } else if (previousPage === 'inbox') {
        render(mainPage(), inbox())
    } else if(previousPage === 'drafts') {
        render(draftsMailPage(), draftsMail())
    } else if (previousPage === 'all-mail') {
        render(allMailPage(), allMail())
    } else if(previousPage === 'deleted') {
        render(deletedMailPage(), deletedMail())
    }
}

function closeModal(id='') {
    var email = $("#email").val()
    var subject = $("#subject").val()
    var text = $("#compose-email").val()
    
    if (email === '' && subject === '' && text === '' ){
        if (id !== ''){
            var select= findEmail(allEmail, id)
            var pop = allEmail.splice(select.emailId, 1)               
        }

        currentPage = previousPage
        refresh()
        modal.style.display = "none";

    } else {
        draftEmail(email, subject, text, id)

        $("#email").val('')
        $("#subject").val('')
        $("#compose-email").val('')

        render(draftsMailPage(), draftsMail())
        modal.style.display = "none";

    }
}

function sendMail(id='') {
    var email = $("#email").val()
    var subject = $("#subject").val()
    var text = $("#compose-email").val()

    if (email === '' || subject === '' || text === '' ) {
        console.log('mail not complete!')
    } else {
        sendEmail(email, subject, text, id)

        modal.style.display = "none";
        render(sentMailPage(), sentMail())

        $("#email").val('')
        $("#subject").val('')
        $("#compose-email").val('')
    }
}

function refresh() {
    if (currentPage === 'inbox') {
        render(mainPage(), inbox())
    } else if (currentPage === 'sent') {
        render(sentMailPage(), sentMail())
    } else if (currentPage === 'drafts') {
        render(draftsMailPage(), draftsMail())
    } else if (currentPage === 'all-mail') {
        render(allMailPage(), allMail())
    } else if (currentPage === 'deleted') {
        render(deletedMailPage(), deletedMail())
    }
}

start()
var modal = $("#myModal");

$("#inbox-mail-btn").click(function() {
    render(mainPage(), inbox())
})

$("#all-inbox-mail-btn").click(function() {
    render(allInboxPage(), inbox())
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

$("#myBtn").click(function() {
    previousPage = currentPage
    modal.style.display = "block";
    $("#myModal").html(showModal(''))
    currentPage = 'edit-draft'
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}