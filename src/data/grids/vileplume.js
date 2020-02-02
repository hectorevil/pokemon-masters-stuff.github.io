// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let vileplumeGridDataNoColor = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Vileplume', cell: 0 }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 18 }
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 27 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Nature Loving Petal Dance Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Nature Loving Petal Dance Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 9
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2 [Req. Lv3 Sync]',
      energy: 4,
      cell: 15
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 8
    }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'E.B.O.A.R 2',
      description:
        'Energy Ball On a Roll 2 - Raises the chance of lowering stat values with the additional effects',
      energy: 8,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2 [Req. Lv3 Sync]',
      energy: 5,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 10
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2',
      energy: 5,
      cell: 16
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cell: 36 }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 38
    }
  },
  {
    q: -1,
    r: -3,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3, cell: 42 }
  },
  {
    q: -1,
    r: -4,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny [Req. Lv3 Sync]',
      energy: 9,
      cell: 45
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'S.S. MGR 3',
      description: 'Stun Spore Move Gauge Refresh 3',
      energy: 4,
      cell: 37
    }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'Healing Sun 2',
      description: 'Healing Sun 2',
      energy: 7,
      cell: 40
    }
  },
  {
    q: -2,
    r: -3,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5,
      cell: 43
    }
  },
  {
    q: -2,
    r: -4,
    data: {
      name: 'HP + 30',
      description: 'HP + 30 [Req. Lv3 Sync]',
      energy: 10,
      cell: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 39 }
  },
  {
    q: -3,
    r: -2,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 41
    }
  },
  {
    q: -3,
    r: -3,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 10, cell: 44 }
  },

  // Lower Left
  {
    q: -3,
    r: 2,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 19
    }
  },
  {
    q: -3,
    r: 3,
    data: {
      name: 'S.S. MGR 3',
      description: 'Stun Spore Move Gauge Refresh 3',
      energy: 4,
      cell: 21
    }
  },
  {
    q: -3,
    r: 4,
    data: {
      name: 'S.S. S.S. 9',
      description:
        "Stun Spore Satisfied Snarl 9 - Lowers the target's Sp.Atk when a move targeting that opponent is successful",
      energy: 9,
      cell: 24
    }
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'P.S. 5',
      description: 'Paralysis Synergy 5',
      energy: 10,
      cell: 20
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cell: 23
    }
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 5,
      cell: 26
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 22
    }
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'E.B.O.A.R 2',
      description:
        'Energy Ball On a Roll 2 - Raises the chance of lowering stat values with the additional effects [Req. Lv3 Sync]',
      energy: 8,
      cell: 25
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'X Sp.Def MPR 3',
      description: 'X Sp.Def MP Refresh 3',
      energy: 7,
      cell: 28
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 31
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'C.S. 5',
      description: 'Confusion Synergy 5',
      energy: 10,
      cell: 34
    }
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'S.S. F 2',
      description:
        'Stun Spore Flabbergast 2 - occasionally leaves the target confused if a move is successful',
      energy: 9,
      cell: 29
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 32
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 4,
      cell: 35
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 30
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'P.I.O MPR 3',
      description: 'Pour It On MP Refresh 3 [Req. Lv3 Sync]',
      energy: 7,
      cell: 33
    },
    fill: '#dedbd3'
  }
];

export default vileplumeGridDataNoColor.map((obj, index) => {
  if (!('fill' in obj)) {
    let blueGrids = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      11,
      18,
      19,
      23,
      26,
      27,
      31,
      32,
      35,
      36,
      39,
      41,
      42,
      43,
      44,
      46
    ];
    let greenGrids = [8, 9, 10, 12, 13, 22, 30, 38];
    let yellowGrids = [20, 34, 40, 45];
    let redGrids = [14, 15, 16, 17, 21, 24, 25, 28, 29, 33, 37];
    let purpleGrids = [47, 48];
    if (blueGrids.indexOf(obj.data.cell) > -1) {
      // 66B6EC - blue
      obj['fill'] = '#66B6EC';
      return obj;
    }
    // green = #73d958
    if (greenGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = '#73d958';
      return obj;
    }
    if (yellowGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = 'yellow';
      return obj;
    }
    // red = #f24646
    if (redGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = '#f24646';
      return obj;
    }
    if (purpleGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = 'purple';
      return obj;
    }
  } else {
    return obj;
  }
});