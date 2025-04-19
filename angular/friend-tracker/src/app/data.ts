import { Person } from '../types';

export const myProfileData: Person = {
    name: 'Brittani Lovelace',
    profilePictureUrl: 'assets/Brittani headshots.jpg',
    age: 32,
    bio: 'I am an aspiring software developer with a passion for learning new skills in tech to grow in the industry.I also enjoy playing video games.',
    birthday: 'February 27, 1993',
    interests: ['Video Games', 'Software Development', 'Learning'],
}
export const friendsData: Person[] = [{
    name: "Victor Holt",
    profilePictureUrl: "assets/Victor.jpg",
    age: 75,
    bio: "Victor is a retired engineer who loves to tinker with old cars and spend time with his grandchildren. He has a passion for woodworking and often spends his weekends crafting furniture.",
    birthday: "March 7, 1946",
    interests: ["Woodworking", "Tinkering with cars", "Spending time with family"],
}, {
    name: "Calvin Wells",
    profilePictureUrl: "assets/Calvin.jpg",
    age: 37,
    bio: "Calvin is a software developer who enjoys hiking and photography. He has a keen interest in artificial intelligence and often participates in hackathons to challenge himself.",
    birthday: "October 7, 1988",
    interests: ["Hiking", "Photography", "Artificial Intelligence"],
}, {
    name: "Leonard Watkins",
    profilePictureUrl: "assets/Leo.jpg",
    age: 31,
    bio: "Leonard is a graphic designer who loves to travel and explore new cultures. He has a passion for painting and often spends his free time creating art.",
    birthday: "May 3, 1992",
    interests: ["Traveling", "Painting", "Exploring new cultures"],
}]