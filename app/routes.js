// routes.js

module.exports = function(app, gameManager) {
    //  This is where we will render the tic tac toe game
    //  First person that enters will be Xs
    //  Second player that enters will be Os
    //  all others become a viewer
    //  (track players by user sessions)
    app.get('/', function(req, res) {
        res.render('index.ejs', {userid: req.sessionID});
    });

    app.post('/makemove', function(req, res) {
        var row = req.param['box']/3;
        var col = req.param['box']%3;
        var userid = req.param['userid'];
        gameManager.makeMove(row, col, userid);
    });
}