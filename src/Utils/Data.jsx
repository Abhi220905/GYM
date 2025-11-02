/* Feature  */
import { FaDumbbell, FaHeartbeat, FaRunning, FaAppleAlt } from "react-icons/fa";
import { GiWeightLiftingUp, GiMeditation } from "react-icons/gi";

export const featuresData = [
  {
    id: 1,
    title: "Intense Workouts",
    desc: "Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo.",
    icon: <FaDumbbell size={40} />,
  },
  {
    id: 2,
    title: "Cardio Training",
    desc: "Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet.",
    icon: <FaHeartbeat size={40} />,
  },
  {
    id: 3,
    title: "Personal Coaching",
    desc: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    icon: <FaRunning size={40} />,
  },
];

/* Milestone */

export const statsData = [
  {
    id: 1,
    number: "1374",
    label: "Happy Clients",
  },
  {
    id: 2,
    number: "356",
    label: "Strong Bodies",
  },
  {
    id: 3,
    number: "57k",
    label: "IG Followers",
  },
  {
    id: 4,
    number: "24/7",
    label: "Working Hours",
  },
];

/*trainer*/

export const trainersData = [
  {
    id: 1,
    name: "Michael Smith",
    img: "img/trainer1.jpg",
    desc: "Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum nec sapien.",
  },
  {
    id: 2,
    name: "Jessica Black",
    img: "img/trainer2.jpg",
    desc: "Ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare.",
  },
  {
    id: 3,
    name: "James Brown",
    img: "img/trainer3.jpg",
    desc: "Libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien.",
  },
  {
    id: 4,
    name: "Paula Carlton",
    img: "img/trainer4.jpg",
    desc: "Sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare.",
  },
];

/* Class features */

export const ClassesFeatures = [
  {
    id: 1,
    title: "Bodybuilding" ,
    desc: "Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.",
    icon:  <FaDumbbell size={40} />,
  },
  {
    id: 2,
    title: "Fitness",
    desc: "Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare.",
    icon: <GiWeightLiftingUp size={40}/> ,
  },
  {
    id: 3,
    title: "Aerobics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada.",
    icon: <FaRunning  size={40} /> ,
  },
  {
    id: 4,
    title: "Pilates",
    desc: "Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.",
    icon: <GiMeditation  size={40} /> ,
  },
  {
    id: 5,
    title: "weight Lifting" ,
    desc: "Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.",
    icon: <FaHeartbeat  size={40} /> ,
  },
  {
    id: 6,
    title: "nutrition",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada.",
    icon: <FaAppleAlt  size={40} /> ,
  },
  
];


export const blogs = [
  {
    title: "5 Morning Habits to Boost Your Fitness Journey",
    date: "October 20, 2025",
    author: "Admin",
    desc: "Start your day strong! Discover how a mindful morning routine can improve your energy, focus, and consistency in workouts.",
  },
  {
    title: "Why Rest Days Are Just As Important As Workouts",
    date: "October 17, 2025",
    author: "Trainer Mike",
    desc: "Many skip rest days thinking they slow progress — but recovery is where the real muscle growth and strength happen.",
  },
  {
    title: "Healthy Meal Ideas for a Busy Lifestyle",
    date: "October 14, 2025",
    author: "Nutrition Expert",
    desc: "Struggling to eat healthy with a tight schedule? Here are quick, protein-rich meals that take less than 15 minutes to make.",
  },
  {
    title: "Top 3 Mindset Shifts to Stay Consistent",
    date: "October 10, 2025",
    author: "Coach Ryan",
    desc: "Motivation fades, but discipline stays. Learn how to train your mind to stay consistent — even when life gets busy.",
  },
];
