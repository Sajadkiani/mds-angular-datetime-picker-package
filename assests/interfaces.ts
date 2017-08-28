﻿import { IDate } from './date.interface';

export interface IDay {
  year: number,
  month: number;
  day: number;
  dayString: string;
  disable: boolean;
  holiday: boolean; // تعطیل
  today: boolean; // آیا تاریخ برابر با امروز است
  isWithinRange: boolean; // آیا در محدوده رنج انتخاب شده می باشد
  isStartOrEndOfRange: boolean; // آیا برابر با تاریخ شروع یا پایان می باشد
}

export interface IDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  formatString: string;
}

export interface IRangeDate {
  startDate: IDate;
  endDate: IDate;
}