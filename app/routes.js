// routes.js

module.exports = function(app, gameManager) {
    //  This is where we will render the tic tac toe game
    //  First person that enters will be Xs
    //  Second player that enters will be Os
    //  all others become a viewer
    //  (track players by user sessions)
    app.get('/', function(req, res) {
        gameManager.assignPlayer(req.sessionID);
        res.render('index.ejs', {userid: req.sessionID, gameData: gameManager.gameData(req.sessionID)});
    });

    app.post('/makemove', function(req, res) {
        var row = parseInt(req.body.row);
        var col = parseInt(req.body.col);
        var userid = req.body.userid;
        console.log(req.body);
        gameManager.makeMove(row, col, userid);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ status: "OK" }));
        res.end();
    });
}