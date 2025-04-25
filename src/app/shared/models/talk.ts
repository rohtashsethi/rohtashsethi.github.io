export interface Talk {
    title: string;
    description: string;
    mode: 'online' | 'offline';
    event: string;
    audience: number;
    eventType: 'conference' | 'meetup' | 'workshop' | 'hackathon';
    videoUrl?: string;
    slidesUrl?: string;
    image: string;
    demoUrl?: string;
    sourceCodeUrl?: string;
    tags: string[];
}