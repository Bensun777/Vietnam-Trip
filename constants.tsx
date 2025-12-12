import { TripDay, EventType } from './types';
import { Plane, Car, Utensils, Camera, Bed, Info, ShoppingBag, Music } from 'lucide-react';

export const ITINERARY_DATA: TripDay[] = [
  {
    date: '12/31',
    dayOfWeek: '週三',
    fullDate: '2025-12-31',
    location: '台北 -> 胡志明 -> 頭頓',
    events: [
      {
        id: '1-1',
        time: '05:40',
        title: '出發：家 -> 桃園機場',
        type: EventType.Transport,
        description: '準備飛往越南',
      },
      {
        id: '1-2',
        time: '10:30',
        title: '抵達胡志明市 (SGN)',
        type: EventType.Transport,
        description: '入境 + 領行李',
        notes: [
          '預計 11:00 出關',
          '等行李約 30-40 分鐘 (Jimmy 經驗)',
          '記得找巧萱換錢'
        ]
      },
      {
        id: '1-3',
        time: '11:00 - 14:30',
        title: '移動：胡志明 -> 頭頓',
        type: EventType.Transport,
        description: '搭乘包車或巴士前往頭頓，車程約 2 小時。',
        links: [
          { label: '預訂交通 (tttrips)', url: 'https://tttrips.com/' },
          { label: 'Klook 接送', url: 'https://s.klook.com' }
        ]
      },
      {
        id: '1-4',
        time: '15:00',
        title: '飯店 Check-in / 休息',
        type: EventType.Stay,
        location: '頭頓飯店',
        locationUrl: 'https://maps.app.goo.gl/1VMGbM4bLLqQZc6B6',
        description: '先寄放行李或辦理入住'
      },
      {
        id: '1-5',
        time: '18:00',
        title: '晚餐：簡單吃',
        type: EventType.Food,
        description: '在頭頓或胡志明買簡單的東西吃 (視交通狀況而定)'
      }
    ]
  },
  {
    date: '01/01',
    dayOfWeek: '週四',
    fullDate: '2026-01-01',
    location: '頭頓 -> 胡志明',
    events: [
      {
        id: '2-1',
        time: '07:00',
        title: '飯店早餐',
        type: EventType.Food,
      },
      {
        id: '2-2',
        time: '09:00',
        title: '景點：Hòn Bà (神龜島) / 水上活動',
        type: EventType.Activity,
        location: 'Hòn Bà',
        locationUrl: 'https://maps.app.goo.gl/4zFYPUNFDRNBnQ1V6',
        notes: [
          '**重要**：需查漲退潮時間',
          '若無法步行過去，改為水上活動',
          '營業時間：07:15 開始'
        ]
      },
      {
        id: '2-3',
        time: '09:30',
        title: '景點：耶穌山',
        type: EventType.Activity,
        location: 'Jesus Christ\'s Statue',
        locationUrl: 'https://maps.app.goo.gl/rgJzgaZSB86QZAMt5',
        notes: [
          '**穿著注意**：不能穿短褲、短裙',
          '有調嘎 (Tank top) 也不行',
          '順便去燈塔看看'
        ]
      },
      {
        id: '2-4',
        time: '11:00',
        title: '午餐',
        type: EventType.Food,
        location: '頭頓海灘附近',
        locationUrl: 'https://maps.app.goo.gl/Sk99xA',
        description: '或是在回胡志明市的路上吃'
      },
      {
        id: '2-5',
        time: '13:00 - 15:00',
        title: '移動：頭頓 -> 胡志明市',
        type: EventType.Transport,
        description: 'Klook 車 / 包車回胡志明',
        notes: ['建議 11:30 或 13:30 出發，避開塞車', '週四下午 15:30 提前結束?']
      },
      {
        id: '2-6',
        time: '15:30',
        title: '胡志明 Check-in',
        type: EventType.Stay,
        location: '胡志明飯店',
        locationUrl: 'https://maps.app.goo.gl/YceHm56U1DghmNR2A'
      },
      {
        id: '2-7',
        time: '16:30',
        title: '日落觀賞',
        type: EventType.Activity,
        links: [{ label: 'Klook 觀景', url: 'https://www.klook.com' }]
      },
      {
        id: '2-8',
        time: '18:00',
        title: '晚餐 + 飲料',
        type: EventType.Food,
        location: '餐廳',
        locationUrl: 'https://maps.app.goo.gl/242YDi9JywssA4Hh8'
      }
    ]
  },
  {
    date: '01/02',
    dayOfWeek: '週五',
    fullDate: '2026-01-02',
    location: '胡志明市區',
    events: [
      {
        id: '3-1',
        time: '06:00',
        title: '飯店早餐',
        type: EventType.Food,
      },
      {
        id: '3-2',
        time: '07:30 - 13:00',
        title: '行程：Klook 湄公河古道',
        type: EventType.Activity,
        description: '已預訂 Klook 行程',
        links: [{ label: 'Klook 行程詳情', url: 'https://www.klook.com/zh-TW/activity/858-cu-chi-tunnesl-mekong-river-day-tour-hochiminh/' }]
      },
      {
        id: '3-3',
        time: 'Afternoon',
        title: '市區觀光',
        type: EventType.Activity,
        description: '書街、郵局',
        notes: [
          '書街: https://maps.app.goo.gl/u2EDkAfQyue6JXgEA',
          '郵局: https://maps.app.goo.gl/3ksg7qdQy4gcRpvFA'
        ]
      },
      {
        id: '3-4',
        time: '18:00',
        title: '晚餐',
        type: EventType.Food,
        description: '回飯店休息一下再出發'
      }
    ]
  },
  {
    date: '01/03',
    dayOfWeek: '週六',
    fullDate: '2026-01-03',
    location: '胡志明市區',
    events: [
      {
        id: '4-1',
        time: '08:00',
        title: '早餐',
        type: EventType.Food,
      },
      {
        id: '4-2',
        time: '09:00',
        title: '越式洗頭',
        type: EventType.Activity,
        location: '洗頭店',
        locationUrl: 'https://maps.app.goo.gl/2w1Yroo9711vrdJE9',
        description: '放鬆體驗'
      },
      {
        id: '4-3',
        time: '11:30 - 14:30',
        title: '午餐：Lotte Hotel Buffet',
        type: EventType.Food,
        description: '已預訂 Buffet Voucher',
        location: 'Lotte Hotel Saigon',
        locationUrl: 'https://maps.app.goo.gl/trwQ6dQARd3x9m6r7',
        links: [{ label: 'Klook 餐券', url: 'https://www.klook.com/zh-TW/activity/105232-lotte-hotel-saigon-buffet-voucher/' }]
      },
      {
        id: '4-4',
        time: '15:00',
        title: '西貢摩天觀景台 (Bitexco)',
        type: EventType.Activity,
        location: 'Saigon Skydeck',
        locationUrl: 'https://maps.app.goo.gl/cDWVnSmLvhBQjyTY9',
        links: [{ label: 'Klook 門票', url: 'https://www.klook.com/zh-TW/activity/5496-saigon-skydeck-bitexco-financial-tower-admission-ticket-ho-chi-minh-city/' }]
      },
      {
        id: '4-5',
        time: '16:00',
        title: '市區亂逛',
        type: EventType.Activity,
        location: '胡志明市區',
        locationUrl: 'https://maps.app.goo.gl/pLN3jvbUwKjciBXy8'
      },
      {
        id: '4-6',
        time: '17:00',
        title: '晚餐',
        type: EventType.Food,
        description: '還不知道吃啥'
      },
      {
        id: '4-7',
        time: '19:00',
        title: '日本街 / 玩耍',
        type: EventType.Activity,
        description: '別說了就是日本街',
        locationUrl: 'https://maps.app.goo.gl/...'
      }
    ]
  },
  {
    date: '01/04',
    dayOfWeek: '週日',
    fullDate: '2026-01-04',
    location: '胡志明 (婚禮日)',
    events: [
      {
        id: '5-1',
        time: '08:00',
        title: '飯店早餐',
        type: EventType.Food,
      },
      {
        id: '5-2',
        time: '10:15',
        title: '前往宴會場地',
        type: EventType.Transport,
        description: '準備參加婚禮',
      },
      {
        id: '5-3',
        time: '11:00',
        title: 'Jimmy 婚禮',
        type: EventType.Activity,
        location: '婚宴會館',
        locationUrl: 'https://maps.app.goo.gl/94aqT2xDdfjA2WGY8',
        cost: '紅包 500,000 VND (白色信封)',
        notes: ['搭乘 Grab 前往', '重要活動']
      },
      {
        id: '5-4',
        time: '15:15',
        title: '宴會結束 -> 回市區',
        type: EventType.Transport,
        description: '前往高島屋或回飯店'
      },
      {
        id: '5-5',
        time: '17:00',
        title: '晚餐 / High Tea',
        type: EventType.Food,
        location: '餐廳',
        locationUrl: 'https://maps.app.goo.gl/MjUgHvoZqyhnx1RK8'
      },
      {
        id: '5-6',
        time: 'Night',
        title: '買伴手禮 + 酒吧',
        type: EventType.Activity,
        description: 'Mart 採買',
      }
    ]
  },
  {
    date: '01/05',
    dayOfWeek: '週一',
    fullDate: '2026-01-05',
    location: '胡志明 -> 溫暖的家',
    events: [
      {
        id: '6-1',
        time: '08:00',
        title: '飯店早餐',
        type: EventType.Food,
      },
      {
        id: '6-2',
        time: '09:00',
        title: '自由時間 / 補眠',
        type: EventType.Activity,
        description: '不知道幹嘛，睡到死或最後採買 (Shopping?)'
      },
      {
        id: '6-3',
        time: '12:00',
        title: '前往機場 (SGN)',
        type: EventType.Transport,
        description: '準備回家',
      },
      {
        id: '6-4',
        time: 'Afternoon',
        title: '甜蜜的家',
        type: EventType.Note,
        description: '~~~~ End of Trip ~~~~'
      }
    ]
  }
];

export const getIconForType = (type: EventType) => {
  switch (type) {
    case EventType.Transport: return <Car size={20} />;
    case EventType.Food: return <Utensils size={20} />;
    case EventType.Activity: return <Camera size={20} />;
    case EventType.Stay: return <Bed size={20} />;
    case EventType.Note: return <Music size={20} />; // Using Music/Note icon
    default: return <Info size={20} />;
  }
};

// Returns styles for Background(dot), Text(dot), BorderBar(card), Badge(text)
export const getColorForType = (type: EventType) => {
  switch (type) {
    case EventType.Transport: 
      return {
        bg: 'bg-blue-100', 
        text: 'text-blue-600', 
        bar: 'bg-blue-500',
        badge: 'bg-blue-100 text-blue-700'
      };
    case EventType.Food: 
      return {
        bg: 'bg-orange-100', 
        text: 'text-orange-600', 
        bar: 'bg-orange-500',
        badge: 'bg-orange-100 text-orange-700'
      };
    case EventType.Activity: 
      return {
        bg: 'bg-emerald-100', 
        text: 'text-emerald-600', 
        bar: 'bg-emerald-500',
        badge: 'bg-emerald-100 text-emerald-700'
      };
    case EventType.Stay: 
      return {
        bg: 'bg-purple-100', 
        text: 'text-purple-600', 
        bar: 'bg-purple-500',
        badge: 'bg-purple-100 text-purple-700'
      };
    case EventType.Note: 
      return {
        bg: 'bg-rose-100', 
        text: 'text-rose-600', 
        bar: 'bg-rose-400',
        badge: 'bg-rose-100 text-rose-700'
      };
    default: 
      return {
        bg: 'bg-gray-100', 
        text: 'text-gray-600', 
        bar: 'bg-gray-500',
        badge: 'bg-gray-100 text-gray-700'
      };
  }
};