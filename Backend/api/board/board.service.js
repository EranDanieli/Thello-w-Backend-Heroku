
// const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
// // const reviewService = require('../review/review.service')
// const ObjectId = require('mongodb').ObjectId
// //testing
// module.exports = {
//     // query,
//     // getById,
//     // getByUsername,
//     // remove,
//     // update,
//     // add
//     getBoards,
//     getById,
// }

// async function getBoards(filterBy = {}) {
//     const criteria = _buildCriteria(filterBy)
//     try {
//         // const hcBoards = [
//         //     {
//         //         "_id": "b101",
//         //         "title": "Thello Project",
//         //         "isFavorite": true,
//         //         "createdAt": 1589983468418,
//         //         "createdBy": {
//         //             "_id": "u101",
//         //             "fullname": "MosheDabush",
//         //             "imgUrl": "http://some-img"
//         //         },
//         //         "style": {
//         //             "coverColor": "",
//         //             "imgUrl": "https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHw1fHxjb2RlfGVufDB8MHx8fDE2MzM5NzI5MTQ&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //         },
//         //         "labels": [
//         //             {
//         //                 "title": "Stuck",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c",
//         //                 "id": "l101"
//         //             },
//         //             {
//         //                 "title": "In Progress",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313",
//         //                 "id": "l102"
//         //             },
//         //             {
//         //                 "id": "l103",
//         //                 "title": "Priority",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "l104",
//         //                 "title": "Design Team",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "l105",
//         //                 "title": "Product Marketing",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "title": "Backend",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7",
//         //                 "id": "l106"
//         //             },
//         //             {
//         //                 "id": "l107",
//         //                 "title": "Halp",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "title": "Review",
//         //                 "color": "#172b4d",
//         //                 "hoverColor": "#344563",
//         //                 "id": "l108"
//         //             }
//         //         ],
//         //         "colorPalette": [
//         //             {
//         //                 "id": "lp101",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c"
//         //             },
//         //             {
//         //                 "id": "lp102",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313"
//         //             },
//         //             {
//         //                 "id": "lp103",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "lp104",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "lp105",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "id": "lp106",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp107",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "id": "lp108",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp109",
//         //                 "color": "#61bd4f",
//         //                 "hoverColor": "#519839"
//         //             },
//         //             {
//         //                 "id": "lp110",
//         //                 "color": "#172b4d",
//         //                 "hoverColor": "#344563"
//         //             }
//         //         ],
//         //         "members": [
//         //             {
//         //                 "_id": "u102",
//         //                 "fullname": "Dan Katorza",
//         //                 "imgUrl": "https://www.google.com",
//         //                 "isAssigned": true
//         //             },
//         //             {
//         //                 "_id": "u103",
//         //                 "fullname": "Moshe Dabush",
//         //                 "imgUrl": "https://www.google.com",
//         //                 "isAssigned": true
//         //             },
//         //             {
//         //                 "_id": "u104",
//         //                 "fullname": "Eran Danieli",
//         //                 "imgUrl": "https://www.google.com",
//         //                 "isAssigned": true
//         //             },
//         //             {
//         //                 "_id": "u105",
//         //                 "fullname": "David Cohen",
//         //                 "imgUrl": "https://www.google.com",
//         //                 "isAssigned": true
//         //             },
//         //             {
//         //                 "_id": "u106",
//         //                 "fullname": "Omer Levy",
//         //                 "imgUrl": "https://www.google.com",
//         //                 "isAssigned": true
//         //             }
//         //         ],
//         //         "groups": [
//         //             {
//         //                 "id": "g103",
//         //                 "title": "Frontend ??????????????? ",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c108",
//         //                         "title": "Meeting at 10:00",
//         //                         "description": "description",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
                               
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "#61bd4f",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "c107",
//         //                         "title": "Homepage",
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "isArchived": false,
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633526008/jeoo3xporimdlkkndzb3.png"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "15sJNv",
//         //                         "title": "Morning Coffee",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525062395,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525825/tggl8qxh9meeyknmnhgq.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "Soxu1S",
//         //                         "title": "Login page and registration",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972159906,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "BXN277",
//         //                         "title": "SCSS Layout and Setup ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972176287,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Ou0azb",
//         //                         "title": "Add Secondary Header",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525508868,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Acy1gh",
//         //                         "title": "Image carousel component",
//         //                         "description": " Build reusable image carousel component",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972232054,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#172b4d",
//         //                             "imgUrl": ""
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "g101",
//         //                 "title": "In Progress",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c101",
//         //                         "title": "Connect Everything",
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l105",
//         //                             "l107",
//         //                             "l103"
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525254/m3i3jetstyzqh412bivs.png"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "KhAqtX",
//         //                         "title": "Sockets",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101",
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972087250,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#eb5a46",
//         //                             "imgUrl": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "GPm5bN",
//         //                         "title": "CRUD",
//         //                         "description": "Making a full CRUD of our collections on backend.",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972294232,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#f2d600",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "UBQEwT",
//         //                         "title": "Meet with the designer for approval ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972338968,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#c377e0",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c102",
//         //                         "title": "Clean the scss code for CR ",
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101",
//         //                             "l102"
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "E4sXpw",
//         //                         "title": "Meeting at 14:00 w/ Assaf",
//         //                         "description": "Apps & Beers !!!",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525713029,
//         //                         "dueDate": "Tue Oct 12 2021 14:00:58 ",
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1441985969846-3e7c90531139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHw0fHxiZWVyfGVufDB8MHx8fDE2MzM5NzMxMDI&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Pb6OE1",
//         //                         "title": "Go There",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525195657,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525234/aj5ho7boorx9kvtulvxj.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "EPywGy",
//         //                         "title": "Invite feature",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972966377,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "UuNi3S",
//         //                         "title": "implement image selection feature ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972985799,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "cH8DzE",
//         //                         "title": "Color Scheme Approval ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101",
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633973004540,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "8t0iRy",
//         //                 "title": "Bugs",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "h43ZXq",
//         //                         "title": "User management",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633973141559,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "ruDQUx",
//         //                         "title": "Pop-up bug",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633975444953,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "HD6yHd",
//         //                         "title": "d",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633976931509,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "2GeN2R",
//         //                         "title": "Drag & Drop\n\n",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633977120433,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "M6ideS",
//         //                         "title": "Deag and Drop",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633977708240,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "eLgxTh",
//         //                         "title": "socket",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633977871140,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "1zZZxg",
//         //                         "title": "Sockets",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633978096125,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#eb5a46",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "A8eAKE",
//         //                 "title": "If We Have Time",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "jJEmXZ",
//         //                         "title": "Having Fun",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525112199,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "axlFnL",
//         //                         "title": "Side Menu",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525953364,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#f2d600",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "T5VVbR",
//         //                         "title": "Company social event 19:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107",
//         //                             "l104"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940832227,
//         //                         "dueDate": "2021-10-12T16:30:00.000Z",
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "n09WX3",
//         //                         "title": "Drag & Drop",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633975972438,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "FDHfuG",
//         //                 "title": "Backend",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "YbTDoC",
//         //                         "title": "Middlewares",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l107"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972349144,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c5u8gF",
//         //                         "title": "Cart system",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102",
//         //                             "l103",
//         //                             "l107"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633527200695,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "AkGAW9",
//         //                         "title": "Add integration for images ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972357169,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "g102",
//         //                 "title": "Backlog ???? ",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c104",
//         //                         "title": "Make It Colorful",
//         //                         "description": "description",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102",
//         //                             "l105"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525407/lsel1har0linwq6l3vu5.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "W8eWOu",
//         //                         "title": "Home Page",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972203331,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#eb5a46",
//         //                             "imgUrl": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "6ea3Hm",
//         //                         "title": " MongoDB Atlas",
//         //                         "description": "Connect to MongoDb Atlas and create all the collections.",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102",
//         //                             "l106"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972579242,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#eb5a46",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "pGoUcn",
//         //                         "title": "Users management",
//         //                         "description": "Input fields: - Account type - Name  - Email  - Password",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972599373,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "ztJ3el",
//         //                 "title": "QA - Testing",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "Hyi77v",
//         //                         "title": "Work on Better Bcg Img",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633526318844,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633526335/cw6p3oucvzhfp9kqhkz9.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "c103",
//         //                         "title": "Work On Design ",
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l102"
//         //                         ],
//         //                         "isArchived": true,
//         //                         "style": {
//         //                             "coverColor": "#0079bf",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "tEwePE",
//         //                         "title": "Db crashes when searching with special characters",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972075219,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#f2d600",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "0zvS5o",
//         //                         "title": "Data gets erased upon",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103",
//         //                             "l101"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972096649,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "DOBXgk",
//         //                         "title": "Search in filter",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107",
//         //                             "l108"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633972109684,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ]
//         //             }
//         //         ],
//         //         "activities": [
//         //             {
//         //                 "id": "a101",
//         //                 "txt": "Changed Color",
//         //                 "createdAt": 154514,
//         //                 "byMember": {
//         //                     "_id": "u102",
//         //                     "fullname": "Moshe Dabush",
//         //                     "imgUrl": "http://some-img"
//         //                 },
//         //                 "task": {
//         //                     "id": "c101",
//         //                     "title": "Replace Logo"
//         //                 }
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         "_id": "b102",
//         //         "title": "Our Vacation",
//         //         "isFavorite": true,
//         //         "createdAt": 1589983468418,
//         //         "createdBy": {
//         //             "_id": "u101",
//         //             "fullname": "MosheDabush",
//         //             "imgUrl": "http://some-img"
//         //         },
//         //         "style": {
//         //             "coverColor": "",
//         //             "imgUrl": "https://images.unsplash.com/photo-1546530967-21531b891dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHwxMnx8cm9tZXxlbnwwfDB8fHwxNjMzOTM5ODYy&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //         },
//         //         "labels": [
//         //             {
//         //                 "id": "l101",
//         //                 "title": "Copy Request",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c"
//         //             },
//         //             {
//         //                 "id": "l102",
//         //                 "title": "One more step",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313"
//         //             },
//         //             {
//         //                 "id": "l103",
//         //                 "title": "Priority",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "l104",
//         //                 "title": "Design Team",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "l105",
//         //                 "title": "Product Marketing",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "id": "l106",
//         //                 "title": "Thello Tip",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "l107",
//         //                 "title": "Halp",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "id": "l108",
//         //                 "title": "Review",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             }
//         //         ],
//         //         "colorPalette": [
//         //             {
//         //                 "id": "lp101",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c"
//         //             },
//         //             {
//         //                 "id": "lp102",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313"
//         //             },
//         //             {
//         //                 "id": "lp103",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "lp104",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "lp105",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "id": "lp106",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp107",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "id": "lp108",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp109",
//         //                 "color": "#61bd4f",
//         //                 "hoverColor": "#519839"
//         //             },
//         //             {
//         //                 "id": "lp110",
//         //                 "color": "#172b4d",
//         //                 "hoverColor": "#344563"
//         //             }
//         //         ],
//         //         "members": [
//         //             {
//         //                 "_id": "u102",
//         //                 "fullname": "Dan Katorza",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u103",
//         //                 "fullname": "Moshe Dabush",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u104",
//         //                 "fullname": "Eran Danieli",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u105",
//         //                 "fullname": "David Cohen",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u106",
//         //                 "fullname": "Omer Levy",
//         //                 "imgUrl": "https://www.google.com"
//         //             }
//         //         ],
//         //         "groups": [
//         //             {
//         //                 "id": "g101",
//         //                 "title": "Sunday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c101",
//         //                         "title": "Catch our flight 07:00",
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l105",
//         //                             "l107",
//         //                             "l103"
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHwzfHxhaXJwbGFuZXxlbnwwfDB8fHwxNjMzOTM5NDEw&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "E4sXpw",
//         //                         "title": "Connection 12:00",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525713029,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Ou0azb",
//         //                         "title": "Land at Rome, Italy! 14:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525508868,
//         //                         "dueDate": "2021-10-17T11:30:31.897Z",
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHw2fHxSb21lfGVufDB8MHx8fDE2MzM5Mzk2Njg&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c102",
//         //                         "title": "Hotel check-in!",
//         //                         "labelIds": [
//         //                             "l102"
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         },
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ]
//         //                     },
//         //                     {
//         //                         "id": "chAQyr",
//         //                         "title": "Sleep! ????????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "0": {
//         //                                     "_id": "u102",
//         //                                     "fullname": "Dan Katorza",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "1": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "Moshe Dabush",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "2": {
//         //                                     "_id": "u104",
//         //                                     "fullname": "Eran Danieli",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "3": {
//         //                                     "_id": "u105",
//         //                                     "fullname": "David Cohen",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "4": {
//         //                                     "_id": "u106",
//         //                                     "fullname": "Omer Levy",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940032796,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "WPMfqC",
//         //                         "title": "Sleep ????????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             [
//         //                                 {
//         //                                     "_id": "u102",
//         //                                     "fullname": "Dan Katorza",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 {
//         //                                     "_id": "u103",
//         //                                     "fullname": "Moshe Dabush",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 {
//         //                                     "_id": "u104",
//         //                                     "fullname": "Eran Danieli",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 {
//         //                                     "_id": "u105",
//         //                                     "fullname": "David Cohen",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 {
//         //                                     "_id": "u106",
//         //                                     "fullname": "Omer Levy",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 }
//         //                             ]
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940739988,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "4HHdyo",
//         //                         "title": "test",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940772390,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "ztJ3el",
//         //                 "title": "Monday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "Hyi77v",
//         //                         "title": "Pizza! ????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633526318844,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633941545/yjhs9wxr3mkdurskxbc8.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "NEr8Ic",
//         //                         "title": "Nap",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633941764238,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Pb6OE1",
//         //                         "title": "Ice cream! (yes yes Gelato i know) ????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525195657,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633941693/wosdiqs2fwrx5e5o8okj.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c103",
//         //                         "title": "Work On Design ",
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l102"
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "isArchived": true,
//         //                         "style": {
//         //                             "coverColor": "#0079bf",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "nsH2WP",
//         //                         "title": "Company social event 19:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940832227,
//         //                         "dueDate": "2021-10-18T16:30:23.862Z",
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "g102",
//         //                 "title": "Tuesday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c107",
//         //                         "title": "Shopping day!",
//         //                         "labelIds": [],
//         //                         "isArchived": false,
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "#f2d600",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c104",
//         //                         "title": "Make It Colorful",
//         //                         "description": "description",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102",
//         //                             "l105"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525407/lsel1har0linwq6l3vu5.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "0ZgR91",
//         //                         "title": "FREE TIME! (find activities)",
//         //                         "description": "find something to do!",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940816998,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#51e898",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "K9zvpG",
//         //                         "title": "Zoo! ????????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525953364,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633941369/rrbow77suyvfe1jhisbj.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "YptDzL",
//         //                         "title": "Aquarium of Genoa",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633942577544,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "9XtVIP",
//         //                         "title": "Company social event 19:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107",
//         //                             "l104"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940832227,
//         //                         "dueDate": "2021-10-12T16:30:00.000Z",
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1527269534026-c86f4009eace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHw4fHxjZWxlYnJhdGV8ZW58MHwwfHx8MTYzMzk3NjE2Ng&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "UPQCJA",
//         //                         "title": "Company social event 19:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l107",
//         //                             "l104"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633940832227,
//         //                         "dueDate": "2021-10-12T16:30:00.000Z",
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1527269534026-c86f4009eace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHw4fHxjZWxlYnJhdGV8ZW58MHwwfHx8MTYzMzk3NjE2Ng&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "g103",
//         //                 "title": "Wednesday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c108",
//         //                         "title": "Sight-seeing day!",
//         //                         "description": "have some fun",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l105"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "#61bd4f",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "15sJNv",
//         //                         "title": "Group breakfast 8:30",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525062395,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525825/tggl8qxh9meeyknmnhgq.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "9xKikA",
//         //                         "title": "Vatican",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633941958441,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633942058/fqtky8rlsdwmkpsxdnih.jpg",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "p1pwm0",
//         //                         "title": "Pisa tower!",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633942163437,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633942172/qimnlc5d1bwmoaajr5q1.jpg",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "FDHfuG",
//         //                 "title": "Thursday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "jJEmXZ",
//         //                         "title": "Get Covid test ????",
//         //                         "description": "Take care of your nose",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102",
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525112199,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#eb5a46",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "6hM7Cf",
//         //                         "title": "Checkout 12:00",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102",
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633942282950,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "CRMxG7",
//         //                         "title": "DUTY FREE (remember the gifts!)",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633942331640,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#0079bf",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c5u8gF",
//         //                         "title": "Go back home! ??????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633527200695,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://images.unsplash.com/photo-1601041315560-75cc650a9826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjU1MzR8MHwxfHNlYXJjaHwxfHxhaXJwbGFufGVufDB8MHx8fDE2MzM5Mzk0MDk&ixlib=rb-1.2.1&q=80&w=1080.jpg"
//         //                         }
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "A8eAKE",
//         //                 "title": "If We Have Time",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "axlFnL",
//         //                         "title": "Zoo! ????????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525953364,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633941369/rrbow77suyvfe1jhisbj.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "0XWKog",
//         //                         "title": "Volunteer ",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com"
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l103"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633941422522,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ]
//         //             }
//         //         ],
//         //         "activities": [
//         //             {
//         //                 "id": "a101",
//         //                 "txt": "Changed Color",
//         //                 "createdAt": 154514,
//         //                 "byMember": {
//         //                     "_id": "u102",
//         //                     "fullname": "Moshe Dabush",
//         //                     "imgUrl": "http://some-img"
//         //                 },
//         //                 "task": {
//         //                     "id": "c101",
//         //                     "title": "Replace Logo"
//         //                 }
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         "_id": "b103",
//         //         "title": "Developer Land",
//         //         "isFavorite": false,
//         //         "createdAt": 1589983468418,
//         //         "createdBy": {
//         //             "_id": "u101",
//         //             "fullname": "Guest",
//         //             "imgUrl": "http://some-img"
//         //         },
//         //         "style": {
//         //             "coverColor": "lightgreen",
//         //             "bgImg": ""
//         //         },
//         //         "labels": [
//         //             {
//         //                 "id": "l101",
//         //                 "title": "Copy Request",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c"
//         //             },
//         //             {
//         //                 "id": "l102",
//         //                 "title": "One more step",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313"
//         //             },
//         //             {
//         //                 "id": "l103",
//         //                 "title": "Priority",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "l104",
//         //                 "title": "Design Team",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "l105",
//         //                 "title": "Product Marketing",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "id": "l106",
//         //                 "title": "Thello Tip",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "l107",
//         //                 "title": "Halp",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "id": "l108",
//         //                 "title": "Review",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             }
//         //         ],
//         //         "colorPalette": [
//         //             {
//         //                 "id": "lp101",
//         //                 "color": "#f2d600",
//         //                 "hoverColor": "#d9b51c"
//         //             },
//         //             {
//         //                 "id": "lp102",
//         //                 "color": "#ff9f1a",
//         //                 "hoverColor": "#cd8313"
//         //             },
//         //             {
//         //                 "id": "lp103",
//         //                 "color": "#eb5a46",
//         //                 "hoverColor": "#b04632"
//         //             },
//         //             {
//         //                 "id": "lp104",
//         //                 "color": "#c377e0",
//         //                 "hoverColor": "#89609e"
//         //             },
//         //             {
//         //                 "id": "lp105",
//         //                 "color": "#0079bf",
//         //                 "hoverColor": "#055a8c"
//         //             },
//         //             {
//         //                 "id": "lp106",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp107",
//         //                 "color": "#51e898",
//         //                 "hoverColor": "#4bbf6b"
//         //             },
//         //             {
//         //                 "id": "lp108",
//         //                 "color": "#00c2e0",
//         //                 "hoverColor": "#0098b7"
//         //             },
//         //             {
//         //                 "id": "lp109",
//         //                 "color": "#61bd4f",
//         //                 "hoverColor": "#519839"
//         //             },
//         //             {
//         //                 "id": "lp110",
//         //                 "color": "#172b4d",
//         //                 "hoverColor": "#344563"
//         //             }
//         //         ],
//         //         "members": [
//         //             {
//         //                 "_id": "u102",
//         //                 "fullname": "Dan Katorza",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u103",
//         //                 "fullname": "Moshe Dabush",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u104",
//         //                 "fullname": "Eran Danieli",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u105",
//         //                 "fullname": "David Cohen",
//         //                 "imgUrl": "https://www.google.com"
//         //             },
//         //             {
//         //                 "_id": "u106",
//         //                 "fullname": "Omer Levy",
//         //                 "imgUrl": "https://www.google.com"
//         //             }
//         //         ],
//         //         "groups": [
//         //             {
//         //                 "id": "g101",
//         //                 "title": "Todo",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c101",
//         //                         "title": "Connect Everything",
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l105",
//         //                             "l107",
//         //                             "l103"
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525254/m3i3jetstyzqh412bivs.png"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Ou0azb",
//         //                         "title": "Go Workout",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525508868,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633859676/r3ozuwvgmyzsfar1g0fu.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "Pb6OE1",
//         //                         "title": "Go There",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525195657,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525234/aj5ho7boorx9kvtulvxj.jpg"
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "g102",
//         //                 "title": "Doing",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c107",
//         //                         "title": "Make a Homepage",
//         //                         "labelIds": [],
//         //                         "isArchived": false,
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633526008/jeoo3xporimdlkkndzb3.png"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "gYPB5g",
//         //                         "title": "Have Some Fun",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "0": {
//         //                                     "_id": "u102",
//         //                                     "fullname": "Dan Katorza",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "1": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "Moshe Dabush",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "2": {
//         //                                     "_id": "u104",
//         //                                     "fullname": "Eran Danieli",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "3": {
//         //                                     "_id": "u105",
//         //                                     "fullname": "David Cohen",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "4": {
//         //                                     "_id": "u106",
//         //                                     "fullname": "Omer Levy",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l102",
//         //                             "l103",
//         //                             "l107",
//         //                             "l106"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633858963801,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#f2d600",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         }
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "g103",
//         //                 "title": "Done",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "15sJNv",
//         //                         "title": "Morning Coffee",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525062395,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525825/tggl8qxh9meeyknmnhgq.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c108",
//         //                         "title": "Meeting at 10:00",
//         //                         "description": "description",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "#61bd4f",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c102",
//         //                         "title": "Explore The Galaxy",
//         //                         "labelIds": [
//         //                             "l104"
//         //                         ],
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633859873/nkqmn7qwbaowpqlcsonk.jpg"
//         //                         },
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ]
//         //                     }
//         //                 ],
//         //                 "style": {}
//         //             },
//         //             {
//         //                 "id": "ztJ3el",
//         //                 "title": "Sunday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "Hyi77v",
//         //                         "title": "Go to Church",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633526318844,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633860010/pz509uhy94mgugyfkkwp.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "E4sXpw",
//         //                         "title": "Take a Day Off ;)",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l104"
//         //                         ],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525713029,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "#00c2e0",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "c103",
//         //                         "title": "Work On Design ",
//         //                         "labelIds": [
//         //                             "l104",
//         //                             "l102"
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "isArchived": true,
//         //                         "style": {
//         //                             "coverColor": "#0079bf",
//         //                             "imgUrl": ""
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "IPDpeC",
//         //                         "title": "Date Night ????????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "0": {
//         //                                     "_id": "u102",
//         //                                     "fullname": "Dan Katorza",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "1": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "Moshe Dabush",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "2": {
//         //                                     "_id": "u104",
//         //                                     "fullname": "Eran Danieli",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "3": {
//         //                                     "_id": "u105",
//         //                                     "fullname": "David Cohen",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "4": {
//         //                                     "_id": "u106",
//         //                                     "fullname": "Omer Levy",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633860193634,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633860239/qwf51e9gqoahto1ydale.jpg"
//         //                         }
//         //                     }
//         //                 ]
//         //             },
//         //             {
//         //                 "id": "FDHfuG",
//         //                 "title": "Monday",
//         //                 "tasks": [
//         //                     {
//         //                         "id": "c5u8gF",
//         //                         "title": "Overall Flow",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633527200695,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "bgColor": "",
//         //                             "imgUrl": ""
//         //                         },
//         //                         "isArchived": true
//         //                     },
//         //                     {
//         //                         "id": "c104",
//         //                         "title": "Make It Colorful",
//         //                         "description": "description",
//         //                         "comments": [
//         //                             {
//         //                                 "id": "ZdPnm",
//         //                                 "txt": "also @yaronb please CR this",
//         //                                 "createdAt": 1590999817436,
//         //                                 "byMember": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "DanKatorza",
//         //                                     "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "checklists": [
//         //                             {
//         //                                 "id": "YEhmF",
//         //                                 "title": "Checklist",
//         //                                 "todos": [
//         //                                     {
//         //                                         "id": "212jX",
//         //                                         "title": "To Do 1",
//         //                                         "isDone": false
//         //                                     }
//         //                                 ]
//         //                             }
//         //                         ],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [
//         //                             "l101",
//         //                             "l102",
//         //                             "l105"
//         //                         ],
//         //                         "createdAt": 1590999730348,
//         //                         "dueDate": 1592999830348,
//         //                         "byMember": {
//         //                             "_id": "u103",
//         //                             "username": "DanKatorza",
//         //                             "fullname": "Dan Katorza",
//         //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//         //                         },
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633525407/lsel1har0linwq6l3vu5.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "jJEmXZ",
//         //                         "title": "Go Scuba Diving",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "_id": "u102",
//         //                                 "fullname": "Dan Katorza",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": true
//         //                             },
//         //                             {
//         //                                 "_id": "u103",
//         //                                 "fullname": "Moshe Dabush",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u104",
//         //                                 "fullname": "Eran Danieli",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u105",
//         //                                 "fullname": "David Cohen",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             },
//         //                             {
//         //                                 "_id": "u106",
//         //                                 "fullname": "Omer Levy",
//         //                                 "imgUrl": "https://www.google.com",
//         //                                 "isAssigned": false
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633525112199,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "https://res.cloudinary.com/dikcrkxei/image/upload/v1633860151/fprenz2qs4qsuoc2xpbs.jpg"
//         //                         }
//         //                     },
//         //                     {
//         //                         "id": "3Mg5tn",
//         //                         "title": "??????",
//         //                         "description": "",
//         //                         "comments": [],
//         //                         "checklists": [],
//         //                         "members": [
//         //                             {
//         //                                 "0": {
//         //                                     "_id": "u102",
//         //                                     "fullname": "Dan Katorza",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "1": {
//         //                                     "_id": "u103",
//         //                                     "fullname": "Moshe Dabush",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "2": {
//         //                                     "_id": "u104",
//         //                                     "fullname": "Eran Danieli",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "3": {
//         //                                     "_id": "u105",
//         //                                     "fullname": "David Cohen",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 },
//         //                                 "4": {
//         //                                     "_id": "u106",
//         //                                     "fullname": "Omer Levy",
//         //                                     "imgUrl": "https://www.google.com"
//         //                                 }
//         //                             }
//         //                         ],
//         //                         "labelIds": [],
//         //                         "byMember": "Guest Guest",
//         //                         "createdAt": 1633859134435,
//         //                         "dueDate": 0,
//         //                         "style": {
//         //                             "coverColor": "",
//         //                             "imgUrl": "",
//         //                             "bgColor": ""
//         //                         },
//         //                         "isArchived": true
//         //                     }
//         //                 ]
//         //             }
//         //         ],
//         //         "activities": [
//         //             {
//         //                 "id": "a101",
//         //                 "txt": "Changed Color",
//         //                 "createdAt": 154514,
//         //                 "byMember": {
//         //                     "_id": "u102",
//         //                     "fullname": "Moshe Dabush",
//         //                     "imgUrl": "http://some-img"
//         //                 },
//         //                 "task": {
//         //                     "id": "c101",
//         //                     "title": "Replace Logo"
//         //                 }
//         //             }
//         //         ]
//         //     }
//         // ]
//         const collection = await dbService.getCollection('board')
//         var boards = await collection.find(criteria).toArray()
        
//         return boards
//         // return hcBoards
//     } catch (err) {
//         logger.error('cannot find users', err)
//         throw err
//     }
// }

// // async function getById(boardId) {
// //     const criteria = _buildCriteria(boardId)
// //     try {
// //         // const collection = await dbService.getCollection('user')
// //         // const user = await collection.findOne({ '_id': ObjectId(userId) })
// //         // delete user.password
// //         const collection = await dbService.getCollection('board')
// //         const board = await collection.findOne(criteria)
      
// //         // user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
// //         // user.givenReviews = user.givenReviews.map(review => {
// //         //     delete review.byUser
// //         //     return review
// //         // })
// //         const xx = [collection]
// //         return xx
// //         return board
// //     } catch (err) {
// //         logger.error(`while finding board `, err)
// //         throw err
// //     }
// // }
// async function getByUsername(username) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ username })
//         return user
//     } catch (err) {
//         logger.error(`while finding user ${username}`, err)
//         throw err
//     }
// }

// async function remove(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         await collection.deleteOne({ '_id': ObjectId(userId) })
//     } catch (err) {
//         logger.error(`cannot remove user ${userId}`, err)
//         throw err
//     }
// }

// async function update(user) {
//     try {
//         // peek only updatable fields!
//         const userToSave = {
//             _id: ObjectId(user._id),
//             username: user.username,
//             fullname: user.fullname,
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.updateOne({ _id: userToSave._id }, { $set: userToSave })
//         return userToSave;
//     } catch (err) {
//         logger.error(`cannot update user ${user._id}`, err)
//         throw err
//     }
// }

// async function add(user) {
//     try {
//         // peek only updatable fields!
//         const userToAdd = {
//             username: user.username,
//             password: user.password,
//             fullname: user.fullname,
//             score: 100
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.insertOne(userToAdd)
//         return userToAdd
//     } catch (err) {
//         logger.error('cannot insert user', err)
//         throw err
//     }
// }

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.balance = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }




const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = { ctg: '' }) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('board')
        const boards = await collection.find(criteria).toArray()
        return boards
    } catch (err) {
        logger.error('cannot find boards', err)
        throw err
    }
}

async function save(board) {
    const { title, createdBy, style, labels, members, lists,activities, isFavorite, groups, colorPalette } = board
    let savedBoard
    if (board._id) {
        //UPDATE
        try {
            savedBoard = {
                _id: ObjectId(board._id),
                groups,
                title,
                createdBy,
                style,
                labels,
                members,
                lists,
                activities: activities.slice(0, 20),
                isFavorite,
                colorPalette
            }
            const collection = await dbService.getCollection('board')
            await collection.updateOne({ _id: savedBoard._id }, { $set: savedBoard })
            return savedBoard


        } catch (err) {
            logger.error('cannot update board', err)
            throw err
        }
    } else {
        // CREATE
        try {
            savedBoard = {
                createdAt: ObjectId(board._id).getTimestamp(),
                title: board.title,
                createdBy: board.createdBy,
                style: {
                    background: board.background
                },
                labels: [],
                members: [board.createdBy],
                lists: [],
                activities: [],
                isFavorite: false
            }
            const collection = await dbService.getCollection('board')
            await collection.insertOne(savedBoard)
            return savedBoard
        } catch (err) {
            logger.error('cannot add board', err)
            throw err
        }
    }
}

async function getById(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        const board = await collection.findOne({ '_id': ObjectId(boardId) })
        return board
    } catch (err) {
        logger.error(`while finding board ${boardId}`, err)
        throw err
    }
}

async function remove(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.deleteOne({ '_id': ObjectId(boardId) })
    } catch (err) {
        logger.error(`cannot remove board ${boardId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    const { ctg } = filterBy
    if (ctg === 'favorite') {
        criteria.isFavorite = { $eq: true }
    }
    return criteria
}

module.exports = {
    query,
    save,
    getById,
    remove
}