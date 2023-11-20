import { describe, expect, test } from '@jest/globals'

import axios from 'axios'

import * as mlbScoreboardJson from '../data/mlbScoreboard.json'
import * as mlbSummaryJson from '../data/mlbSummary.json'
import * as nflScoreboardJson from '../data/nflScoreboard.json'
import * as nflSummaryJson from '../data/nflSummary.json'
import * as nhlScoreboardJson from '../data/nhlScoreboard.json'
import * as nhlSummaryJson from '../data/nhlSummary.json'

import * as Test from '../../api/sports'

jest.mock('axios')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('scoreboard', () => {
    test('mlb scoreboard happy path', async () => {
        jest.spyOn(axios, 'get').mockImplementation(url => {
            if (url.includes('scoreboard')) {
                return Promise.resolve({ data: mlbScoreboardJson })
            } else {
                return Promise.resolve({ data: mlbSummaryJson })
            }
        })

      const actual = await Test.Scoreboard.fetch("mlb")
      expect(actual).toStrictEqual([
        {
          id: '401581097',
          link: '',
          homeTeam: {
            id: '29',
            link: 'https://www.espn.com/mlb/team/_/name/ari/arizona-diamondbacks',
            name: 'Diamondbacks',
            abbr: 'ARI',
            logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/scoreboard/ari.png',
            score: 0,
            record: ''
          },
          awayTeam: {
            id: '13',
            link: 'https://www.espn.com/mlb/team/_/name/tex/texas-rangers',
            name: 'Rangers',
            abbr: 'TEX',
            logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/scoreboard/tex.png',
            score: 5,
            record: ''
          },
          status: 'Final',
          startDate: '2023-11-02T00:03Z',
          details: 'Final',
          isPlayoffMatchup: false,
          metadata: {
            balls: 0,
            strikes: 0,
            outs: 0,
            manOnFirst: false,
            manOnSecond: false,
            manOnThird: false,
            topInning: false,
            inningHalf: 'top',
            currentInning: 9,
            currentInningOrdinal: 'End 9th Inning'
          }
        }
      ])
    })

    test('nfl scoreboard happy path', async () => {
        jest.spyOn(axios, 'get').mockImplementation(url => {
            if (url.includes('scoreboard')) {
                return Promise.resolve({ data: nflScoreboardJson })
            } else {
                return Promise.resolve({ data: nflSummaryJson })
            }
        })

        const actual = await Test.Scoreboard.fetch("nfl")
        expect(actual).toStrictEqual([
            {
              id: "401547345",
              link: "",
              homeTeam: {
                id: "12",
                link: "https://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs",
                name: "Chiefs",
                abbr: "KC",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/kc.png",
                score: 0,
                record: ""
              },
              awayTeam: {
                id: "21",
                link: "https://www.espn.com/nfl/team/_/name/phi/philadelphia-eagles",
                name: "Eagles",
                abbr: "PHI",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/phi.png",
                score: 0,
                record: ""
              },
              status: "Scheduled",
              startDate: "2023-11-21T01:15Z",
              details: "11/20 - 8:15 PM EST",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547538",
              link: "",
              homeTeam: {
                id: "33",
                link: "https://www.espn.com/nfl/team/_/name/bal/baltimore-ravens",
                name: "Ravens",
                abbr: "BAL",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/bal.png",
                score: 34,
                record: ""
              },
              awayTeam: {
                id: "4",
                link: "https://www.espn.com/nfl/team/_/name/cin/cincinnati-bengals",
                name: "Bengals",
                abbr: "CIN",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/cin.png",
                score: 20,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-17T01:15Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547539",
              link: "",
              homeTeam: {
                id: "5",
                link: "https://www.espn.com/nfl/team/_/name/cle/cleveland-browns",
                name: "Browns",
                abbr: "CLE",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/cle.png",
                score: 13,
                record: ""
              },
              awayTeam: {
                id: "23",
                link: "https://www.espn.com/nfl/team/_/name/pit/pittsburgh-steelers",
                name: "Steelers",
                abbr: "PIT",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/pit.png",
                score: 10,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547546",
              link: "",
              homeTeam: {
                id: "8",
                link: "https://www.espn.com/nfl/team/_/name/det/detroit-lions",
                name: "Lions",
                abbr: "DET",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/det.png",
                score: 31,
                record: ""
              },
              awayTeam: {
                id: "3",
                link: "https://www.espn.com/nfl/team/_/name/chi/chicago-bears",
                name: "Bears",
                abbr: "CHI",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/chi.png",
                score: 26,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547547",
              link: "",
              homeTeam: {
                id: "9",
                link: "https://www.espn.com/nfl/team/_/name/gb/green-bay-packers",
                name: "Packers",
                abbr: "GB",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/gb.png",
                score: 23,
                record: ""
              },
              awayTeam: {
                id: "24",
                link: "https://www.espn.com/nfl/team/_/name/lac/los-angeles-chargers",
                name: "Chargers",
                abbr: "LAC",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lac.png",
                score: 20,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547542",
              link: "",
              homeTeam: {
                id: "15",
                link: "https://www.espn.com/nfl/team/_/name/mia/miami-dolphins",
                name: "Dolphins",
                abbr: "MIA",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/mia.png",
                score: 20,
                record: ""
              },
              awayTeam: {
                id: "13",
                link: "https://www.espn.com/nfl/team/_/name/lv/las-vegas-raiders",
                name: "Raiders",
                abbr: "LV",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lv.png",
                score: 13,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547548",
              link: "",
              homeTeam: {
                id: "28",
                link: "https://www.espn.com/nfl/team/_/name/wsh/washington-commanders",
                name: "Commanders",
                abbr: "WSH",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/wsh.png",
                score: 19,
                record: ""
              },
              awayTeam: {
                id: "19",
                link: "https://www.espn.com/nfl/team/_/name/nyg/new-york-giants",
                name: "Giants",
                abbr: "NYG",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/nyg.png",
                score: 31,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547545",
              link: "",
              homeTeam: {
                id: "29",
                link: "https://www.espn.com/nfl/team/_/name/car/carolina-panthers",
                name: "Panthers",
                abbr: "CAR",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/car.png",
                score: 10,
                record: ""
              },
              awayTeam: {
                id: "6",
                link: "https://www.espn.com/nfl/team/_/name/dal/dallas-cowboys",
                name: "Cowboys",
                abbr: "DAL",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/dal.png",
                score: 33,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547541",
              link: "",
              homeTeam: {
                id: "30",
                link: "https://www.espn.com/nfl/team/_/name/jax/jacksonville-jaguars",
                name: "Jaguars",
                abbr: "JAX",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/jax.png",
                score: 34,
                record: ""
              },
              awayTeam: {
                id: "10",
                link: "https://www.espn.com/nfl/team/_/name/ten/tennessee-titans",
                name: "Titans",
                abbr: "TEN",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ten.png",
                score: 14,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547540",
              link: "",
              homeTeam: {
                id: "34",
                link: "https://www.espn.com/nfl/team/_/name/hou/houston-texans",
                name: "Texans",
                abbr: "HOU",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/hou.png",
                score: 21,
                record: ""
              },
              awayTeam: {
                id: "22",
                link: "https://www.espn.com/nfl/team/_/name/ari/arizona-cardinals",
                name: "Cardinals",
                abbr: "ARI",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ari.png",
                score: 16,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T18:00Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547549",
              link: "",
              homeTeam: {
                id: "25",
                link: "https://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers",
                name: "49ers",
                abbr: "SF",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sf.png",
                score: 27,
                record: ""
              },
              awayTeam: {
                id: "27",
                link: "https://www.espn.com/nfl/team/_/name/tb/tampa-bay-buccaneers",
                name: "Buccaneers",
                abbr: "TB",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/tb.png",
                score: 14,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T21:05Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547543",
              link: "",
              homeTeam: {
                id: "2",
                link: "https://www.espn.com/nfl/team/_/name/buf/buffalo-bills",
                name: "Bills",
                abbr: "BUF",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/buf.png",
                score: 32,
                record: ""
              },
              awayTeam: {
                id: "20",
                link: "https://www.espn.com/nfl/team/_/name/nyj/new-york-jets",
                name: "Jets",
                abbr: "NYJ",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/nyj.png",
                score: 6,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T21:25Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547544",
              link: "",
              homeTeam: {
                id: "14",
                link: "https://www.espn.com/nfl/team/_/name/lar/los-angeles-rams",
                name: "Rams",
                abbr: "LAR",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lar.png",
                score: 17,
                record: ""
              },
              awayTeam: {
                id: "26",
                link: "https://www.espn.com/nfl/team/_/name/sea/seattle-seahawks",
                name: "Seahawks",
                abbr: "SEA",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sea.png",
                score: 16,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-19T21:25Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 35,
                down: 1,
                distance: 10,
                downDistanceText: "1st & 10 at DEN 35",
                shortDownDistanceText: "1st & 10",
                possessionText: "DEN 35",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            },
            {
              id: "401547550",
              link: "",
              homeTeam: {
                id: "7",
                link: "https://www.espn.com/nfl/team/_/name/den/denver-broncos",
                name: "Broncos",
                abbr: "DEN",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/den.png",
                score: 21,
                record: ""
              },
              awayTeam: {
                id: "16",
                link: "https://www.espn.com/nfl/team/_/name/min/minnesota-vikings",
                name: "Vikings",
                abbr: "MIN",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/min.png",
                score: 20,
                record: ""
              },
              status: "Final",
              startDate: "2023-11-20T01:20Z",
              details: "Final",
              isPlayoffMatchup: false,
              metadata: {
                yardLine: 25,
                down: 1,
                distance: 7,
                downDistanceText: "1st & 7 at DEN 25",
                shortDownDistanceText: "1st & 7",
                possessionText: "DEN 25",
                isRedZone: false,
                homeTimeouts: 0,
                awayTimeouts: 0,
                possessionArrow: "DEN"
              }
            }
          ])
    })
  
    test('nhl scoreboard happy path', async () => {
        jest.spyOn(axios, 'get').mockImplementation(url => {
            if (url.includes('scoreboard')) {
                return Promise.resolve({ data: nhlScoreboardJson })
            } else {
                return Promise.resolve({ data: nhlSummaryJson })
            }
        })

      const actual = await Test.Scoreboard.fetch("nhl")
      expect(actual).toStrictEqual([
        {
          id: "401559501",
          link: "",
          homeTeam: {
            id: "20",
            link: "http://www.espn.com/nhl/team/_/name/tb/tampa-bay-lightning",
            name: "Lightning",
            abbr: "TB",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/tb.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "1",
            link: "http://www.espn.com/nhl/team/_/name/bos/boston-bruins",
            name: "Bruins",
            abbr: "BOS",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/bos.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T00:00Z",
          details: "11/20 - 7:00 PM EST"
        },
        {
          id: "401559502",
          link: "",
          homeTeam: {
            id: "26",
            link: "http://www.espn.com/nhl/team/_/name/fla/florida-panthers",
            name: "Panthers",
            abbr: "FLA",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/fla.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "6",
            link: "http://www.espn.com/nhl/team/_/name/edm/edmonton-oilers",
            name: "Oilers",
            abbr: "EDM",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/edm.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T00:00Z",
          details: "11/20 - 7:00 PM EST"
        },
        {
          id: "401559503",
          link: "",
          homeTeam: {
            id: "27",
            link: "http://www.espn.com/nhl/team/_/name/nsh/nashville-predators",
            name: "Predators",
            abbr: "NSH",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/nsh.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "17",
            link: "http://www.espn.com/nhl/team/_/name/col/colorado-avalanche",
            name: "Avalanche",
            abbr: "COL",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/col.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T01:00Z",
          details: "11/20 - 8:00 PM EST"
        },
        {
          id: "401559504",
          link: "",
          homeTeam: {
            id: "9",
            link: "http://www.espn.com/nhl/team/_/name/dal/dallas-stars",
            name: "Stars",
            abbr: "DAL",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/dal.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "13",
            link: "http://www.espn.com/nhl/team/_/name/nyr/new-york-rangers",
            name: "Rangers",
            abbr: "NYR",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/nyr.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T01:00Z",
          details: "11/20 - 8:00 PM EST"
        },
        {
          id: "401559505",
          link: "",
          homeTeam: {
            id: "24",
            link: "http://www.espn.com/nhl/team/_/name/ari/arizona-coyotes",
            name: "Coyotes",
            abbr: "ARI",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/ari.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "8",
            link: "http://www.espn.com/nhl/team/_/name/la/los-angeles-kings",
            name: "Kings",
            abbr: "LA",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/la.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T02:00Z",
          details: "11/20 - 9:00 PM EST"
        },
        {
          id: "401559506",
          link: "",
          homeTeam: {
            id: "22",
            link: "http://www.espn.com/nhl/team/_/name/van/vancouver-canucks",
            name: "Canucks",
            abbr: "VAN",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/van.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "18",
            link: "http://www.espn.com/nhl/team/_/name/sj/san-jose-sharks",
            name: "Sharks",
            abbr: "SJ",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/sj.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T03:00Z",
          details: "11/20 - 10:00 PM EST"
        },
        {
          id: "401559507",
          link: "",
          homeTeam: {
            id: "124292",
            link: "http://www.espn.com/nhl/team/_/name/sea/seattle-kraken",
            name: "Kraken",
            abbr: "SEA",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/sea.png",
            score: 0,
            record: ""
          },
          awayTeam: {
            id: "3",
            link: "http://www.espn.com/nhl/team/_/name/cgy/calgary-flames",
            name: "Flames",
            abbr: "CGY",
            logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/cgy.png",
            score: 0,
            record: ""
          },
          isPlayoffMatchup: false,
          metadata: undefined,
          status: "Scheduled",
          startDate: "2023-11-21T03:00Z",
          details: "11/20 - 10:00 PM EST"
        }
      ])
    })
  })