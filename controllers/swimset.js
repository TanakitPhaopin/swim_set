import { json } from "express";

export async function renderCreatePage(req, res, next) {
    res.render('swimset/create', { title: 'Create Swim Set' });
}

export async function createSwimSet(req, res, next) {
    const swimSet = req.body;
    res.send(swimSet);
}