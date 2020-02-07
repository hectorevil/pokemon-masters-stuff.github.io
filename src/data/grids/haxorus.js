// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let haxorusGridDataNoColor = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Haxorus', cellNum: 0 }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cellNum: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cellNum: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cellNum: 1 }
  },
  {
    q: 1,
    r: 0,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 0,
      cellNum: 2
    }
  },
  {
    q: -1,
    r: 1,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 0,
      cellNum: 4
    }
  },
  {
    q: -1,
    r: 0,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 0,
      cellNum: 5
    }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6, cellNum: 38 }
  },
  {
    q: 2,
    r: -1,
    data: {
      name: 'Speed + 5',
      description: 'Speed + 5',
      energy: 2,
      cellNum: 29
    }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Dragon Sage Outrage Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Dragon Sage Outrage Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 2,
      cellNum: 7
    }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cellNum: 10
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cellNum: 13
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'D.C. + 4',
      description: 'Dragon Claw Power + 4 [Req. Lv3 Sync]',
      energy: 4,
      cellNum: 16
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 2,
      cellNum: 8
    }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'D.C. MGR 2',
      description: 'Dragon Claw Move Gauge Refresh 2',
      energy: 5,
      cellNum: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'D.C. MGR 2',
      description: 'Dragon Claw Move Gauge Refresh 2',
      energy: 5,
      cellNum: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'D.C. Z 1',
      description:
        'Dragon Claw Zero in 1 - Cricial hits land more easily when an attack move is used [Req. Lv3 Sync]',
      energy: 10,
      cellNum: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cellNum: 9
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cellNum: 12
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'D.C. + 4',
      description: 'Dragon Claw Power + 4',
      energy: 4,
      cellNum: 15
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'X Atk MPR 3',
      description: 'X Attack MP Refresh 3',
      energy: 7,
      cellNum: 41
    }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 5,
      cellNum: 44
    }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'Carry On 1',
      description:
        "Carry On 1 - Raises the use's Attack each time another Pokemon on the field of play faints",
      energy: 10,
      cellNum: 40
    }
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 4,
      cellNum: 43
    }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'Unhindered',
      description:
        "Unhindered - When the Pokemon attacks, ignores damage-reducing effects on the opponent's field of play [Req. Lv3 Sync]",
      energy: 10,
      cellNum: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 1,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 3,
      cellNum: 39
    }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'Y.G.D MPR 3',
      description: "You're Going Down MP Refresh 3",
      energy: 7,
      cellNum: 42
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 45
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 3,
      cellNum: 20
    }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'Y.G.D. D 4',
      description:
        "You're Going Down Durable 4 - Has a good chance of making the user endure the next hit it take when a move is successful",
      energy: 8,
      cellNum: 23
    }
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cellNum: 26
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 3,
      cellNum: 19
    }
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 4,
      cellNum: 22
    }
  },
  {
    q: -2,
    r: 5,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 4,
      cellNum: 25
    }
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'S.E. 2',
      description:
        "Speed Entry 2 - Shaprly raises the user's speed when the Pokemon enters a battle [Req. Lv3 Sync]",
      energy: 5,
      cellNum: 28
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cellNum: 18 }
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'Attack + 5',
      description: 'Attack + 5',
      energy: 3,
      cellNum: 21
    }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Quick Cure',
      description:
        'Quick Cure - Removes confused, flincing, and trapped conditions from the user once during battle',
      energy: 7,
      cellNum: 24
    }
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 4,
      cellNum: 27
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 4,
      cellNum: 30
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 5,
      cellNum: 33
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'O.C.B 5',
      description:
        'Outrage Confusion Boon 5 - Powers up moves when the user is confused [Req. Lv3 Sync]',
      energy: 8,
      cellNum: 36
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'Speed + 5',
      description: 'Speed + 5',
      energy: 2,
      cellNum: 31
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'Outrage MGR 3',
      description: 'Outrage Move Gauge Refresh 3',
      energy: 7,
      cellNum: 34
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Outrage MGR 3',
      description: 'Outrage Move Gauge Refresh 3 [Req. Lv3 Sync]',
      energy: 7,
      cellNum: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 4,
      cellNum: 32
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 5,
      cellNum: 35
    }
  }
];

export default haxorusGridDataNoColor.map((obj, index) => {
  if (!('fill' in obj)) {
    let blueGrids = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      18,
      19,
      20,
      21,
      22,
      25,
      26,
      27,
      29,
      31,
      38,
      39,
      43,
      44,
      45
    ];
    let greenGrids = [9, 10, 12, 13, 15, 16, 30, 32, 33, 35];
    let yellowGrids = [24, 28, 40, 46];
    let redGrids = [11, 14, 17, 23, 34, 36, 37, 41, 42];
    let purpleGrids = [47, 48];
    if (blueGrids.indexOf(obj.data.cellNum) > -1) {
      // 66B6EC - blue
      obj['fill'] = '#66B6EC';
      return obj;
    }
    // green = #73d958
    if (greenGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = '#73d958';
      return obj;
    }
    if (yellowGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = 'yellow';
      return obj;
    }
    // red = #f24646
    if (redGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = '#f24646';
      return obj;
    }
    if (purpleGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = 'purple';
      return obj;
    }
  } else {
    return obj;
  }
});