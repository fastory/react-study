export const ADD_TODO = 'ADD_TODO';     //为什么在const 变量以后，还要对这个变量进行类型保护，在是字符串的情况下，这个值是不可以被改变的

export type ADD_TODO = typeof ADD_TODO;  //类型守卫 

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export enum VisibilityFilters {
    SHOW_ALL= "SHOW_ALL",
    SHOW_COMPLETED="SHOW_COMPLETED",
    SHOW_ACTIVE="SHOW_ACTIVE"
};
