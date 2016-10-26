// ArrestedDevelopment

function arrestedDevelopment() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Arrested Development').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#e2f279',
        data: [
        
          {
            x:       1,
            y:       8.3,
            imdb_id: '0515236',
            id:      's01e01',
            title:   $('<div/>').html('Pilot').text(),
            rating:  '8.3',
            votes:   '1863'
          },
        
          {
            x:       2,
            y:       8.6,
            imdb_id: '0515256',
            id:      's01e02',
            title:   $('<div/>').html('Top Banana').text(),
            rating:  '8.6',
            votes:   '1609'
          },
        
          {
            x:       3,
            y:       8.3,
            imdb_id: '0515212',
            id:      's01e03',
            title:   $('<div/>').html('Bringing Up Buster').text(),
            rating:  '8.3',
            votes:   '1473'
          },
        
          {
            x:       4,
            y:       8.5,
            imdb_id: '0515223',
            id:      's01e04',
            title:   $('<div/>').html('Key Decisions').text(),
            rating:  '8.5',
            votes:   '1407'
          },
        
          {
            x:       5,
            y:       8.4,
            imdb_id: '0515214',
            id:      's01e05',
            title:   $('<div/>').html('Charity Drive').text(),
            rating:  '8.4',
            votes:   '1336'
          },
        
          {
            x:       6,
            y:       8.2,
            imdb_id: '0515257',
            id:      's01e06',
            title:   $('<div/>').html('Visiting Ours').text(),
            rating:  '8.2',
            votes:   '1294'
          },
        
          {
            x:       7,
            y:       8.2,
            imdb_id: '0515221',
            id:      's01e07',
            title:   $('<div/>').html('In God We Trust').text(),
            rating:  '8.2',
            votes:   '1264'
          },
        
          {
            x:       8,
            y:       8.2,
            imdb_id: '0515231',
            id:      's01e08',
            title:   $('<div/>').html('My Mother the Car').text(),
            rating:  '8.2',
            votes:   '1253'
          },
        
          {
            x:       9,
            y:       8.5,
            imdb_id: '0515247',
            id:      's01e09',
            title:   $('<div/>').html('Storming the Castle').text(),
            rating:  '8.5',
            votes:   '1228'
          },
        
          {
            x:       10,
            y:       9.2,
            imdb_id: '0515235',
            id:      's01e10',
            title:   $('<div/>').html('Pier Pressure').text(),
            rating:  '9.2',
            votes:   '1586'
          },
        
          {
            x:       11,
            y:       8.4,
            imdb_id: '0515238',
            id:      's01e11',
            title:   $('<div/>').html('Public Relations').text(),
            rating:  '8.4',
            votes:   '1232'
          },
        
          {
            x:       12,
            y:       8.5,
            imdb_id: '0515226',
            id:      's01e12',
            title:   $('<div/>').html('Marta Complex').text(),
            rating:  '8.5',
            votes:   '1197'
          },
        
          {
            x:       13,
            y:       8.5,
            imdb_id: '0515210',
            id:      's01e13',
            title:   $('<div/>').html('Beef Consomme').text(),
            rating:  '8.5',
            votes:   '1185'
          },
        
          {
            x:       14,
            y:       8.7,
            imdb_id: '0515244',
            id:      's01e14',
            title:   $('<div/>').html('Shock and Aww').text(),
            rating:  '8.7',
            votes:   '1219'
          },
        
          {
            x:       15,
            y:       8.4,
            imdb_id: '0515246',
            id:      's01e15',
            title:   $('<div/>').html('Staff Infection').text(),
            rating:  '8.4',
            votes:   '1143'
          },
        
          {
            x:       16,
            y:       8.6,
            imdb_id: '0515208',
            id:      's01e16',
            title:   $('<div/>').html('Altar Egos').text(),
            rating:  '8.6',
            votes:   '1157'
          },
        
          {
            x:       17,
            y:       8.8,
            imdb_id: '0515222',
            id:      's01e17',
            title:   $('<div/>').html('Justice Is Blind').text(),
            rating:  '8.8',
            votes:   '1182'
          },
        
          {
            x:       18,
            y:       8.5,
            imdb_id: '0515228',
            id:      's01e18',
            title:   $('<div/>').html('Missing Kitty').text(),
            rating:  '8.5',
            votes:   '1108'
          },
        
          {
            x:       19,
            y:       8.3,
            imdb_id: '0515211',
            id:      's01e19',
            title:   $('<div/>').html('Best Man for the Gob').text(),
            rating:  '8.3',
            votes:   '1092'
          },
        
          {
            x:       20,
            y:       8.2,
            imdb_id: '0515258',
            id:      's01e20',
            title:   $('<div/>').html('Whistler&#39;s Mother').text(),
            rating:  '8.2',
            votes:   '1083'
          },
        
          {
            x:       21,
            y:       8.7,
            imdb_id: '0515232',
            id:      's01e21',
            title:   $('<div/>').html('Not Without My Daughter').text(),
            rating:  '8.7',
            votes:   '1103'
          },
        
          {
            x:       22,
            y:       8.9,
            imdb_id: '0515224',
            id:      's01e22',
            title:   $('<div/>').html('Let &#39;Em Eat Cake').text(),
            rating:  '8.9',
            votes:   '1136'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#de79f2',
        data: [
        
          {
            x:       23,
            y:       8.8,
            imdb_id: '0515253',
            id:      's02e01',
            title:   $('<div/>').html('The One Where Michael Leaves').text(),
            rating:  '8.8',
            votes:   '1092'
          },
        
          {
            x:       24,
            y:       8.7,
            imdb_id: '0515254',
            id:      's02e02',
            title:   $('<div/>').html('The One Where They Build a House').text(),
            rating:  '8.7',
            votes:   '1105'
          },
        
          {
            x:       25,
            y:       8.9,
            imdb_id: '0515209',
            id:      's02e03',
            title:   $('<div/>').html('Amigos').text(),
            rating:  '8.9',
            votes:   '1147'
          },
        
          {
            x:       26,
            y:       9.1,
            imdb_id: '0515219',
            id:      's02e04',
            title:   $('<div/>').html('Good Grief!').text(),
            rating:  '9.1',
            votes:   '1268'
          },
        
          {
            x:       27,
            y:       8.7,
            imdb_id: '0515243',
            id:      's02e05',
            title:   $('<div/>').html('Sad Sack').text(),
            rating:  '8.7',
            votes:   '1034'
          },
        
          {
            x:       28,
            y:       9.1,
            imdb_id: '0515207',
            id:      's02e06',
            title:   $('<div/>').html('Afternoon Delight').text(),
            rating:  '9.1',
            votes:   '1286'
          },
        
          {
            x:       29,
            y:       8.3,
            imdb_id: '0515248',
            id:      's02e07',
            title:   $('<div/>').html('Switch Hitter').text(),
            rating:  '8.3',
            votes:   '1009'
          },
        
          {
            x:       30,
            y:       8.2,
            imdb_id: '0515239',
            id:      's02e08',
            title:   $('<div/>').html('Queen for a Day').text(),
            rating:  '8.2',
            votes:   '975'
          },
        
          {
            x:       31,
            y:       8.3,
            imdb_id: '0515213',
            id:      's02e09',
            title:   $('<div/>').html('Burning Love').text(),
            rating:  '8.3',
            votes:   '993'
          },
        
          {
            x:       32,
            y:       8.5,
            imdb_id: '0515240',
            id:      's02e10',
            title:   $('<div/>').html('Ready, Aim, Marry Me').text(),
            rating:  '8.5',
            votes:   '1058'
          },
        
          {
            x:       33,
            y:       8.5,
            imdb_id: '0515234',
            id:      's02e11',
            title:   $('<div/>').html('Out on a Limb').text(),
            rating:  '8.5',
            votes:   '974'
          },
        
          {
            x:       34,
            y:       8.9,
            imdb_id: '0515220',
            id:      's02e12',
            title:   $('<div/>').html('Hand to God').text(),
            rating:  '8.9',
            votes:   '1003'
          },
        
          {
            x:       35,
            y:       8.8,
            imdb_id: '0515229',
            id:      's02e13',
            title:   $('<div/>').html('Motherboy XXX').text(),
            rating:  '8.8',
            votes:   '1052'
          },
        
          {
            x:       36,
            y:       8.7,
            imdb_id: '0515251',
            id:      's02e14',
            title:   $('<div/>').html('The Immaculate Election').text(),
            rating:  '8.7',
            votes:   '1009'
          },
        
          {
            x:       37,
            y:       8.9,
            imdb_id: '0515255',
            id:      's02e15',
            title:   $('<div/>').html('Sword of Destiny').text(),
            rating:  '8.9',
            votes:   '1072'
          },
        
          {
            x:       38,
            y:       9.1,
            imdb_id: '0515227',
            id:      's02e16',
            title:   $('<div/>').html('Meat the Veals').text(),
            rating:  '9.1',
            votes:   '1186'
          },
        
          {
            x:       39,
            y:       8.7,
            imdb_id: '0515245',
            id:      's02e17',
            title:   $('<div/>').html('Spring Breakout').text(),
            rating:  '8.7',
            votes:   '986'
          },
        
          {
            x:       40,
            y:       9.0,
            imdb_id: '0515241',
            id:      's02e18',
            title:   $('<div/>').html('Righteous Brothers').text(),
            rating:  '9.0',
            votes:   '1054'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#79f2bb',
        data: [
        
          {
            x:       41,
            y:       8.7,
            imdb_id: '0515250',
            id:      's03e01',
            title:   $('<div/>').html('The Cabin Show').text(),
            rating:  '8.7',
            votes:   '998'
          },
        
          {
            x:       42,
            y:       8.5,
            imdb_id: '0515249',
            id:      's03e02',
            title:   $('<div/>').html('For British Eyes Only').text(),
            rating:  '8.5',
            votes:   '1004'
          },
        
          {
            x:       43,
            y:       8.7,
            imdb_id: '0515218',
            id:      's03e03',
            title:   $('<div/>').html('Forget Me Now').text(),
            rating:  '8.7',
            votes:   '996'
          },
        
          {
            x:       44,
            y:       8.4,
            imdb_id: '0515233',
            id:      's03e04',
            title:   $('<div/>').html('Notapusy').text(),
            rating:  '8.4',
            votes:   '1009'
          },
        
          {
            x:       45,
            y:       8.9,
            imdb_id: '0515230',
            id:      's03e05',
            title:   $('<div/>').html('Mr. F').text(),
            rating:  '8.9',
            votes:   '1099'
          },
        
          {
            x:       46,
            y:       8.8,
            imdb_id: '0515252',
            id:      's03e06',
            title:   $('<div/>').html('The Ocean Walker').text(),
            rating:  '8.8',
            votes:   '999'
          },
        
          {
            x:       47,
            y:       8.2,
            imdb_id: '0515237',
            id:      's03e07',
            title:   $('<div/>').html('Prison Break-In').text(),
            rating:  '8.2',
            votes:   '908'
          },
        
          {
            x:       48,
            y:       8.9,
            imdb_id: '0515225',
            id:      's03e08',
            title:   $('<div/>').html('Making a Stand').text(),
            rating:  '8.9',
            votes:   '991'
          },
        
          {
            x:       49,
            y:       8.9,
            imdb_id: '0515242',
            id:      's03e09',
            title:   $('<div/>').html('S.O.B.s').text(),
            rating:  '8.9',
            votes:   '1077'
          },
        
          {
            x:       50,
            y:       8.7,
            imdb_id: '0515216',
            id:      's03e10',
            title:   $('<div/>').html('Fakin&#39; It').text(),
            rating:  '8.7',
            votes:   '945'
          },
        
          {
            x:       51,
            y:       8.8,
            imdb_id: '0515217',
            id:      's03e11',
            title:   $('<div/>').html('Family Ties').text(),
            rating:  '8.8',
            votes:   '951'
          },
        
          {
            x:       52,
            y:       9.0,
            imdb_id: '0515215',
            id:      's03e12',
            title:   $('<div/>').html('Exit Strategy').text(),
            rating:  '9.0',
            votes:   '1006'
          },
        
          {
            x:       53,
            y:       9.3,
            imdb_id: '0757386',
            id:      's03e13',
            title:   $('<div/>').html('Development Arrested').text(),
            rating:  '9.3',
            votes:   '1435'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 4',
        color: '#f29779',
        data: [
        
          {
            x:       54,
            y:       7.8,
            imdb_id: '2128813',
            id:      's04e01',
            title:   $('<div/>').html('Flight of the Phoenix').text(),
            rating:  '7.8',
            votes:   '1319'
          },
        
          {
            x:       55,
            y:       7.1,
            imdb_id: '2128815',
            id:      's04e02',
            title:   $('<div/>').html('Borderline Personalities').text(),
            rating:  '7.1',
            votes:   '981'
          },
        
          {
            x:       56,
            y:       7.1,
            imdb_id: '2128816',
            id:      's04e03',
            title:   $('<div/>').html('Indian Takers').text(),
            rating:  '7.1',
            votes:   '924'
          },
        
          {
            x:       57,
            y:       8.0,
            imdb_id: '2128817',
            id:      's04e04',
            title:   $('<div/>').html('The B. Team').text(),
            rating:  '8.0',
            votes:   '865'
          },
        
          {
            x:       58,
            y:       8.0,
            imdb_id: '2128818',
            id:      's04e05',
            title:   $('<div/>').html('A New Start').text(),
            rating:  '8.0',
            votes:   '848'
          },
        
          {
            x:       59,
            y:       7.4,
            imdb_id: '2128819',
            id:      's04e06',
            title:   $('<div/>').html('Double Crossers').text(),
            rating:  '7.4',
            votes:   '754'
          },
        
          {
            x:       60,
            y:       8.6,
            imdb_id: '2128820',
            id:      's04e07',
            title:   $('<div/>').html('Colony Collapse').text(),
            rating:  '8.6',
            votes:   '888'
          },
        
          {
            x:       61,
            y:       8.0,
            imdb_id: '2128821',
            id:      's04e08',
            title:   $('<div/>').html('Red Hairing').text(),
            rating:  '8.0',
            votes:   '744'
          },
        
          {
            x:       62,
            y:       8.1,
            imdb_id: '2128822',
            id:      's04e09',
            title:   $('<div/>').html('Smashed').text(),
            rating:  '8.1',
            votes:   '728'
          },
        
          {
            x:       63,
            y:       8.0,
            imdb_id: '2128814',
            id:      's04e10',
            title:   $('<div/>').html('Queen B.').text(),
            rating:  '8.0',
            votes:   '725'
          },
        
          {
            x:       64,
            y:       8.8,
            imdb_id: '2495824',
            id:      's04e11',
            title:   $('<div/>').html('A New Attitude').text(),
            rating:  '8.8',
            votes:   '822'
          },
        
          {
            x:       65,
            y:       8.5,
            imdb_id: '2604336',
            id:      's04e12',
            title:   $('<div/>').html('Señoritis').text(),
            rating:  '8.5',
            votes:   '727'
          },
        
          {
            x:       66,
            y:       8.5,
            imdb_id: '2604334',
            id:      's04e13',
            title:   $('<div/>').html('It Gets Better').text(),
            rating:  '8.5',
            votes:   '727'
          },
        
          {
            x:       67,
            y:       8.5,
            imdb_id: '2604338',
            id:      's04e14',
            title:   $('<div/>').html('Off the Hook').text(),
            rating:  '8.5',
            votes:   '736'
          },
        
          {
            x:       68,
            y:       8.5,
            imdb_id: '2826310',
            id:      's04e15',
            title:   $('<div/>').html('Blockheads').text(),
            rating:  '8.5',
            votes:   '778'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// BloodLine
function bloodLine() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Bloodline').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f29779',
        data: [
        
          {
            x:       1,
            y:       8.0,
            imdb_id: '3630196',
            id:      's01e01',
            title:   $('<div/>').html('Part 1').text(),
            rating:  '8.0',
            votes:   '1010'
          },
        
          {
            x:       2,
            y:       8.1,
            imdb_id: '3775066',
            id:      's01e02',
            title:   $('<div/>').html('Part 2').text(),
            rating:  '8.1',
            votes:   '778'
          },
        
          {
            x:       3,
            y:       8.0,
            imdb_id: '3766850',
            id:      's01e03',
            title:   $('<div/>').html('Part 3').text(),
            rating:  '8.0',
            votes:   '701'
          },
        
          {
            x:       4,
            y:       8.0,
            imdb_id: '3815714',
            id:      's01e04',
            title:   $('<div/>').html('Part 4').text(),
            rating:  '8.0',
            votes:   '654'
          },
        
          {
            x:       5,
            y:       8.2,
            imdb_id: '3815716',
            id:      's01e05',
            title:   $('<div/>').html('Part 5').text(),
            rating:  '8.2',
            votes:   '631'
          },
        
          {
            x:       6,
            y:       8.2,
            imdb_id: '3860828',
            id:      's01e06',
            title:   $('<div/>').html('Part 6').text(),
            rating:  '8.2',
            votes:   '607'
          },
        
          {
            x:       7,
            y:       8.2,
            imdb_id: '3955118',
            id:      's01e07',
            title:   $('<div/>').html('Part 7').text(),
            rating:  '8.2',
            votes:   '576'
          },
        
          {
            x:       8,
            y:       8.4,
            imdb_id: '3970928',
            id:      's01e08',
            title:   $('<div/>').html('Part 8').text(),
            rating:  '8.4',
            votes:   '579'
          },
        
          {
            x:       9,
            y:       8.5,
            imdb_id: '3993250',
            id:      's01e09',
            title:   $('<div/>').html('Part 9').text(),
            rating:  '8.5',
            votes:   '564'
          },
        
          {
            x:       10,
            y:       8.8,
            imdb_id: '4025946',
            id:      's01e10',
            title:   $('<div/>').html('Part 10').text(),
            rating:  '8.8',
            votes:   '612'
          },
        
          {
            x:       11,
            y:       9.2,
            imdb_id: '4037144',
            id:      's01e11',
            title:   $('<div/>').html('Part 11').text(),
            rating:  '9.2',
            votes:   '667'
          },
        
          {
            x:       12,
            y:       9.3,
            imdb_id: '4141318',
            id:      's01e12',
            title:   $('<div/>').html('Part 12').text(),
            rating:  '9.3',
            votes:   '750'
          },
        
          {
            x:       13,
            y:       9.1,
            imdb_id: '3946474',
            id:      's01e13',
            title:   $('<div/>').html('Part 13').text(),
            rating:  '9.1',
            votes:   '742'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#797df2',
        data: [
        
          {
            x:       14,
            y:       8.3,
            imdb_id: '4572004',
            id:      's02e01',
            title:   $('<div/>').html('Part 14').text(),
            rating:  '8.3',
            votes:   '423'
          },
        
          {
            x:       15,
            y:       8.2,
            imdb_id: '5043314',
            id:      's02e02',
            title:   $('<div/>').html('Part 15').text(),
            rating:  '8.2',
            votes:   '356'
          },
        
          {
            x:       16,
            y:       8.5,
            imdb_id: '5085504',
            id:      's02e03',
            title:   $('<div/>').html('Part 16').text(),
            rating:  '8.5',
            votes:   '337'
          },
        
          {
            x:       17,
            y:       8.8,
            imdb_id: '5090960',
            id:      's02e04',
            title:   $('<div/>').html('Part 17').text(),
            rating:  '8.8',
            votes:   '330'
          },
        
          {
            x:       18,
            y:       8.4,
            imdb_id: '5100630',
            id:      's02e05',
            title:   $('<div/>').html('Part 18').text(),
            rating:  '8.4',
            votes:   '289'
          },
        
          {
            x:       19,
            y:       8.8,
            imdb_id: '5273424',
            id:      's02e06',
            title:   $('<div/>').html('Part 19').text(),
            rating:  '8.8',
            votes:   '295'
          },
        
          {
            x:       20,
            y:       8.7,
            imdb_id: '5349008',
            id:      's02e07',
            title:   $('<div/>').html('Part 20').text(),
            rating:  '8.7',
            votes:   '290'
          },
        
          {
            x:       21,
            y:       9.0,
            imdb_id: '5437416',
            id:      's02e08',
            title:   $('<div/>').html('Part 21').text(),
            rating:  '9.0',
            votes:   '307'
          },
        
          {
            x:       22,
            y:       9.0,
            imdb_id: '5437448',
            id:      's02e09',
            title:   $('<div/>').html('Part 22').text(),
            rating:  '9.0',
            votes:   '314'
          },
        
          {
            x:       23,
            y:       9.4,
            imdb_id: '5480286',
            id:      's02e10',
            title:   $('<div/>').html('Part 23').text(),
            rating:  '9.4',
            votes:   '502'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// BoJack Horseman

function boJackHorseman() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('BoJack Horseman').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#81f279',
        data: [
        
          {
            x:       1,
            y:       7.2,
            imdb_id: '3957774',
            id:      's01e01',
            title:   $('<div/>').html('BoJack Horseman: The BoJack Horseman Story, Chapter One').text(),
            rating:  '7.2',
            votes:   '899'
          },
        
          {
            x:       2,
            y:       7.8,
            imdb_id: '3982374',
            id:      's01e02',
            title:   $('<div/>').html('BoJack Hates the Troops').text(),
            rating:  '7.8',
            votes:   '745'
          },
        
          {
            x:       3,
            y:       7.5,
            imdb_id: '3981116',
            id:      's01e03',
            title:   $('<div/>').html('Prickly Muffin').text(),
            rating:  '7.5',
            votes:   '661'
          },
        
          {
            x:       4,
            y:       7.6,
            imdb_id: '3980964',
            id:      's01e04',
            title:   $('<div/>').html('Zoës and Zeldas').text(),
            rating:  '7.6',
            votes:   '603'
          },
        
          {
            x:       5,
            y:       7.6,
            imdb_id: '3978916',
            id:      's01e05',
            title:   $('<div/>').html('Live Fast, Diane Nguyen').text(),
            rating:  '7.6',
            votes:   '576'
          },
        
          {
            x:       6,
            y:       8.1,
            imdb_id: '3978918',
            id:      's01e06',
            title:   $('<div/>').html('Our A-Story Is a &#39;D&#39; Story').text(),
            rating:  '8.1',
            votes:   '580'
          },
        
          {
            x:       7,
            y:       8.1,
            imdb_id: '3981398',
            id:      's01e07',
            title:   $('<div/>').html('Say Anything').text(),
            rating:  '8.1',
            votes:   '599'
          },
        
          {
            x:       8,
            y:       8.6,
            imdb_id: '3978922',
            id:      's01e08',
            title:   $('<div/>').html('The Telescope').text(),
            rating:  '8.6',
            votes:   '629'
          },
        
          {
            x:       9,
            y:       8.1,
            imdb_id: '3978928',
            id:      's01e09',
            title:   $('<div/>').html('Horse Majeure').text(),
            rating:  '8.1',
            votes:   '537'
          },
        
          {
            x:       10,
            y:       8.0,
            imdb_id: '3978930',
            id:      's01e10',
            title:   $('<div/>').html('One Trick Pony').text(),
            rating:  '8.0',
            votes:   '542'
          },
        
          {
            x:       11,
            y:       9.2,
            imdb_id: '3978932',
            id:      's01e11',
            title:   $('<div/>').html('Downer Ending').text(),
            rating:  '9.2',
            votes:   '874'
          },
        
          {
            x:       12,
            y:       8.6,
            imdb_id: '3978934',
            id:      's01e12',
            title:   $('<div/>').html('Later').text(),
            rating:  '8.6',
            votes:   '617'
          },
        
          {
            x:       13,
            y:       7.3,
            imdb_id: '4294938',
            id:      's01e13',
            title:   $('<div/>').html('BoJack Horseman Christmas Special: Sabrina&#39;s Christmas Wish').text(),
            rating:  '7.3',
            votes:   '445'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#f279a4',
        data: [
        
          {
            x:       14,
            y:       8.2,
            imdb_id: '4311472',
            id:      's02e01',
            title:   $('<div/>').html('Brand New Couch').text(),
            rating:  '8.2',
            votes:   '571'
          },
        
          {
            x:       15,
            y:       8.1,
            imdb_id: '4835722',
            id:      's02e02',
            title:   $('<div/>').html('Yesterdayland').text(),
            rating:  '8.1',
            votes:   '508'
          },
        
          {
            x:       16,
            y:       8.0,
            imdb_id: '4835724',
            id:      's02e03',
            title:   $('<div/>').html('Still Broken').text(),
            rating:  '8.0',
            votes:   '493'
          },
        
          {
            x:       17,
            y:       8.1,
            imdb_id: '4835730',
            id:      's02e04',
            title:   $('<div/>').html('After the Party').text(),
            rating:  '8.1',
            votes:   '484'
          },
        
          {
            x:       18,
            y:       8.1,
            imdb_id: '4835728',
            id:      's02e05',
            title:   $('<div/>').html('Chickens').text(),
            rating:  '8.1',
            votes:   '524'
          },
        
          {
            x:       19,
            y:       7.8,
            imdb_id: '4835732',
            id:      's02e06',
            title:   $('<div/>').html('Higher Love').text(),
            rating:  '7.8',
            votes:   '455'
          },
        
          {
            x:       20,
            y:       8.4,
            imdb_id: '4835738',
            id:      's02e07',
            title:   $('<div/>').html('Hank After Dark').text(),
            rating:  '8.4',
            votes:   '496'
          },
        
          {
            x:       21,
            y:       9.0,
            imdb_id: '4835736',
            id:      's02e08',
            title:   $('<div/>').html('Let&#39;s Find Out').text(),
            rating:  '9.0',
            votes:   '626'
          },
        
          {
            x:       22,
            y:       8.5,
            imdb_id: '4835740',
            id:      's02e09',
            title:   $('<div/>').html('The Shot').text(),
            rating:  '8.5',
            votes:   '476'
          },
        
          {
            x:       23,
            y:       8.7,
            imdb_id: '4835746',
            id:      's02e10',
            title:   $('<div/>').html('Yes And').text(),
            rating:  '8.7',
            votes:   '508'
          },
        
          {
            x:       24,
            y:       9.5,
            imdb_id: '4835748',
            id:      's02e11',
            title:   $('<div/>').html('Escape from L.A.').text(),
            rating:  '9.5',
            votes:   '886'
          },
        
          {
            x:       25,
            y:       8.8,
            imdb_id: '4835752',
            id:      's02e12',
            title:   $('<div/>').html('Out to Sea').text(),
            rating:  '8.8',
            votes:   '540'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#79c8f2',
        data: [
        
          {
            x:       26,
            y:       8.1,
            imdb_id: '4896050',
            id:      's03e01',
            title:   $('<div/>').html('Start Spreading the News').text(),
            rating:  '8.1',
            votes:   '423'
          },
        
          {
            x:       27,
            y:       8.4,
            imdb_id: '5218276',
            id:      's03e02',
            title:   $('<div/>').html('The BoJack Horseman Show').text(),
            rating:  '8.4',
            votes:   '444'
          },
        
          {
            x:       28,
            y:       7.6,
            imdb_id: '5218432',
            id:      's03e03',
            title:   $('<div/>').html('BoJack Kills').text(),
            rating:  '7.6',
            votes:   '394'
          },
        
          {
            x:       29,
            y:       9.6,
            imdb_id: '5218434',
            id:      's03e04',
            title:   $('<div/>').html('Fish Out of Water').text(),
            rating:  '9.6',
            votes:   '1304'
          },
        
          {
            x:       30,
            y:       8.4,
            imdb_id: '5218444',
            id:      's03e05',
            title:   $('<div/>').html('Love And/Or Marriage').text(),
            rating:  '8.4',
            votes:   '401'
          },
        
          {
            x:       31,
            y:       8.3,
            imdb_id: '5113952',
            id:      's03e06',
            title:   $('<div/>').html('Brrap Brrap Pew Pew').text(),
            rating:  '8.3',
            votes:   '430'
          },
        
          {
            x:       32,
            y:       8.5,
            imdb_id: '5218452',
            id:      's03e07',
            title:   $('<div/>').html('Stop the Presses').text(),
            rating:  '8.5',
            votes:   '380'
          },
        
          {
            x:       33,
            y:       8.1,
            imdb_id: '5218464',
            id:      's03e08',
            title:   $('<div/>').html('Old Acquaintance').text(),
            rating:  '8.1',
            votes:   '349'
          },
        
          {
            x:       34,
            y:       8.7,
            imdb_id: '5218468',
            id:      's03e09',
            title:   $('<div/>').html('Best Thing That Ever Happened').text(),
            rating:  '8.7',
            votes:   '389'
          },
        
          {
            x:       35,
            y:       9.0,
            imdb_id: '5218478',
            id:      's03e10',
            title:   $('<div/>').html('It&#39;s You').text(),
            rating:  '9.0',
            votes:   '411'
          },
        
          {
            x:       36,
            y:       9.6,
            imdb_id: '5218488',
            id:      's03e11',
            title:   $('<div/>').html('That&#39;s Too Much, Man!').text(),
            rating:  '9.6',
            votes:   '783'
          },
        
          {
            x:       37,
            y:       9.2,
            imdb_id: '5218494',
            id:      's03e12',
            title:   $('<div/>').html('That Went Well').text(),
            rating:  '9.2',
            votes:   '521'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Club de Cuervos
function clubDeCuervos() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Club de Cuervos').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f1f2',
        data: [
        
          {
            x:       1,
            y:       7.3,
            imdb_id: '4921876',
            id:      's01e01',
            title:   $('<div/>').html('Be a Captain').text(),
            rating:  '7.3',
            votes:   '82'
          },
        
          {
            x:       2,
            y:       7.3,
            imdb_id: '4935060',
            id:      's01e02',
            title:   $('<div/>').html('We Make Soap').text(),
            rating:  '7.3',
            votes:   '54'
          },
        
          {
            x:       3,
            y:       7.7,
            imdb_id: '4940510',
            id:      's01e03',
            title:   $('<div/>').html('Uniform Response').text(),
            rating:  '7.7',
            votes:   '48'
          },
        
          {
            x:       4,
            y:       7.9,
            imdb_id: '4940512',
            id:      's01e04',
            title:   $('<div/>').html('Slap').text(),
            rating:  '7.9',
            votes:   '47'
          },
        
          {
            x:       5,
            y:       7.7,
            imdb_id: '4940516',
            id:      's01e05',
            title:   $('<div/>').html('Barriers to Exit').text(),
            rating:  '7.7',
            votes:   '44'
          },
        
          {
            x:       6,
            y:       7.5,
            imdb_id: '4776384',
            id:      's01e06',
            title:   $('<div/>').html('Lucky to Play').text(),
            rating:  '7.5',
            votes:   '61'
          },
        
          {
            x:       7,
            y:       7.4,
            imdb_id: '4944054',
            id:      's01e07',
            title:   $('<div/>').html('Our Guggenheim').text(),
            rating:  '7.4',
            votes:   '45'
          },
        
          {
            x:       8,
            y:       7.5,
            imdb_id: '4932998',
            id:      's01e08',
            title:   $('<div/>').html('Aitor').text(),
            rating:  '7.5',
            votes:   '51'
          },
        
          {
            x:       9,
            y:       8.1,
            imdb_id: '4944060',
            id:      's01e09',
            title:   $('<div/>').html('Spanish Fever').text(),
            rating:  '8.1',
            votes:   '46'
          },
        
          {
            x:       10,
            y:       7.7,
            imdb_id: '4944062',
            id:      's01e10',
            title:   $('<div/>').html('New Dick in Town').text(),
            rating:  '7.7',
            votes:   '44'
          },
        
          {
            x:       11,
            y:       7.8,
            imdb_id: '4944064',
            id:      's01e11',
            title:   $('<div/>').html('Push').text(),
            rating:  '7.8',
            votes:   '42'
          },
        
          {
            x:       12,
            y:       8.3,
            imdb_id: '4944066',
            id:      's01e12',
            title:   $('<div/>').html('Happy Birthday Mr. President').text(),
            rating:  '8.3',
            votes:   '45'
          },
        
          {
            x:       13,
            y:       8.4,
            imdb_id: '4944070',
            id:      's01e13',
            title:   $('<div/>').html('Iglesias vs. Iglesias').text(),
            rating:  '8.4',
            votes:   '47'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// DareDevil
function dareDevil() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Daredevil').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f279a8',
        data: [
        
          {
            x:       1,
            y:       8.6,
            imdb_id: '3330796',
            id:      's01e01',
            title:   $('<div/>').html('Into the Ring').text(),
            rating:  '8.6',
            votes:   '7162'
          },
        
          {
            x:       2,
            y:       9.0,
            imdb_id: '3915096',
            id:      's01e02',
            title:   $('<div/>').html('Cut Man').text(),
            rating:  '9.0',
            votes:   '6631'
          },
        
          {
            x:       3,
            y:       8.5,
            imdb_id: '4000782',
            id:      's01e03',
            title:   $('<div/>').html('Rabbit in a Snowstorm').text(),
            rating:  '8.5',
            votes:   '5504'
          },
        
          {
            x:       4,
            y:       8.9,
            imdb_id: '4061068',
            id:      's01e04',
            title:   $('<div/>').html('In the Blood').text(),
            rating:  '8.9',
            votes:   '5324'
          },
        
          {
            x:       5,
            y:       8.9,
            imdb_id: '4061074',
            id:      's01e05',
            title:   $('<div/>').html('World on Fire').text(),
            rating:  '8.9',
            votes:   '5053'
          },
        
          {
            x:       6,
            y:       9.1,
            imdb_id: '4065594',
            id:      's01e06',
            title:   $('<div/>').html('Condemned').text(),
            rating:  '9.1',
            votes:   '5169'
          },
        
          {
            x:       7,
            y:       8.8,
            imdb_id: '4125416',
            id:      's01e07',
            title:   $('<div/>').html('Stick').text(),
            rating:  '8.8',
            votes:   '5031'
          },
        
          {
            x:       8,
            y:       9.1,
            imdb_id: '4125418',
            id:      's01e08',
            title:   $('<div/>').html('Shadows in the Glass').text(),
            rating:  '9.1',
            votes:   '4921'
          },
        
          {
            x:       9,
            y:       9.3,
            imdb_id: '4125420',
            id:      's01e09',
            title:   $('<div/>').html('Speak of the Devil').text(),
            rating:  '9.3',
            votes:   '5188'
          },
        
          {
            x:       10,
            y:       8.7,
            imdb_id: '4125422',
            id:      's01e10',
            title:   $('<div/>').html('Nelson v. Murdock').text(),
            rating:  '8.7',
            votes:   '4719'
          },
        
          {
            x:       11,
            y:       8.9,
            imdb_id: '4125426',
            id:      's01e11',
            title:   $('<div/>').html('The Path of the Righteous').text(),
            rating:  '8.9',
            votes:   '4633'
          },
        
          {
            x:       12,
            y:       8.8,
            imdb_id: '4125424',
            id:      's01e12',
            title:   $('<div/>').html('The Ones We Leave Behind').text(),
            rating:  '8.8',
            votes:   '4592'
          },
        
          {
            x:       13,
            y:       9.4,
            imdb_id: '4125428',
            id:      's01e13',
            title:   $('<div/>').html('Daredevil').text(),
            rating:  '9.4',
            votes:   '6416'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#79cbf2',
        data: [
        
          {
            x:       14,
            y:       9.0,
            imdb_id: '4625048',
            id:      's02e01',
            title:   $('<div/>').html('Bang').text(),
            rating:  '9.0',
            votes:   '5150'
          },
        
          {
            x:       15,
            y:       8.8,
            imdb_id: '4817432',
            id:      's02e02',
            title:   $('<div/>').html('Dogs to a Gunfight').text(),
            rating:  '8.8',
            votes:   '4320'
          },
        
          {
            x:       16,
            y:       9.5,
            imdb_id: '4935616',
            id:      's02e03',
            title:   $('<div/>').html('New York&#39;s Finest').text(),
            rating:  '9.5',
            votes:   '5527'
          },
        
          {
            x:       17,
            y:       9.5,
            imdb_id: '4947664',
            id:      's02e04',
            title:   $('<div/>').html('Penny and Dime').text(),
            rating:  '9.5',
            votes:   '5162'
          },
        
          {
            x:       18,
            y:       8.5,
            imdb_id: '4950308',
            id:      's02e05',
            title:   $('<div/>').html('Kinbaku').text(),
            rating:  '8.5',
            votes:   '3788'
          },
        
          {
            x:       19,
            y:       8.8,
            imdb_id: '4950312',
            id:      's02e06',
            title:   $('<div/>').html('Regrets Only').text(),
            rating:  '8.8',
            votes:   '3537'
          },
        
          {
            x:       20,
            y:       8.8,
            imdb_id: '4950310',
            id:      's02e07',
            title:   $('<div/>').html('Semper Fidelis').text(),
            rating:  '8.8',
            votes:   '3467'
          },
        
          {
            x:       21,
            y:       9.2,
            imdb_id: '4950326',
            id:      's02e08',
            title:   $('<div/>').html('Guilty as Sin').text(),
            rating:  '9.2',
            votes:   '3645'
          },
        
          {
            x:       22,
            y:       9.5,
            imdb_id: '4950314',
            id:      's02e09',
            title:   $('<div/>').html('Seven Minutes in Heaven').text(),
            rating:  '9.5',
            votes:   '4317'
          },
        
          {
            x:       23,
            y:       9.2,
            imdb_id: '4950318',
            id:      's02e10',
            title:   $('<div/>').html('The Man in the Box').text(),
            rating:  '9.2',
            votes:   '3505'
          },
        
          {
            x:       24,
            y:       9.0,
            imdb_id: '4950322',
            id:      's02e11',
            title:   $('<div/>').html('.380').text(),
            rating:  '9.0',
            votes:   '3340'
          },
        
          {
            x:       25,
            y:       9.1,
            imdb_id: '4950320',
            id:      's02e12',
            title:   $('<div/>').html('The Dark at the End of the Tunnel').text(),
            rating:  '9.1',
            votes:   '3433'
          },
        
          {
            x:       26,
            y:       9.3,
            imdb_id: '4950324',
            id:      's02e13',
            title:   $('<div/>').html('A Cold Day in Hell&#39;s Kitchen').text(),
            rating:  '9.3',
            votes:   '4506'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// F is for Family
function fIsForFamily() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('F is for Family').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#d179f2',
        data: [
        
          {
            x:       1,
            y:       7.6,
            imdb_id: '5218302',
            id:      's01e01',
            title:   $('<div/>').html('The Bleedin&#39; in Sweden').text(),
            rating:  '7.6',
            votes:   '341'
          },
        
          {
            x:       2,
            y:       7.9,
            imdb_id: '5276208',
            id:      's01e02',
            title:   $('<div/>').html('Saturday Bloody Saturday').text(),
            rating:  '7.9',
            votes:   '255'
          },
        
          {
            x:       3,
            y:       8.0,
            imdb_id: '5276214',
            id:      's01e03',
            title:   $('<div/>').html('The Trough').text(),
            rating:  '8.0',
            votes:   '223'
          },
        
          {
            x:       4,
            y:       8.0,
            imdb_id: '5276218',
            id:      's01e04',
            title:   $('<div/>').html('&#39;F&#39; Is for Halloween').text(),
            rating:  '8.0',
            votes:   '205'
          },
        
          {
            x:       5,
            y:       8.5,
            imdb_id: '5276222',
            id:      's01e05',
            title:   $('<div/>').html('Bill Murphy&#39;s Day Off').text(),
            rating:  '8.5',
            votes:   '220'
          },
        
          {
            x:       6,
            y:       8.6,
            imdb_id: '5276226',
            id:      's01e06',
            title:   $('<div/>').html('O Holy Moly Night').text(),
            rating:  '8.6',
            votes:   '212'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Flaked

function flaked() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Flaked').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79d9f2',
        data: [
        
          {
            x:       1,
            y:       7.0,
            imdb_id: '5020356',
            id:      's01e01',
            title:   $('<div/>').html('Westminster').text(),
            rating:  '7.0',
            votes:   '233'
          },
        
          {
            x:       2,
            y:       7.2,
            imdb_id: '5095002',
            id:      's01e02',
            title:   $('<div/>').html('Horizon').text(),
            rating:  '7.2',
            votes:   '180'
          },
        
          {
            x:       3,
            y:       7.5,
            imdb_id: '5095012',
            id:      's01e03',
            title:   $('<div/>').html('Rose').text(),
            rating:  '7.5',
            votes:   '160'
          },
        
          {
            x:       4,
            y:       7.8,
            imdb_id: '4998158',
            id:      's01e04',
            title:   $('<div/>').html('Palms').text(),
            rating:  '7.8',
            votes:   '162'
          },
        
          {
            x:       5,
            y:       7.9,
            imdb_id: '5083962',
            id:      's01e05',
            title:   $('<div/>').html('Electric').text(),
            rating:  '7.9',
            votes:   '156'
          },
        
          {
            x:       6,
            y:       8.7,
            imdb_id: '5063116',
            id:      's01e06',
            title:   $('<div/>').html('Shell').text(),
            rating:  '8.7',
            votes:   '188'
          },
        
          {
            x:       7,
            y:       7.8,
            imdb_id: '5083964',
            id:      's01e07',
            title:   $('<div/>').html('7th').text(),
            rating:  '7.8',
            votes:   '155'
          },
        
          {
            x:       8,
            y:       8.2,
            imdb_id: '5083966',
            id:      's01e08',
            title:   $('<div/>').html('Sunset').text(),
            rating:  '8.2',
            votes:   '148'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Fuller House
function fullerHouse() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Fuller House').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2c0',
        data: [
        
          {
            x:       1,
            y:       7.7,
            imdb_id: '4625398',
            id:      's01e01',
            title:   $('<div/>').html('Our Very First Show, Again').text(),
            rating:  '7.7',
            votes:   '771'
          },
        
          {
            x:       2,
            y:       7.5,
            imdb_id: '4662772',
            id:      's01e02',
            title:   $('<div/>').html('Moving Day').text(),
            rating:  '7.5',
            votes:   '482'
          },
        
          {
            x:       3,
            y:       7.9,
            imdb_id: '4662796',
            id:      's01e03',
            title:   $('<div/>').html('Funner House').text(),
            rating:  '7.9',
            votes:   '468'
          },
        
          {
            x:       4,
            y:       7.7,
            imdb_id: '4662788',
            id:      's01e04',
            title:   $('<div/>').html('The Not-So-Great Escape').text(),
            rating:  '7.7',
            votes:   '383'
          },
        
          {
            x:       5,
            y:       7.9,
            imdb_id: '4662794',
            id:      's01e05',
            title:   $('<div/>').html('Mad Max').text(),
            rating:  '7.9',
            votes:   '383'
          },
        
          {
            x:       6,
            y:       7.5,
            imdb_id: '4662786',
            id:      's01e06',
            title:   $('<div/>').html('The Legend of El Explosivo').text(),
            rating:  '7.5',
            votes:   '360'
          },
        
          {
            x:       7,
            y:       7.7,
            imdb_id: '4662802',
            id:      's01e07',
            title:   $('<div/>').html('Ramona&#39;s Not-So-Epic Party').text(),
            rating:  '7.7',
            votes:   '325'
          },
        
          {
            x:       8,
            y:       8.0,
            imdb_id: '4662800',
            id:      's01e08',
            title:   $('<div/>').html('Secrets, Lies and Firetrucks').text(),
            rating:  '8.0',
            votes:   '325'
          },
        
          {
            x:       9,
            y:       8.0,
            imdb_id: '4662798',
            id:      's01e09',
            title:   $('<div/>').html('War of the Roses').text(),
            rating:  '8.0',
            votes:   '319'
          },
        
          {
            x:       10,
            y:       8.0,
            imdb_id: '4662806',
            id:      's01e10',
            title:   $('<div/>').html('A Giant Leap').text(),
            rating:  '8.0',
            votes:   '319'
          },
        
          {
            x:       11,
            y:       7.9,
            imdb_id: '4662804',
            id:      's01e11',
            title:   $('<div/>').html('Partnerships in the Night').text(),
            rating:  '7.9',
            votes:   '302'
          },
        
          {
            x:       12,
            y:       7.9,
            imdb_id: '4662812',
            id:      's01e12',
            title:   $('<div/>').html('Save the Dates').text(),
            rating:  '7.9',
            votes:   '314'
          },
        
          {
            x:       13,
            y:       7.8,
            imdb_id: '4662810',
            id:      's01e13',
            title:   $('<div/>').html('Love Is in the Air').text(),
            rating:  '7.8',
            votes:   '323'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Grace and Frankie

function graceAndFrankie() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Grace and Frankie').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79c6f2',
        data: [
        
          {
            x:       1,
            y:       7.8,
            imdb_id: '3814438',
            id:      's01e01',
            title:   $('<div/>').html('The End').text(),
            rating:  '7.8',
            votes:   '463'
          },
        
          {
            x:       2,
            y:       7.7,
            imdb_id: '3897776',
            id:      's01e02',
            title:   $('<div/>').html('The Credit Cards').text(),
            rating:  '7.7',
            votes:   '350'
          },
        
          {
            x:       3,
            y:       8.0,
            imdb_id: '3814440',
            id:      's01e03',
            title:   $('<div/>').html('The Dinner').text(),
            rating:  '8.0',
            votes:   '330'
          },
        
          {
            x:       4,
            y:       8.2,
            imdb_id: '4017394',
            id:      's01e04',
            title:   $('<div/>').html('The Funeral').text(),
            rating:  '8.2',
            votes:   '324'
          },
        
          {
            x:       5,
            y:       8.2,
            imdb_id: '4128296',
            id:      's01e05',
            title:   $('<div/>').html('The Fall').text(),
            rating:  '8.2',
            votes:   '327'
          },
        
          {
            x:       6,
            y:       8.0,
            imdb_id: '4128292',
            id:      's01e06',
            title:   $('<div/>').html('The Earthquake').text(),
            rating:  '8.0',
            votes:   '296'
          },
        
          {
            x:       7,
            y:       8.2,
            imdb_id: '4078600',
            id:      's01e07',
            title:   $('<div/>').html('The Spelling Bee').text(),
            rating:  '8.2',
            votes:   '302'
          },
        
          {
            x:       8,
            y:       8.1,
            imdb_id: '4075346',
            id:      's01e08',
            title:   $('<div/>').html('The Sex').text(),
            rating:  '8.1',
            votes:   '268'
          },
        
          {
            x:       9,
            y:       8.0,
            imdb_id: '4128286',
            id:      's01e09',
            title:   $('<div/>').html('The Invitation').text(),
            rating:  '8.0',
            votes:   '249'
          },
        
          {
            x:       10,
            y:       8.0,
            imdb_id: '4128290',
            id:      's01e10',
            title:   $('<div/>').html('The Elevator').text(),
            rating:  '8.0',
            votes:   '248'
          },
        
          {
            x:       11,
            y:       8.0,
            imdb_id: '4147712',
            id:      's01e11',
            title:   $('<div/>').html('The Secrets').text(),
            rating:  '8.0',
            votes:   '254'
          },
        
          {
            x:       12,
            y:       8.1,
            imdb_id: '4175114',
            id:      's01e12',
            title:   $('<div/>').html('The Bachelor Party').text(),
            rating:  '8.1',
            votes:   '269'
          },
        
          {
            x:       13,
            y:       8.4,
            imdb_id: '4192582',
            id:      's01e13',
            title:   $('<div/>').html('The Vows').text(),
            rating:  '8.4',
            votes:   '301'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#e9f279',
        data: [
        
          {
            x:       14,
            y:       8.3,
            imdb_id: '4713652',
            id:      's02e01',
            title:   $('<div/>').html('The Wish').text(),
            rating:  '8.3',
            votes:   '186'
          },
        
          {
            x:       15,
            y:       8.2,
            imdb_id: '4887318',
            id:      's02e02',
            title:   $('<div/>').html('The Vitamix').text(),
            rating:  '8.2',
            votes:   '173'
          },
        
          {
            x:       16,
            y:       8.1,
            imdb_id: '4887320',
            id:      's02e03',
            title:   $('<div/>').html('The Negotiation').text(),
            rating:  '8.1',
            votes:   '160'
          },
        
          {
            x:       17,
            y:       8.1,
            imdb_id: '4955396',
            id:      's02e04',
            title:   $('<div/>').html('The Road Trip').text(),
            rating:  '8.1',
            votes:   '149'
          },
        
          {
            x:       18,
            y:       8.3,
            imdb_id: '4955404',
            id:      's02e05',
            title:   $('<div/>').html('The Test').text(),
            rating:  '8.3',
            votes:   '151'
          },
        
          {
            x:       19,
            y:       8.3,
            imdb_id: '4971010',
            id:      's02e06',
            title:   $('<div/>').html('The Chicken').text(),
            rating:  '8.3',
            votes:   '154'
          },
        
          {
            x:       20,
            y:       8.3,
            imdb_id: '4985798',
            id:      's02e07',
            title:   $('<div/>').html('The Boar').text(),
            rating:  '8.3',
            votes:   '142'
          },
        
          {
            x:       21,
            y:       8.4,
            imdb_id: '5025236',
            id:      's02e08',
            title:   $('<div/>').html('The Anchor').text(),
            rating:  '8.4',
            votes:   '143'
          },
        
          {
            x:       22,
            y:       8.5,
            imdb_id: '5042894',
            id:      's02e09',
            title:   $('<div/>').html('The Goodbyes').text(),
            rating:  '8.5',
            votes:   '142'
          },
        
          {
            x:       23,
            y:       8.4,
            imdb_id: '5042902',
            id:      's02e10',
            title:   $('<div/>').html('The Loophole').text(),
            rating:  '8.4',
            votes:   '138'
          },
        
          {
            x:       24,
            y:       8.6,
            imdb_id: '5008268',
            id:      's02e11',
            title:   $('<div/>').html('The Bender').text(),
            rating:  '8.6',
            votes:   '138'
          },
        
          {
            x:       25,
            y:       8.7,
            imdb_id: '5042910',
            id:      's02e12',
            title:   $('<div/>').html('The Party').text(),
            rating:  '8.7',
            votes:   '176'
          },
        
          {
            x:       26,
            y:       9.2,
            imdb_id: '5042916',
            id:      's02e13',
            title:   $('<div/>').html('The Coup').text(),
            rating:  '9.2',
            votes:   '234'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Hemlock Grove
function hemlockGrove() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Hemlock Grove').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f2b579',
        data: [
        
          {
            x:       1,
            y:       7.0,
            imdb_id: '2321901',
            id:      's01e01',
            title:   $('<div/>').html('Jellyfish in the Sky').text(),
            rating:  '7.0',
            votes:   '708'
          },
        
          {
            x:       2,
            y:       7.4,
            imdb_id: '2369352',
            id:      's01e02',
            title:   $('<div/>').html('The Angel').text(),
            rating:  '7.4',
            votes:   '517'
          },
        
          {
            x:       3,
            y:       7.3,
            imdb_id: '2376640',
            id:      's01e03',
            title:   $('<div/>').html('The Order of the Dragon').text(),
            rating:  '7.3',
            votes:   '437'
          },
        
          {
            x:       4,
            y:       7.2,
            imdb_id: '2383486',
            id:      's01e04',
            title:   $('<div/>').html('In Poor Taste').text(),
            rating:  '7.2',
            votes:   '386'
          },
        
          {
            x:       5,
            y:       7.5,
            imdb_id: '2346502',
            id:      's01e05',
            title:   $('<div/>').html('Hello, Handsome').text(),
            rating:  '7.5',
            votes:   '363'
          },
        
          {
            x:       6,
            y:       7.2,
            imdb_id: '2381712',
            id:      's01e06',
            title:   $('<div/>').html('The Crucible').text(),
            rating:  '7.2',
            votes:   '343'
          },
        
          {
            x:       7,
            y:       7.2,
            imdb_id: '2381724',
            id:      's01e07',
            title:   $('<div/>').html('Measure of Disorder').text(),
            rating:  '7.2',
            votes:   '332'
          },
        
          {
            x:       8,
            y:       7.1,
            imdb_id: '2547668',
            id:      's01e08',
            title:   $('<div/>').html('Catabasis').text(),
            rating:  '7.1',
            votes:   '348'
          },
        
          {
            x:       9,
            y:       7.2,
            imdb_id: '2525416',
            id:      's01e09',
            title:   $('<div/>').html('What Peter Can Live Without').text(),
            rating:  '7.2',
            votes:   '318'
          },
        
          {
            x:       10,
            y:       7.6,
            imdb_id: '2483436',
            id:      's01e10',
            title:   $('<div/>').html('What God Wants').text(),
            rating:  '7.6',
            votes:   '329'
          },
        
          {
            x:       11,
            y:       7.4,
            imdb_id: '2486386',
            id:      's01e11',
            title:   $('<div/>').html('The Price').text(),
            rating:  '7.4',
            votes:   '315'
          },
        
          {
            x:       12,
            y:       7.8,
            imdb_id: '2622000',
            id:      's01e12',
            title:   $('<div/>').html('Children of the Night').text(),
            rating:  '7.8',
            votes:   '325'
          },
        
          {
            x:       13,
            y:       7.6,
            imdb_id: '2623400',
            id:      's01e13',
            title:   $('<div/>').html('Birth').text(),
            rating:  '7.6',
            votes:   '371'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#9279f2',
        data: [
        
          {
            x:       14,
            y:       7.7,
            imdb_id: '2996252',
            id:      's02e01',
            title:   $('<div/>').html('Blood Pressure').text(),
            rating:  '7.7',
            votes:   '263'
          },
        
          {
            x:       15,
            y:       7.2,
            imdb_id: '3316750',
            id:      's02e02',
            title:   $('<div/>').html('Gone Sis').text(),
            rating:  '7.2',
            votes:   '183'
          },
        
          {
            x:       16,
            y:       7.4,
            imdb_id: '3288664',
            id:      's02e03',
            title:   $('<div/>').html('Luna Rea').text(),
            rating:  '7.4',
            votes:   '197'
          },
        
          {
            x:       17,
            y:       7.5,
            imdb_id: '3321816',
            id:      's02e04',
            title:   $('<div/>').html('Bodily Fluids').text(),
            rating:  '7.5',
            votes:   '185'
          },
        
          {
            x:       18,
            y:       7.6,
            imdb_id: '3313288',
            id:      's02e05',
            title:   $('<div/>').html('Hemlock Diego&#39;s Policy Player&#39;s Dream Book').text(),
            rating:  '7.6',
            votes:   '185'
          },
        
          {
            x:       19,
            y:       7.6,
            imdb_id: '3366708',
            id:      's02e06',
            title:   $('<div/>').html('Such Dire Stuff').text(),
            rating:  '7.6',
            votes:   '193'
          },
        
          {
            x:       20,
            y:       7.7,
            imdb_id: '3699420',
            id:      's02e07',
            title:   $('<div/>').html('Lost Generation').text(),
            rating:  '7.7',
            votes:   '185'
          },
        
          {
            x:       21,
            y:       7.8,
            imdb_id: '3616468',
            id:      's02e08',
            title:   $('<div/>').html('Unicorn').text(),
            rating:  '7.8',
            votes:   '193'
          },
        
          {
            x:       22,
            y:       7.9,
            imdb_id: '3688600',
            id:      's02e09',
            title:   $('<div/>').html('Tintypes').text(),
            rating:  '7.9',
            votes:   '203'
          },
        
          {
            x:       23,
            y:       7.5,
            imdb_id: '3672106',
            id:      's02e10',
            title:   $('<div/>').html('Demons and the Dogstar').text(),
            rating:  '7.5',
            votes:   '241'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#83f279',
        data: [
        
          {
            x:       24,
            y:       7.9,
            imdb_id: '4007078',
            id:      's03e01',
            title:   $('<div/>').html('A Place to Fall').text(),
            rating:  '7.9',
            votes:   '135'
          },
        
          {
            x:       25,
            y:       7.7,
            imdb_id: '4289380',
            id:      's03e02',
            title:   $('<div/>').html('Souls on Ice').text(),
            rating:  '7.7',
            votes:   '113'
          },
        
          {
            x:       26,
            y:       7.6,
            imdb_id: '4296020',
            id:      's03e03',
            title:   $('<div/>').html('The House in the Woods').text(),
            rating:  '7.6',
            votes:   '105'
          },
        
          {
            x:       27,
            y:       8.0,
            imdb_id: '4296018',
            id:      's03e04',
            title:   $('<div/>').html('Every Beast').text(),
            rating:  '8.0',
            votes:   '100'
          },
        
          {
            x:       28,
            y:       7.4,
            imdb_id: '4296024',
            id:      's03e05',
            title:   $('<div/>').html('Boy in the Box').text(),
            rating:  '7.4',
            votes:   '106'
          },
        
          {
            x:       29,
            y:       7.6,
            imdb_id: '4296028',
            id:      's03e06',
            title:   $('<div/>').html('Pendant').text(),
            rating:  '7.6',
            votes:   '96'
          },
        
          {
            x:       30,
            y:       7.6,
            imdb_id: '4296030',
            id:      's03e07',
            title:   $('<div/>').html('Todos Santos').text(),
            rating:  '7.6',
            votes:   '96'
          },
        
          {
            x:       31,
            y:       7.5,
            imdb_id: '4296036',
            id:      's03e08',
            title:   $('<div/>').html('Dire Night on the Worm Moon').text(),
            rating:  '7.5',
            votes:   '93'
          },
        
          {
            x:       32,
            y:       7.4,
            imdb_id: '4296038',
            id:      's03e09',
            title:   $('<div/>').html('Damascus').text(),
            rating:  '7.4',
            votes:   '99'
          },
        
          {
            x:       33,
            y:       6.6,
            imdb_id: '4008644',
            id:      's03e10',
            title:   $('<div/>').html('Brian&#39;s Song').text(),
            rating:  '6.6',
            votes:   '132'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// jessicaJones
function jessicaJones() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Jessica Jones').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#98f279',
        data: [
        
          {
            x:       1,
            y:       8.2,
            imdb_id: '4162058',
            id:      's01e01',
            title:   $('<div/>').html('AKA Ladies Night').text(),
            rating:  '8.2',
            votes:   '3934'
          },
        
          {
            x:       2,
            y:       8.3,
            imdb_id: '4162062',
            id:      's01e02',
            title:   $('<div/>').html('AKA Crush Syndrome').text(),
            rating:  '8.3',
            votes:   '3164'
          },
        
          {
            x:       3,
            y:       8.4,
            imdb_id: '4162064',
            id:      's01e03',
            title:   $('<div/>').html('AKA It&#39;s Called Whiskey').text(),
            rating:  '8.4',
            votes:   '2949'
          },
        
          {
            x:       4,
            y:       8.2,
            imdb_id: '4162066',
            id:      's01e04',
            title:   $('<div/>').html('AKA 99 Friends').text(),
            rating:  '8.2',
            votes:   '2821'
          },
        
          {
            x:       5,
            y:       8.6,
            imdb_id: '4162072',
            id:      's01e05',
            title:   $('<div/>').html('AKA The Sandwich Saved Me').text(),
            rating:  '8.6',
            votes:   '2796'
          },
        
          {
            x:       6,
            y:       8.4,
            imdb_id: '4162076',
            id:      's01e06',
            title:   $('<div/>').html('AKA You&#39;re a Winner!').text(),
            rating:  '8.4',
            votes:   '2669'
          },
        
          {
            x:       7,
            y:       8.7,
            imdb_id: '4162080',
            id:      's01e07',
            title:   $('<div/>').html('AKA Top Shelf Perverts').text(),
            rating:  '8.7',
            votes:   '2687'
          },
        
          {
            x:       8,
            y:       9.1,
            imdb_id: '4162078',
            id:      's01e08',
            title:   $('<div/>').html('AKA WWJD?').text(),
            rating:  '9.1',
            votes:   '2919'
          },
        
          {
            x:       9,
            y:       9.2,
            imdb_id: '4162086',
            id:      's01e09',
            title:   $('<div/>').html('AKA Sin Bin').text(),
            rating:  '9.2',
            votes:   '3084'
          },
        
          {
            x:       10,
            y:       8.9,
            imdb_id: '4162088',
            id:      's01e10',
            title:   $('<div/>').html('AKA 1,000 Cuts').text(),
            rating:  '8.9',
            votes:   '2800'
          },
        
          {
            x:       11,
            y:       8.3,
            imdb_id: '4162092',
            id:      's01e11',
            title:   $('<div/>').html('AKA I&#39;ve Got the Blues').text(),
            rating:  '8.3',
            votes:   '2510'
          },
        
          {
            x:       12,
            y:       8.7,
            imdb_id: '4162094',
            id:      's01e12',
            title:   $('<div/>').html('AKA Take a Bloody Number').text(),
            rating:  '8.7',
            votes:   '2502'
          },
        
          {
            x:       13,
            y:       8.8,
            imdb_id: '4162096',
            id:      's01e13',
            title:   $('<div/>').html('AKA Smile').text(),
            rating:  '8.8',
            votes:   '2813'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// LadyDynamite
function ladyDynamite() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Lady Dynamite').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#9979f2',
        data: [
        
          {
            x:       1,
            y:       7.3,
            imdb_id: '4810502',
            id:      's01e01',
            title:   $('<div/>').html('Pilot').text(),
            rating:  '7.3',
            votes:   '125'
          },
        
          {
            x:       2,
            y:       8.0,
            imdb_id: '4885186',
            id:      's01e02',
            title:   $('<div/>').html('Bisexual Because of Meth').text(),
            rating:  '8.0',
            votes:   '95'
          },
        
          {
            x:       3,
            y:       8.5,
            imdb_id: '5040140',
            id:      's01e03',
            title:   $('<div/>').html('White Trash').text(),
            rating:  '8.5',
            votes:   '94'
          },
        
          {
            x:       4,
            y:       8.4,
            imdb_id: '5040148',
            id:      's01e04',
            title:   $('<div/>').html('Jack and Diane').text(),
            rating:  '8.4',
            votes:   '91'
          },
        
          {
            x:       5,
            y:       8.0,
            imdb_id: '5040158',
            id:      's01e05',
            title:   $('<div/>').html('I Love You').text(),
            rating:  '8.0',
            votes:   '77'
          },
        
          {
            x:       6,
            y:       7.8,
            imdb_id: '5040160',
            id:      's01e06',
            title:   $('<div/>').html('Loaf Coach').text(),
            rating:  '7.8',
            votes:   '70'
          },
        
          {
            x:       7,
            y:       7.7,
            imdb_id: '5040166',
            id:      's01e07',
            title:   $('<div/>').html('Josue').text(),
            rating:  '7.7',
            votes:   '71'
          },
        
          {
            x:       8,
            y:       8.2,
            imdb_id: '5040174',
            id:      's01e08',
            title:   $('<div/>').html('A Vaginismus Miracle').text(),
            rating:  '8.2',
            votes:   '72'
          },
        
          {
            x:       9,
            y:       7.6,
            imdb_id: '5040176',
            id:      's01e09',
            title:   $('<div/>').html('No Friend Left Behind').text(),
            rating:  '7.6',
            votes:   '62'
          },
        
          {
            x:       10,
            y:       8.1,
            imdb_id: '5040184',
            id:      's01e10',
            title:   $('<div/>').html('Knife Feelings').text(),
            rating:  '8.1',
            votes:   '56'
          },
        
          {
            x:       11,
            y:       8.1,
            imdb_id: '5040186',
            id:      's01e11',
            title:   $('<div/>').html('Mein Ramp').text(),
            rating:  '8.1',
            votes:   '54'
          },
        
          {
            x:       12,
            y:       8.2,
            imdb_id: '5103772',
            id:      's01e12',
            title:   $('<div/>').html('Enter Super Grisham').text(),
            rating:  '8.2',
            votes:   '56'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Longmire
function longmire() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Longmire').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#bdf279',
        data: [
        
          {
            x:       1,
            y:       8.3,
            imdb_id: '2138563',
            id:      's01e01',
            title:   $('<div/>').html('Pilot').text(),
            rating:  '8.3',
            votes:   '808'
          },
        
          {
            x:       2,
            y:       8.3,
            imdb_id: '2360415',
            id:      's01e02',
            title:   $('<div/>').html('The Dark Road').text(),
            rating:  '8.3',
            votes:   '685'
          },
        
          {
            x:       3,
            y:       8.4,
            imdb_id: '2360413',
            id:      's01e03',
            title:   $('<div/>').html('A Damn Shame').text(),
            rating:  '8.4',
            votes:   '672'
          },
        
          {
            x:       4,
            y:       8.5,
            imdb_id: '2365287',
            id:      's01e04',
            title:   $('<div/>').html('The Cancer').text(),
            rating:  '8.5',
            votes:   '653'
          },
        
          {
            x:       5,
            y:       8.7,
            imdb_id: '2395981',
            id:      's01e05',
            title:   $('<div/>').html('Dog Soldier').text(),
            rating:  '8.7',
            votes:   '667'
          },
        
          {
            x:       6,
            y:       8.3,
            imdb_id: '2181676',
            id:      's01e06',
            title:   $('<div/>').html('The Worst Kind of Hunter').text(),
            rating:  '8.3',
            votes:   '623'
          },
        
          {
            x:       7,
            y:       8.5,
            imdb_id: '2233974',
            id:      's01e07',
            title:   $('<div/>').html('8 Seconds').text(),
            rating:  '8.5',
            votes:   '622'
          },
        
          {
            x:       8,
            y:       8.6,
            imdb_id: '2218332',
            id:      's01e08',
            title:   $('<div/>').html('An Incredibly Beautiful Thing').text(),
            rating:  '8.6',
            votes:   '599'
          },
        
          {
            x:       9,
            y:       8.8,
            imdb_id: '2206692',
            id:      's01e09',
            title:   $('<div/>').html('Dogs, Horses and Indians').text(),
            rating:  '8.8',
            votes:   '594'
          },
        
          {
            x:       10,
            y:       8.9,
            imdb_id: '2298948',
            id:      's01e10',
            title:   $('<div/>').html('Unfinished Business').text(),
            rating:  '8.9',
            votes:   '600'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#f279e0',
        data: [
        
          {
            x:       11,
            y:       8.6,
            imdb_id: '2858114',
            id:      's02e01',
            title:   $('<div/>').html('Unquiet Mind').text(),
            rating:  '8.6',
            votes:   '608'
          },
        
          {
            x:       12,
            y:       8.6,
            imdb_id: '2836784',
            id:      's02e02',
            title:   $('<div/>').html('Carcasses').text(),
            rating:  '8.6',
            votes:   '573'
          },
        
          {
            x:       13,
            y:       8.7,
            imdb_id: '2848250',
            id:      's02e03',
            title:   $('<div/>').html('Death Came in Like Thunder').text(),
            rating:  '8.7',
            votes:   '558'
          },
        
          {
            x:       14,
            y:       8.4,
            imdb_id: '2866718',
            id:      's02e04',
            title:   $('<div/>').html('The Road to Hell').text(),
            rating:  '8.4',
            votes:   '556'
          },
        
          {
            x:       15,
            y:       8.5,
            imdb_id: '2976846',
            id:      's02e05',
            title:   $('<div/>').html('Party&#39;s Over').text(),
            rating:  '8.5',
            votes:   '551'
          },
        
          {
            x:       16,
            y:       8.6,
            imdb_id: '2939110',
            id:      's02e06',
            title:   $('<div/>').html('Tell It Slant').text(),
            rating:  '8.6',
            votes:   '549'
          },
        
          {
            x:       17,
            y:       8.7,
            imdb_id: '2994208',
            id:      's02e07',
            title:   $('<div/>').html('Sound and Fury').text(),
            rating:  '8.7',
            votes:   '550'
          },
        
          {
            x:       18,
            y:       8.8,
            imdb_id: '3026506',
            id:      's02e08',
            title:   $('<div/>').html('The Great Spirit').text(),
            rating:  '8.8',
            votes:   '534'
          },
        
          {
            x:       19,
            y:       8.7,
            imdb_id: '3062288',
            id:      's02e09',
            title:   $('<div/>').html('Tuscan Red').text(),
            rating:  '8.7',
            votes:   '530'
          },
        
          {
            x:       20,
            y:       9.2,
            imdb_id: '3075488',
            id:      's02e10',
            title:   $('<div/>').html('Election Day').text(),
            rating:  '9.2',
            votes:   '575'
          },
        
          {
            x:       21,
            y:       8.9,
            imdb_id: '3069862',
            id:      's02e11',
            title:   $('<div/>').html('Natural Order').text(),
            rating:  '8.9',
            votes:   '534'
          },
        
          {
            x:       22,
            y:       8.8,
            imdb_id: '3116470',
            id:      's02e12',
            title:   $('<div/>').html('A Good Death Is Hard to Find').text(),
            rating:  '8.8',
            votes:   '543'
          },
        
          {
            x:       23,
            y:       9.3,
            imdb_id: '3116472',
            id:      's02e13',
            title:   $('<div/>').html('Bad Medicine').text(),
            rating:  '9.3',
            votes:   '629'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#79f2e0',
        data: [
        
          {
            x:       24,
            y:       9.0,
            imdb_id: '3158224',
            id:      's03e01',
            title:   $('<div/>').html('The White Warrior').text(),
            rating:  '9.0',
            votes:   '598'
          },
        
          {
            x:       25,
            y:       8.9,
            imdb_id: '3630776',
            id:      's03e02',
            title:   $('<div/>').html('Of Children and Travelers').text(),
            rating:  '8.9',
            votes:   '555'
          },
        
          {
            x:       26,
            y:       9.0,
            imdb_id: '3715260',
            id:      's03e03',
            title:   $('<div/>').html('Miss Cheyenne').text(),
            rating:  '9.0',
            votes:   '557'
          },
        
          {
            x:       27,
            y:       8.8,
            imdb_id: '3693032',
            id:      's03e04',
            title:   $('<div/>').html('In the Pines').text(),
            rating:  '8.8',
            votes:   '533'
          },
        
          {
            x:       28,
            y:       9.0,
            imdb_id: '3708834',
            id:      's03e05',
            title:   $('<div/>').html('Wanted Man').text(),
            rating:  '9.0',
            votes:   '538'
          },
        
          {
            x:       29,
            y:       8.9,
            imdb_id: '3803424',
            id:      's03e06',
            title:   $('<div/>').html('Reports of My Death').text(),
            rating:  '8.9',
            votes:   '538'
          },
        
          {
            x:       30,
            y:       9.1,
            imdb_id: '3766950',
            id:      's03e07',
            title:   $('<div/>').html('Population 25').text(),
            rating:  '9.1',
            votes:   '587'
          },
        
          {
            x:       31,
            y:       8.9,
            imdb_id: '3833736',
            id:      's03e08',
            title:   $('<div/>').html('Harvest').text(),
            rating:  '8.9',
            votes:   '531'
          },
        
          {
            x:       32,
            y:       9.1,
            imdb_id: '3785938',
            id:      's03e09',
            title:   $('<div/>').html('Counting Coup').text(),
            rating:  '9.1',
            votes:   '553'
          },
        
          {
            x:       33,
            y:       9.4,
            imdb_id: '3833732',
            id:      's03e10',
            title:   $('<div/>').html('Ashes to Ashes').text(),
            rating:  '9.4',
            votes:   '645'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 4',
        color: '#f2bc79',
        data: [
        
          {
            x:       34,
            y:       9.4,
            imdb_id: '4237512',
            id:      's04e01',
            title:   $('<div/>').html('Down by the River').text(),
            rating:  '9.4',
            votes:   '866'
          },
        
          {
            x:       35,
            y:       9.0,
            imdb_id: '4337664',
            id:      's04e02',
            title:   $('<div/>').html('War Eagle').text(),
            rating:  '9.0',
            votes:   '686'
          },
        
          {
            x:       36,
            y:       9.6,
            imdb_id: '4429538',
            id:      's04e03',
            title:   $('<div/>').html('High Noon').text(),
            rating:  '9.6',
            votes:   '748'
          },
        
          {
            x:       37,
            y:       9.0,
            imdb_id: '4429542',
            id:      's04e04',
            title:   $('<div/>').html('Four Arrows').text(),
            rating:  '9.0',
            votes:   '637'
          },
        
          {
            x:       38,
            y:       9.1,
            imdb_id: '4429540',
            id:      's04e05',
            title:   $('<div/>').html('Help Wanted').text(),
            rating:  '9.1',
            votes:   '642'
          },
        
          {
            x:       39,
            y:       9.2,
            imdb_id: '4429552',
            id:      's04e06',
            title:   $('<div/>').html('The Calling Back').text(),
            rating:  '9.2',
            votes:   '620'
          },
        
          {
            x:       40,
            y:       9.0,
            imdb_id: '4429558',
            id:      's04e07',
            title:   $('<div/>').html('Highway Robbery').text(),
            rating:  '9.0',
            votes:   '591'
          },
        
          {
            x:       41,
            y:       9.2,
            imdb_id: '4429562',
            id:      's04e08',
            title:   $('<div/>').html('Hector Lives').text(),
            rating:  '9.2',
            votes:   '572'
          },
        
          {
            x:       42,
            y:       9.2,
            imdb_id: '4429568',
            id:      's04e09',
            title:   $('<div/>').html('Shotgun').text(),
            rating:  '9.2',
            votes:   '619'
          },
        
          {
            x:       43,
            y:       9.5,
            imdb_id: '4237514',
            id:      's04e10',
            title:   $('<div/>').html('What Happens on the Rez...').text(),
            rating:  '9.5',
            votes:   '686'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 5',
        color: '#9979f2',
        data: [
        
          {
            x:       44,
            y:       9.1,
            imdb_id: '5197284',
            id:      's05e01',
            title:   $('<div/>').html('A Fog That Won&#39;t Lift').text(),
            rating:  '9.1',
            votes:   '188'
          },
        
          {
            x:       45,
            y:       8.8,
            imdb_id: '5584474',
            id:      's05e02',
            title:   $('<div/>').html('One Good Memory').text(),
            rating:  '8.8',
            votes:   '135'
          },
        
          {
            x:       46,
            y:       9.0,
            imdb_id: '5648208',
            id:      's05e03',
            title:   $('<div/>').html('Chrysalis').text(),
            rating:  '9.0',
            votes:   '156'
          },
        
          {
            x:       47,
            y:       8.7,
            imdb_id: '5788330',
            id:      's05e04',
            title:   $('<div/>').html('The Judas Wolf').text(),
            rating:  '8.7',
            votes:   '124'
          },
        
          {
            x:       48,
            y:       9.0,
            imdb_id: '5847000',
            id:      's05e05',
            title:   $('<div/>').html('Pure Peckinpah').text(),
            rating:  '9.0',
            votes:   '127'
          },
        
          {
            x:       49,
            y:       8.8,
            imdb_id: '5862056',
            id:      's05e06',
            title:   $('<div/>').html('Objection').text(),
            rating:  '8.8',
            votes:   '115'
          },
        
          {
            x:       50,
            y:       8.8,
            imdb_id: '5862134',
            id:      's05e07',
            title:   $('<div/>').html('From This Day Forward').text(),
            rating:  '8.8',
            votes:   '114'
          },
        
          {
            x:       51,
            y:       9.0,
            imdb_id: '5862136',
            id:      's05e08',
            title:   $('<div/>').html('Stand Your Ground').text(),
            rating:  '9.0',
            votes:   '123'
          },
        
          {
            x:       52,
            y:       9.0,
            imdb_id: '5862138',
            id:      's05e09',
            title:   $('<div/>').html('Continual Soiree').text(),
            rating:  '9.0',
            votes:   '136'
          },
        
          {
            x:       53,
            y:       8.6,
            imdb_id: '5862050',
            id:      's05e10',
            title:   $('<div/>').html('The Stuff Dreams Are Made Of').text(),
            rating:  '8.6',
            votes:   '134'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// lukeCage
function lukeCage() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Luke Cage').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f279c1',
        data: [
        
          {
            x:       1,
            y:       8.0,
            imdb_id: '4179626',
            id:      's01e01',
            title:   $('<div/>').html('Moment of Truth').text(),
            rating:  '8.0',
            votes:   '1977'
          },
        
          {
            x:       2,
            y:       8.5,
            imdb_id: '4179628',
            id:      's01e02',
            title:   $('<div/>').html('Code of the Streets').text(),
            rating:  '8.5',
            votes:   '1597'
          },
        
          {
            x:       3,
            y:       8.6,
            imdb_id: '4179634',
            id:      's01e03',
            title:   $('<div/>').html('Who&#39;s Gonna Take the Weight?').text(),
            rating:  '8.6',
            votes:   '1419'
          },
        
          {
            x:       4,
            y:       8.7,
            imdb_id: '4179636',
            id:      's01e04',
            title:   $('<div/>').html('Step in the Arena').text(),
            rating:  '8.7',
            votes:   '1384'
          },
        
          {
            x:       5,
            y:       8.3,
            imdb_id: '4179642',
            id:      's01e05',
            title:   $('<div/>').html('Just to Get a Rep').text(),
            rating:  '8.3',
            votes:   '1193'
          },
        
          {
            x:       6,
            y:       8.4,
            imdb_id: '4179686',
            id:      's01e06',
            title:   $('<div/>').html('Suckas Need Bodyguards').text(),
            rating:  '8.4',
            votes:   '1107'
          },
        
          {
            x:       7,
            y:       8.8,
            imdb_id: '4179742',
            id:      's01e07',
            title:   $('<div/>').html('Manifest').text(),
            rating:  '8.8',
            votes:   '1134'
          },
        
          {
            x:       8,
            y:       8.5,
            imdb_id: '4179760',
            id:      's01e08',
            title:   $('<div/>').html('Blowin&#39; Up the Spot').text(),
            rating:  '8.5',
            votes:   '1007'
          },
        
          {
            x:       9,
            y:       8.3,
            imdb_id: '4179772',
            id:      's01e09',
            title:   $('<div/>').html('DWYCK').text(),
            rating:  '8.3',
            votes:   '921'
          },
        
          {
            x:       10,
            y:       8.5,
            imdb_id: '4179776',
            id:      's01e10',
            title:   $('<div/>').html('Take It Personal').text(),
            rating:  '8.5',
            votes:   '882'
          },
        
          {
            x:       11,
            y:       8.7,
            imdb_id: '4179784',
            id:      's01e11',
            title:   $('<div/>').html('Now You&#39;re Mine').text(),
            rating:  '8.7',
            votes:   '878'
          },
        
          {
            x:       12,
            y:       8.6,
            imdb_id: '4179798',
            id:      's01e12',
            title:   $('<div/>').html('Soliloquy of Chaos').text(),
            rating:  '8.6',
            votes:   '866'
          },
        
          {
            x:       13,
            y:       8.4,
            imdb_id: '4179804',
            id:      's01e13',
            title:   $('<div/>').html('You Know My Steez').text(),
            rating:  '8.4',
            votes:   '896'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Marco Polo
function marcoPolo() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Marco Polo').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2c5',
        data: [
        
          {
            x:       1,
            y:       7.5,
            imdb_id: '3466846',
            id:      's01e01',
            title:   $('<div/>').html('The Wayfarer').text(),
            rating:  '7.5',
            votes:   '1068'
          },
        
          {
            x:       2,
            y:       8.2,
            imdb_id: '3798170',
            id:      's01e02',
            title:   $('<div/>').html('The Wolf and the Deer').text(),
            rating:  '8.2',
            votes:   '826'
          },
        
          {
            x:       3,
            y:       8.0,
            imdb_id: '3720652',
            id:      's01e03',
            title:   $('<div/>').html('Feast').text(),
            rating:  '8.0',
            votes:   '688'
          },
        
          {
            x:       4,
            y:       8.1,
            imdb_id: '3720656',
            id:      's01e04',
            title:   $('<div/>').html('The Fourth Step').text(),
            rating:  '8.1',
            votes:   '620'
          },
        
          {
            x:       5,
            y:       8.3,
            imdb_id: '3798176',
            id:      's01e05',
            title:   $('<div/>').html('Hashshashin').text(),
            rating:  '8.3',
            votes:   '615'
          },
        
          {
            x:       6,
            y:       8.2,
            imdb_id: '3798178',
            id:      's01e06',
            title:   $('<div/>').html('White Moon').text(),
            rating:  '8.2',
            votes:   '580'
          },
        
          {
            x:       7,
            y:       8.4,
            imdb_id: '3855306',
            id:      's01e07',
            title:   $('<div/>').html('The Scholar&#39;s Pen').text(),
            rating:  '8.4',
            votes:   '572'
          },
        
          {
            x:       8,
            y:       8.3,
            imdb_id: '3720658',
            id:      's01e08',
            title:   $('<div/>').html('Rendering').text(),
            rating:  '8.3',
            votes:   '554'
          },
        
          {
            x:       9,
            y:       8.3,
            imdb_id: '3855318',
            id:      's01e09',
            title:   $('<div/>').html('Prisoners').text(),
            rating:  '8.3',
            votes:   '569'
          },
        
          {
            x:       10,
            y:       9.0,
            imdb_id: '3720660',
            id:      's01e10',
            title:   $('<div/>').html('The Heavenly and Primal').text(),
            rating:  '9.0',
            votes:   '770'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#f2a179',
        data: [
        
          {
            x:       11,
            y:       8.1,
            imdb_id: '4336522',
            id:      's02e01',
            title:   $('<div/>').html('Hunter and the Sable Weaver').text(),
            rating:  '8.1',
            votes:   '411'
          },
        
          {
            x:       12,
            y:       8.3,
            imdb_id: '4832108',
            id:      's02e02',
            title:   $('<div/>').html('Hug').text(),
            rating:  '8.3',
            votes:   '360'
          },
        
          {
            x:       13,
            y:       8.1,
            imdb_id: '5086470',
            id:      's02e03',
            title:   $('<div/>').html('Measure Against the Linchpin').text(),
            rating:  '8.1',
            votes:   '307'
          },
        
          {
            x:       14,
            y:       7.9,
            imdb_id: '4832110',
            id:      's02e04',
            title:   $('<div/>').html('Let God&#39;s Work Begin').text(),
            rating:  '7.9',
            votes:   '299'
          },
        
          {
            x:       15,
            y:       8.2,
            imdb_id: '5098990',
            id:      's02e05',
            title:   $('<div/>').html('Lullaby').text(),
            rating:  '8.2',
            votes:   '267'
          },
        
          {
            x:       16,
            y:       8.2,
            imdb_id: '5111404',
            id:      's02e06',
            title:   $('<div/>').html('Serpent&#39;s Terms').text(),
            rating:  '8.2',
            votes:   '243'
          },
        
          {
            x:       17,
            y:       8.5,
            imdb_id: '5137972',
            id:      's02e07',
            title:   $('<div/>').html('Lost Crane').text(),
            rating:  '8.5',
            votes:   '248'
          },
        
          {
            x:       18,
            y:       8.5,
            imdb_id: '5235414',
            id:      's02e08',
            title:   $('<div/>').html('Whitehorse').text(),
            rating:  '8.5',
            votes:   '254'
          },
        
          {
            x:       19,
            y:       9.1,
            imdb_id: '5244838',
            id:      's02e09',
            title:   $('<div/>').html('Heirs').text(),
            rating:  '9.1',
            votes:   '386'
          },
        
          {
            x:       20,
            y:       8.9,
            imdb_id: '4566174',
            id:      's02e10',
            title:   $('<div/>').html('The Fellowship').text(),
            rating:  '8.9',
            votes:   '342'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Marseille
function marseille() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Marseille').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#dcf279',
        data: [
        
          {
            x:       1,
            y:       7.6,
            imdb_id: '4324578',
            id:      's01e01',
            title:   $('<div/>').html('20 ans').text(),
            rating:  '7.6',
            votes:   '122'
          },
        
          {
            x:       2,
            y:       7.6,
            imdb_id: '4324580',
            id:      's01e02',
            title:   $('<div/>').html('Homme de paille').text(),
            rating:  '7.6',
            votes:   '90'
          },
        
          {
            x:       3,
            y:       7.8,
            imdb_id: '5603474',
            id:      's01e03',
            title:   $('<div/>').html('Crocodile').text(),
            rating:  '7.8',
            votes:   '81'
          },
        
          {
            x:       4,
            y:       7.5,
            imdb_id: '5603476',
            id:      's01e04',
            title:   $('<div/>').html('Intox').text(),
            rating:  '7.5',
            votes:   '74'
          },
        
          {
            x:       5,
            y:       7.8,
            imdb_id: '5569920',
            id:      's01e05',
            title:   $('<div/>').html('Face à Face').text(),
            rating:  '7.8',
            votes:   '71'
          },
        
          {
            x:       6,
            y:       7.8,
            imdb_id: '5569950',
            id:      's01e06',
            title:   $('<div/>').html('Liberté, Egalité, sans Pitié').text(),
            rating:  '7.8',
            votes:   '69'
          },
        
          {
            x:       7,
            y:       7.6,
            imdb_id: '5569964',
            id:      's01e07',
            title:   $('<div/>').html('A voté').text(),
            rating:  '7.6',
            votes:   '65'
          },
        
          {
            x:       8,
            y:       8.0,
            imdb_id: '5569968',
            id:      's01e08',
            title:   $('<div/>').html('La Lutte Finale').text(),
            rating:  '8.0',
            votes:   '77'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Master of None
function masterOfNone() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Master of None').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#9579f2',
        data: [
        
          {
            x:       1,
            y:       7.7,
            imdb_id: '4672180',
            id:      's01e01',
            title:   $('<div/>').html('Plan B').text(),
            rating:  '7.7',
            votes:   '1063'
          },
        
          {
            x:       2,
            y:       8.3,
            imdb_id: '4672182',
            id:      's01e02',
            title:   $('<div/>').html('Parents').text(),
            rating:  '8.3',
            votes:   '1036'
          },
        
          {
            x:       3,
            y:       8.3,
            imdb_id: '4672184',
            id:      's01e03',
            title:   $('<div/>').html('Hot Ticket').text(),
            rating:  '8.3',
            votes:   '848'
          },
        
          {
            x:       4,
            y:       8.5,
            imdb_id: '4658458',
            id:      's01e04',
            title:   $('<div/>').html('Indians on TV').text(),
            rating:  '8.5',
            votes:   '822'
          },
        
          {
            x:       5,
            y:       8.3,
            imdb_id: '4672218',
            id:      's01e05',
            title:   $('<div/>').html('The Other Man').text(),
            rating:  '8.3',
            votes:   '800'
          },
        
          {
            x:       6,
            y:       8.8,
            imdb_id: '4672216',
            id:      's01e06',
            title:   $('<div/>').html('Nashville').text(),
            rating:  '8.8',
            votes:   '869'
          },
        
          {
            x:       7,
            y:       8.3,
            imdb_id: '4674610',
            id:      's01e07',
            title:   $('<div/>').html('Ladies and Gentlemen').text(),
            rating:  '8.3',
            votes:   '729'
          },
        
          {
            x:       8,
            y:       8.5,
            imdb_id: '4672186',
            id:      's01e08',
            title:   $('<div/>').html('Old People').text(),
            rating:  '8.5',
            votes:   '722'
          },
        
          {
            x:       9,
            y:       8.9,
            imdb_id: '4674608',
            id:      's01e09',
            title:   $('<div/>').html('Mornings').text(),
            rating:  '8.9',
            votes:   '809'
          },
        
          {
            x:       10,
            y:       8.9,
            imdb_id: '4674612',
            id:      's01e10',
            title:   $('<div/>').html('Finale').text(),
            rating:  '8.9',
            votes:   '741'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Nacros
function nacros() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Narcos').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2d3',
        data: [
        
          {
            x:       1,
            y:       9.0,
            imdb_id: '3591824',
            id:      's01e01',
            title:   $('<div/>').html('Descenso').text(),
            rating:  '9.0',
            votes:   '3874'
          },
        
          {
            x:       2,
            y:       8.6,
            imdb_id: '3736868',
            id:      's01e02',
            title:   $('<div/>').html('The Sword of Simón Bolivar').text(),
            rating:  '8.6',
            votes:   '2716'
          },
        
          {
            x:       3,
            y:       8.6,
            imdb_id: '3736866',
            id:      's01e03',
            title:   $('<div/>').html('The Men of Always').text(),
            rating:  '8.6',
            votes:   '2436'
          },
        
          {
            x:       4,
            y:       8.8,
            imdb_id: '3736870',
            id:      's01e04',
            title:   $('<div/>').html('The Palace in Flames').text(),
            rating:  '8.8',
            votes:   '2373'
          },
        
          {
            x:       5,
            y:       8.5,
            imdb_id: '3736874',
            id:      's01e05',
            title:   $('<div/>').html('There Will Be a Future').text(),
            rating:  '8.5',
            votes:   '2177'
          },
        
          {
            x:       6,
            y:       9.1,
            imdb_id: '3736872',
            id:      's01e06',
            title:   $('<div/>').html('Explosivos').text(),
            rating:  '9.1',
            votes:   '2421'
          },
        
          {
            x:       7,
            y:       8.7,
            imdb_id: '3736876',
            id:      's01e07',
            title:   $('<div/>').html('You Will Cry Tears of Blood').text(),
            rating:  '8.7',
            votes:   '2043'
          },
        
          {
            x:       8,
            y:       9.0,
            imdb_id: '3736878',
            id:      's01e08',
            title:   $('<div/>').html('La Gran Mentira').text(),
            rating:  '9.0',
            votes:   '2177'
          },
        
          {
            x:       9,
            y:       8.7,
            imdb_id: '3736882',
            id:      's01e09',
            title:   $('<div/>').html('La Catedral').text(),
            rating:  '8.7',
            votes:   '1973'
          },
        
          {
            x:       10,
            y:       8.9,
            imdb_id: '3736880',
            id:      's01e10',
            title:   $('<div/>').html('Despegue').text(),
            rating:  '8.9',
            votes:   '2188'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#f2b079',
        data: [
        
          {
            x:       11,
            y:       8.5,
            imdb_id: '5011946',
            id:      's02e01',
            title:   $('<div/>').html('Free at Last').text(),
            rating:  '8.5',
            votes:   '1609'
          },
        
          {
            x:       12,
            y:       8.7,
            imdb_id: '5714376',
            id:      's02e02',
            title:   $('<div/>').html('Cambalache').text(),
            rating:  '8.7',
            votes:   '1457'
          },
        
          {
            x:       13,
            y:       8.7,
            imdb_id: '5714386',
            id:      's02e03',
            title:   $('<div/>').html('Our Man in Madrid').text(),
            rating:  '8.7',
            votes:   '1321'
          },
        
          {
            x:       14,
            y:       9.4,
            imdb_id: '5714396',
            id:      's02e04',
            title:   $('<div/>').html('The Good, the Bad, and the Dead').text(),
            rating:  '9.4',
            votes:   '1840'
          },
        
          {
            x:       15,
            y:       8.7,
            imdb_id: '5714398',
            id:      's02e05',
            title:   $('<div/>').html('The Enemies of My Enemy').text(),
            rating:  '8.7',
            votes:   '1194'
          },
        
          {
            x:       16,
            y:       9.2,
            imdb_id: '5714400',
            id:      's02e06',
            title:   $('<div/>').html('Los Pepes').text(),
            rating:  '9.2',
            votes:   '1457'
          },
        
          {
            x:       17,
            y:       8.8,
            imdb_id: '5714402',
            id:      's02e07',
            title:   $('<div/>').html('Deutschland 93').text(),
            rating:  '8.8',
            votes:   '1199'
          },
        
          {
            x:       18,
            y:       8.8,
            imdb_id: '5714404',
            id:      's02e08',
            title:   $('<div/>').html('Exit El Patrón').text(),
            rating:  '8.8',
            votes:   '1172'
          },
        
          {
            x:       19,
            y:       8.6,
            imdb_id: '5714406',
            id:      's02e09',
            title:   $('<div/>').html('Nuestra Finca').text(),
            rating:  '8.6',
            votes:   '1157'
          },
        
          {
            x:       20,
            y:       9.5,
            imdb_id: '5714408',
            id:      's02e10',
            title:   $('<div/>').html('Al Fin Cayó!').text(),
            rating:  '9.5',
            votes:   '1996'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// Orange Is the New Black
function orangeIsTheNewBlack() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Orange Is the New Black').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f28179',
        data: [
        
          {
            x:       1,
            y:       7.9,
            imdb_id: '2400770',
            id:      's01e01',
            title:   $('<div/>').html('I Wasn&#39;t Ready').text(),
            rating:  '7.9',
            votes:   '2598'
          },
        
          {
            x:       2,
            y:       8.1,
            imdb_id: '2431596',
            id:      's01e02',
            title:   $('<div/>').html('Tit Punch').text(),
            rating:  '8.1',
            votes:   '2058'
          },
        
          {
            x:       3,
            y:       8.2,
            imdb_id: '2451520',
            id:      's01e03',
            title:   $('<div/>').html('Lesbian Request Denied').text(),
            rating:  '8.2',
            votes:   '1949'
          },
        
          {
            x:       4,
            y:       8.2,
            imdb_id: '2577286',
            id:      's01e04',
            title:   $('<div/>').html('Imaginary Enemies').text(),
            rating:  '8.2',
            votes:   '1822'
          },
        
          {
            x:       5,
            y:       8.1,
            imdb_id: '2511030',
            id:      's01e05',
            title:   $('<div/>').html('The Chickening').text(),
            rating:  '8.1',
            votes:   '1800'
          },
        
          {
            x:       6,
            y:       8.0,
            imdb_id: '2511028',
            id:      's01e06',
            title:   $('<div/>').html('WAC Pack').text(),
            rating:  '8.0',
            votes:   '1679'
          },
        
          {
            x:       7,
            y:       8.0,
            imdb_id: '2595996',
            id:      's01e07',
            title:   $('<div/>').html('Blood Donut').text(),
            rating:  '8.0',
            votes:   '1596'
          },
        
          {
            x:       8,
            y:       8.0,
            imdb_id: '2620550',
            id:      's01e08',
            title:   $('<div/>').html('Moscow Mule').text(),
            rating:  '8.0',
            votes:   '1571'
          },
        
          {
            x:       9,
            y:       8.6,
            imdb_id: '2640490',
            id:      's01e09',
            title:   $('<div/>').html('Fucksgiving').text(),
            rating:  '8.6',
            votes:   '1702'
          },
        
          {
            x:       10,
            y:       8.7,
            imdb_id: '2692410',
            id:      's01e10',
            title:   $('<div/>').html('Bora Bora Bora').text(),
            rating:  '8.7',
            votes:   '1692'
          },
        
          {
            x:       11,
            y:       8.6,
            imdb_id: '2739642',
            id:      's01e11',
            title:   $('<div/>').html('Tall Men with Feelings').text(),
            rating:  '8.6',
            votes:   '1630'
          },
        
          {
            x:       12,
            y:       8.3,
            imdb_id: '2754710',
            id:      's01e12',
            title:   $('<div/>').html('Fool Me Once').text(),
            rating:  '8.3',
            votes:   '1518'
          },
        
          {
            x:       13,
            y:       9.0,
            imdb_id: '2754708',
            id:      's01e13',
            title:   $('<div/>').html('Can&#39;t Fix Crazy').text(),
            rating:  '9.0',
            votes:   '2127'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#7993f2',
        data: [
        
          {
            x:       14,
            y:       8.6,
            imdb_id: '3015084',
            id:      's02e01',
            title:   $('<div/>').html('Thirsty Bird').text(),
            rating:  '8.6',
            votes:   '1824'
          },
        
          {
            x:       15,
            y:       8.0,
            imdb_id: '3099720',
            id:      's02e02',
            title:   $('<div/>').html('Looks Blue, Tastes Red').text(),
            rating:  '8.0',
            votes:   '1471'
          },
        
          {
            x:       16,
            y:       8.3,
            imdb_id: '3262412',
            id:      's02e03',
            title:   $('<div/>').html('Hugs Can Be Deceiving').text(),
            rating:  '8.3',
            votes:   '1383'
          },
        
          {
            x:       17,
            y:       8.5,
            imdb_id: '3262414',
            id:      's02e04',
            title:   $('<div/>').html('A Whole Other Hole').text(),
            rating:  '8.5',
            votes:   '1402'
          },
        
          {
            x:       18,
            y:       8.0,
            imdb_id: '3262416',
            id:      's02e05',
            title:   $('<div/>').html('Low Self Esteem City').text(),
            rating:  '8.0',
            votes:   '1302'
          },
        
          {
            x:       19,
            y:       8.4,
            imdb_id: '3262410',
            id:      's02e06',
            title:   $('<div/>').html('You Also Have a Pizza').text(),
            rating:  '8.4',
            votes:   '1364'
          },
        
          {
            x:       20,
            y:       8.1,
            imdb_id: '3262424',
            id:      's02e07',
            title:   $('<div/>').html('Comic Sans').text(),
            rating:  '8.1',
            votes:   '1269'
          },
        
          {
            x:       21,
            y:       8.4,
            imdb_id: '3262418',
            id:      's02e08',
            title:   $('<div/>').html('Appropriately Sized Pots').text(),
            rating:  '8.4',
            votes:   '1247'
          },
        
          {
            x:       22,
            y:       8.6,
            imdb_id: '3262426',
            id:      's02e09',
            title:   $('<div/>').html('40 OZ of Furlough').text(),
            rating:  '8.6',
            votes:   '1299'
          },
        
          {
            x:       23,
            y:       8.7,
            imdb_id: '3262428',
            id:      's02e10',
            title:   $('<div/>').html('Little Mustachioed Shit').text(),
            rating:  '8.7',
            votes:   '1291'
          },
        
          {
            x:       24,
            y:       8.4,
            imdb_id: '3262420',
            id:      's02e11',
            title:   $('<div/>').html('Take a Break from Your Values').text(),
            rating:  '8.4',
            votes:   '1258'
          },
        
          {
            x:       25,
            y:       8.8,
            imdb_id: '3262422',
            id:      's02e12',
            title:   $('<div/>').html('It Was the Change').text(),
            rating:  '8.8',
            votes:   '1373'
          },
        
          {
            x:       26,
            y:       9.4,
            imdb_id: '3262434',
            id:      's02e13',
            title:   $('<div/>').html('We Have Manners. We&#39;re Polite.').text(),
            rating:  '9.4',
            votes:   '2677'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#b7f279',
        data: [
        
          {
            x:       27,
            y:       7.8,
            imdb_id: '3713502',
            id:      's03e01',
            title:   $('<div/>').html('Mother&#39;s Day').text(),
            rating:  '7.8',
            votes:   '1502'
          },
        
          {
            x:       28,
            y:       7.9,
            imdb_id: '3807516',
            id:      's03e02',
            title:   $('<div/>').html('Bed Bugs and Beyond').text(),
            rating:  '7.9',
            votes:   '1256'
          },
        
          {
            x:       29,
            y:       8.3,
            imdb_id: '3807522',
            id:      's03e03',
            title:   $('<div/>').html('Empathy Is a Boner Killer').text(),
            rating:  '8.3',
            votes:   '1224'
          },
        
          {
            x:       30,
            y:       8.1,
            imdb_id: '3807518',
            id:      's03e04',
            title:   $('<div/>').html('Finger in the Dyke').text(),
            rating:  '8.1',
            votes:   '1146'
          },
        
          {
            x:       31,
            y:       7.9,
            imdb_id: '3807524',
            id:      's03e05',
            title:   $('<div/>').html('Fake It Till You Fake It Some More').text(),
            rating:  '7.9',
            votes:   '1086'
          },
        
          {
            x:       32,
            y:       8.2,
            imdb_id: '3807528',
            id:      's03e06',
            title:   $('<div/>').html('Ching Chong Chang').text(),
            rating:  '8.2',
            votes:   '1125'
          },
        
          {
            x:       33,
            y:       8.1,
            imdb_id: '3807532',
            id:      's03e07',
            title:   $('<div/>').html('Tongue-Tied').text(),
            rating:  '8.1',
            votes:   '1054'
          },
        
          {
            x:       34,
            y:       8.1,
            imdb_id: '3807534',
            id:      's03e08',
            title:   $('<div/>').html('Fear, and Other Smells').text(),
            rating:  '8.1',
            votes:   '1024'
          },
        
          {
            x:       35,
            y:       8.1,
            imdb_id: '3807526',
            id:      's03e09',
            title:   $('<div/>').html('Where My Dreidel At').text(),
            rating:  '8.1',
            votes:   '1020'
          },
        
          {
            x:       36,
            y:       8.5,
            imdb_id: '3807546',
            id:      's03e10',
            title:   $('<div/>').html('A Tittin&#39; and a Hairin&#39;').text(),
            rating:  '8.5',
            votes:   '1130'
          },
        
          {
            x:       37,
            y:       8.3,
            imdb_id: '3807540',
            id:      's03e11',
            title:   $('<div/>').html('We Can Be Heroes').text(),
            rating:  '8.3',
            votes:   '1009'
          },
        
          {
            x:       38,
            y:       8.3,
            imdb_id: '3807544',
            id:      's03e12',
            title:   $('<div/>').html('Don&#39;t Make Me Come Back There').text(),
            rating:  '8.3',
            votes:   '1039'
          },
        
          {
            x:       39,
            y:       9.0,
            imdb_id: '3807538',
            id:      's03e13',
            title:   $('<div/>').html('Trust No Bitch').text(),
            rating:  '9.0',
            votes:   '1841'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 4',
        color: '#f279da',
        data: [
        
          {
            x:       40,
            y:       8.6,
            imdb_id: '4645280',
            id:      's04e01',
            title:   $('<div/>').html('Work That Body for Me').text(),
            rating:  '8.6',
            votes:   '1144'
          },
        
          {
            x:       41,
            y:       8.0,
            imdb_id: '4800062',
            id:      's04e02',
            title:   $('<div/>').html('Power Suit').text(),
            rating:  '8.0',
            votes:   '877'
          },
        
          {
            x:       42,
            y:       8.2,
            imdb_id: '4848198',
            id:      's04e03',
            title:   $('<div/>').html('(Don&#39;t) Say Anything').text(),
            rating:  '8.2',
            votes:   '825'
          },
        
          {
            x:       43,
            y:       8.2,
            imdb_id: '4943588',
            id:      's04e04',
            title:   $('<div/>').html('Doctor Psycho').text(),
            rating:  '8.2',
            votes:   '789'
          },
        
          {
            x:       44,
            y:       8.1,
            imdb_id: '4964764',
            id:      's04e05',
            title:   $('<div/>').html('We&#39;ll Always Have Baltimore').text(),
            rating:  '8.1',
            votes:   '718'
          },
        
          {
            x:       45,
            y:       8.7,
            imdb_id: '4955850',
            id:      's04e06',
            title:   $('<div/>').html('Piece of Sh*t').text(),
            rating:  '8.7',
            votes:   '829'
          },
        
          {
            x:       46,
            y:       8.8,
            imdb_id: '4982080',
            id:      's04e07',
            title:   $('<div/>').html('It Sounded Nicer in My Head').text(),
            rating:  '8.8',
            votes:   '807'
          },
        
          {
            x:       47,
            y:       8.6,
            imdb_id: '5208156',
            id:      's04e08',
            title:   $('<div/>').html('Friends in Low Places').text(),
            rating:  '8.6',
            votes:   '794'
          },
        
          {
            x:       48,
            y:       8.3,
            imdb_id: '5197318',
            id:      's04e09',
            title:   $('<div/>').html('Turn Table Turn').text(),
            rating:  '8.3',
            votes:   '742'
          },
        
          {
            x:       49,
            y:       8.5,
            imdb_id: '5208192',
            id:      's04e10',
            title:   $('<div/>').html('Bunny, Skull, Bunny, Skull').text(),
            rating:  '8.5',
            votes:   '749'
          },
        
          {
            x:       50,
            y:       9.4,
            imdb_id: '5188388',
            id:      's04e11',
            title:   $('<div/>').html('People Persons').text(),
            rating:  '9.4',
            votes:   '1229'
          },
        
          {
            x:       51,
            y:       9.4,
            imdb_id: '5193130',
            id:      's04e12',
            title:   $('<div/>').html('The Animals').text(),
            rating:  '9.4',
            votes:   '1563'
          },
        
          {
            x:       52,
            y:       9.6,
            imdb_id: '5193132',
            id:      's04e13',
            title:   $('<div/>').html('Toast Can&#39;t Never Be Bread Again').text(),
            rating:  '9.6',
            votes:   '2299'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Sense8
function sense8() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Sense8').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f2b579',
        data: [
        
          {
            x:       1,
            y:       7.5,
            imdb_id: '3818888',
            id:      's01e01',
            title:   $('<div/>').html('Limbic Resonance').text(),
            rating:  '7.5',
            votes:   '2577'
          },
        
          {
            x:       2,
            y:       8.0,
            imdb_id: '3833452',
            id:      's01e02',
            title:   $('<div/>').html('I Am Also A We').text(),
            rating:  '8.0',
            votes:   '2080'
          },
        
          {
            x:       3,
            y:       8.3,
            imdb_id: '3963482',
            id:      's01e03',
            title:   $('<div/>').html('Smart Money&#39;s on the Skinny Bitch').text(),
            rating:  '8.3',
            votes:   '1961'
          },
        
          {
            x:       4,
            y:       8.9,
            imdb_id: '3887950',
            id:      's01e04',
            title:   $('<div/>').html('What&#39;s Going On?').text(),
            rating:  '8.9',
            votes:   '2134'
          },
        
          {
            x:       5,
            y:       8.3,
            imdb_id: '3887958',
            id:      's01e05',
            title:   $('<div/>').html('Art Is Like Religion').text(),
            rating:  '8.3',
            votes:   '1753'
          },
        
          {
            x:       6,
            y:       8.6,
            imdb_id: '3963484',
            id:      's01e06',
            title:   $('<div/>').html('Demons').text(),
            rating:  '8.6',
            votes:   '1828'
          },
        
          {
            x:       7,
            y:       8.6,
            imdb_id: '3852470',
            id:      's01e07',
            title:   $('<div/>').html('WWN Double-D?').text(),
            rating:  '8.6',
            votes:   '1655'
          },
        
          {
            x:       8,
            y:       8.9,
            imdb_id: '3963678',
            id:      's01e08',
            title:   $('<div/>').html('We Will All Be Judged by the Courage of Our Hearts').text(),
            rating:  '8.9',
            votes:   '1733'
          },
        
          {
            x:       9,
            y:       8.4,
            imdb_id: '3963682',
            id:      's01e09',
            title:   $('<div/>').html('Death Doesn&#39;t Let You Say Goodbye').text(),
            rating:  '8.4',
            votes:   '1695'
          },
        
          {
            x:       10,
            y:       9.0,
            imdb_id: '3818892',
            id:      's01e10',
            title:   $('<div/>').html('What Is Human?').text(),
            rating:  '9.0',
            votes:   '1897'
          },
        
          {
            x:       11,
            y:       9.0,
            imdb_id: '3887882',
            id:      's01e11',
            title:   $('<div/>').html('Just Turn the Wheel and the Future Changes').text(),
            rating:  '9.0',
            votes:   '1768'
          },
        
          {
            x:       12,
            y:       9.2,
            imdb_id: '3887888',
            id:      's01e12',
            title:   $('<div/>').html('I Can&#39;t Leave Her').text(),
            rating:  '9.2',
            votes:   '2265'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// strangerThings
function strangerThings() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Stranger Things').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#caf279',
        data: [
        
          {
            x:       1,
            y:       8.6,
            imdb_id: '4593118',
            id:      's01e01',
            title:   $('<div/>').html('Chapter One: The Vanishing of Will Byers').text(),
            rating:  '8.6',
            votes:   '6686'
          },
        
          {
            x:       2,
            y:       8.6,
            imdb_id: '4593122',
            id:      's01e02',
            title:   $('<div/>').html('Chapter Two: The Weirdo on Maple Street').text(),
            rating:  '8.6',
            votes:   '5898'
          },
        
          {
            x:       3,
            y:       9.0,
            imdb_id: '4593126',
            id:      's01e03',
            title:   $('<div/>').html('Chapter Three: Holly, Jolly').text(),
            rating:  '9.0',
            votes:   '5796'
          },
        
          {
            x:       4,
            y:       9.0,
            imdb_id: '4593124',
            id:      's01e04',
            title:   $('<div/>').html('Chapter Four: The Body').text(),
            rating:  '9.0',
            votes:   '5555'
          },
        
          {
            x:       5,
            y:       8.9,
            imdb_id: '4593128',
            id:      's01e05',
            title:   $('<div/>').html('Chapter Five: The Flea and the Acrobat').text(),
            rating:  '8.9',
            votes:   '5203'
          },
        
          {
            x:       6,
            y:       9.0,
            imdb_id: '4593132',
            id:      's01e06',
            title:   $('<div/>').html('Chapter Six: The Monster').text(),
            rating:  '9.0',
            votes:   '5021'
          },
        
          {
            x:       7,
            y:       9.2,
            imdb_id: '4593134',
            id:      's01e07',
            title:   $('<div/>').html('Chapter Seven: The Bathtub').text(),
            rating:  '9.2',
            votes:   '5318'
          },
        
          {
            x:       8,
            y:       9.4,
            imdb_id: '4593138',
            id:      's01e08',
            title:   $('<div/>').html('Chapter Eight: The Upside Down').text(),
            rating:  '9.4',
            votes:   '6375'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// theCharacters

function theCharacters() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('The Characters').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f29c79',
        data: [
        
          {
            x:       1,
            y:       6.7,
            imdb_id: '5529818',
            id:      's01e01',
            title:   $('<div/>').html('Lauren Lapkus').text(),
            rating:  '6.7',
            votes:   '94'
          },
        
          {
            x:       2,
            y:       6.2,
            imdb_id: '5529824',
            id:      's01e02',
            title:   $('<div/>').html('John Early').text(),
            rating:  '6.2',
            votes:   '72'
          },
        
          {
            x:       3,
            y:       7.1,
            imdb_id: '5529826',
            id:      's01e03',
            title:   $('<div/>').html('Henry Zebrowski').text(),
            rating:  '7.1',
            votes:   '66'
          },
        
          {
            x:       4,
            y:       6.8,
            imdb_id: '5529830',
            id:      's01e04',
            title:   $('<div/>').html('Kate Berlant').text(),
            rating:  '6.8',
            votes:   '53'
          },
        
          {
            x:       5,
            y:       8.2,
            imdb_id: '5529836',
            id:      's01e05',
            title:   $('<div/>').html('Natasha Rothwell').text(),
            rating:  '8.2',
            votes:   '55'
          },
        
          {
            x:       6,
            y:       6.5,
            imdb_id: '5529838',
            id:      's01e06',
            title:   $('<div/>').html('Paul W. Downs').text(),
            rating:  '6.5',
            votes:   '43'
          },
        
          {
            x:       7,
            y:       7.9,
            imdb_id: '5529840',
            id:      's01e07',
            title:   $('<div/>').html('Tim Robinson').text(),
            rating:  '7.9',
            votes:   '49'
          },
        
          {
            x:       8,
            y:       7.1,
            imdb_id: '5529846',
            id:      's01e08',
            title:   $('<div/>').html('Dr. Brown').text(),
            rating:  '7.1',
            votes:   '40'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// theGetDown
function theGetDown() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('The Get Down').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f1f2',
        data: [
        
          {
            x:       1,
            y:       8.5,
            imdb_id: '4611880',
            id:      's01e01',
            title:   $('<div/>').html('Where There Is Ruin, There Is Hope for a Treasure').text(),
            rating:  '8.5',
            votes:   '581'
          },
        
          {
            x:       2,
            y:       8.5,
            imdb_id: '4617332',
            id:      's01e02',
            title:   $('<div/>').html('Seek Those Who Fan Your Flames').text(),
            rating:  '8.5',
            votes:   '365'
          },
        
          {
            x:       3,
            y:       8.6,
            imdb_id: '4617334',
            id:      's01e03',
            title:   $('<div/>').html('Darkness Is Your Candle').text(),
            rating:  '8.6',
            votes:   '342'
          },
        
          {
            x:       4,
            y:       8.5,
            imdb_id: '4617338',
            id:      's01e04',
            title:   $('<div/>').html('Forget Safety, Be Notorious').text(),
            rating:  '8.5',
            votes:   '297'
          },
        
          {
            x:       5,
            y:       9.1,
            imdb_id: '4617340',
            id:      's01e05',
            title:   $('<div/>').html('You Have Wings, Learn to Fly').text(),
            rating:  '9.1',
            votes:   '341'
          },
        
          {
            x:       6,
            y:       9.4,
            imdb_id: '4617342',
            id:      's01e06',
            title:   $('<div/>').html('Raise Your Words, Not Your Voice').text(),
            rating:  '9.4',
            votes:   '433'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// The Killing
function theKilling() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('The Killing').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#f2d079',
        data: [
        
          {
            x:       1,
            y:       8.3,
            imdb_id: '1729484',
            id:      's01e01',
            title:   $('<div/>').html('Pilot').text(),
            rating:  '8.3',
            votes:   '1126'
          },
        
          {
            x:       2,
            y:       8.2,
            imdb_id: '1769191',
            id:      's01e02',
            title:   $('<div/>').html('The Cage').text(),
            rating:  '8.2',
            votes:   '818'
          },
        
          {
            x:       3,
            y:       8.1,
            imdb_id: '1793155',
            id:      's01e03',
            title:   $('<div/>').html('El Diablo').text(),
            rating:  '8.1',
            votes:   '780'
          },
        
          {
            x:       4,
            y:       8.0,
            imdb_id: '1792692',
            id:      's01e04',
            title:   $('<div/>').html('A Soundless Echo').text(),
            rating:  '8.0',
            votes:   '695'
          },
        
          {
            x:       5,
            y:       8.0,
            imdb_id: '1792693',
            id:      's01e05',
            title:   $('<div/>').html('Super 8').text(),
            rating:  '8.0',
            votes:   '699'
          },
        
          {
            x:       6,
            y:       8.2,
            imdb_id: '1861182',
            id:      's01e06',
            title:   $('<div/>').html('What You Have Left').text(),
            rating:  '8.2',
            votes:   '690'
          },
        
          {
            x:       7,
            y:       8.1,
            imdb_id: '1861183',
            id:      's01e07',
            title:   $('<div/>').html('Vengeance').text(),
            rating:  '8.1',
            votes:   '669'
          },
        
          {
            x:       8,
            y:       8.1,
            imdb_id: '1861184',
            id:      's01e08',
            title:   $('<div/>').html('Stonewalled').text(),
            rating:  '8.1',
            votes:   '665'
          },
        
          {
            x:       9,
            y:       8.4,
            imdb_id: '1861185',
            id:      's01e09',
            title:   $('<div/>').html('Undertow').text(),
            rating:  '8.4',
            votes:   '662'
          },
        
          {
            x:       10,
            y:       8.3,
            imdb_id: '1861186',
            id:      's01e10',
            title:   $('<div/>').html('I&#39;ll Let You Know When I Get There').text(),
            rating:  '8.3',
            votes:   '664'
          },
        
          {
            x:       11,
            y:       7.8,
            imdb_id: '1861179',
            id:      's01e11',
            title:   $('<div/>').html('Missing').text(),
            rating:  '7.8',
            votes:   '764'
          },
        
          {
            x:       12,
            y:       8.8,
            imdb_id: '1861180',
            id:      's01e12',
            title:   $('<div/>').html('Beau Soleil').text(),
            rating:  '8.8',
            votes:   '743'
          },
        
          {
            x:       13,
            y:       8.4,
            imdb_id: '1861181',
            id:      's01e13',
            title:   $('<div/>').html('Orpheus Descending').text(),
            rating:  '8.4',
            votes:   '822'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#ad79f2',
        data: [
        
          {
            x:       14,
            y:       8.3,
            imdb_id: '1964127',
            id:      's02e01',
            title:   $('<div/>').html('Reflections').text(),
            rating:  '8.3',
            votes:   '643'
          },
        
          {
            x:       15,
            y:       8.2,
            imdb_id: '1964132',
            id:      's02e02',
            title:   $('<div/>').html('My Lucky Day').text(),
            rating:  '8.2',
            votes:   '606'
          },
        
          {
            x:       16,
            y:       7.8,
            imdb_id: '1964133',
            id:      's02e03',
            title:   $('<div/>').html('Numb').text(),
            rating:  '7.8',
            votes:   '565'
          },
        
          {
            x:       17,
            y:       8.1,
            imdb_id: '1964134',
            id:      's02e04',
            title:   $('<div/>').html('Ogi Jun').text(),
            rating:  '8.1',
            votes:   '461'
          },
        
          {
            x:       18,
            y:       8.0,
            imdb_id: '1964135',
            id:      's02e05',
            title:   $('<div/>').html('Ghosts of the Past').text(),
            rating:  '8.0',
            votes:   '538'
          },
        
          {
            x:       19,
            y:       7.9,
            imdb_id: '1964136',
            id:      's02e06',
            title:   $('<div/>').html('Openings').text(),
            rating:  '7.9',
            votes:   '529'
          },
        
          {
            x:       20,
            y:       8.3,
            imdb_id: '1964137',
            id:      's02e07',
            title:   $('<div/>').html('Keylela').text(),
            rating:  '8.3',
            votes:   '541'
          },
        
          {
            x:       21,
            y:       8.3,
            imdb_id: '1964138',
            id:      's02e08',
            title:   $('<div/>').html('Off the Reservation').text(),
            rating:  '8.3',
            votes:   '544'
          },
        
          {
            x:       22,
            y:       8.5,
            imdb_id: '1964139',
            id:      's02e09',
            title:   $('<div/>').html('Sayonara, Hiawatha').text(),
            rating:  '8.5',
            votes:   '548'
          },
        
          {
            x:       23,
            y:       8.1,
            imdb_id: '1964128',
            id:      's02e10',
            title:   $('<div/>').html('72 Hours').text(),
            rating:  '8.1',
            votes:   '558'
          },
        
          {
            x:       24,
            y:       8.6,
            imdb_id: '1964129',
            id:      's02e11',
            title:   $('<div/>').html('Bulldog').text(),
            rating:  '8.6',
            votes:   '561'
          },
        
          {
            x:       25,
            y:       8.8,
            imdb_id: '1964130',
            id:      's02e12',
            title:   $('<div/>').html('Donnie or Marie').text(),
            rating:  '8.8',
            votes:   '593'
          },
        
          {
            x:       26,
            y:       9.3,
            imdb_id: '1964131',
            id:      's02e13',
            title:   $('<div/>').html('What I Know').text(),
            rating:  '9.3',
            votes:   '1019'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#79f28a',
        data: [
        
          {
            x:       27,
            y:       8.3,
            imdb_id: '2583900',
            id:      's03e01',
            title:   $('<div/>').html('The Jungle').text(),
            rating:  '8.3',
            votes:   '736'
          },
        
          {
            x:       28,
            y:       8.5,
            imdb_id: '2640652',
            id:      's03e02',
            title:   $('<div/>').html('That You Fear the Most').text(),
            rating:  '8.5',
            votes:   '650'
          },
        
          {
            x:       29,
            y:       8.4,
            imdb_id: '2640668',
            id:      's03e03',
            title:   $('<div/>').html('Seventeen').text(),
            rating:  '8.4',
            votes:   '545'
          },
        
          {
            x:       30,
            y:       8.2,
            imdb_id: '2640672',
            id:      's03e04',
            title:   $('<div/>').html('Head Shots').text(),
            rating:  '8.2',
            votes:   '519'
          },
        
          {
            x:       31,
            y:       8.4,
            imdb_id: '2722616',
            id:      's03e05',
            title:   $('<div/>').html('Scared and Running').text(),
            rating:  '8.4',
            votes:   '505'
          },
        
          {
            x:       32,
            y:       8.2,
            imdb_id: '2722618',
            id:      's03e06',
            title:   $('<div/>').html('Eminent Domain').text(),
            rating:  '8.2',
            votes:   '501'
          },
        
          {
            x:       33,
            y:       8.4,
            imdb_id: '2722620',
            id:      's03e07',
            title:   $('<div/>').html('Hope Kills').text(),
            rating:  '8.4',
            votes:   '500'
          },
        
          {
            x:       34,
            y:       8.7,
            imdb_id: '2722622',
            id:      's03e08',
            title:   $('<div/>').html('Try').text(),
            rating:  '8.7',
            votes:   '545'
          },
        
          {
            x:       35,
            y:       9.0,
            imdb_id: '2737334',
            id:      's03e09',
            title:   $('<div/>').html('Reckoning').text(),
            rating:  '9.0',
            votes:   '640'
          },
        
          {
            x:       36,
            y:       9.3,
            imdb_id: '2737340',
            id:      's03e10',
            title:   $('<div/>').html('Six Minutes').text(),
            rating:  '9.3',
            votes:   '916'
          },
        
          {
            x:       37,
            y:       8.8,
            imdb_id: '2737342',
            id:      's03e11',
            title:   $('<div/>').html('From Up Here').text(),
            rating:  '8.8',
            votes:   '539'
          },
        
          {
            x:       38,
            y:       8.9,
            imdb_id: '2737344',
            id:      's03e12',
            title:   $('<div/>').html('The Road to Hamelin').text(),
            rating:  '8.9',
            votes:   '710'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 4',
        color: '#f2798b',
        data: [
        
          {
            x:       39,
            y:       8.6,
            imdb_id: '3355104',
            id:      's04e01',
            title:   $('<div/>').html('Blood in the Water').text(),
            rating:  '8.6',
            votes:   '671'
          },
        
          {
            x:       40,
            y:       8.7,
            imdb_id: '3458804',
            id:      's04e02',
            title:   $('<div/>').html('Unraveling').text(),
            rating:  '8.7',
            votes:   '593'
          },
        
          {
            x:       41,
            y:       8.8,
            imdb_id: '3458806',
            id:      's04e03',
            title:   $('<div/>').html('The Good Soldier').text(),
            rating:  '8.8',
            votes:   '544'
          },
        
          {
            x:       42,
            y:       8.9,
            imdb_id: '3458808',
            id:      's04e04',
            title:   $('<div/>').html('Dream Baby Dream').text(),
            rating:  '8.9',
            votes:   '561'
          },
        
          {
            x:       43,
            y:       8.7,
            imdb_id: '3458810',
            id:      's04e05',
            title:   $('<div/>').html('Truth Asunder').text(),
            rating:  '8.7',
            votes:   '563'
          },
        
          {
            x:       44,
            y:       9.2,
            imdb_id: '3458812',
            id:      's04e06',
            title:   $('<div/>').html('Eden').text(),
            rating:  '9.2',
            votes:   '1015'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};

// The Ranch
function theRanch() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('The Ranch').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79c9f2',
        data: [
        
          {
            x:       1,
            y:       7.0,
            imdb_id: '5348920',
            id:      's01e01',
            title:   $('<div/>').html('Back Where I Come From').text(),
            rating:  '7.0',
            votes:   '391'
          },
        
          {
            x:       2,
            y:       7.6,
            imdb_id: '5432116',
            id:      's01e02',
            title:   $('<div/>').html('Some People Change').text(),
            rating:  '7.6',
            votes:   '281'
          },
        
          {
            x:       3,
            y:       7.9,
            imdb_id: '5555050',
            id:      's01e03',
            title:   $('<div/>').html('The Boys of Fall').text(),
            rating:  '7.9',
            votes:   '249'
          },
        
          {
            x:       4,
            y:       8.1,
            imdb_id: '5555124',
            id:      's01e04',
            title:   $('<div/>').html('Got a Little Crazy').text(),
            rating:  '8.1',
            votes:   '229'
          },
        
          {
            x:       5,
            y:       7.9,
            imdb_id: '5578812',
            id:      's01e05',
            title:   $('<div/>').html('American Kids').text(),
            rating:  '7.9',
            votes:   '220'
          },
        
          {
            x:       6,
            y:       7.9,
            imdb_id: '5555132',
            id:      's01e06',
            title:   $('<div/>').html('Better as a Memory').text(),
            rating:  '7.9',
            votes:   '209'
          },
        
          {
            x:       7,
            y:       8.5,
            imdb_id: '5555134',
            id:      's01e07',
            title:   $('<div/>').html('I Can&#39;t Go There').text(),
            rating:  '8.5',
            votes:   '208'
          },
        
          {
            x:       8,
            y:       8.3,
            imdb_id: '5555136',
            id:      's01e08',
            title:   $('<div/>').html('Til It&#39;s Gone').text(),
            rating:  '8.3',
            votes:   '200'
          },
        
          {
            x:       9,
            y:       8.6,
            imdb_id: '5555138',
            id:      's01e09',
            title:   $('<div/>').html('There Goes My Life').text(),
            rating:  '8.6',
            votes:   '240'
          },
        
          {
            x:       10,
            y:       8.6,
            imdb_id: '5555144',
            id:      's01e10',
            title:   $('<div/>').html('Down the Road').text(),
            rating:  '8.6',
            votes:   '257'
          },
        
          {
            x:       11,
            y:       8.1,
            imdb_id: '6120602',
            id:      's01e11',
            title:   $('<div/>').html('Gone as a Girl Can Get').text(),
            rating:  '8.1',
            votes:   '71'
          },
        
          {
            x:       12,
            y:       8.2,
            imdb_id: '6120604',
            id:      's01e12',
            title:   $('<div/>').html('Living and Living Well').text(),
            rating:  '8.2',
            votes:   '60'
          },
        
          {
            x:       13,
            y:       8.1,
            imdb_id: '6120606',
            id:      's01e13',
            title:   $('<div/>').html('Sittin&#39; on the Fence').text(),
            rating:  '8.1',
            votes:   '57'
          },
        
          {
            x:       14,
            y:       8.4,
            imdb_id: '6120608',
            id:      's01e14',
            title:   $('<div/>').html('Let&#39;s Fall to Pieces Together').text(),
            rating:  '8.4',
            votes:   '55'
          },
        
          {
            x:       15,
            y:       8.4,
            imdb_id: '6120610',
            id:      's01e15',
            title:   $('<div/>').html('I Know She Still Loves Me').text(),
            rating:  '8.4',
            votes:   '53'
          },
        
          {
            x:       16,
            y:       8.3,
            imdb_id: '6120614',
            id:      's01e16',
            title:   $('<div/>').html('Easy Come, Easy Go').text(),
            rating:  '8.3',
            votes:   '51'
          },
        
          {
            x:       17,
            y:       8.2,
            imdb_id: '6120616',
            id:      's01e17',
            title:   $('<div/>').html('I&#39;ve Come to Expect It from You').text(),
            rating:  '8.2',
            votes:   '44'
          },
        
          {
            x:       18,
            y:       8.6,
            imdb_id: '6120618',
            id:      's01e18',
            title:   $('<div/>').html('The Cowboy Rides Away').text(),
            rating:  '8.6',
            votes:   '42'
          },
        
          {
            x:       19,
            y:       8.6,
            imdb_id: '6120620',
            id:      's01e19',
            title:   $('<div/>').html('Leavin&#39; Been Comin&#39; (For a Long, Long Time)').text(),
            rating:  '8.6',
            votes:   '40'
          },
        
          {
            x:       20,
            y:       9.1,
            imdb_id: '5678008',
            id:      's01e20',
            title:   $('<div/>').html('Merry Christmas (Wherever You Are)').text(),
            rating:  '9.1',
            votes:   '57'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Unbreakable Kimmy Schmidt
function unbreakableKimmySchmidt() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Unbreakable Kimmy Schmidt').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2df',
        data: [
        
          {
            x:       1,
            y:       7.6,
            imdb_id: '3651920',
            id:      's01e01',
            title:   $('<div/>').html('Kimmy Goes Outside!').text(),
            rating:  '7.6',
            votes:   '1009'
          },
        
          {
            x:       2,
            y:       7.6,
            imdb_id: '4073070',
            id:      's01e02',
            title:   $('<div/>').html('Kimmy Gets a Job!').text(),
            rating:  '7.6',
            votes:   '831'
          },
        
          {
            x:       3,
            y:       8.0,
            imdb_id: '4073074',
            id:      's01e03',
            title:   $('<div/>').html('Kimmy Goes on a Date!').text(),
            rating:  '8.0',
            votes:   '775'
          },
        
          {
            x:       4,
            y:       7.8,
            imdb_id: '4003750',
            id:      's01e04',
            title:   $('<div/>').html('Kimmy Goes to the Doctor!').text(),
            rating:  '7.8',
            votes:   '765'
          },
        
          {
            x:       5,
            y:       8.1,
            imdb_id: '4045202',
            id:      's01e05',
            title:   $('<div/>').html('Kimmy Kisses a Boy!').text(),
            rating:  '8.1',
            votes:   '718'
          },
        
          {
            x:       6,
            y:       8.0,
            imdb_id: '4045602',
            id:      's01e06',
            title:   $('<div/>').html('Kimmy Goes to School!').text(),
            rating:  '8.0',
            votes:   '702'
          },
        
          {
            x:       7,
            y:       8.4,
            imdb_id: '4244338',
            id:      's01e07',
            title:   $('<div/>').html('Kimmy Goes to a Party!').text(),
            rating:  '8.4',
            votes:   '733'
          },
        
          {
            x:       8,
            y:       8.0,
            imdb_id: '4095962',
            id:      's01e08',
            title:   $('<div/>').html('Kimmy Is Bad at Math!').text(),
            rating:  '8.0',
            votes:   '658'
          },
        
          {
            x:       9,
            y:       8.0,
            imdb_id: '4227928',
            id:      's01e09',
            title:   $('<div/>').html('Kimmy Has a Birthday!').text(),
            rating:  '8.0',
            votes:   '681'
          },
        
          {
            x:       10,
            y:       8.4,
            imdb_id: '4151942',
            id:      's01e10',
            title:   $('<div/>').html('Kimmy&#39;s in a Love Triangle!').text(),
            rating:  '8.4',
            votes:   '688'
          },
        
          {
            x:       11,
            y:       8.0,
            imdb_id: '4163494',
            id:      's01e11',
            title:   $('<div/>').html('Kimmy Rides a Bike!').text(),
            rating:  '8.0',
            votes:   '637'
          },
        
          {
            x:       12,
            y:       7.9,
            imdb_id: '4249120',
            id:      's01e12',
            title:   $('<div/>').html('Kimmy Goes to Court!').text(),
            rating:  '7.9',
            votes:   '622'
          },
        
          {
            x:       13,
            y:       8.1,
            imdb_id: '4249128',
            id:      's01e13',
            title:   $('<div/>').html('Kimmy Makes Waffles!').text(),
            rating:  '8.1',
            votes:   '617'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#f2bb79',
        data: [
        
          {
            x:       14,
            y:       7.5,
            imdb_id: '4385544',
            id:      's02e01',
            title:   $('<div/>').html('Kimmy Goes Roller Skating!').text(),
            rating:  '7.5',
            votes:   '486'
          },
        
          {
            x:       15,
            y:       7.9,
            imdb_id: '4392258',
            id:      's02e02',
            title:   $('<div/>').html('Kimmy Goes on a Playdate!').text(),
            rating:  '7.9',
            votes:   '421'
          },
        
          {
            x:       16,
            y:       7.8,
            imdb_id: '4498790',
            id:      's02e03',
            title:   $('<div/>').html('Kimmy Goes to a Play!').text(),
            rating:  '7.8',
            votes:   '423'
          },
        
          {
            x:       17,
            y:       8.0,
            imdb_id: '4498792',
            id:      's02e04',
            title:   $('<div/>').html('Kimmy Kidnaps Gretchen!').text(),
            rating:  '8.0',
            votes:   '407'
          },
        
          {
            x:       18,
            y:       7.8,
            imdb_id: '4498794',
            id:      's02e05',
            title:   $('<div/>').html('Kimmy Gives Up!').text(),
            rating:  '7.8',
            votes:   '387'
          },
        
          {
            x:       19,
            y:       8.0,
            imdb_id: '4498796',
            id:      's02e06',
            title:   $('<div/>').html('Kimmy Drives a Car!').text(),
            rating:  '8.0',
            votes:   '367'
          },
        
          {
            x:       20,
            y:       8.2,
            imdb_id: '4503570',
            id:      's02e07',
            title:   $('<div/>').html('Kimmy Walks Into a Bar!').text(),
            rating:  '8.2',
            votes:   '358'
          },
        
          {
            x:       21,
            y:       7.9,
            imdb_id: '4503582',
            id:      's02e08',
            title:   $('<div/>').html('Kimmy Goes to a Hotel!').text(),
            rating:  '7.9',
            votes:   '339'
          },
        
          {
            x:       22,
            y:       8.7,
            imdb_id: '4503596',
            id:      's02e09',
            title:   $('<div/>').html('Kimmy Meets a Drunk Lady!').text(),
            rating:  '8.7',
            votes:   '437'
          },
        
          {
            x:       23,
            y:       8.2,
            imdb_id: '4503604',
            id:      's02e10',
            title:   $('<div/>').html('Kimmy Goes to Her Happy Place!').text(),
            rating:  '8.2',
            votes:   '353'
          },
        
          {
            x:       24,
            y:       8.0,
            imdb_id: '4503608',
            id:      's02e11',
            title:   $('<div/>').html('Kimmy Meets a Celebrity!').text(),
            rating:  '8.0',
            votes:   '330'
          },
        
          {
            x:       25,
            y:       8.0,
            imdb_id: '4503610',
            id:      's02e12',
            title:   $('<div/>').html('Kimmy Sees a Sunset!').text(),
            rating:  '8.0',
            votes:   '311'
          },
        
          {
            x:       26,
            y:       8.5,
            imdb_id: '4385548',
            id:      's02e13',
            title:   $('<div/>').html('Kimmy Finds Her Mom!').text(),
            rating:  '8.5',
            votes:   '358'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// TrailerParkBoys

function trailerParkBoys(){
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Trailer Park Boys').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },

      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [    
      {
        name: 'Season 8',
        color: '#79f2dc',
        data: [
        
          {
            x:       57,
            y:       8.6,
            imdb_id: '3164216',
            id:      's08e01',
            title:   $('<div/>').html('Money Can Suck My Cock').text(),
            rating:  '8.6',
            votes:   '166'
          },
        
          {
            x:       58,
            y:       8.3,
            imdb_id: '3209300',
            id:      's08e02',
            title:   $('<div/>').html('The Fuckin&#39; V-Team').text(),
            rating:  '8.3',
            votes:   '124'
          },
        
          {
            x:       59,
            y:       8.5,
            imdb_id: '3209332',
            id:      's08e03',
            title:   $('<div/>').html('The Dirty Dancer').text(),
            rating:  '8.5',
            votes:   '118'
          },
        
          {
            x:       60,
            y:       8.4,
            imdb_id: '3209378',
            id:      's08e04',
            title:   $('<div/>').html('Orangie&#39;s Pretty Fuckin&#39; Tough').text(),
            rating:  '8.4',
            votes:   '117'
          },
        
          {
            x:       61,
            y:       8.5,
            imdb_id: '3209398',
            id:      's08e05',
            title:   $('<div/>').html('Whore-A-Geddon').text(),
            rating:  '8.5',
            votes:   '117'
          },
        
          {
            x:       62,
            y:       8.6,
            imdb_id: '3209404',
            id:      's08e06',
            title:   $('<div/>').html('Friends with the Benedicts').text(),
            rating:  '8.6',
            votes:   '116'
          },
        
          {
            x:       63,
            y:       8.1,
            imdb_id: '3209406',
            id:      's08e07',
            title:   $('<div/>').html('Community Service and a Boner Made with Love').text(),
            rating:  '8.1',
            votes:   '113'
          },
        
          {
            x:       64,
            y:       8.1,
            imdb_id: '3209410',
            id:      's08e08',
            title:   $('<div/>').html('The Super-Duper-Industrial-Bubbles-Honey-Oil-Inator').text(),
            rating:  '8.1',
            votes:   '103'
          },
        
          {
            x:       65,
            y:       8.1,
            imdb_id: '3209414',
            id:      's08e09',
            title:   $('<div/>').html('Righties Loosies, Lefties Tighties').text(),
            rating:  '8.1',
            votes:   '103'
          },
        
          {
            x:       66,
            y:       8.5,
            imdb_id: '3174930',
            id:      's08e10',
            title:   $('<div/>').html('Crawling Through the Shitpipe').text(),
            rating:  '8.5',
            votes:   '113'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 9',
        color: '#f2b979',
        data: [
        
          {
            x:       67,
            y:       7.8,
            imdb_id: '3579928',
            id:      's09e01',
            title:   $('<div/>').html('Why in the Fuck Is My Trailer Pink?').text(),
            rating:  '7.8',
            votes:   '107'
          },
        
          {
            x:       68,
            y:       7.9,
            imdb_id: '3742400',
            id:      's09e02',
            title:   $('<div/>').html('A Stable Fucking Environment').text(),
            rating:  '7.9',
            votes:   '96'
          },
        
          {
            x:       69,
            y:       8.0,
            imdb_id: '3791520',
            id:      's09e03',
            title:   $('<div/>').html('Anointed in Liquor').text(),
            rating:  '8.0',
            votes:   '86'
          },
        
          {
            x:       70,
            y:       7.9,
            imdb_id: '3788104',
            id:      's09e04',
            title:   $('<div/>').html('George Green: Industrial Cock Inhaler').text(),
            rating:  '7.9',
            votes:   '79'
          },
        
          {
            x:       71,
            y:       7.9,
            imdb_id: '3757674',
            id:      's09e05',
            title:   $('<div/>').html('The Motel Can&#39;t Live at the Motel').text(),
            rating:  '7.9',
            votes:   '83'
          },
        
          {
            x:       72,
            y:       7.9,
            imdb_id: '3757676',
            id:      's09e06',
            title:   $('<div/>').html('Sweet Liquory Load').text(),
            rating:  '7.9',
            votes:   '85'
          },
        
          {
            x:       73,
            y:       8.2,
            imdb_id: '3757682',
            id:      's09e07',
            title:   $('<div/>').html('Piss').text(),
            rating:  '8.2',
            votes:   '91'
          },
        
          {
            x:       74,
            y:       7.9,
            imdb_id: '3757688',
            id:      's09e08',
            title:   $('<div/>').html('A Dancer for Money').text(),
            rating:  '7.9',
            votes:   '78'
          },
        
          {
            x:       75,
            y:       8.0,
            imdb_id: '3757716',
            id:      's09e09',
            title:   $('<div/>').html('Sam-Squamptches and Heli-Cocksuckers').text(),
            rating:  '8.0',
            votes:   '87'
          },
        
          {
            x:       76,
            y:       8.2,
            imdb_id: '3757718',
            id:      's09e10',
            title:   $('<div/>').html('The Liquor Snurf').text(),
            rating:  '8.2',
            votes:   '88'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 4',
        color: '#f2797a',
        data: [
        
          {
            x:       22,
            y:       9.2,
            imdb_id: '0732916',
            id:      's04e01',
            title:   $('<div/>').html('Never Cry Shitwolf').text(),
            rating:  '9.2',
            votes:   '204'
          },
        
          {
            x:       23,
            y:       9.1,
            imdb_id: '0732899',
            id:      's04e02',
            title:   $('<div/>').html('A Man&#39;s Gotta Eat').text(),
            rating:  '9.1',
            votes:   '207'
          },
        
          {
            x:       24,
            y:       9.1,
            imdb_id: '0732919',
            id:      's04e03',
            title:   $('<div/>').html('Rub n Tiz&#39;zug').text(),
            rating:  '9.1',
            votes:   '204'
          },
        
          {
            x:       25,
            y:       9.2,
            imdb_id: '0732925',
            id:      's04e04',
            title:   $('<div/>').html('The Green Bastard').text(),
            rating:  '9.2',
            votes:   '219'
          },
        
          {
            x:       26,
            y:       9.4,
            imdb_id: '0732902',
            id:      's04e05',
            title:   $('<div/>').html('Conky').text(),
            rating:  '9.4',
            votes:   '258'
          },
        
          {
            x:       27,
            y:       9.1,
            imdb_id: '0795903',
            id:      's04e06',
            title:   $('<div/>').html('If You Love Something, Set It Free').text(),
            rating:  '9.1',
            votes:   '209'
          },
        
          {
            x:       28,
            y:       9.2,
            imdb_id: '0732918',
            id:      's04e07',
            title:   $('<div/>').html('Propane, Propane').text(),
            rating:  '9.2',
            votes:   '200'
          },
        
          {
            x:       29,
            y:       9.3,
            imdb_id: '0732934',
            id:      's04e08',
            title:   $('<div/>').html('Workin&#39; Man').text(),
            rating:  '9.3',
            votes:   '206'
          },
        
          {
            x:       30,
            y:       9.2,
            imdb_id: '0732903',
            id:      's04e09',
            title:   $('<div/>').html('Dear Santa Claus: Go Fuck Yourself').text(),
            rating:  '9.2',
            votes:   '188'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 5',
        color: '#799df2',
        data: [
        
          {
            x:       31,
            y:       9.1,
            imdb_id: '0732907',
            id:      's05e01',
            title:   $('<div/>').html('Give Peace a Chance').text(),
            rating:  '9.1',
            votes:   '187'
          },
        
          {
            x:       32,
            y:       9.2,
            imdb_id: '0732928',
            id:      's05e02',
            title:   $('<div/>').html('The Shit Puppets').text(),
            rating:  '9.2',
            votes:   '183'
          },
        
          {
            x:       33,
            y:       9.2,
            imdb_id: '0732924',
            id:      's05e03',
            title:   $('<div/>').html('The Fuckin&#39; Way She Goes').text(),
            rating:  '9.2',
            votes:   '195'
          },
        
          {
            x:       34,
            y:       9.1,
            imdb_id: '0732935',
            id:      's05e04',
            title:   $('<div/>').html('You Got to Blame the Thing Up Here').text(),
            rating:  '9.1',
            votes:   '181'
          },
        
          {
            x:       35,
            y:       9.2,
            imdb_id: '0732913',
            id:      's05e05',
            title:   $('<div/>').html('Mr. Lahey Is a Fuckin&#39; Drunk, and He Always Will Be').text(),
            rating:  '9.2',
            votes:   '192'
          },
        
          {
            x:       36,
            y:       9.1,
            imdb_id: '0732904',
            id:      's05e06',
            title:   $('<div/>').html('Don&#39;t Cross the Shitline').text(),
            rating:  '9.1',
            votes:   '183'
          },
        
          {
            x:       37,
            y:       9.2,
            imdb_id: '0732929',
            id:      's05e07',
            title:   $('<div/>').html('The Winds of Shit').text(),
            rating:  '9.2',
            votes:   '186'
          },
        
          {
            x:       38,
            y:       9.0,
            imdb_id: '0732905',
            id:      's05e08',
            title:   $('<div/>').html('Dressed All Over &amp; Zesty Mordant').text(),
            rating:  '9.0',
            votes:   '178'
          },
        
          {
            x:       39,
            y:       9.3,
            imdb_id: '0732908',
            id:      's05e09',
            title:   $('<div/>').html('I Am the Liquor').text(),
            rating:  '9.3',
            votes:   '196'
          },
        
          {
            x:       40,
            y:       9.4,
            imdb_id: '0732927',
            id:      's05e10',
            title:   $('<div/>').html('The Shit Blizzard').text(),
            rating:  '9.4',
            votes:   '197'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 6',
        color: '#c1f279',
        data: [
        
          {
            x:       41,
            y:       8.6,
            imdb_id: '0795017',
            id:      's06e01',
            title:   $('<div/>').html('The Way of the Road').text(),
            rating:  '8.6',
            votes:   '145'
          },
        
          {
            x:       42,
            y:       8.6,
            imdb_id: '0795016',
            id:      's06e02',
            title:   $('<div/>').html('The Cheeseburger Picnic').text(),
            rating:  '8.6',
            votes:   '137'
          },
        
          {
            x:       43,
            y:       9.1,
            imdb_id: '0798773',
            id:      's06e03',
            title:   $('<div/>').html('High Definition Piss Jugs').text(),
            rating:  '9.1',
            votes:   '155'
          },
        
          {
            x:       44,
            y:       8.8,
            imdb_id: '0803724',
            id:      's06e04',
            title:   $('<div/>').html('Where in the Fuck Is Oscar Goldman?').text(),
            rating:  '8.8',
            votes:   '149'
          },
        
          {
            x:       45,
            y:       9.1,
            imdb_id: '0803723',
            id:      's06e05',
            title:   $('<div/>').html('Halloween 1977').text(),
            rating:  '9.1',
            votes:   '175'
          },
        
          {
            x:       46,
            y:       9.3,
            imdb_id: '0809898',
            id:      's06e06',
            title:   $('<div/>').html('Gimme My Fuckin Money or Randy&#39;s Dead').text(),
            rating:  '9.3',
            votes:   '175'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 7',
        color: '#f279e4',
        data: [
        
          {
            x:       47,
            y:       8.5,
            imdb_id: '1000552',
            id:      's07e01',
            title:   $('<div/>').html('I Fuckin&#39; Miss Cory and Trevor').text(),
            rating:  '8.5',
            votes:   '148'
          },
        
          {
            x:       48,
            y:       8.4,
            imdb_id: '1006252',
            id:      's07e02',
            title:   $('<div/>').html('I Banged Lucy and Knocked Her Up... No Big Deal').text(),
            rating:  '8.4',
            votes:   '130'
          },
        
          {
            x:       49,
            y:       9.1,
            imdb_id: '1006254',
            id:      's07e03',
            title:   $('<div/>').html('Three Good Men Are Dead').text(),
            rating:  '9.1',
            votes:   '145'
          },
        
          {
            x:       50,
            y:       8.7,
            imdb_id: '0992775',
            id:      's07e04',
            title:   $('<div/>').html('Friends of the Road').text(),
            rating:  '8.7',
            votes:   '134'
          },
        
          {
            x:       51,
            y:       8.7,
            imdb_id: '1006253',
            id:      's07e05',
            title:   $('<div/>').html('The Mustard Tiger').text(),
            rating:  '8.7',
            votes:   '132'
          },
        
          {
            x:       52,
            y:       8.7,
            imdb_id: '1026371',
            id:      's07e06',
            title:   $('<div/>').html('We Can&#39;t Call People Without Wings Angels So We Call Them Friends').text(),
            rating:  '8.7',
            votes:   '129'
          },
        
          {
            x:       53,
            y:       8.2,
            imdb_id: '1026368',
            id:      's07e07',
            title:   $('<div/>').html('Jump the Cheeseburger').text(),
            rating:  '8.2',
            votes:   '142'
          },
        
          {
            x:       54,
            y:       9.0,
            imdb_id: '1026369',
            id:      's07e08',
            title:   $('<div/>').html('Let the Liquor do the Thinking').text(),
            rating:  '9.0',
            votes:   '145'
          },
        
          {
            x:       55,
            y:       8.7,
            imdb_id: '1026367',
            id:      's07e09',
            title:   $('<div/>').html('Going Off the Rails on a Swayze Train').text(),
            rating:  '8.7',
            votes:   '134'
          },
        
          {
            x:       56,
            y:       9.4,
            imdb_id: '1026366',
            id:      's07e10',
            title:   $('<div/>').html('A Shit River Runs Through It').text(),
            rating:  '9.4',
            votes:   '237'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 1',
        color: '#f2e179',
        data: [
        
          {
            x:       1,
            y:       8.2,
            imdb_id: '0732920',
            id:      's01e01',
            title:   $('<div/>').html('Take Your Little Gun and Get Out of My Trailer Park').text(),
            rating:  '8.2',
            votes:   '337'
          },
        
          {
            x:       2,
            y:       8.5,
            imdb_id: '0732906',
            id:      's01e02',
            title:   $('<div/>').html('Fuck Community College. Let&#39;s Get Drunk and Eat Chicken Fingers').text(),
            rating:  '8.5',
            votes:   '273'
          },
        
          {
            x:       3,
            y:       8.7,
            imdb_id: '0732914',
            id:      's01e03',
            title:   $('<div/>').html('Mr. Lahey&#39;s Got My Porno Tape!').text(),
            rating:  '8.7',
            votes:   '264'
          },
        
          {
            x:       4,
            y:       8.7,
            imdb_id: '0732915',
            id:      's01e04',
            title:   $('<div/>').html('Mrs. Peterson&#39;s Dog Gets Fucked Up').text(),
            rating:  '8.7',
            votes:   '247'
          },
        
          {
            x:       5,
            y:       8.7,
            imdb_id: '0732909',
            id:      's01e05',
            title:   $('<div/>').html('I&#39;m Not Gay, I love Lucy. Wait a Second, Maybe I am Gay').text(),
            rating:  '8.7',
            votes:   '236'
          },
        
          {
            x:       6,
            y:       9.0,
            imdb_id: '0732932',
            id:      's01e06',
            title:   $('<div/>').html('Who the Hell Invited These Idiots to My Wedding?').text(),
            rating:  '9.0',
            votes:   '242'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#be79f2',
        data: [
        
          {
            x:       7,
            y:       9.0,
            imdb_id: '0732930',
            id:      's02e01',
            title:   $('<div/>').html('What in the Fuck Happened to Our Trailer Park?').text(),
            rating:  '9.0',
            votes:   '226'
          },
        
          {
            x:       8,
            y:       9.0,
            imdb_id: '0732912',
            id:      's02e02',
            title:   $('<div/>').html('Jim Lahey Is a Drunk Bastard').text(),
            rating:  '9.0',
            votes:   '216'
          },
        
          {
            x:       9,
            y:       9.1,
            imdb_id: '0732910',
            id:      's02e03',
            title:   $('<div/>').html('I&#39;ve Met Cats and Dogs Smarter Than Trevor and Cory').text(),
            rating:  '9.1',
            votes:   '220'
          },
        
          {
            x:       10,
            y:       9.0,
            imdb_id: '0732898',
            id:      's02e04',
            title:   $('<div/>').html('A Dope Trailer Is No Place for a Kitty').text(),
            rating:  '9.0',
            votes:   '226'
          },
        
          {
            x:       11,
            y:       9.2,
            imdb_id: '0732922',
            id:      's02e05',
            title:   $('<div/>').html('The Bible Pimp').text(),
            rating:  '9.2',
            votes:   '244'
          },
        
          {
            x:       12,
            y:       9.1,
            imdb_id: '0732917',
            id:      's02e06',
            title:   $('<div/>').html('Never Trust a Man with No Shirt On').text(),
            rating:  '9.1',
            votes:   '218'
          },
        
          {
            x:       13,
            y:       9.3,
            imdb_id: '0732923',
            id:      's02e07',
            title:   $('<div/>').html('The Bare Pimp Project').text(),
            rating:  '9.3',
            votes:   '238'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#79f29b',
        data: [
        
          {
            x:       14,
            y:       9.0,
            imdb_id: '0732926',
            id:      's03e01',
            title:   $('<div/>').html('The Kiss of Freedom').text(),
            rating:  '9.0',
            votes:   '209'
          },
        
          {
            x:       15,
            y:       9.1,
            imdb_id: '0732921',
            id:      's03e02',
            title:   $('<div/>').html('Temporary Relief Assistant Trailer Park Supervisor').text(),
            rating:  '9.1',
            votes:   '210'
          },
        
          {
            x:       16,
            y:       9.3,
            imdb_id: '0732911',
            id:      's03e03',
            title:   $('<div/>').html('If I Can&#39;t Smoke and Swear. I&#39;m Fucked').text(),
            rating:  '9.3',
            votes:   '240'
          },
        
          {
            x:       17,
            y:       9.2,
            imdb_id: '0732933',
            id:      's03e04',
            title:   $('<div/>').html('Who&#39;s the Microphone Assassin?').text(),
            rating:  '9.2',
            votes:   '231'
          },
        
          {
            x:       18,
            y:       9.5,
            imdb_id: '0732901',
            id:      's03e05',
            title:   $('<div/>').html('Closer to the Heart').text(),
            rating:  '9.5',
            votes:   '277'
          },
        
          {
            x:       19,
            y:       9.1,
            imdb_id: '0732931',
            id:      's03e06',
            title:   $('<div/>').html('Where in the Fuck Is Randy&#39;s Barbeque?').text(),
            rating:  '9.1',
            votes:   '217'
          },
        
          {
            x:       20,
            y:       9.0,
            imdb_id: '0798774',
            id:      's03e07',
            title:   $('<div/>').html('The Delusions of Officer Jim Lahey').text(),
            rating:  '9.0',
            votes:   '202'
          },
        
          {
            x:       21,
            y:       9.2,
            imdb_id: '0732900',
            id:      's03e08',
            title:   $('<div/>').html('A Shit Leopard Can&#39;t Change Its Spots').text(),
            rating:  '9.2',
            votes:   '212'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 10',
        color: '#9579f2',
        data: [
        
          {
            x:       77,
            y:       7.7,
            imdb_id: '4421186',
            id:      's10e01',
            title:   $('<div/>').html('Freedom 45?').text(),
            rating:  '7.7',
            votes:   '82'
          },
        
          {
            x:       78,
            y:       7.8,
            imdb_id: '4725346',
            id:      's10e02',
            title:   $('<div/>').html('You Want the Lot Fees, Suck Them Out of the Tip of My Cock').text(),
            rating:  '7.8',
            votes:   '65'
          },
        
          {
            x:       79,
            y:       7.7,
            imdb_id: '4761000',
            id:      's10e03',
            title:   $('<div/>').html('A Three Tiered Shit Dyke').text(),
            rating:  '7.7',
            votes:   '60'
          },
        
          {
            x:       80,
            y:       7.8,
            imdb_id: '4761006',
            id:      's10e04',
            title:   $('<div/>').html('Shit Covered Cave Teeth').text(),
            rating:  '7.8',
            votes:   '62'
          },
        
          {
            x:       81,
            y:       8.1,
            imdb_id: '4761004',
            id:      's10e05',
            title:   $('<div/>').html('If You Don&#39;t Believe It, It&#39;s Not Real').text(),
            rating:  '8.1',
            votes:   '63'
          },
        
          {
            x:       82,
            y:       7.1,
            imdb_id: '4725376',
            id:      's10e06',
            title:   $('<div/>').html('All the Fuckin Dope You Can Smoke').text(),
            rating:  '7.1',
            votes:   '57'
          },
        
          {
            x:       83,
            y:       7.3,
            imdb_id: '4725362',
            id:      's10e07',
            title:   $('<div/>').html('Up in Smoke We Go').text(),
            rating:  '7.3',
            votes:   '76'
          },
        
          {
            x:       84,
            y:       6.8,
            imdb_id: '4725354',
            id:      's10e08',
            title:   $('<div/>').html('The Super Bling Cowboy').text(),
            rating:  '6.8',
            votes:   '62'
          },
        
          {
            x:       85,
            y:       7.4,
            imdb_id: '4725370',
            id:      's10e09',
            title:   $('<div/>').html('Thugged Out Gangsta Shit').text(),
            rating:  '7.4',
            votes:   '56'
          },
        
          {
            x:       86,
            y:       8.2,
            imdb_id: '4725418',
            id:      's10e10',
            title:   $('<div/>').html('Looks Like the Liquor Wins').text(),
            rating:  '8.2',
            votes:   '73'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      ]
  });
};



// House of Cards

function houseOfCards() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('House of Cards').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
     
      series: [
      {
        name: 'Season 4',
        color: '#7981f2',
        data: [
        
          {
            x:       40,
            y:       8.2,
            imdb_id: '4498368',
            id:      's04e01',
            title:   $('<div/>').html('Chapter 40').text(),
            rating:  '8.2',
            votes:   '2327'
          },
        
          {
            x:       41,
            y:       8.4,
            imdb_id: '4817660',
            id:      's04e02',
            title:   $('<div/>').html('Chapter 41').text(),
            rating:  '8.4',
            votes:   '1996'
          },
        
          {
            x:       42,
            y:       9.0,
            imdb_id: '4817664',
            id:      's04e03',
            title:   $('<div/>').html('Chapter 42').text(),
            rating:  '9.0',
            votes:   '2077'
          },
        
          {
            x:       43,
            y:       9.5,
            imdb_id: '4817670',
            id:      's04e04',
            title:   $('<div/>').html('Chapter 43').text(),
            rating:  '9.5',
            votes:   '2598'
          },
        
          {
            x:       44,
            y:       8.6,
            imdb_id: '4949018',
            id:      's04e05',
            title:   $('<div/>').html('Chapter 44').text(),
            rating:  '8.6',
            votes:   '1818'
          },
        
          {
            x:       45,
            y:       8.8,
            imdb_id: '4949028',
            id:      's04e06',
            title:   $('<div/>').html('Chapter 45').text(),
            rating:  '8.8',
            votes:   '1893'
          },
        
          {
            x:       46,
            y:       8.7,
            imdb_id: '5025272',
            id:      's04e07',
            title:   $('<div/>').html('Chapter 46').text(),
            rating:  '8.7',
            votes:   '1776'
          },
        
          {
            x:       47,
            y:       8.3,
            imdb_id: '5095720',
            id:      's04e08',
            title:   $('<div/>').html('Chapter 47').text(),
            rating:  '8.3',
            votes:   '1673'
          },
        
          {
            x:       48,
            y:       9.0,
            imdb_id: '5083704',
            id:      's04e09',
            title:   $('<div/>').html('Chapter 48').text(),
            rating:  '9.0',
            votes:   '1783'
          },
        
          {
            x:       49,
            y:       9.5,
            imdb_id: '5095730',
            id:      's04e10',
            title:   $('<div/>').html('Chapter 49').text(),
            rating:  '9.5',
            votes:   '2465'
          },
        
          {
            x:       50,
            y:       8.6,
            imdb_id: '5095732',
            id:      's04e11',
            title:   $('<div/>').html('Chapter 50').text(),
            rating:  '8.6',
            votes:   '1692'
          },
        
          {
            x:       51,
            y:       9.0,
            imdb_id: '5095742',
            id:      's04e12',
            title:   $('<div/>').html('Chapter 51').text(),
            rating:  '9.0',
            votes:   '1770'
          },
        
          {
            x:       52,
            y:       9.6,
            imdb_id: '5095748',
            id:      's04e13',
            title:   $('<div/>').html('Chapter 52').text(),
            rating:  '9.6',
            votes:   '3807'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 1',
        color: '#da79f2',
        data: [
        
          {
            x:       1,
            y:       8.7,
            imdb_id: '2161930',
            id:      's01e01',
            title:   $('<div/>').html('Chapter 1').text(),
            rating:  '8.7',
            votes:   '5028'
          },
        
          {
            x:       2,
            y:       8.7,
            imdb_id: '2250466',
            id:      's01e02',
            title:   $('<div/>').html('Chapter 2').text(),
            rating:  '8.7',
            votes:   '3932'
          },
        
          {
            x:       3,
            y:       8.4,
            imdb_id: '2248444',
            id:      's01e03',
            title:   $('<div/>').html('Chapter 3').text(),
            rating:  '8.4',
            votes:   '3435'
          },
        
          {
            x:       4,
            y:       8.3,
            imdb_id: '2248422',
            id:      's01e04',
            title:   $('<div/>').html('Chapter 4').text(),
            rating:  '8.3',
            votes:   '3225'
          },
        
          {
            x:       5,
            y:       8.5,
            imdb_id: '2294870',
            id:      's01e05',
            title:   $('<div/>').html('Chapter 5').text(),
            rating:  '8.5',
            votes:   '3139'
          },
        
          {
            x:       6,
            y:       8.6,
            imdb_id: '2311910',
            id:      's01e06',
            title:   $('<div/>').html('Chapter 6').text(),
            rating:  '8.6',
            votes:   '3135'
          },
        
          {
            x:       7,
            y:       8.3,
            imdb_id: '2311926',
            id:      's01e07',
            title:   $('<div/>').html('Chapter 7').text(),
            rating:  '8.3',
            votes:   '2938'
          },
        
          {
            x:       8,
            y:       7.9,
            imdb_id: '2312714',
            id:      's01e08',
            title:   $('<div/>').html('Chapter 8').text(),
            rating:  '7.9',
            votes:   '3079'
          },
        
          {
            x:       9,
            y:       8.6,
            imdb_id: '2248426',
            id:      's01e09',
            title:   $('<div/>').html('Chapter 9').text(),
            rating:  '8.6',
            votes:   '2848'
          },
        
          {
            x:       10,
            y:       8.8,
            imdb_id: '2468204',
            id:      's01e10',
            title:   $('<div/>').html('Chapter 10').text(),
            rating:  '8.8',
            votes:   '2881'
          },
        
          {
            x:       11,
            y:       9.1,
            imdb_id: '2440660',
            id:      's01e11',
            title:   $('<div/>').html('Chapter 11').text(),
            rating:  '9.1',
            votes:   '3180'
          },
        
          {
            x:       12,
            y:       8.6,
            imdb_id: '2555986',
            id:      's01e12',
            title:   $('<div/>').html('Chapter 12').text(),
            rating:  '8.6',
            votes:   '2771'
          },
        
          {
            x:       13,
            y:       8.9,
            imdb_id: '2555988',
            id:      's01e13',
            title:   $('<div/>').html('Chapter 13').text(),
            rating:  '8.9',
            votes:   '3077'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 2',
        color: '#79f2b7',
        data: [
        
          {
            x:       14,
            y:       9.6,
            imdb_id: '2811510',
            id:      's02e01',
            title:   $('<div/>').html('Chapter 14').text(),
            rating:  '9.6',
            votes:   '6109'
          },
        
          {
            x:       15,
            y:       8.5,
            imdb_id: '3221190',
            id:      's02e02',
            title:   $('<div/>').html('Chapter 15').text(),
            rating:  '8.5',
            votes:   '2779'
          },
        
          {
            x:       16,
            y:       8.6,
            imdb_id: '2990016',
            id:      's02e03',
            title:   $('<div/>').html('Chapter 16').text(),
            rating:  '8.6',
            votes:   '2651'
          },
        
          {
            x:       17,
            y:       9.1,
            imdb_id: '3001906',
            id:      's02e04',
            title:   $('<div/>').html('Chapter 17').text(),
            rating:  '9.1',
            votes:   '3014'
          },
        
          {
            x:       18,
            y:       8.5,
            imdb_id: '3001926',
            id:      's02e05',
            title:   $('<div/>').html('Chapter 18').text(),
            rating:  '8.5',
            votes:   '2494'
          },
        
          {
            x:       19,
            y:       8.5,
            imdb_id: '3221232',
            id:      's02e06',
            title:   $('<div/>').html('Chapter 19').text(),
            rating:  '8.5',
            votes:   '2420'
          },
        
          {
            x:       20,
            y:       8.6,
            imdb_id: '3147682',
            id:      's02e07',
            title:   $('<div/>').html('Chapter 20').text(),
            rating:  '8.6',
            votes:   '2415'
          },
        
          {
            x:       21,
            y:       8.7,
            imdb_id: '3147690',
            id:      's02e08',
            title:   $('<div/>').html('Chapter 21').text(),
            rating:  '8.7',
            votes:   '2410'
          },
        
          {
            x:       22,
            y:       9.0,
            imdb_id: '3186026',
            id:      's02e09',
            title:   $('<div/>').html('Chapter 22').text(),
            rating:  '9.0',
            votes:   '2601'
          },
        
          {
            x:       23,
            y:       8.5,
            imdb_id: '3221270',
            id:      's02e10',
            title:   $('<div/>').html('Chapter 23').text(),
            rating:  '8.5',
            votes:   '2374'
          },
        
          {
            x:       24,
            y:       8.8,
            imdb_id: '3297502',
            id:      's02e11',
            title:   $('<div/>').html('Chapter 24').text(),
            rating:  '8.8',
            votes:   '2627'
          },
        
          {
            x:       25,
            y:       9.0,
            imdb_id: '3326204',
            id:      's02e12',
            title:   $('<div/>').html('Chapter 25').text(),
            rating:  '9.0',
            votes:   '2488'
          },
        
          {
            x:       26,
            y:       9.6,
            imdb_id: '3326208',
            id:      's02e13',
            title:   $('<div/>').html('Chapter 26').text(),
            rating:  '9.6',
            votes:   '4463'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      {
        name: 'Season 3',
        color: '#f29479',
        data: [
        
          {
            x:       27,
            y:       8.2,
            imdb_id: '3513862',
            id:      's03e01',
            title:   $('<div/>').html('Chapter 27').text(),
            rating:  '8.2',
            votes:   '2900'
          },
        
          {
            x:       28,
            y:       8.6,
            imdb_id: '3892086',
            id:      's03e02',
            title:   $('<div/>').html('Chapter 28').text(),
            rating:  '8.6',
            votes:   '2537'
          },
        
          {
            x:       29,
            y:       8.7,
            imdb_id: '3892088',
            id:      's03e03',
            title:   $('<div/>').html('Chapter 29').text(),
            rating:  '8.7',
            votes:   '2703'
          },
        
          {
            x:       30,
            y:       8.4,
            imdb_id: '3892094',
            id:      's03e04',
            title:   $('<div/>').html('Chapter 30').text(),
            rating:  '8.4',
            votes:   '2335'
          },
        
          {
            x:       31,
            y:       8.4,
            imdb_id: '3897442',
            id:      's03e05',
            title:   $('<div/>').html('Chapter 31').text(),
            rating:  '8.4',
            votes:   '2229'
          },
        
          {
            x:       32,
            y:       9.2,
            imdb_id: '3897454',
            id:      's03e06',
            title:   $('<div/>').html('Chapter 32').text(),
            rating:  '9.2',
            votes:   '3319'
          },
        
          {
            x:       33,
            y:       8.3,
            imdb_id: '3918768',
            id:      's03e07',
            title:   $('<div/>').html('Chapter 33').text(),
            rating:  '8.3',
            votes:   '2264'
          },
        
          {
            x:       34,
            y:       8.4,
            imdb_id: '4083028',
            id:      's03e08',
            title:   $('<div/>').html('Chapter 34').text(),
            rating:  '8.4',
            votes:   '2133'
          },
        
          {
            x:       35,
            y:       8.5,
            imdb_id: '4035250',
            id:      's03e09',
            title:   $('<div/>').html('Chapter 35').text(),
            rating:  '8.5',
            votes:   '2125'
          },
        
          {
            x:       36,
            y:       8.3,
            imdb_id: '4128566',
            id:      's03e10',
            title:   $('<div/>').html('Chapter 36').text(),
            rating:  '8.3',
            votes:   '2095'
          },
        
          {
            x:       37,
            y:       9.1,
            imdb_id: '4128572',
            id:      's03e11',
            title:   $('<div/>').html('Chapter 37').text(),
            rating:  '9.1',
            votes:   '2493'
          },
        
          {
            x:       38,
            y:       8.9,
            imdb_id: '4128574',
            id:      's03e12',
            title:   $('<div/>').html('Chapter 38').text(),
            rating:  '8.9',
            votes:   '2250'
          },
        
          {
            x:       39,
            y:       9.0,
            imdb_id: '4221826',
            id:      's03e13',
            title:   $('<div/>').html('Chapter 39').text(),
            rating:  '9.0',
            votes:   '2985'
          },
        
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      ]
  });
};
// Easy
function easy() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Easy').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2c0',
        data: [
        
          {
            x:       1,
            y:       6.4,
            imdb_id: '4625398',
            id:      's01e01',
            title:   $('<div/>').html('The F**King Study').text(),
            rating:  '6.4',
            votes:   '197'
          },
        
          {
            x:       2,
            y:       6.4,
            imdb_id: '4662772',
            id:      's01e02',
            title:   $('<div/>').html('Vegan Cinderella').text(),
            rating:  '6.4',
            votes:   '164'
          },
        
          {
            x:       3,
            y:       6.4,
            imdb_id: '4662796',
            id:      's01e03',
            title:   $('<div/>').html('Brewery Brothers').text(),
            rating:  '6.4',
            votes:   '133'
          },
        
          {
            x:       4,
            y:       6.4,
            imdb_id: '4662788',
            id:      's01e04',
            title:   $('<div/>').html('Controlada').text(),
            rating:  '6.4',
            votes:   '121'
          },
        
          {
            x:       5,
            y:       7.6,
            imdb_id: '4662794',
            id:      's01e05',
            title:   $('<div/>').html('Art and Life').text(),
            rating:  '7.6',
            votes:   '121'
          },
        
          {
            x:       6,
            y:       7.3,
            imdb_id: '4662786',
            id:      's01e06',
            title:   $('<div/>').html('Utopia').text(),
            rating:  '7.3',
            votes:   '107'
          },
        
          {
            x:       7,
            y:       6.3,
            imdb_id: '4662802',
            id:      's01e07',
            title:   $('<div/>').html('Chemistry Read').text(),
            rating:  '7.0',
            votes:   '84'
          },
        
          {
            x:       8,
            y:       6.7,
            imdb_id: '4662800',
            id:      's01e08',
            title:   $('<div/>').html('Hop Dreams').text(),
            rating:  '6.7',
            votes:   '74'
          },
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
// Easy
function love() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        max: 10,
        allowDecimals: false,
        title: {
          text: "Average iMDb Rating",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        allowDecimals: false,
        title: {
          text: "Episode Number",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('Love').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "Inspiration from graphtv"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
        }
      },
      series: [
      {
        name: 'Season 1',
        color: '#79f2c0',
        data: [
        
          {
            x:       1,
            y:       7.5,
            imdb_id: '4625398',
            id:      's01e01',
            title:   $('<div/>').html('It Begins').text(),
            rating:  '7.5',
            votes:   '571'
          },
        
          {
            x:       2,
            y:       8.4,
            imdb_id: '4662772',
            id:      's01e02',
            title:   $('<div/>').html('One Long Day').text(),
            rating:  '8.4',
            votes:   '470'
          },
        
          {
            x:       3,
            y:       7.6,
            imdb_id: '4662796',
            id:      's01e03',
            title:   $('<div/>').html('Tested').text(),
            rating:  '7.6',
            votes:   '396'
          },
        
          {
            x:       4,
            y:       8.2,
            imdb_id: '4662788',
            id:      's01e04',
            title:   $('<div/>').html('Party in the Hills').text(),
            rating:  '8.2',
            votes:   '397'
          },
        
          {
            x:       5,
            y:       8.6,
            imdb_id: '4662794',
            id:      's01e05',
            title:   $('<div/>').html('The Date').text(),
            rating:  '8.6',
            votes:   '425'
          },
        
          {
            x:       6,
            y:       7.9,
            imdb_id: '4662786',
            id:      's01e06',
            title:   $('<div/>').html('Andy').text(),
            rating:  '7.9',
            votes:   '370'
          },
        
          {
            x:       7,
            y:       8,
            imdb_id: '4662802',
            id:      's01e07',
            title:   $('<div/>').html('Magic').text(),
            rating:  '8.0',
            votes:   '335'
          },
        
          {
            x:       8,
            y:       8.3,
            imdb_id: '4662800',
            id:      's01e08',
            title:   $('<div/>').html('Closing Title Song').text(),
            rating:  '8.3',
            votes:   '342'
          },

          {
            x:       9,
            y:       8.4,
            imdb_id: '4662800',
            id:      's01e09',
            title:   $('<div/>').html('The Table Read').text(),
            rating:  '8.4',
            votes:   '328'
          },

          {
            x:       10,
            y:       8.5,
            imdb_id: '4662800',
            id:      's01e10',
            title:   $('<div/>').html('The End of the Beginning').text(),
            rating:  '8.5',
            votes:   '367'
          },
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      
      ]
  });
};
