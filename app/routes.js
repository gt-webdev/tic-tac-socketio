// routes.js

module.exports = function(app, gameManager) {
    //  This is where we will render the tic tac toe game
    //  First person that enters will be Xs
    //  Second player that enters will be Os
    //  all others become a viewer
    //  (track players by user sessions)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });


}