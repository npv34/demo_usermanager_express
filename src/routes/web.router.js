const express = require('express');
const HomeController = require('../controllers/home.controller');
const GroupController = require('../controllers/group.controller');
const router = express.Router();

router.get('/users', (req, res) => {
    HomeController.index(req, res)
});

router.get('/users/:id/delete', (req, res) => {
    HomeController.deleteUser(req, res)
});

router.get('/users/create', (req, res) => {
    HomeController.createUser(req, res)
});

router.post('/users/store', (req, res) => {
    HomeController.storeUser(req, res)
});

router.get('/users/:id/update', (req, res) => {
    HomeController.showFormEditUser(req, res)
});

router.post('/users/:id/edit', (req, res) => {
    HomeController.editUser(req, res)
});

router.get('/groups', (req, res) => {
    GroupController.showListGroup(req, res);
})


module.exports = router;