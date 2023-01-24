export interface MatchesResponse {
  status: number;
  data: Datum[];
}

export interface Datum {
  metadata: Metadata;
  players: Players;
  teams: Teams;
  rounds: Round[];
  kills: Kill[];
}

export interface Kill {
  kill_time_in_round: number;
  kill_time_in_match: number;
  round?: number;
  killer_puuid: string;
  killer_display_name: DisplayName;
  killer_team: Team;
  victim_puuid: string;
  victim_display_name: DisplayName;
  victim_team: Team;
  victim_death_location: Location;
  damage_weapon_id: DamageWeaponID;
  damage_weapon_name?: DamageWeaponNameEnum | null;
  damage_weapon_assets: DamageWeaponAssetsClass;
  secondary_fire_mode: boolean;
  player_locations_on_kill: PlayerLocationsOn[];
  assistants: Assistant[];
}

export interface Assistant {
  assistant_puuid: string;
  assistant_display_name: DisplayName;
  assistant_team: Team;
}

export enum DisplayName {
  AstroLuv = 'astro#luv',
  B3Qq2006 = 'b3qq#2006',
  BLuezZMAIN = 'BLuezZ#MAIN',
  BoopzSora = 'boopz#sora',
  C9VapenBald = 'C9 vapen#bald',
  ColeCree2303 = 'ColeCree#2303',
  Critical8008 = 'Critical#8008',
  FERALMae = 'FERAL#mae',
  FqdeyLUCKY = 'Fqdey#LUCKY',
  GeezaDemon = 'geeza#demon',
  Glizzy9729 = 'glizzy#9729',
  IeoSad = 'Ieo#sad',
  JaceLFDAye = 'Jace LFD#aye',
  N0S7342 = 'n0s#7342',
  NVVoriacETHTina = 'NV voriacETH#tina',
  NXSNeebzDas = 'NXS Neebz#das',
  Pandejalea1Icant = 'pandejalea1#icant',
  SKIMConk = 'SKIM#conk',
  Saurio1310 = 'Saurio#1310',
  Shadow5152 = 'Shadow#5152',
  SmLBadie = 'smL#badie',
  SosaKm5 = 'sosa#km5',
  Spino2003 = 'SPINO#2003',
  SubmissiveHippo4Ggez = 'SubmissiveHippo4#ggez',
  TNXCarSon = 'TNX Car#son',
  TNXDragoHrLos = 'TNX Drago#HrLos',
  TNXVroom4646M = 'TNX Vroom#4646M',
  The12PkCHAE1 = '12pk#CHAE1',
  The665Sam001 = '665 Sam#001',
  TorrifyH2BH = 'Torrify#H2bH',
  V1EffysLBE = 'V1 effys#LBE',
  ValerenceVtwo = 'valerence#vtwo',
  VeinySHLAT = 'veiny#SHLAT',
  W0Rldw1De001 = 'w0rldw1de#001',
  WickedWeeb = 'Wicked#Weeb',
  WindowPhntm = 'Window#phntm',
  WntrYzt = 'wntr#yzt',
  XannRegan = 'xann#regan',
  КриптоМиллионер014 = 'крипто миллионер#014',
  Мonker6969 = 'Мonker#6969',
  고전파9999 = '고전파#9999',
}

export enum Team {
  Blue = 'Blue',
  Red = 'Red',
}

export interface DamageWeaponAssetsClass {
  display_icon?: null | string;
  killfeed_icon?: null | string;
}

export enum DamageWeaponID {
  A03B24D34319996D0F8C94Bbfba1Dfc7 = 'A03B24D3-4319-996D-0F8C-94BBFBA1DFC7',
  Ability1 = 'Ability1',
  Ability2 = 'Ability2',
  Ae3De1424D852547Dd264E90Bed35Cf7 = 'AE3DE142-4D85-2547-DD26-4E90BED35CF7',
  C4883E504494202C3Ec36B8A9284F00B = 'C4883E50-4494-202C-3EC3-6B8A9284F00B',
  E336C6B8418D9340D77F7A9E4Cfe0702 = 'E336C6B8-418D-9340-D77F-7A9E4CFE0702',
  Ec845Bf44F79DddaA3Da0Db3774B2794 = 'EC845BF4-4F79-DDDA-A3DA-0DB3774B2794',
  Ee8E8D15496B07ACE5F68Fae5D4C7B1A = 'EE8E8D15-496B-07AC-E5F6-8FAE5D4C7B1A',
  Empty = '',
  F7E1B4544Ad41063Ec0A159E56B58941 = 'F7E1B454-4AD4-1063-EC0A-159E56B58941',
  GrenadeAbility = 'GrenadeAbility',
  The1Baa85B44C70128464Bb6481Dfc3Bb4E = '1BAA85B4-4C70-1284-64BB-6481DFC3BB4E',
  The29A0Cfab485BF5D5779AB59F85E204A8 = '29A0CFAB-485B-F5D5-779A-B59F85E204A8',
  The39099Fb54293Def41E092E9080Ce7456 = '39099FB5-4293-DEF4-1E09-2E9080CE7456',
  The42Da8Ccc40D5AffcBeec15Aa47B42EDA = '42DA8CCC-40D5-AFFC-BEEC-15AA47B42EDA',
  The44D4E95C4157003781B217841Bf2E8E3 = '44D4E95C-4157-0037-81B2-17841BF2E8E3',
  The462080D1403529377C0927Aa2A5C27A7 = '462080D1-4035-2937-7C09-27AA2A5C27A7',
  The4Ade7Faa4Cf1837695Ef39884480959B = '4ADE7FAA-4CF1-8376-95EF-39884480959B',
  The55D8A0F44274Ca67Fe2C06Ab45Efdf58 = '55D8A0F4-4274-CA67-FE2C-06AB45EFDF58',
  The63E6C2B64A8E869C3D4CE38355226584 = '63E6C2B6-4A8E-869C-3D4C-E38355226584',
  The910Be174449BC412Ab22D0873436B21B = '910BE174-449B-C412-AB22-D0873436B21B',
  The9C82E19D457502001A813Eacf00Cf872 = '9C82E19D-4575-0200-1A81-3EACF00CF872',
  Ultimate = 'Ultimate',
}

export enum DamageWeaponNameEnum {
  Ares = 'Ares',
  Bucky = 'Bucky',
  Bulldog = 'Bulldog',
  Classic = 'Classic',
  Frenzy = 'Frenzy',
  Ghost = 'Ghost',
  Guardian = 'Guardian',
  Judge = 'Judge',
  Marshal = 'Marshal',
  Odin = 'Odin',
  Operator = 'Operator',
  Phantom = 'Phantom',
  Sheriff = 'Sheriff',
  Shorty = 'Shorty',
  Spectre = 'Spectre',
  Stinger = 'Stinger',
  Vandal = 'Vandal',
}

export interface PlayerLocationsOn {
  player_puuid: string;
  player_display_name: DisplayName;
  player_team: Team;
  location: Location;
  view_radians: number;
}

export interface Location {
  x: number;
  y: number;
}

export interface Metadata {
  map: string;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: string;
  queue: string;
  season_id: string;
  platform: PlatformEnum;
  matchid: string;
  region: string;
  cluster: string;
}

export enum PlatformEnum {
  PC = 'PC',
}

export interface Players {
  all_players: AllPlayer[];
  red: AllPlayer[];
  blue: AllPlayer[];
}

export interface AllPlayer {
  puuid: string;
  name: string;
  tag: string;
  team: Team;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: CurrenttierPatched;
  player_card: string;
  player_title: string;
  party_id: string;
  session_playtime: SessionPlaytime;
  behavior: Behavior;
  platform: PlatformClass;
  ability_casts: AllPlayerAbilityCasts;
  assets: AllPlayerAssets;
  stats: Stats;
  economy: AllPlayerEconomy;
  damage_made: number;
  damage_received: number;
}

export interface AllPlayerAbilityCasts {
  c_cast: number;
  q_cast: number;
  e_cast: number;
  x_cast: number;
}

export interface AllPlayerAssets {
  card: Card;
  agent: Agent;
}

export interface Agent {
  small: string;
  bust: string;
  full: string;
  killfeed: string;
}

export interface Card {
  small: string;
  large: string;
  wide: string;
}

export interface Behavior {
  afk_rounds: number;
  friendly_fire: FriendlyFire;
  rounds_in_spawn: number;
}

export interface FriendlyFire {
  incoming: number;
  outgoing: number;
}

export enum CurrenttierPatched {
  Ascendant1 = 'Ascendant 1',
  Ascendant2 = 'Ascendant 2',
  Ascendant3 = 'Ascendant 3',
  Immortal1 = 'Immortal 1',
  Immortal2 = 'Immortal 2',
  Immortal3 = 'Immortal 3',
  Radiant = 'Radiant',
}

export interface AllPlayerEconomy {
  spent: LoadoutValue;
  loadout_value: LoadoutValue;
}

export interface LoadoutValue {
  overall: number;
  average: number;
}

export interface PlatformClass {
  type: PlatformEnum;
  os: OS;
}

export interface OS {
  name: OSName;
  version: Version;
}

export enum OSName {
  Windows = 'Windows',
}

export enum Version {
  The10017763125664Bit = '10.0.17763.1.256.64bit',
  The10019044125664Bit = '10.0.19044.1.256.64bit',
  The10019044176864Bit = '10.0.19044.1.768.64bit',
  The10019045125664Bit = '10.0.19045.1.256.64bit',
  The10019045176864Bit = '10.0.19045.1.768.64bit',
  The10022000125664Bit = '10.0.22000.1.256.64bit',
  The10022000176864Bit = '10.0.22000.1.768.64bit',
  The10022621176864Bit = '10.0.22621.1.768.64bit',
}

export interface SessionPlaytime {
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface Stats {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
}

export interface Round {
  winning_team: Team;
  end_type: EndType;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: PlantEvents;
  defuse_events: DefuseEvents;
  player_stats: PlayerStat[];
}

export interface DefuseEvents {
  defuse_location: Location | null;
  defused_by: EdBy | null;
  defuse_time_in_round: number | null;
  player_locations_on_defuse: PlayerLocationsOn[] | null;
}

export interface EdBy {
  puuid: string;
  display_name: DisplayName;
  team: Team;
}

export enum EndType {
  BombDefused = 'Bomb defused',
  BombDetonated = 'Bomb detonated',
  Eliminated = 'Eliminated',
}

export interface PlantEvents {
  plant_location: Location | null;
  planted_by: EdBy | null;
  plant_site: PlantSite | null;
  plant_time_in_round: number | null;
  player_locations_on_plant: PlayerLocationsOn[] | null;
}

export enum PlantSite {
  A = 'A',
  B = 'B',
  C = 'C',
}

export interface PlayerStat {
  ability_casts: PlayerStatAbilityCasts;
  player_puuid: string;
  player_display_name: DisplayName;
  player_team: Team;
  damage_events: DamageEvent[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: Kill[];
  kills: number;
  score: number;
  economy: PlayerStatEconomy;
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
}

export interface PlayerStatAbilityCasts {
  c_casts: null;
  q_casts: null;
  e_cast: null;
  x_cast: null;
}

export interface DamageEvent {
  receiver_puuid: string;
  receiver_display_name: DisplayName;
  receiver_team: Team;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
}

export interface PlayerStatEconomy {
  loadout_value: number;
  weapon: Weapon;
  armor: Armor;
  remaining: number;
  spent: number;
}

export interface Armor {
  id: ID | null;
  name: ArmorName | null;
  assets: ArmorAssets;
}

export interface ArmorAssets {
  display_icon: null | string;
}

export enum ID {
  The4Dec83D549029Ab3Bed6A7A390761157 = '4DEC83D5-4902-9AB3-BED6-A7A390761157',
  The822Bcab240A2324EC137E09195Ad7692 = '822BCAB2-40A2-324E-C137-E09195AD7692',
}

export enum ArmorName {
  HeavyShields = 'Heavy Shields',
  LightShields = 'Light Shields',
}

export interface Weapon {
  id: DamageWeaponID;
  name: DamageWeaponNameEnum;
  assets: DamageWeaponAssetsClass;
}

export interface Teams {
  red: Blue;
  blue: Blue;
}

export interface Blue {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
}
