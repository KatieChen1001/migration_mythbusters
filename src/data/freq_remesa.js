// removed outliers anything above 1000 - did this manually!! 
// export const freq_remesa = [
//     {
//       category: "Each month",
//       values: [
//         100,
//         75,
//         120,
//         400,
//         50,
//         200,
//         350,
//         16.9,
//         5.1,
//         25.4,
//         100,
//         100,
//         150,
//         150,
//         250,
//         400,
//         100,
//         200,
//         50,
//         150,
//         150,
//         100,
//         150,
//         600,
//         100,
//         25.4,
//         33.8,
//         500,
//         400,
//         200,
//         100,
//         150,
//         200,
//         250,
//         20.2,
//         10.1,
//         13.4,
//         11.8,
//         100,
//         60,
//         3.4,
//         200,
//         0.3,
//         200,
//         200,
//         200,
//         150,
//         50,
//         120,
//         200,
//         200,
//         100,
//         400,
//         100,
//         150,
//         50,
//         100,
//         300,
//         100,
//         500,
//         300,
//         200,
//         300,
//         225,
//         10.1,
//         16.8,
//         25.4,
//         13.2,
//         8.4,
//         25.4,
//         50.7,
//         12.7,
//         200,
//         4.2,
//         100,
//         100,
//         300,
//         150,
//         100,
//         50,
//         150,
//         150,
//         400,
//         200,
//         100,
//         60,
//         100,
//         150,
//         150,
//         100,
//         500,
//         200,
//         300,
//         350,
//         200,
//         8.4,
//         300,
//         5,
//         100,
//         25.4,
//         300,
//         300,
//         300,
//         3.4,
//         100,
//         150,
//         75,
//         60,
//         300,
//         12.7,
//         50,
//         100,
//         100,
//         0.1,
//         2.5,
//         91.3,
//         16.8,
//         100,
//         4.2,
//         3.4,
//         84.5,
//         230,
//         12.7,
//         62.5,
//         12.7,
//         33.8,
//         33.8,
//         16.9,
//         200,
//         6.3,
//         150,
//         350,
//         800,
//         473.2,
//         169,
//         50.7,
//         101.4,
//         350,
//         59.2,
//         25.4,
//         3.4,
//         2.4,
//         10.1,
//         50,
//         100,
//         10.1,
//         150,
//         60,
//         100,
//         150,
//         50,
//         300,
//         300,
//         150,
//         4,
//         38.9,
//         100,
//         400,
//         5.1,
//         405.6,
//         84.5,
//         202.8,
//         16.9,
//         12.7,
//         25.4,
//         11.8,
//         23.7,
//         300,
//         500,
//         3.4,
//         25.4,
//         16.9,
//         2,
//         3.4,
//         4,
//         2.4,
//         3.4,
//         3.4,
//         3.4,
//         23.5,
//         10.1,
//         75,
//         70,
//         100,
//         100,
//         200,
//         250,
//         200,
//         23.7,
//         6.3,
//         59.2,
//         200,
//         2,
//         25.4,
//         1000,
//         30,
//         3.7,
//         280,
//         100,
//         800,
//         100,
//         100,
//         100,
//         100,
//         100,
//         200,
//         150,
//         5,
//         16.8,
//         100,
//         100,
//         42.3,
//         33.8,
//         200,
//         1000,
//         12.7,
//         25.4,
//         25.4,
//         25.4,
//         33.8,
//         13.5,
//         5,
//         3.7,
//         150,
//         100,
//         100,
//         8.4,
//         50,
//         200,
//         100,
//         200,
//         100,
//         300,
//         150,
//         350,
//         200,
//         160,
//         150,
//         50,
//         200,
//         100,
//         100,
//         50,
//         200,
//         200,
//         300,
//         300,
//         50,
//         50,
//         11.8,
//         100,
//         7.7,
//         500,
//         33.8,
//         50.7,
//         12.7,
//         500,
//         11.8,
//         100,
//         16.9,
//         100,
//         50,
//         33.8,
//         13.5,
//         150,
//         50,
//         100,
//         100,
//         200,
//         200,
//         200,
//         500,
//         150,
//         20,
//         250,
//         50,
//         50,
//         200,
//         300,
//         100,
//         500,
//         100,
//         100,
//         100,
//         300,
//         50.7,
//         12.7,
//         42.3,
//         50.7,
//         169,
//         3.4,
//         6.7,
//         20.3,
//         16.9,
//         12.3,
//         200,
//         100,
//         50.7,
//         33.8,
//         59.2,
//         150,
//         5,
//         8.5,
//         59.2,
//         59.2,
//         22,
//         11.8,
//         84.5,
//         50,
//         200,
//         200,
//         11.8,
//         25.4,
//         42.3,
//         7.4,
//         50,
//         20.2,
//         3.4,
//         50.7,
//         2.4,
//         11.8,
//         12.7,
//         50,
//         2.5,
//         100
//       ]
//     },
//     {
//       category: "Every fifteen days",
//       values: [
//         110,
//         150,
//         16.9,
//         33.8,
//         42.3,
//         67.6,
//         300,
//         170,
//         118.3,
//         150,
//         1000,
//         50,
//         300,
//         100,
//         1000,
//         118.3,
//         100,
//         25.2,
//         600,
//         1000,
//         400,
//         300,
//         150,
//         0.2,
//         30,
//         200,
//         4,
//         11.8,
//         8.4,
//         13.4,
//         33.8,
//         200,
//         500,
//         100,
//         400,
//         5,
//         100,
//         200,
//         75,
//         33.8,
//         200,
//         8.4,
//         500,
//         11.8,
//         5,
//         16.8,
//         150,
//         200,
//         200,
//         50,
//         300,
//         100,
//         67.6,
//         6.1,
//         100,
//         400,
//         150,
//         600,
//         120,
//         100,
//         300,
//         20.3,
//         200,
//         50.7,
//         67.6,
//         25.4,
//         23.7,
//         33.8,
//         250,
//         75,
//         23.7
//       ]
//     },
//     {
//       category: "Every six months",
//       values: [
//         250,
//         100,
//         100,
//         50,
//         75,
//         50,
//         50,
//         50,
//         600,
//         50,
//         50,
//         100,
//         50,
//         100,
//         75,
//         100,
//         100,
//         5.1,
//         5.1,
//         120,
//         3.4,
//         11.8,
//         25.4,
//         2,
//         100,
//         100,
//         150,
//         3.4,
//         12.7,
//         2,
//         1.7,
//         50,
//         200,
//         1.2,
//         5.9,
//         2,
//         8.1,
//         50,
//         200,
//         50,
//         90,
//         50,
//         50,
//         12.7,
//         100,
//         100,
//         250,
//         60,
//         50,
//         100,
//         25.4,
//         50,
//         50,
//         100,
//         60,
//         200,
//         100,
//         40,
//         12.7,
//         16.9,
//         6.8,
//         25.4,
//         33.8,
//         11.8,
//         67.6,
//         40,
//         12.7
//       ]
//     },
//     {
//       category: "Every three months",
//       values: [
//         300,
//         150,
//         25,
//         500,
//         300,
//         33.8,
//         25,
//         50.7,
//         300,
//         100,
//         100,
//         300,
//         4,
//         150,
//         100,
//         40,
//         300,
//         1.7,
//         6.7,
//         5.9,
//         100,
//         100,
//         150,
//         500,
//         50,
//         300,
//         30,
//         200,
//         25.4,
//         35.5,
//         3.4,
//         600,
//         0,
//         150,
//         5,
//         150,
//         2.5,
//         3.4,
//         200,
//         100,
//         200,
//         250,
//         12.6,
//         33.8,
//         25.4,
//         23.7,
//         100,
//         225,
//         300,
//         1.7,
//         50,
//         33.8,
//         11.8,
//         20.3,
//         8.5,
//         9.3,
//         50.7,
//         8.1,
//         150,
//         100,
//         50,
//         50,
//         100,
//         100,
//         75,
//         25,
//         50,
//         100,
//         200,
//         4.2,
//         16.9,
//         25.4,
//         60,
//         30,
//         80,
//         150,
//         100,
//         100,
//         50,
//         8.5,
//         6.8,
//         190.1,
//         11.8,
//         33.8,
//         5.1,
//         6.8,
//         5.9,
//         200,
//         10.1,
//         11.8,
//         59.2,
//         11.8
//       ]
//     },
//     {
//       category: "Every two months",
//       values: [
//         100,
//         50,
//         100,
//         200,
//         60,
//         50,
//         84.5,
//         150,
//         25.4,
//         100,
//         1.7,
//         200,
//         150,
//         100,
//         100,
//         13.4,
//         6.7,
//         100,
//         150,
//         100,
//         100,
//         30,
//         50,
//         200,
//         16.9,
//         200,
//         3.4,
//         200,
//         100,
//         50,
//         50,
//         50,
//         16.9,
//         300,
//         5,
//         16.9,
//         25,
//         200,
//         300,
//         150,
//         13.5,
//         2.2,
//         100,
//         1.5,
//         50,
//         5,
//         50,
//         12.7,
//         500,
//         25.4,
//         200,
//         0,
//         13,
//         25.4,
//         50.7,
//         100,
//         50,
//         40,
//         150,
//         100,
//         11.8,
//         50.7,
//         25.4,
//         5.1,
//         120,
//         60,
//         100,
//         100,
//         60,
//         200,
//         100,
//         75,
//         100,
//         1000,
//         2,
//         42.3,
//         25.4,
//         23.7,
//         150,
//         200,
//         16.9,
//         2,
//         200,
//         60,
//         200,
//         30,
//         75,
//         5.1,
//         25.4,
//         35.5,
//         100,
//         3,
//         5.1,
//         6.8,
//         33.8,
//         5.9,
//         25.4,
//         11.8,
//         6.7,
//         150,
//         23.7
//       ]
//     },
//     {
//       category: "Every week or less",
//       values: [
//         42.3,
//         42.3,
//         5.9,
//         33.8,
//         600,
//         100,
//         1000,
//         135.2,
//         100,
//         50,
//         200,
//         3.4,
//         300,
//         150,
//         2,
//         16.8,
//         3.4,
//         1.7
//       ]
//     },
//     {
//       category: "On extraordinary occasions",
//       values: [
//         200,
//         50,
//         50,
//         50,
//         50,
//         200,
//         100,
//         100,
//         100,
//         200,
//         1.7,
//         100,
//         50,
//         50,
//         50,
//         13.2,
//         3.4,
//         250,
//         11.8,
//         6.3,
//         25.4,
//         12.7,
//         0,
//         35.5,
//         0,
//         50,
//         0,
//         50,
//         54.1,
//         3.4,
//         100,
//         100,
//         50,
//         50.7,
//         3.4,
//         60,
//         60,
//         150,
//         100,
//         5.1,
//         100,
//         100,
//         50,
//         100,
//         100,
//         3.4,
//         33.8,
//         3.7,
//         1.7,
//         3.9
//       ]
//     },
//     {
//       category: "Once a year",
//       values: [
//         100,
//         100,
//         50,
//         50,
//         50,
//         50,
//         70,
//         12.7,
//         2.4,
//         125,
//         3.4,
//         16.9,
//         2.5,
//         3.4,
//         50,
//         300,
//         200,
//         50,
//         150,
//         50,
//         1.7,
//         150,
//         50,
//         100,
//         100,
//         16.9,
//         8.5,
//         13.2,
//         8.5,
//         50
//       ]
//     },
//     {
//       category: "Other",
//       values: [
//         40,
//         135,
//         20,
//         8.5,
//         50,
//         8.5,
//         3.4,
//         200,
//         100,
//         200,
//         125,
//         2.7,
//         60,
//         3.4,
//         5.9
//       ]
//     }
//   ]

export const freq_remesa =[
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 75
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "On extraordinary occasions",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 110
  },
  {
    "category": "Once a year",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Every six months",
    "values": 250
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 120
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 25
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 500
  },
  {
    "category": "Every fifteen days",
    "values": 150
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 350
  },
  {
    "category": "Every fifteen days",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 5.1
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 33.8
  },
  {
    "category": "Every fifteen days",
    "values": 33.8
  },
  {
    "category": "Every week or less",
    "values": 42.3
  },
  {
    "category": "Every two months",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 250
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "Every three months",
    "values": 25
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Other",
    "values": 40
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every fifteen days",
    "values": 42.3
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 50.7
  },
  {
    "category": "Every two months",
    "values": 84.5
  },
  {
    "category": "Each month",
    "values": 600
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Every fifteen days",
    "values": 67.6
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Every week or less",
    "values": 42.3
  },
  {
    "category": "Other",
    "values": 135
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Every fifteen days",
    "values": 300
  },
  {
    "category": "Every six months",
    "values": 75
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 170
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Once a year",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Every six months",
    "values": 600
  },
  {
    "category": "Each month",
    "values": 250
  },
  {
    "category": "On extraordinary occasions",
    "values": 200
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 20.2
  },
  {
    "category": "Each month",
    "values": 10.1
  },
  {
    "category": "Each month",
    "values": 13.4
  },
  {
    "category": "Every fifteen days",
    "values": 118.3
  },
  {
    "category": "Every three months",
    "values": 4
  },
  {
    "category": "Every two months",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 0.3
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 120
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 40
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 225
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 10.1
  },
  {
    "category": "Each month",
    "values": 16.8
  },
  {
    "category": "Every three months",
    "values": 1.7
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 150
  },
  {
    "category": "Every two months",
    "values": 13.4
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Every week or less",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 13.2
  },
  {
    "category": "Each month",
    "values": 8.4
  },
  {
    "category": "Every three months",
    "values": 6.7
  },
  {
    "category": "Every two months",
    "values": 6.7
  },
  {
    "category": "Every week or less",
    "values": 33.8
  },
  {
    "category": "Every three months",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 4.2
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 60
  },
  {
    "category": "Every six months",
    "values": 75
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "On extraordinary occasions",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every two months",
    "values": 30
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 1.7
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 350
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 1000
  },
  {
    "category": "Every fifteen days",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 8.4
  },
  {
    "category": "Every six months",
    "values": 5.1
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 5
  },
  {
    "category": "Every fifteen days",
    "values": 300
  },
  {
    "category": "Every week or less",
    "values": 600
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 500
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Every week or less",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 75
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 60
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Every three months",
    "values": 30
  },
  {
    "category": "Once a year",
    "values": 70
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Other",
    "values": 20
  },
  {
    "category": "Each month",
    "values": 0.1
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 13.2
  },
  {
    "category": "Each month",
    "values": 2.5
  },
  {
    "category": "Each month",
    "values": 91.3
  },
  {
    "category": "Every six months",
    "values": 5.1
  },
  {
    "category": "Every three months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 35.5
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 16.8
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 1000
  },
  {
    "category": "Each month",
    "values": 4.2
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Every two months",
    "values": 16.9
  },
  {
    "category": "Every fifteen days",
    "values": 118.3
  },
  {
    "category": "Each month",
    "values": 84.5
  },
  {
    "category": "Each month",
    "values": 230
  },
  {
    "category": "Every six months",
    "values": 120
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 300
  },
  {
    "category": "On extraordinary occasions",
    "values": 250
  },
  {
    "category": "Every fifteen days",
    "values": 25.2
  },
  {
    "category": "Every week or less",
    "values": 1000
  },
  {
    "category": "Every six months",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 62.5
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "On extraordinary occasions",
    "values": 11.8
  },
  {
    "category": "Every fifteen days",
    "values": 600
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "On extraordinary occasions",
    "values": 6.3
  },
  {
    "category": "Every week or less",
    "values": 135.2
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Every two months",
    "values": 5
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 16.9
  },
  {
    "category": "Every three months",
    "values": 3.4
  },
  {
    "category": "Every fifteen days",
    "values": 1000
  },
  {
    "category": "Every fifteen days",
    "values": 400
  },
  {
    "category": "On extraordinary occasions",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 6.3
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 350
  },
  {
    "category": "Each month",
    "values": 800
  },
  {
    "category": "Each month",
    "values": 473.2
  },
  {
    "category": "Each month",
    "values": 169
  },
  {
    "category": "Every six months",
    "values": 11.8
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "On extraordinary occasions",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 1014
  },
  {
    "category": "Other",
    "values": 8.5
  },
  {
    "category": "Each month",
    "values": 101.4
  },
  {
    "category": "Every fifteen days",
    "values": 300
  },
  {
    "category": "Every three months",
    "values": 600
  },
  {
    "category": "Each month",
    "values": 350
  },
  {
    "category": "Every fifteen days",
    "values": 150
  },
  {
    "category": "On extraordinary occasions",
    "values": 35.5
  },
  {
    "category": "Each month",
    "values": 59.2
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Once a year",
    "values": 12.7
  },
  {
    "category": "Every six months",
    "values": 25.4
  },
  {
    "category": "Every fifteen days",
    "values": 0.2
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Once a year",
    "values": 2.4
  },
  {
    "category": "Each month",
    "values": 2.4
  },
  {
    "category": "Every six months",
    "values": 2
  },
  {
    "category": "Each month",
    "values": 10.1
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 25
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 30
  },
  {
    "category": "Each month",
    "values": 10.1
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Other",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Every six months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Once a year",
    "values": 125
  },
  {
    "category": "Every two months",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every fifteen days",
    "values": 4
  },
  {
    "category": "Each month",
    "values": 4
  },
  {
    "category": "Every six months",
    "values": 3.4
  },
  {
    "category": "Every fifteen days",
    "values": 11.8
  },
  {
    "category": "Every fifteen days",
    "values": 8.4
  },
  {
    "category": "Once a year",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 38.9
  },
  {
    "category": "Other",
    "values": 8.5
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 400
  },
  {
    "category": "Every fifteen days",
    "values": 13.4
  },
  {
    "category": "Every three months",
    "values": 5
  },
  {
    "category": "Each month",
    "values": 5.1
  },
  {
    "category": "Each month",
    "values": 405.6
  },
  {
    "category": "Each month",
    "values": 84.5
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 202.8
  },
  {
    "category": "Every six months",
    "values": 12.7
  },
  {
    "category": "Once a year",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Every fifteen days",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Other",
    "values": 3.4
  },
  {
    "category": "Every two months",
    "values": 13.5
  },
  {
    "category": "Every fifteen days",
    "values": 500
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Each month",
    "values": 23.7
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Every six months",
    "values": 2
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 2
  },
  {
    "category": "Every week or less",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Every fifteen days",
    "values": 400
  },
  {
    "category": "Each month",
    "values": 4
  },
  {
    "category": "Each month",
    "values": 2.4
  },
  {
    "category": "Every two months",
    "values": 2.2
  },
  {
    "category": "Every six months",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Every three months",
    "values": 2.5
  },
  {
    "category": "Every three months",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 23.5
  },
  {
    "category": "Each month",
    "values": 10.1
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 200
  },
  {
    "category": "Other",
    "values": 200
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 1.5
  },
  {
    "category": "Every fifteen days",
    "values": 5
  },
  {
    "category": "Other",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 75
  },
  {
    "category": "Each month",
    "values": 70
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 250
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 200
  },
  {
    "category": "Once a year",
    "values": 2.5
  },
  {
    "category": "Every fifteen days",
    "values": 75
  },
  {
    "category": "Every three months",
    "values": 250
  },
  {
    "category": "Every week or less",
    "values": 50
  },
  {
    "category": "Every six months",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Every six months",
    "values": 1.2
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Once a year",
    "values": 3.4
  },
  {
    "category": "Every two months",
    "values": 5
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 12.7
  },
  {
    "category": "Every three months",
    "values": 12.6
  },
  {
    "category": "Every two months",
    "values": 500
  },
  {
    "category": "Each month",
    "values": 23.7
  },
  {
    "category": "Each month",
    "values": 6.3
  },
  {
    "category": "Every fifteen days",
    "values": 33.8
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 59.2
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 2
  },
  {
    "category": "Every three months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 23.7
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "On extraordinary occasions",
    "values": 54.1
  },
  {
    "category": "Every two months",
    "values": 13
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.4
  },
  {
    "category": "Every two months",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 1000
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 30
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 8.4
  },
  {
    "category": "Every six months",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 3.7
  },
  {
    "category": "Every six months",
    "values": 2
  },
  {
    "category": "Every six months",
    "values": 8.1
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 280
  },
  {
    "category": "Every two months",
    "values": 40
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 500
  },
  {
    "category": "Each month",
    "values": 800
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 225
  },
  {
    "category": "Every six months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 300
  },
  {
    "category": "Every six months",
    "values": 90
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every week or less",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 5
  },
  {
    "category": "Each month",
    "values": 16.8
  },
  {
    "category": "Every three months",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Every week or less",
    "values": 3.4
  },
  {
    "category": "Every fifteen days",
    "values": 11.8
  },
  {
    "category": "Every three months",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 42.3
  },
  {
    "category": "Every three months",
    "values": 11.8
  },
  {
    "category": "Every three months",
    "values": 20.3
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 1000
  },
  {
    "category": "Once a year",
    "values": 300
  },
  {
    "category": "Every week or less",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Every two months",
    "values": 11.8
  },
  {
    "category": "Every three months",
    "values": 8.5
  },
  {
    "category": "Every two months",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "On extraordinary occasions",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 9.3
  },
  {
    "category": "Every three months",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Every six months",
    "values": 12.7
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Every two months",
    "values": 5.1
  },
  {
    "category": "Each month",
    "values": 13.5
  },
  {
    "category": "Each month",
    "values": 5
  },
  {
    "category": "Every fifteen days",
    "values": 5
  },
  {
    "category": "Each month",
    "values": 3.7
  },
  {
    "category": "Every three months",
    "values": 8.1
  },
  {
    "category": "Every fifteen days",
    "values": 16.8
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Other",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 150
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Every week or less",
    "values": 150
  },
  {
    "category": "On extraordinary occasions",
    "values": 60
  },
  {
    "category": "Other",
    "values": 125
  },
  {
    "category": "On extraordinary occasions",
    "values": 60
  },
  {
    "category": "Once a year",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 120
  },
  {
    "category": "Each month",
    "values": 8.4
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Every six months",
    "values": 250
  },
  {
    "category": "Every six months",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 60
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "On extraordinary occasions",
    "values": 150
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 75
  },
  {
    "category": "Each month",
    "values": 350
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 160
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 25
  },
  {
    "category": "Every two months",
    "values": 75
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Once a year",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 5000
  },
  {
    "category": "Each month",
    "values": 7.7
  },
  {
    "category": "Every three months",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 1000
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Every three months",
    "values": 4.2
  },
  {
    "category": "Every two months",
    "values": 2
  },
  {
    "category": "Every week or less",
    "values": 2
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Every two months",
    "values": 42.3
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Every two months",
    "values": 23.7
  },
  {
    "category": "Every fifteen days",
    "values": 67.6
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Every three months",
    "values": 16.9
  },
  {
    "category": "Every six months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 25.4
  },
  {
    "category": "On extraordinary occasions",
    "values": 5.1
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Every fifteen days",
    "values": 6.1
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Every two months",
    "values": 16.9
  },
  {
    "category": "Once a year",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 13.5
  },
  {
    "category": "Every two months",
    "values": 2
  },
  {
    "category": "Other",
    "values": 2.7
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 60
  },
  {
    "category": "Every three months",
    "values": 30
  },
  {
    "category": "Every three months",
    "values": 80
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Once a year",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every three months",
    "values": 150
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "On extraordinary occasions",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Every fifteen days",
    "values": 400
  },
  {
    "category": "Every two months",
    "values": 60
  },
  {
    "category": "Every fifteen days",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Every fifteen days",
    "values": 600
  },
  {
    "category": "Every two months",
    "values": 200
  },
  {
    "category": "Every six months",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 20
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 250
  },
  {
    "category": "Every two months",
    "values": 30
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Every six months",
    "values": 60
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 500
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Every fifteen days",
    "values": 120
  },
  {
    "category": "Every six months",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every two months",
    "values": 75
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 300
  },
  {
    "category": "Other",
    "values": 60
  },
  {
    "category": "On extraordinary occasions",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 40
  },
  {
    "category": "Every three months",
    "values": 100
  },
  {
    "category": "Every week or less",
    "values": 16.8
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Every six months",
    "values": 12.7
  },
  {
    "category": "Every two months",
    "values": 5.1
  },
  {
    "category": "Every three months",
    "values": 50
  },
  {
    "category": "Every fifteen days",
    "values": 300
  },
  {
    "category": "Every fifteen days",
    "values": 20.3
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Each month",
    "values": 42.3
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 169
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Each month",
    "values": 6.7
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.4
  },
  {
    "category": "Every six months",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 20.3
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 16.9
  },
  {
    "category": "Every six months",
    "values": 6.8
  },
  {
    "category": "Every six months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 8.5
  },
  {
    "category": "Once a year",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 12.3
  },
  {
    "category": "Every two months",
    "values": 35.5
  },
  {
    "category": "Every fifteen days",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 6.8
  },
  {
    "category": "Every two months",
    "values": 100
  },
  {
    "category": "Every week or less",
    "values": 3.4
  },
  {
    "category": "Other",
    "values": 3.4
  },
  {
    "category": "Once a year",
    "values": 100
  },
  {
    "category": "Each month",
    "values": 2000
  },
  {
    "category": "On extraordinary occasions",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every six months",
    "values": 33.8
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Every six months",
    "values": 11.8
  },
  {
    "category": "Every three months",
    "values": 190.1
  },
  {
    "category": "Each month",
    "values": 33.8
  },
  {
    "category": "Every six months",
    "values": 67.6
  },
  {
    "category": "Every three months",
    "values": 11.8
  },
  {
    "category": "Once a year",
    "values": 16.9
  },
  {
    "category": "Each month",
    "values": 59.2
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.7
  },
  {
    "category": "Every three months",
    "values": 33.8
  },
  {
    "category": "Once a year",
    "values": 8.5
  },
  {
    "category": "Each month",
    "values": 150
  },
  {
    "category": "On extraordinary occasions",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 2000
  },
  {
    "category": "Every two months",
    "values": 3
  },
  {
    "category": "Each month",
    "values": 5
  },
  {
    "category": "Every three months",
    "values": 5.1
  },
  {
    "category": "Every three months",
    "values": 6.8
  },
  {
    "category": "Every fifteen days",
    "values": 50.7
  },
  {
    "category": "Each month",
    "values": 8.5
  },
  {
    "category": "Each month",
    "values": 1200
  },
  {
    "category": "Each month",
    "values": 59.2
  },
  {
    "category": "Each month",
    "values": 59.2
  },
  {
    "category": "Each month",
    "values": 22
  },
  {
    "category": "Every two months",
    "values": 5.1
  },
  {
    "category": "Every two months",
    "values": 6.8
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Every fifteen days",
    "values": 67.6
  },
  {
    "category": "Each month",
    "values": 84.5
  },
  {
    "category": "Every three months",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 200
  },
  {
    "category": "Every three months",
    "values": 200
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Once a year",
    "values": 13.2
  },
  {
    "category": "Other",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 25.4
  },
  {
    "category": "Once a year",
    "values": 8.5
  },
  {
    "category": "Every two months",
    "values": 33.8
  },
  {
    "category": "Every fifteen days",
    "values": 25.4
  },
  {
    "category": "Each month",
    "values": 42.3
  },
  {
    "category": "Every two months",
    "values": 5.9
  },
  {
    "category": "Each month",
    "values": 7.4
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "Each month",
    "values": 20.2
  },
  {
    "category": "Each month",
    "values": 3.4
  },
  {
    "category": "Every six months",
    "values": 40
  },
  {
    "category": "Each month",
    "values": 50.7
  },
  {
    "category": "Every fifteen days",
    "values": 23.7
  },
  {
    "category": "Every fifteen days",
    "values": 33.8
  },
  {
    "category": "Every three months",
    "values": 10.1
  },
  {
    "category": "Every three months",
    "values": 11.8
  },
  {
    "category": "Every two months",
    "values": 2500
  },
  {
    "category": "Every two months",
    "values": 25.4
  },
  {
    "category": "Every three months",
    "values": 59.2
  },
  {
    "category": "Every three months",
    "values": 11.8
  },
  {
    "category": "Each month",
    "values": 2.4
  },
  {
    "category": "Each month",
    "values": 11.8
  },
  {
    "category": "Every six months",
    "values": 12.7
  },
  {
    "category": "Every two months",
    "values": 11.8
  },
  {
    "category": "Each month",
    "values": 12.7
  },
  {
    "category": "Every week or less",
    "values": 1.7
  },
  {
    "category": "Each month",
    "values": 50
  },
  {
    "category": "On extraordinary occasions",
    "values": 3.9
  },
  {
    "category": "Each month",
    "values": 2.5
  },
  {
    "category": "Every two months",
    "values": 6.7
  },
  {
    "category": "Every fifteen days",
    "values": 250
  },
  {
    "category": "Once a year",
    "values": 50
  },
  {
    "category": "Every fifteen days",
    "values": 75
  },
  {
    "category": "Every two months",
    "values": 150
  },
  {
    "category": "Each month",
    "values": 100
  },
  {
    "category": "Every fifteen days",
    "values": 23.7
  },
  {
    "category": "Every two months",
    "values": 23.7
  }
 ]