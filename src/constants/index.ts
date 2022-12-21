import type { Menu } from "../definations/Nav";
import {
  WebRounded,
  PlayLessonRounded,
  Inventory2Rounded,
  BuildRounded,
  ArticleRounded,
  EmailRounded,
  Recommend,
  Loyalty,
  NoteAlt,
  EmojiObjectsRounded,
  EmojiEmotionsRounded,
} from "@mui/icons-material";

const product: Menu = {
  id: 1,
  title: "Product Tools",
  icon: Inventory2Rounded,
  list: [
    {
      id: 1,
      title: "Product Descriptions",
    },
  ],
};

const digitalAdCopy: Menu = {
  id: 2,
  title: "Digital Ad Copy",
  icon: PlayLessonRounded,
  list: [
    {
      id: 1,
      title: "Ad Copy Variants",
    },
    {
      id: 2,
      title: "Facebook Headlines",
    },
    {
      id: 3,
      title: "Facebook Link Descriptions",
    },
    {
      id: 4,
      title: "Facebook Listicle",
    },
    {
      id: 5,
      title: "Facebook Primary Text",
    },
    {
      id: 6,
      title: "General Ad Copy",
    },
    {
      id: 7,
      title: "Google Description",
    },
    {
      id: 8,
      title: "Google Headlines",
    },
    {
      id: 9,
      title: "LinkedIn Ad Copy",
    },
  ],
};

const statupTool: Menu = {
  id: 3,
  title: "Startup Tools",
  icon: BuildRounded,
  list: [
    {
      id: 1,
      title: "Audience Refiner",
    },
    {
      id: 2,
      title: "Brand Mission",
    },
    {
      id: 3,
      title: "Brand Voice",
    },
    {
      id: 4,
      title: "Motto Generator",
    },
    {
      id: 5,
      title: "Value Proposition",
    },
  ],
};

const WebsiteCopy: Menu = {
  id: 4,
  title: "WebSite Copy",
  icon: WebRounded,
  list: [
    {
      id: 1,
      title: "Call to Action",
    },
    {
      id: 2,
      title: "Event Copy",
    },
    {
      id: 3,
      title: "Landing Page Hero Text",
    },
    {
      id: 4,
      title: "Listicle",
    },
    {
      id: 5,
      title: "Meta Descriptions",
    },
    {
      id: 6,
      title: "Microcopy",
    },
    {
      id: 7,
      title: "Question Generator",
    },
    {
      id: 8,
      title: "Social Proof Text",
    },
    {
      id: 9,
      title: "Subheader",
    },
    {
      id: 10,
      title: "Testimonial Rewriter",
    },
  ],
};

const Blog: Menu = {
  id: 5,
  title: "Blog Tools",
  icon: ArticleRounded,
  list: [
    {
      id: 1,
      title: "Blog Conclusion",
    },
    {
      id: 2,
      title: "Blog Ideas",
    },
    {
      id: 3,
      title: "Blog Intro",
    },
    {
      id: 4,
      title: "Blog Outline",
    },
    {
      id: 5,
      title: "Blog Title",
    },
    {
      id: 6,
      title: "Blog Title - Listicle",
    },
    {
      id: 7,
      title: "Bullet Point to Blog Section",
    },
    {
      id: 8,
      title: "Freestyle",
    },
    {
      id: 9,
      title: "Keyword Generator",
    },
  ],
};

const Email: Menu = {
  id: 6,
  title: "Email/Letter",
  icon: EmailRounded,
  list: [
    {
      id: 1,
      title: "Cancellation Email",
    },
    {
      id: 2,
      title: "Catchy Email Subject Lines",
    },
    {
      id: 3,
      title: "Confirmation Emails",
    },
    {
      id: 4,
      title: "Follow Up Email",
    },
    {
      id: 5,
      title: "Thank You Note",
    },
    {
      id: 6,
      title: "Welcome Email",
    },
  ],
};

const social = {
  id: 7,
  title: "Social Media Tools",
  icon: Recommend,
  list: [
    {
      id: 1,
      title: "Add Emoji To List",
    },
    {
      id: 2,
      title: "Bullet Points",
    },
    {
      id: 3,
      title: "Carousel Post",
    },
    {
      id: 4,
      title: "Crazy Youtube Ideas",
    },
    {
      id: 5,
      title: "Hashtag Generator",
    },
    {
      id: 6,
      title: "Hook Generator",
    },
    {
      id: 7,
      title: "Instagram Captions",
    },
    {
      id: 8,
      title: "Instagram Product Showcase",
    },
    {
      id: 9,
      title: "Keyword Generator",
    },
    {
      id: 10,
      title: "Launch Your Product",
    },
    {
      id: 11,
      title: "Relatable Experiences",
    },
    {
      id: 12,
      title: "Short Text Hook",
    },
    {
      id: 13,
      title: "TikTok Brainstorm Topics",
    },
    {
      id: 14,
      title: "Video Call To Action",
    },
    {
      id: 15,
      title: "YouTube Description Intro",
    },
    {
      id: 16,
      title: "YouTube Video Title",
    },
  ],
};
const sales: Menu = {
  id: 1,
  title: "Sales Tools",
  icon: Loyalty,
  list: [
    {
      id: 1,
      title: "Attention-Interest-Desire-Action",
    },
    {
      id: 2,
      title: "Before-After-Bridge",
    },
    {
      id: 3,
      title: "Feature to Benefits",
    },
    {
      id: 4,
      title: "Feature-Advantage-Benefit",
    },
    {
      id: 5,
      title: "Marketing Angles",
    },
    {
      id: 6,
      title: "Pain-Agitate-Solution",
    },
    {
      id: 7,
      title: "Problem-Promise-Proof-Proposal",
    },
    {
      id: 8,
      title: "QUEST Copywriting",
    },
  ],
};

const writingTools: Menu = {
  id: 1,
  title: "Writing Tools",
  icon: NoteAlt,
  list: [
    {
      id: 1,
      title: "Adjective Accelerator",
    },
    {
      id: 2,
      title: "Analogy Generator",
    },
    {
      id: 3,
      title: "Bullet Point to Blog Section",
    },
    {
      id: 4,
      title: "Bullet Point to Paragraph",
    },
    {
      id: 5,
      title: "Cliffhanger",
    },
    {
      id: 6,
      title: "Essay Intro",
    },
    {
      id: 7,
      title: "Essay Outline",
    },
    {
      id: 8,
      title: "Explain Like I'm 5",
    },
    {
      id: 9,
      title: "Freestyle",
    },
    {
      id: 10,
      title: "Hero Story Intro",
    },
    {
      id: 11,
      title: "Hero Story Villain",
    },
    {
      id: 12,
      title: "Passive To Active Voice",
    },
    {
      id: 14,
      title: "Press Release Intros",
    },
    {
      id: 15,
      title: "Rewrite With Keywords",
    },
    {
      id: 16,
      title: "Sentence Rewriter",
    },
    {
      id: 17,
      title: "Simplify Sentences",
    },
    {
      id: 18,
      title: "Tone Changer",
    },
    {
      id: 19,
      title: "Two Sentence Stories",
    },
    {
      id: 20,
      title: "Verb Booster",
    },
  ],
};

const Brainstorming: Menu = {
  id: 1,
  title: "Brainstorming Tools",
  icon: EmojiObjectsRounded,
  list: [
    {
      id: 1,
      title: "Growth Ideas",
    },
    {
      id: 2,
      title: "Name Generator",
    },
    {
      id: 3,
      title: "Next Product",
    },
    {
      id: 4,
      title: "Startup Ideas",
    },
    {
      id: 5,
      title: "Viral Ideas",
    },
  ],
};

const PersonalTools: Menu = {
  id: 1,
  title: "Product Tools",
  icon: EmojiEmotionsRounded,
  list: [
    {
      id: 1,
      title: "Birthday Card",
    },
    {
      id: 2,
      title: "Clubhouse Bio",
    },
    {
      id: 3,
      title: "Cover Letter",
    },
    {
      id: 4,
      title: "Love Letter",
    },
    {
      id: 5,
      title: "Resume Bullet Points",
    },
  ],
};

export const tools: Menu[] = [
  digitalAdCopy,
  product,
  WebsiteCopy,
  statupTool,
  Blog,
  Email,
  social,
  sales,
  writingTools,
  Brainstorming,
  PersonalTools,
];
