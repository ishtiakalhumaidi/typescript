# keyof Keyword এর ব্যবহার

keyof keyword TypeScript-এ একটি object type এর সব key-এর union type তৈরি করতে ব্যবহার হয়।

## উদাহরণ:

type User = {
id: number
name: string
age: number
}
keyof ব্যবহার করে User এর সব key এর union type পাওয়া যায়
type UserKeys = keyof User;
যা মূলত বুঝায় type UserKeys = "id" | "name" | "age"

# Union এবং Intersection Types এর উদাহরণ

## Union Type:

Union type ব্যবহার করে আমরা একটি variable কে একাধিক type এর মধ্যে যেকোনো একটির মান গ্রহণ করতে পারি।

type Value = number | string;
let UserId:value;
userId = 101; যা ঠিক আছে
userId = "A101"; যা ঠিক আছে
userId = true; যা ঠিক নেই এখানে error দেখাবে

## Intersection Type:

Intersection type ব্যবহার করে আমরা একাধিক type একত্রিত করে একটি নতুন type তৈরি করতে পারি।

type Id ={
id: number
}
type Name = {
name:string
}
type User = Id & Name;

যা মূলত বুঝায় type User = {id:number, name:string}

id এবং name দুইটাই থাকতেই হবে
