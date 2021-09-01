// Uses the db client from loader.js
import { ObjectId } from "mongodb";
import client from "./loader.js";

const notesConnection = client.db("noteTaker").collection("notes");

export default {
    index() {
        return notesConnection.find({}).toArray();
    },
    create(newNote) {
    return notesConnection.insertOne(newNote);
    },
    show(id) {
        return notesConnection.findOne(ObjectId(id));
    },
};