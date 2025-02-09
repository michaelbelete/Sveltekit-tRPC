export const COFFEE_LIST_DEP = 'coffee:list';
export const COFFEE_SEARCH_PARAM = 'coffeeType';
export const coffeeType = ['hot', 'iced'] as const;

export type CoffeeType = (typeof coffeeType)[number];
