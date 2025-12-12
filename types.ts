export enum EventType {
  Transport = '交通',
  Food = '美食',
  Activity = '景點',
  Stay = '住宿',
  Note = '備註'
}

export interface TripEvent {
  id: string;
  time: string;
  title: string;
  description?: string;
  type: EventType;
  location?: string;
  locationUrl?: string;
  cost?: string;
  notes?: string[];
  links?: { label: string; url: string }[];
}

export interface TripDay {
  date: string; // e.g., "12/31"
  dayOfWeek: string; // e.g., "週三"
  fullDate: string; // e.g., "2025-12-31"
  location: string; // e.g., "胡志明 -> 頭頓"
  events: TripEvent[];
}