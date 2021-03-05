const express = require('express');
const router = express.Router();
const { Post } = require('../models/post');

router.get('/', async (req, res) => {
	const posts = await Post.findAll();
	res.send(posts);
});

router.post('/', async (req, res) => {
	const post = await Post.create(req.body);
	res.status(201).send(post);
});

router.get('/:id', async (req, res) => {
	const post = await Post.findOne({where: {id: req.params.id }});
	if (post) { 
		res.send(post);
	} else {
		res.sendStatus(404);
	}
});

router.put('/:id', async (req, res) => {
	const rows = await Post.update(req.body, {where: {id: req.params.id}});
	if (rows > 0) {
		const post = await Post.findOne({where: {id: req.params.id}});
		res.send(post);
	} else {
		res.sendStatus(404);
	}
});

router.delete('/:id', async (req, res) => {
	const rows = await Post.destroy({where: {id: req.params.id}});
	if (rows > 0) { 
		res.sendStatus(204);
	} else {
		res.sendStatus(404);
	}
});

exports.posts = router;