export interface Config {
  name: string /* your name i.e. Alex */;
  info: string[] /* tell about yourself shortly */;
  about: string[] /* tell about yourself not shortly */;
  numbers: Numbers;
  skills: {
    core: string[];
    languages: string[];
    other: string[];
  };
  projects: Project[];
  contacts: {
    tg?: string;
    instagram?: string;
    vk?: string;
    fb?: string;
  };
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Numbers {
  experience: string;
  projects: string;
  clients: string;
}
