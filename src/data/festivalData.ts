export type PageView = 'home' | 'lineup' | 'timetable' | 'contents' | 'info' | 'md';

export interface Artist {
  id: string;
  name: string;
  engName: string;
  genre: string;
  lineupWave: '1st' | '2nd';
  isNew?: boolean;
  description: string;
  highlights: string;
  topTracks: string[];
  stageHint: string;
  instagramUrl?: string;
}

export interface Stage {
  id: 'station_stardust' | 'vivid_planet' | 'whitemoon_lounge';
  name: string;
  tagline: string;
  description: string;
  subDescription: string;
  approxTime: string;
  approxTeams: string;
  accentColor: string;
  note: string;
}

export interface FestivalContent {
  id: string;
  title: string;
  filterCategory: 'activity' | 'diy';
  badge: 'ACTIVITY' | 'DIY';
  summary: string;
  imageAlt: string;
}

export interface InfoGuideline {
  id: string;
  title: string;
  category: 'POLICY' | 'FAQ' | 'BAGGAGE';
  question?: string;
  summary: string;
  bullets?: string[];
  allowedItems?: string[];
  prohibitedItems?: string[];
  note?: string;
}

export interface MdFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FESTIVAL_INFO = {
  name: 'COUNTDOWN 2026-2027 FANTASY',
  brandLogo: 'COUNTDOWN FANTASY 2026-2027',
  shortName: 'CDF 26>27',
  targetDateTime: '2026-12-31T13:30:00+09:00',
  midnightDateTime: '2027-01-01T00:00:00+09:00',
  endTime: '2027. 01. 01 05:00',
  scheduleSummary: '2026. 12. 31 (THU) 13:30 - 익일 05:00 | KINTEX HALL 7, 8, 9',
  venue: '일산 KINTEX 제1전시장 7, 8, 9홀',
  venueEng: 'KINTEX HALL 7, 8, 9',
  venueAddress: '경기도 고양시 일산서구 킨텍스로 217-60 킨텍스 제1전시장 7, 8, 9홀',
  mapUrl: 'https://map.naver.com/p/search/%ED%82%A8%ED%85%8D%EC%8A%A4%20%EC%A0%9C1%EC%A0%84%EC%8B%9C%EC%9E%A5',
  organizer: '민트페이퍼 (Mint Paper) / 엠피엠지 (MPMG)',
  instagramUrl: 'https://www.instagram.com/countdownfantasy/',
  contactEmail: 'mintpaper@mpmg.co.kr',
  groupMailSubjectFormat: '[CDF2026-2027 단체구매]_단체명',
  groupRequiredFields: '관람일자 / 희망매수 / 단체이름 / 담당자 연락처',
};

export const ARTISTS_LINEUP: Artist[] = [
  // 1st Lineup (12 Teams)
  {
    id: 'silicagel',
    name: '실리카겔',
    engName: 'Silica Gel',
    genre: 'Neo-Psychedelic Rock',
    lineupWave: '1st',
    description: '폭발적인 에너지와 독보적 사운드스케이프를 선사하는 한국 인디씬의 게임 체인저. 실험적인 비주얼 아트와 맹렬한 기타 리프로 압도적인 무대를 만듭니다.',
    highlights: '한국대중음악상 3년 연속 수상, 단독 공연 전석 매진 신화',
    topTracks: ['NO PAIN', 'Tik Tak Tok (feat. So!YoON!)', 'APEX', 'Desert Eagle'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'hyukoh',
    name: '혁오',
    engName: 'HYUKOH',
    genre: 'Alternative / Indie Rock',
    lineupWave: '1st',
    description: '글로벌 무대에서 찬사를 받는 독창적인 멜로디와 청춘의 서사. 감각적인 그루브와 오혁의 유니크한 보컬로 연말의 밤을 깊은 울림으로 채웁니다.',
    highlights: '코첼라 페스티벌 공식 초청 및 다수 글로벌 투어 성료',
    topTracks: ['TOMBOY', '위잉위잉', '와리가리', 'LOVE YA!'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'ftisland',
    name: 'FTISLAND',
    engName: 'FTISLAND',
    genre: 'Hard Rock / Pop Rock',
    lineupWave: '1st',
    description: '무대를 가르는 날카로운 보컬과 빈틈없는 밴드 사운드로 록 페스티벌의 열기를 폭발시키는 대한민국 대표 밴드.',
    highlights: '탄탄한 라이브 연주력과 압도적인 관객 떼창 유도',
    topTracks: ['바래', '사랑앓이', 'Take Me Now', 'PRAY'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'idiotape',
    name: 'IDIOTAPE',
    engName: 'IDIOTAPE',
    genre: 'Electronic Rock / Synthwave',
    lineupWave: '1st',
    description: '아날로그 신시사이저와 파워풀한 리얼 드럼의 질주! 페스티벌의 심야를 뜨겁게 달구는 일렉트로닉 록의 끝판왕.',
    highlights: '국내외 유수 EDM/록 페스티벌 섭외 1순위 일렉트로닉 밴드',
    topTracks: ['Sunset Strip', 'Melody', 'Even Floor', '0805'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'kardi',
    name: '카디 (KARDI)',
    engName: 'KARDI',
    genre: 'Post Rock / World Music / Alternative',
    lineupWave: '1st',
    description: '전통 악기 거문고와 날카로운 일렉트릭 기타, 황린의 독창적인 프로듀싱과 김예지의 폭발적인 보컬이 빚어내는 독보적인 포스트 록 사운드.',
    highlights: 'JTBC 슈퍼밴드2 3위, 글로벌 K-Band 대표 주자',
    topTracks: ['7000RPM', 'WatchOut', 'Skybound', 'Riot'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
    instagramUrl: 'https://www.instagram.com/bandkardi_/',
  },
  {
    id: 'thesolutions',
    name: 'THE SOLUTIONS',
    engName: 'THE SOLUTIONS',
    genre: 'Electro Pop / Future Rock',
    lineupWave: '1st',
    description: '청량하고 댄서블한 비트와 세련된 신스 팝의 감각! 몸을 가만둘 수 없는 경쾌한 그루브를 선사합니다.',
    highlights: 'K-Rock 씬의 스타일리시한 아이콘, 지치지 않는 파티 바이브',
    topTracks: ['Talk, Dance, Party for Love', 'Love You Dear', 'In My City', 'Thumbs Up'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'onewe',
    name: 'ONEWE',
    engName: 'ONEWE',
    genre: 'Alternative Rock',
    lineupWave: '1st',
    description: '서정적인 멜로디와 화려한 기타 솔로, 드라마틱한 곡 전개로 청자의 가슴을 뛰게 하는 실력파 얼터너티브 밴드.',
    highlights: '전곡 자작곡 프로듀싱 능력과 섬세한 감성 라이브',
    topTracks: ['야행성 (Regulus)', '기억 속 한 편의 소설', 'Rain To Be', 'Aurora'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'axmxp',
    name: 'AxMxP',
    engName: 'AxMxP',
    genre: 'Garage Rock / Punk',
    lineupWave: '1st',
    description: '원초적인 록 앤 롤의 쾌감과 거침없는 무대 장악력을 자랑하는 인디 씬의 슈퍼 루키.',
    highlights: '질주하는 드럼 비트와 거친 디스토션 기타의 하모니',
    topTracks: ['Overdrive', 'Ignition', 'Night Ride'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'lowhighlow',
    name: 'LOW HIGH LOW',
    engName: 'LOW HIGH LOW',
    genre: 'Modern Rock / Grunge',
    lineupWave: '1st',
    description: '로우와 하이를 오가는 역동적인 다이내믹과 깊이 있는 사운드로 매력적인 밤을 완성하는 밴드.',
    highlights: '몽환적이면서도 단단한 리듬 섹션과 흡인력 높은 멜로디',
    topTracks: ['Waves', 'Night Run', 'Gravity'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'fareasttigers',
    name: '극동아시아타이거즈',
    engName: 'Far East Asian Tigers',
    genre: 'Punk Rock / Hardcore',
    lineupWave: '1st',
    description: '유쾌한 해학미와 거침없는 펑크 에너지! 관객을 단숨에 슬램존으로 몰아넣는 폭발적인 파괴력.',
    highlights: '직설적인 가사와 쉼 없이 몰아치는 쾌속 펑크 록',
    topTracks: ['동방의 호랑이', '질주', '청춘예찬'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'oysters',
    name: 'OYSTERS',
    engName: 'OYSTERS',
    genre: 'Indie Pop / Surf Rock',
    lineupWave: '1st',
    description: '기분 좋은 레트로 기타 톤과 청량한 감성으로 연말의 겨울밤을 따스하게 감싸는 낭만 밴드.',
    highlights: '청량감 넘치는 빈티지 바이브와 귀에 감기는 멜로디라인',
    topTracks: ['Pearl', 'Coastline', 'Midnight Wave'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'poserlegion',
    name: '포져군단',
    engName: 'Poser Legion',
    genre: 'Alternative / Hard Rock',
    lineupWave: '1st',
    description: '날 것 그대로의 야성과 헤비한 리프! 카운트다운의 긴장감을 극대화하는 파워풀 록 밴드.',
    highlights: '거대한 헤드뱅잉과 격렬한 서클핏을 유도하는 헤비 사운드',
    topTracks: ['Breakthrough', 'Revolt', 'Static'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },

  // 2nd Lineup (8 Teams)
  {
    id: 'cnblue',
    name: '씨엔블루',
    engName: 'CNBLUE',
    genre: 'Pop Rock / Hard Rock / Alternative',
    lineupWave: '2nd',
    isNew: true,
    description: '폭발적인 가창력과 노련한 무대 매너로 객석을 열광으로 몰아넣는 대한민국 대표 레전드 팝 록 밴드.',
    highlights: '글로벌 아레나 투어 성료 및 페스티벌 무대를 뒤흔드는 최강의 떼창 머신',
    topTracks: ['외톨이야', "I'm Sorry", '그리워 그리워서', '사랑 빛', 'A Sleepless Night'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'touched',
    name: '터치드',
    engName: 'TOUCHED',
    genre: 'Hard Rock / Alternative Rock',
    lineupWave: '2nd',
    isNew: true,
    description: '무대를 압도하는 폭발적인 보컬리스트 윤민의 초고음 샤우팅과 강렬한 하드록 리프! 심장을 뛰게 만드는 전율의 라이브 밴드.',
    highlights: 'Mnet <그레이트 서울 인베이전> 최종 우승 밴드, 단독 콘서트 전석 매진',
    topTracks: ['Highlight', 'Alive', '야경', 'Shut Down', 'Stand Up!'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'lacuna',
    name: '라쿠나',
    engName: 'Lacuna',
    genre: 'Dream Pop / Indie Rock',
    lineupWave: '2nd',
    isNew: true,
    description: '몽환적이고 찬란한 기타 노이즈와 서정적인 시적 가사. 한 편의 동화 같은 무대를 선사하는 독보적인 4인조 인디 록 밴드.',
    highlights: '국내 주요 페스티벌 섭외 1순위, 매 단독 공연 초고속 매진',
    topTracks: ['John', 'Dancing in the rain', 'Montauk', '멍'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'dragonpony',
    name: '드래곤포니',
    engName: 'Dragon Pony',
    genre: 'Pop Rock / Alternative Rock',
    lineupWave: '2nd',
    isNew: true,
    description: '안테나의 실력파 4인조 보이 밴드. 에너제틱한 팝 록 사운드와 신선한 음악적 스펙트럼으로 페스티벌 현장을 뜨겁게 달굽니다.',
    highlights: '안테나 1호 보이 밴드, 데뷔 EP [POP UP] 전곡 자작곡 참여',
    topTracks: ['모스부호 (Morse Code)', '꼬리를 신나게 흔들며', 'POP UP', 'Traffic Jam'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'redoor',
    name: '리도어',
    engName: 'Redoor',
    genre: 'Modern Rock / Indie Pop',
    lineupWave: '2nd',
    isNew: true,
    description: '청춘의 불안과 낭만을 날카롭고도 따스한 감성으로 표현하며 진한 감정적 공명을 일으키는 실력파 모던 록 밴드.',
    highlights: '호소력 짙은 보컬과 묵직한 기타 리프가 돋보이는 라이브 강자',
    topTracks: ['영원은 그렇듯', '어린아이', '벽', '소년'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'kachisan',
    name: '까치산',
    engName: 'KACHISAN',
    genre: 'Indie Rock / Alternative',
    lineupWave: '2nd',
    isNew: true,
    description: '직관적이면서도 깊은 정서를 울리는 멜로디와 단단한 밴드 앙상블로 청춘의 다양한 단면을 노래하는 인디 록 밴드.',
    highlights: '특유의 서정미와 강렬한 라이브 에너지로 급부상 중인 주목받는 루키',
    topTracks: ['까치산', '초록', '달려', '봄'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'jisokuryclub',
    name: '지소쿠리클럽',
    engName: 'jisokuryClub',
    genre: 'Surf Rock / Garage Rock',
    lineupWave: '2nd',
    isNew: true,
    description: '시원하게 부서지는 파도와 낭만적인 서프 록의 바이브! 언제 어디서나 춤추게 만드는 기분 좋은 그루브를 전합니다.',
    highlights: '빈티지한 기타 사운드와 유쾌하고 자유분방한 페스티벌 무대 매너',
    topTracks: ['대항해시대', 'CAMPING', '하와이안 셔츠', 'Sea'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
  {
    id: 'cantbeblue',
    name: '캔트비블루',
    engName: "can't be blue",
    genre: 'Indie Rock / Post-Punk',
    lineupWave: '2nd',
    isNew: true,
    description: '우울을 털어내고 자유를 노래하는 감각적인 기타 팝 & 인디 록. 솔직담백한 멜로디로 리스너들의 귓가를 사로잡는 신예 밴드.',
    highlights: '트렌디한 인디 팝 감성과 직관적인 훅으로 급성장 중인 밴드',
    topTracks: ['blue', 'dawn', 'swim', 'dive'],
    stageHint: '출연 스테이지 추후 공개 (TBA)',
  },
];

export const STAGES_DATA: Stage[] = [
  {
    id: 'station_stardust',
    name: 'STATION STARDUST',
    tagline: '우주의 정거장을 형상화한 삼각형 구조',
    description: '압도적인 규모와 웅장한 분위기 속에서 아티스트와 관객이 하나 되는 특별한 순간을 선사하는 스테이지입니다.',
    subDescription: '독특한 삼각형 구조와 입체적인 공간 구성을 바탕으로 바라보는 각도마다 새로운 무대의 모습을 연출합니다.',
    approxTime: '15:10 - 익일 02:20 (약 11시간 운영 예정)',
    approxTeams: '약 8팀 출연 예정',
    accentColor: '#38BDF8',
    note: '삼각형 구조 메인 아레나 스테이지',
  },
  {
    id: 'vivid_planet',
    name: 'VIVID PLANET 27',
    tagline: '강렬한 조명과 LED·역동적 비주얼',
    description: '화려한 무대 연출로 시선을 사로잡으며, 강렬한 조명과 LED, 역동적인 비주얼이 어우러져 무대 위 모든 순간을 더욱 생생하게 완성합니다.',
    subDescription: '장면마다 변화하는 화려한 무대 효과와 퍼포먼스로 현장의 열기를 한층 끌어올립니다.',
    approxTime: '14:10 - 익일 00:30 (약 10시간 운영 예정)',
    approxTeams: '약 8팀 출연 예정',
    accentColor: '#FF4D00',
    note: '2027 새해 카운트다운 진행 스테이지',
  },
  {
    id: 'whitemoon_lounge',
    name: 'WHITEMOON LOUNGE',
    tagline: '새롭게 선보이는 달을 형상화한 무대',
    description: 'LED를 통해 펼쳐지는 풍경과 섬세한 조명 연출이 어우러져 분위기를 완성하는 스테이지입니다.',
    subDescription: '달빛 아래 새롭게 펼쳐지는 무대에서 더욱 특별한 음악적 경험을 선사합니다.',
    approxTime: '17:40 - 익일 05:00 (첫차 시간까지 운영 예정)',
    approxTeams: '약 7팀 출연 예정',
    accentColor: '#E5E7EB',
    note: '올나잇 라운지 무대',
  },
];

export const FESTIVAL_CONTENTS: FestivalContent[] = [
  {
    id: 'trampoline',
    title: '트램펄린',
    filterCategory: 'activity',
    badge: 'ACTIVITY',
    summary: '음악과 함께 즐기는 현장 점핑 존',
    imageAlt: '어두운 조명 아래 트램펄린 위에서 높이 뛰어오르며 에너지를 발산하는 관객',
  },
  {
    id: 'pillowfight',
    title: '베개싸움',
    filterCategory: 'activity',
    badge: 'ACTIVITY',
    summary: '스트레스를 날리는 단체 베개싸움 이벤트',
    imageAlt: '여러 사람이 함께 베개를 휘두르며 스트레스를 풀고 웃음을 나누는 현장',
  },
  {
    id: 'shoethrow',
    title: '신발 던지기',
    filterCategory: 'activity',
    badge: 'ACTIVITY',
    summary: '과녁을 향해 신발을 던지는 현장 미니게임',
    imageAlt: '관객들의 환호 속에서 과녁을 향해 힘차게 날아가는 운동화 모습',
  },
  {
    id: 'diy_flag',
    title: 'DIY 나만의 깃발 만들기',
    filterCategory: 'diy',
    badge: 'DIY',
    summary: '나만의 커스텀 깃발을 직접 제작하는 체험 부스',
    imageAlt: '직접 꾸민 개성 있는 깃발을 들어 보이며 페스티벌을 즐기는 참여자',
  },
];

export const INFO_GUIDELINES: InfoGuideline[] = [
  {
    id: 'baggage',
    title: '물품 반입',
    category: 'BAGGAGE',
    summary: '공연장 내 무분별하게 방치된 짐은 안전상의 위험을 초래할 수 있습니다. 주인 없이 방치된 짐은 발견 즉시 이동 조치될 수 있으니, 반드시 필요한 최소한의 짐만 지참해 주시기 바랍니다.',
    allowedItems: [
      '간단한 개인 소지품을 담을 수 있는 소형 가방',
      '500ml 이하 PET병에 담긴 물 및 음료',
    ],
    prohibitedItems: [
      '피크닉 용품(돗자리, 피크닉 매트, 의자, 테이블, 에어 베드, 에어 소파 등)',
      '타인의 관람에 방해가 될 수 있는 물품',
      '바퀴 달린 기구(휠체어, 유모차 제외)',
      '전문적인 촬영 및 녹음 장비',
      '안전을 위협할 수 있는 물품/병/캔/하드 리퀴드(도수가 높은 위스키, 증류주 등)',
      '외부 음식',
    ],
  },
  {
    id: 'slam',
    title: '슬램',
    category: 'POLICY',
    summary: '슬램은 지정된 구역 내에서 허용됩니다.',
    bullets: [
      '본인 및 타인의 안전을 해칠 수 있는 과도한 행위는 삼가주시기 바랍니다.',
      '슬램을 원하지 않는 관객분들도 안전하고 편안하게 공연을 즐길 수 있도록 반드시 지정된 구역 내에서만 진행해 주시기 바랍니다.',
      '모든 관객분들의 안전한 관람을 위해 공연장 내·외부에 충분한 경호 인력과 스태프를 배치할 예정이며, 공연 중에도 객석 모니터링을 진행합니다.',
      '위험하다고 판단되는 상황이나 다른 관객의 공연 관람을 방해하는 행위가 발생할 경우, 현장 스태프의 안내에 따라 시정 조치가 이루어질 수 있습니다.',
    ],
  },
  {
    id: 'flag',
    title: '깃발',
    category: 'POLICY',
    summary: 'COUNTDOWN FANTASY 2026-2027에서는 깃발 반입 및 사용이 가능합니다.',
    bullets: [
      '깃발의 길이는 5m 이하로 제한됩니다.',
      '타인에게 불쾌감이나 혐오감을 줄 수 있는 이미지 또는 문구가 포함된 깃발은 주최 측의 판단에 따라 반입 및 사용이 제한될 수 있습니다.',
      '다른 관객의 시야와 공연 관람에 방해가 되지 않는 위치에서 사용해 주시기 바랍니다.',
      "현장에서 직접 나만의 깃발을 만들어 볼 수 있는 'DIY 나만의 깃발 만들기' 프로그램이 진행될 예정입니다. (*세부 내용은 추후 공개)",
    ],
  },
  {
    id: 'minors',
    title: '미성년자',
    category: 'FAQ',
    question: '미성년자도 자정 이후 진행되는 공연을 관람할 수 있나요?',
    summary: '공연 관람이 가능합니다.',
    note: '보다 자세한 내용은 추후 공지를 통해 안내해 드리겠습니다.',
  },
  {
    id: 'wristband',
    title: '손목밴드',
    category: 'FAQ',
    question: '공연장에 늦게 도착해도 손목밴드를 수령할 수 있나요? 입장 후 스테이지 밖으로 이동할 수 있나요?',
    summary: '네, 손목밴드는 도착 시간과 관계없이 수령 가능하며, 입장 후에도 스테이지 간 자유롭게 이동하실 수 있습니다.',
    bullets: [
      '도착 시간과 무관하게 현장 부스에서 손목밴드 수령 가능',
      '입장 완료 후 모든 스테이지 간 자유로운 이동 가능',
      '단, 손목밴드는 행사 종료 시까지 착용 상태를 유지해야 하며, 분실 또는 훼손 시 재발행이 불가합니다.',
    ],
  },
  {
    id: 'filming',
    title: '촬영',
    category: 'FAQ',
    question: '무대 사진이나 영상 촬영이 가능한가요?',
    summary: '일반적인 기념 촬영은 가능하나, 공연 실황을 촬영하는 행위는 엄격히 금지됩니다.',
    bullets: [
      '공연 실황의 사진 및 영상 촬영, 녹음, SNS 생중계 등은 공연 저작권을 침해할 수 있으며, 다른 관객의 시야와 통행을 방해할 수 있으므로 허용되지 않습니다.',
      '공연 관련 사진·영상 및 녹음물을 활용해 수익을 창출하는 행위 역시 금지됩니다.',
    ],
  },
  {
    id: 'locker',
    title: '물품보관소',
    category: 'FAQ',
    question: '물품보관소가 있나요?',
    summary: '네, 물품보관소가 운영될 예정입니다.',
    note: '자세한 운영 시간 및 이용 방법은 추후 공식 SNS를 통해 안내해 드리겠습니다.',
  },
  {
    id: 'smoking',
    title: '흡연구역',
    category: 'FAQ',
    question: '흡연 구역이 있나요?',
    summary: '네, 흡연은 킨텍스 전시장 외부에 마련된 지정 흡연 구역에서만 가능합니다.',
    bullets: [
      '전시장 내부 및 지정 구역 외 장소에서는 흡연이 절대 불가합니다.',
    ],
  },
];

export const MD_FAQ_ITEMS: MdFaqItem[] = [
  {
    id: 'official-md',
    question: '공식 MD를 판매하나요?',
    answer: '네, 공식 MD 판매가 진행될 예정입니다. MD 품목 및 판매 관련 자세한 사항은 추후 공식 SNS를 통해 공개될 예정입니다.',
  },
  {
    id: 'artist-md',
    question: '아티스트 MD도 판매하나요?',
    answer: '네, 현장에 아티스트별 MD 판매 부스가 마련될 예정입니다. 다만, 모든 출연 아티스트의 MD 부스가 운영되는 것은 아니며, 참여 아티스트 및 판매 관련 자세한 사항은 추후 공식 SNS를 통해 안내해 드리겠습니다.',
  },
];

export const TICKET_PLATFORMS = [
  {
    id: 'nol',
    name: 'NOL',
    subLabel: '놀티켓 공식 예매',
    url: 'https://nol.yanolja.com/ticket/products/26014568',
  },
  {
    id: 'yes24',
    name: 'YES24',
    subLabel: '예스24 티켓 공식 예매',
    url: 'https://ticket.yes24.com/Perf/60590',
  },
  {
    id: 'naver',
    name: '네이버 예약',
    subLabel: 'NAVER 공식 예매',
    url: 'https://booking.naver.com/booking/12/bizes/1754451',
  },
  {
    id: '2tm',
    name: '2TM',
    subLabel: '투더문(2TM) 공식 예매',
    url: 'https://www.2tm.co.kr/ticket/10888',
  },
];
