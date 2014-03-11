// routes.js

module.exports = function(app, gameManager) {
    //  This is where we will render the tic tac toe game
    //  First person that enters will be Xs
    //  Second player that enters will be Os
    //  all others become a viewer ( - )
    //  (track players by user sessionID)
    app.get('/', function(req, res) {
        gameManager.assignPlayer(req.sessionID);
        res.render('index.ejs', {userid: req.sessionID, gameData: gameManager.gameData(req.sessionID)});
    });

    //  This is the route that the ajax post uses
    app.post('/makemove', function(req, res) {
        //  get the post data
        var row = parseInt(req.body.row);
        var col = parseInt(req.body.col);
        var userid = req.body.userid;
        //  attempt to use the data to make a move
        gameManager.makeMove(row, col, userid);
        //  end the response
        res.end();
    });
}