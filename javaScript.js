/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// TrailerParkBoys

function TrailerParkBoys(){
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
        // min: round down the min
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
          font: '26px Oxygen, sans-serif',
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
      plotOptions: {
        scatter: {
          cursor: 'pointer',
          point: {
            events: {
              click: function() {
                window.open(
                  ["http://www.imdb.com/title/tt", this.options.imdb_id, "/"].join(""),
                '_blank');
              }
            }
          }
        }
      },
      series: [ 
        {
        type: 'line',
        name: 'Series Trendline',
        color: '#FFF',
        data: [
                {
                  x: 1,
                  y: 9.42293504411,
                },
                {
                  x: 86,
                  y: 7.8724137931,
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
        visible: false,
      },   
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
        backgroundColor: "#333",
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
        // min: round down the min
        title: {
          text: "IMDb Rating",
          style: {
            color: "#AAA",
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
            color: "#AAA",
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
          font: '26px Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        href: "http://graphtv.kevinformatics.com",
        text: "http://graphtv.kevinformatics.com"
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
          if (this.series.options.type === "scatter") {
            return [
                    "<b>", this.point.id, "</b>", "<br>",
                    this.point.title, "<br>", 
                    "Rating: ", this.point.rating, "<br>", 
                    "Votes: ", this.point.votes
                   ].join("");
          } else if (this.series.options.type === "line") {
            return false;
          }
        }
      },
      plotOptions: {
        scatter: {
          cursor: 'pointer',
          point: {
            events: {
              click: function() {
                window.open(
                  ["http://www.imdb.com/title/tt", this.options.imdb_id, "/"].join(""),
                '_blank');
              }
            }
          }
        }
      },
      series: [
      {
        type: 'line',
        name: 'Series Trendline',
        color: '#FFF',
        data: [
                {
                  x: 1,
                  y: 8.55130624093,
                },
                {
                  x: 52,
                  y: 8.89484760522,
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
        visible: false,
      },

      
      {
        type: 'line',
        name: 'Season 1 Trendline',
        color: '#da79f2',
        data: [
                { 
                  x: 1, 
                  y: 8.42087912088, 
                  r2: 0.10, 
                },
                { 
                  x: 13, 
                  y: 8.71758241758, 
                  r2: 0.10, 
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
      }, 
      
      {
        type: 'line',
        name: 'Season 2 Trendline',
        color: '#79f2b7',
        data: [
                { 
                  x: 14, 
                  y: 8.75714285714, 
                  r2: 0.02, 
                },
                { 
                  x: 26, 
                  y: 8.93516483516, 
                  r2: 0.02, 
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
      }, 
      
      {
        type: 'line',
        name: 'Season 3 Trendline',
        color: '#f29479',
        data: [
                { 
                  x: 27, 
                  y: 8.38461538462, 
                  r2: 0.20, 
                },
                { 
                  x: 39, 
                  y: 8.84615384615, 
                  r2: 0.20, 
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
      }, 
      
      {
        type: 'line',
        name: 'Season 4 Trendline',
        color: '#7981f2',
        data: [
                { 
                  x: 40, 
                  y: 8.52857142857, 
                  r2: 0.22, 
                },
                { 
                  x: 52, 
                  y: 9.19450549451, 
                  r2: 0.22, 
                }
        ],
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
            lineWidth: 4,
            radius: 10000000000
          }
        },
      }, 
      

      
      {
        type: 'scatter',
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
        type: 'scatter',
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
        type: 'scatter',
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
        type: 'scatter',
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