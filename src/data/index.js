import {design} from './categories/design';
import {health} from './categories/health';
import {food} from './categories/food';

export const data = [
    {
        id : 1,
        title : "21 Important Life Lessons You Can Learn From Sheeps! We mean it!",
        articleContent : design.article1,
        published : Date.now(),
        category : "design"
    },
    {
        id : 2,
        title : "This Is The Damage A Presidential Term Or Two Can Do. Look At Those Wrinkles!",
        articleContent : design.article2,
        published : Date.now(),
        category : "design"
    },
    {
        id : 3,
        title : "8 Heartbreaking Pictures That Will Make You Appreciate Life",
        articleContent : design.article3,
        published : Date.now(),
        category : "design"
    },
    {
        id : 4,
        title : "You Won’t Believe How Your Workspace Has Changed Over The Years… Wow.",
        articleContent : health.article1,
        published : Date.now(),
        category : "health"
    },
    {
        id : 5,
        title : "Kids Were Abusing This Poor Dog With Sticks. They Had No Idea What Was About To Happen… OMG",
        articleContent : health.article2,
        published : Date.now(),
        category : "health"
    },
    {
        id : 6,
        title : "Listen To “The Piano Guys” Take You …",
        articleContent : health.article3,
        published : Date.now(),
        category : "health"
    },

    {
        id : 7,
        title : "Is it OK to eat hot food at your desk?",
        articleContent : food.article1,
        published : Date.now(),
        category : "food"
    },
    {
        id : 8,
        title : "The Ultimate Lipstick Vs. Food Test",
        articleContent : food.article2,
        published : Date.now(),
        category : "food"
    },
    {
        id : 9,
        title : "This Food Test Will Reveal What Color Your Aura Is",
        articleContent : food.article3,
        published : Date.now(),
        category : "food"
    },
]