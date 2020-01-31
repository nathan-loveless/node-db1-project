const express = require('express');
const db = require('./dbConfig.js');
const router = express.Router();

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts');
        res.json(accounts);
    } catch(err) {
        res.status(500).json({message: 'Failed to get posts'});
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const account = await db('accounts').where('id', id);
        res.status(200).json(account);
    } catch {        
        res.status(500).json({message: 'Failed to get account'});
    }
});

router.post('/', async (req, res) => {
    const accountData = req.body;
    try {
        const account = await db('accounts').insert(accountData);
        res.status(201).json(account);
    } catch {
        res.status(500).json({message: 'Failed to insert account'});
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const updateRow = await db('accounts').where('id', id).update(req.body);
        res.status(200).json({updated: updateRow});
    } catch {
        res.status(500).json({message: 'Failed to update account'});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteRow = await db('accounts').where('id', req.params.id).del();
        res.json({deletedRecords: deleteRow})
    }
    catch {
        res.status(500).json({message: "Failded to delete account row"});
    }    
});