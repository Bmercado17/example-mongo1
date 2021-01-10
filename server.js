let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

//this connect the form inputs and text area
mongoose.connect("mongodb+srv://askotala:Elm:)si:)17@cluster0.0xkzj.mongodb.net/TodoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//create a data schema or section assigning how is going to be refered in the data base
const notesSchema = {
    title: String,
    content: String
}

// model of how and what to include to recreate in the form information 'NOTE' is the name of where all the clients info will go

let Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    // app.use('/css', express.static(__dirname + 'css/css'))

})
//app.posting information to the database while grabbing it from the name title in the html form req.body.title
app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function () {
    console.log('we are on');
})
app.use(express.static("public/css"));
app.use('/css', express.static(__dirname + 'public/css'))