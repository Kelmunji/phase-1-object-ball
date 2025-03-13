
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  
  function numPointsScored(playerName) {
    const game = gameObject();
    
    
    for (let team of ['home', 'away']) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    
    
    return Player `${playerName} not found`;
  }
  

  console.log(numPointsScored("Alan Anderson"));



  function shoeSize(playerName) {
    const game = gameObject();
    
    
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].shoe;
        }
    }
    
    
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].shoe;
        }
    }
    
   
    return null;
}

console.log(shoeSize('Alan Anderson'))



function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return "Team not found";
    }
}

console.log(teamColors('Brooklyn Nets'))



function teamNames() {
    const game = gameObject(); 
    return [game.home.teamName, game.away.teamName]; 
}

console.log(teamNames())




function playerNumbers(teamName) {
    const game = gameObject(); 
    let teamPlayers;

   
    if (game.home.teamName === teamName) {
        teamPlayers = game.home.players;
    } else if (game.away.teamName === teamName) {
        teamPlayers = game.away.players;
    } else {
        return "Team not found"; 
    }

    
    return Object.values(teamPlayers).map(player => player.number);
}


console.log(playerNumbers('Charlotte Hornets'))




function playerStats(playerName) {
    const game = gameObject(); 

    
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
   
    else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    
    else {
        return "Player not found";
    }
}


console.log(playerStats('Bismak Biyombo'))




function bigShoeRebounds() {
    const game = gameObject(); 
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;

    
    function checkPlayers(players) {
        for (const playerName in players) {
            const player = players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    
    checkPlayers(game.home.players);

    
    checkPlayers(game.away.players);

    
    return playerWithLargestShoe.rebounds;
}


console.log(bigShoeRebounds())



function mostPointsScored() {
    const game = gameObject(); 
    let playerWithMostPoints = null;
    let mostPoints = 0;

    
    function checkPlayers(players) {
        for (const playerName in players) {
            const player = players[playerName];
            if (player.points > mostPoints) {
                mostPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }

    
    checkPlayers(game.home.players);

    
    checkPlayers(game.away.players);

 
    return playerWithMostPoints;
}

console.log(mostPointsScored())




function winningTeam() {
    const game = gameObject(); 

   
    function calculateTotalPoints(players) {
        return Object.values(players).reduce((total, player) => total + player.points, 0);
    }

    const homeTeamPoints = calculateTotalPoints(game.home.players);

  
    const awayTeamPoints = calculateTotalPoints(game.away.players);

  
    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}



console.log(winningTeam())



function playerWithLongestName() {
    const game = gameObject(); 
    let longestName = "";


    function checkPlayers(players) {
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    
    checkPlayers(game.home.players);

    
    checkPlayers(game.away.players);

   
    return longestName;
}



console.log(playerWithLongestName())




function doesLongNameStealATon() {
    const game = gameObject(); 
    const longestNamePlayer = playerWithLongestName(); 
    let playerWithMostSteals = null;
    let mostSteals = 0;

    
    function checkPlayers(players) {
        for (const playerName in players) {
            const player = players[playerName];
            if (player.steals > mostSteals) {
                mostSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }

   
    checkPlayers(game.home.players);

    
    checkPlayers(game.away.players);

    
    return longestNamePlayer === playerWithMostSteals;
}


console.log(doesLongNameStealATon())

