import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  filterBarText : Subject<any> = new Subject<any>();
  private events: Event[] = [
    { 
      id: 1, 
      title: "Tech Conference 2025", 
      date: "2025-03-10T10:00:00", 
      location: "New Delhi, India", 
      description: "A gathering of tech enthusiasts discussing AI, cloud, and more. Industry leaders will share insights on emerging technologies, cybersecurity, and digital transformation. Attendees will have opportunities to network, participate in panel discussions, and explore innovative solutions in the tech space."
    },
    { 
      id: 2, 
      title: "Startup Pitch Night", 
      date: "2025-03-15T18:00:00", 
      location: "Bangalore, India", 
      description: "Founders showcase their startups to investors and mentors. This event brings together venture capitalists, angel investors, and industry experts to evaluate new business ideas. Attendees can expect live pitches, feedback sessions, and networking opportunities that can help turn ideas into successful ventures."
    },
    { 
      id: 3, 
      title: "Web Development Bootcamp", 
      date: "2025-03-20T09:00:00", 
      location: "Online Webinar", 
      description: "A hands-on session for beginners in front-end and back-end development. This intensive bootcamp covers HTML, CSS, JavaScript, React, and Node.js. Attendees will build real-world projects, gain practical coding experience, and receive guidance from industry professionals."
    },
    { 
      id: 4, 
      title: "Music Festival 2025", 
      date: "2025-04-05T16:00:00", 
      location: "Mumbai, India", 
      description: "A celebration of music featuring top artists and bands. Experience an electrifying atmosphere with live performances spanning multiple genres, from rock to electronic dance music. Enjoy food stalls, interactive fan experiences, and a vibrant community of music lovers. Special guest artists and surprise performances will make this an unforgettable event."
    },
    { 
      id: 5, 
      title: "Data Science Meetup", 
      date: "2025-04-12T14:00:00", 
      location: "Hyderabad, India", 
      description: "A networking session for data scientists and analysts. Engage in insightful discussions on machine learning, big data analytics, and AI-driven solutions. Industry experts will present case studies, best practices, and hands-on workshops. This is a great opportunity for professionals and enthusiasts to share knowledge and collaborate on real-world data challenges."
    },
    { 
      id: 6, 
      title: "Angular Workshop", 
      date: "2025-04-18T11:00:00", 
      location: "Online Webinar", 
      description: "Learn Angular with real-world projects and best practices. This session will cover Angular fundamentals, component-based architecture, reactive programming with RxJS, and performance optimization techniques. Participants will work on interactive exercises, build dynamic applications, and receive expert tips to master Angular development."
    },
    { 
      id: 7, 
      title: "Digital Marketing Summit", 
      date: "2025-05-01T09:30:00", 
      location: "Gurgaon, India", 
      description: "Experts discuss the latest trends in SEO, PPC, and content marketing. Attendees will learn about digital marketing strategies, AI-powered analytics, social media advertising, and conversion optimization techniques. Industry leaders will share insights on maximizing online presence and improving marketing ROI."
    },
    { 
      id: 8, 
      title: "Cloud Computing Expo", 
      date: "2025-05-10T10:00:00", 
      location: "Chennai, India", 
      description: "Explore the future of cloud computing and serverless architecture. Learn about cloud security, multi-cloud strategies, and cost optimization techniques. This event brings together cloud architects, developers, and business leaders to discuss innovations in AWS, Azure, and Google Cloud."
    },
    { 
      id: 9, 
      title: "Photography Masterclass", 
      date: "2025-05-20T15:00:00", 
      location: "Goa, India", 
      description: "A workshop for aspiring photographers to enhance their skills. Learn the art of composition, lighting, and editing from professional photographers. This hands-on session covers portrait, landscape, and street photography. Attendees will have the chance to practice in scenic locations and receive expert feedback."
    },
    { 
      id: 10, 
      title: "AI & Machine Learning Summit", 
      date: "2025-06-05T10:00:00", 
      location: "Pune, India", 
      description: "Deep dive into AI advancements and real-world applications. Experts will showcase AI-driven innovations in healthcare, finance, and automation. Learn about neural networks, deep learning, and ethical AI considerations. Engage in panel discussions, hands-on coding sessions, and networking with industry pioneers."
    },
    { 
      id: 11, 
      title: "Cybersecurity Conference", 
      date: "2025-06-15T09:00:00", 
      location: "Kolkata, India", 
      description: "A conference focusing on the latest cybersecurity threats and solutions. Experts will discuss ethical hacking, ransomware protection, and data privacy laws. Participate in hands-on workshops to understand how to secure networks and prevent cyber attacks."
    },
    { 
      id: 12, 
      title: "Blockchain & Crypto Summit", 
      date: "2025-06-25T10:30:00", 
      location: "Online Webinar", 
      description: "Discover the future of blockchain technology and cryptocurrencies. Industry leaders will discuss DeFi, NFTs, and smart contract applications. Learn how blockchain is revolutionizing finance, supply chain, and digital assets."
    },
    { 
      id: 13, 
      title: "Game Development Expo", 
      date: "2025-07-05T12:00:00", 
      location: "Bangalore, India", 
      description: "An event dedicated to game developers and gaming enthusiasts. Explore game design, VR/AR innovations, and career opportunities in the gaming industry. Network with indie developers, industry veterans, and publishers."
    },
    { 
      id: 14, 
      title: "E-Commerce Growth Hack Summit", 
      date: "2025-07-15T14:00:00", 
      location: "Delhi, India", 
      description: "Learn how to scale your e-commerce business with growth hacking techniques. Industry experts will cover conversion optimization, digital advertising, and customer retention strategies."
    },
    { 
      id: 15, 
      title: "Python for AI Bootcamp", 
      date: "2025-07-20T09:00:00", 
      location: "Online Webinar", 
      description: "A hands-on bootcamp for learning Python in AI applications. Topics include TensorFlow, data science, and neural networks. Participants will build real AI projects using Python."
    },
    { 
      id: 16, 
      title: "IoT & Smart Devices Expo", 
      date: "2025-08-05T11:00:00", 
      location: "Chennai, India", 
      description: "Explore the latest innovations in the Internet of Things (IoT). Learn about smart homes, connected vehicles, and industrial IoT applications."
    },
    { 
      id: 17, 
      title: "Product Management Summit", 
      date: "2025-08-15T10:00:00", 
      location: "Mumbai, India", 
      description: "A summit for product managers and business strategists. Learn about product roadmaps, UX strategies, and agile development methodologies."
    },
    { 
      id: 18, 
      title: "VR & AR Tech Showcase", 
      date: "2025-08-25T15:30:00", 
      location: "Bangalore, India", 
      description: "Explore the latest advancements in Virtual Reality (VR) and Augmented Reality (AR). Experience cutting-edge applications in gaming, education, and healthcare."
    }
  ];
  

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  addEvent(event: Event) {
    event.id = this.events.length + 1;
    this.events.push(event);
  }

  updateEvent(updatedEvent: Event) {
    const index = this.events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }
  checkDuplicateEvent(title: string): boolean {
    return this.events.some(event => event.title.toLowerCase() === title.toLowerCase());
  }
  deleteEvent(id: number) {
    this.events = this.events.filter(event => event.id !== id);
  }
}
