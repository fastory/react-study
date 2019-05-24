export const ADD_TODO = 'ADD_TODO';     //为什么在const 变量以后

export type ADD_TODO = typeof ADD_TODO;  //类型守卫 

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export type TODO_TYPE = ADD_TODO | TOGGLE_TODO;
