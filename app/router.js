import Router from "express";
import noteController from "./controller.js";
const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", (_, res) => {
    res.send("hello api");
});

router.get("/notes", async (_, res) => {
    try {
    const notes = await noteController.index();
    res.json(notes);
    } catch (err) {
    res.status(400).json(err);
    };
});

router.get("/notes/:id", async (req, res) => {
    try {
        const note = await noteController.show(req.params.id);
        res.json(note);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/", async (req, res) => {
    try{
    const newNote = await noteController.create(req.body);
    res.json(newNote);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/notes/:id", async (req, res) => {
    try {
        await noteController.delete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/notes", async (req, res) => {
    try {
        await noteController.deleteAll();
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;
