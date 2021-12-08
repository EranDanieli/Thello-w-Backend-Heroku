// // const userService = require('./user.service')
// const boardService = require('./board.service')
// // const socketService = require('../../services/socket.service')
// const logger = require('../../services/logger.service')


// async function getBoards(req, res) {
//     try {
//         const boards = await boardService.getBoards()
//         res.send(boards)
//     } catch (err) {
//         logger.error('Failed to get user', err)
//         res.status(500).send({ err: 'Failed to get user' })
//     }
// }
// // async function getBoardById(req, res) {
// //     try {
// //         const board = await boardService.getById(+req.params.id)
// //         res.send(board)
// //     } catch (err) {
// //         logger.error('Failed to get board', err)
// //         res.status(500).send({ err: 'Failed to get user' })
// //     }
// // }

// // async function getUsers(req, res) {
// //     try {
// //         const filterBy = {
// //             txt: req.query?.txt || '',
// //             minBalance: +req.query?.minBalance || 0
// //         }
// //         const users = await userService.query(filterBy)
// //         res.send(users)
// //     } catch (err) {
// //         logger.error('Failed to get users', err)
// //         res.status(500).send({ err: 'Failed to get users' })
// //     }
// // }

// // async function deleteUser(req, res) {
// //     try {
// //         await userService.remove(req.params.id)
// //         res.send({ msg: 'Deleted successfully' })
// //     } catch (err) {
// //         logger.error('Failed to delete user', err)
// //         res.status(500).send({ err: 'Failed to delete user' })
// //     }
// // }

// // async function updateUser(req, res) {
// //     try {
// //         const user = req.body
// //         const savedUser = await userService.update(user)
// //         res.send(savedUser)
// //     } catch (err) {
// //         logger.error('Failed to update user', err)
// //         res.status(500).send({ err: 'Failed to update user' })
// //     }
// // }

// module.exports = {
//     // getUser,
//     // getUsers,
//     // deleteUser,
//     // updateUser
//     getBoards,
//     getBoardById
// }



const logger = require('../../services/logger.service')
const boardService = require('../board/board.service')

async function getBoards(req, res) {
    try {
        const filterBy = req.query
        const boards = await boardService.query(filterBy)
        res.send(boards)
    } catch (err) {
        logger.error('Failed to get boards', err)
        res.status(500).send({ err: 'Failed to get boards' })
    }
}

async function getBoard(req, res) {
    try {
        const board = await boardService.getById(req.params.id)
        res.send(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: 'Failed to get board' })
    }
}

async function addBoard(req, res) {
    try {
        const board = req.body
       const  savedBoard = await boardService.save(board)
        res.send(savedBoard)
    } catch (err) {
        console.log(err)
        logger.error('Failed to add board', err)
        res.status(500).send({ err: 'Failed to add board' })
    }
}

async function updateBoard(req, res) {
    try {
        const board = req.body
        savedBoard = await boardService.save(board)
        res.send(savedBoard)
    } catch (err) {
        console.log(err)
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })
    }
}

async function deleteBoard(req, res) {
    try {
        await boardService.remove(req.params.id)
        res.send({ msg: 'Board deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete board', err)
        res.status(500).send({ err: 'Failed to delete board' })
    }
}

module.exports = {
    getBoards,
    getBoard,
    addBoard,
    updateBoard,
    deleteBoard
}