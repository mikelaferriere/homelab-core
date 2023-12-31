export interface Team {
  name: string
  abbr: string
  id: string
  logo: string
  link: string
  score?: number
  record: string
}

export interface BaseScoreboard {
  id?: string
  link: string
  homeTeam: Team
  awayTeam: Team
  status: string
  startDate: string
  details?: string
  isPlayoffMatchup: boolean
  metadata?: MLBMetadata | NFLMetadata | NHLMetadata
}

interface MLBMetadata {
  balls: number
  strikes: number
  outs: number
  manOnFirst: boolean
  manOnSecond: boolean
  manOnThird: boolean
  topInning: boolean
  inningHalf: string
  currentInning: number
  currentInningOrdinal: string
}

interface NHLMetadata {}

interface NFLMetadata {
  yardLine: number
  down: number
  distance: number
  downDistanceText: string
  shortDownDistanceText: string
  possessionText: string
  isRedZone: boolean
  homeTimeouts: number
  awayTimeouts: number
  possessionArrow: string
}

export interface FavoriteTeam {
  id: number
  abbreviation: string
  fullname: string
  league: string
  score_update: boolean
  light_pulse: boolean
  primary_color: string
  secondary_color: string
}

export interface DbScore {
  favoriteteam_id: number
  acknowledged: boolean
  score_unique_id: string
  play: any
}

export interface ScoringPlay {
  id: string
  homeTeam: Team
  awayTeam: Team
  scoringTeam: string
  about: Record<string, any>
  result: Record<string, any>
}

export interface ScoringUpdate {
  description: string
  league: string
  homeTeam: Team
  awayTeam: Team
  scoringTeam: string
  eventId: string
  score: {
    away: number
    home: number
  }
  id: number
}
