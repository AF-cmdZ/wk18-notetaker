import Router from "express";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", (_, res) => {
    res.send("hello api");
});

router.post("/", (req, res) => {
    res.json(req.body);
});

export default router;
