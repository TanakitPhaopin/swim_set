import sql from '../config/db.js';

export async function renderCreatePage(req, res, next) {
    res.render('swimset/create', { title: 'Create Swim Set' });
}

export async function createSwimSet(req, res, next) {
    const swimSet = req.body;
    const {
        warmup,
        premain,
        mainset,
        cooldown,
    } = swimSet;

    try {
        await sql`INSERT INTO swim_sets (warmup, premain, mainset, cooldown) VALUES (${warmup}, ${premain}, ${mainset}, ${cooldown})`;
        res.redirect('/swimset');
    } catch (error) {
        throw new Error(error);
    }
}

export async function renderSwimSetList(req, res, next) {
    try {
        const swimSets = await sql`SELECT * FROM swim_sets`;
        res.render('swimset/swimset', { title: 'Swim Set List', swimSets });
    } catch (error) {
        throw new Error(error);
    }
}