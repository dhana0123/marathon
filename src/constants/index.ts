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
      category: "Product tool",
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
      category: "Digital Ad Copy tool",
      title: "Ad Copy Variants",
    },
    {
      id: 2,
      category: "Digital Ad Copy tool",
      title: "Facebook Headlines",
    },
    {
      id: 3,
      category: "Digital Ad Copy tool",
      title: "Facebook Link Descriptions",
    },
    {
      id: 4,
      category: "Digital Ad Copy tool",
      title: "Facebook Listicle",
    },
    {
      id: 5,
      category: "Digital Ad Copy tool",
      title: "Facebook Primary Text",
    },
    {
      id: 6,
      category: "Digital Ad Copy tool",
      title: "General Ad Copy",
    },
    {
      id: 7,
      category: "Digital Ad Copy tool",
      title: "Google Description",
    },
    {
      id: 8,
      category: "Digital Ad Copy tool",
      title: "Google Headlines",
    },
    {
      id: 9,
      category: "Digital Ad Copy tool",
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
      category: "Startup tool",
      title: "Audience Refiner",
    },
    {
      id: 2,
      category: "Startup tool",
      title: "Brand Mission",
    },
    {
      id: 3,
      category: "Startup tool",
      title: "Brand Voice",
    },
    {
      id: 4,
      category: "Startup tool",
      title: "Motto Generator",
    },
    {
      id: 5,
      category: "Startup tool",
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
      category: "WebSite Copy tool",
      title: "Call to Action",
    },
    {
      id: 2,
      category: "WebSite Copy tool",
      title: "Event Copy",
    },
    {
      id: 3,
      category: "WebSite Copy tool",
      title: "Landing Page Hero Text",
    },
    {
      id: 4,
      category: "WebSite Copy tool",
      title: "Listicle",
    },
    {
      id: 5,
      category: "WebSite Copy tool",
      title: "Meta Descriptions",
    },
    {
      id: 6,
      category: "WebSite Copy tool",
      title: "Microcopy",
    },
    {
      id: 7,
      category: "WebSite Copy tool",
      title: "Question Generator",
    },
    {
      id: 8,
      category: "WebSite Copy tool",
      title: "Social Proof Text",
    },
    {
      id: 9,
      category: "WebSite Copy tool",
      title: "Subheader",
    },
    {
      id: 10,
      category: "WebSite Copy tool",
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
      category: "Blog",
      title: "Blog Conclusion",
    },
    {
      id: 2,
      category: "Blog tool",
      title: "Blog Ideas",
    },
    {
      id: 3,
      category: "Blog tool",
      title: "Blog Intro",
    },
    {
      id: 4,
      category: "Blog tool",
      title: "Blog Outline",
    },
    {
      id: 5,
      category: "Blog tool",
      title: "Blog Title",
    },
    {
      id: 6,
      category: "Blog tool",
      title: "Blog Title - Listicle",
    },
    {
      id: 7,
      category: "Blog tool",
      title: "Bullet Point to Blog Section",
    },
    {
      id: 8,
      category: "Blog tool",
      title: "Freestyle",
    },
    {
      id: 9,
      category: "Blog tool",
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
      category: "Email/Letter tool",
      title: "Cancellation Email",
    },
    {
      id: 2,
      category: "Email/Letter tool",
      title: "Catchy Email Subject Lines",
    },
    {
      id: 3,
      category: "Email/Letter tool",
      title: "Confirmation Emails",
    },
    {
      id: 4,
      category: "Email/Letter tool",
      title: "Follow Up Email",
    },
    {
      id: 5,
      category: "Email/Letter tool",
      title: "Thank You Note",
    },
    {
      id: 6,
      category: "Email/Letter tool",
      title: "Welcome Email",
    },
  ],
};

const social: Menu = {
  id: 7,
  title: "Social Media Tools",
  icon: Recommend,
  list: [
    {
      id: 1,
      category: "Social Media tool",
      title: "Add Emoji To List",
    },
    {
      id: 2,
      category: "Social Media tool",
      title: "Bullet Points",
    },
    {
      id: 3,
      category: "Social Media tool",
      title: "Carousel Post",
    },
    {
      id: 4,
      category: "Social Media tool",
      title: "Crazy Youtube Ideas",
    },
    {
      id: 5,
      category: "Social Media tool",
      title: "Hashtag Generator",
    },
    {
      id: 6,
      category: "Social Media tool",
      title: "Hook Generator",
    },
    {
      id: 7,
      category: "Social Media tool",
      title: "Instagram Captions",
    },
    {
      id: 8,
      category: "Social Media tool",
      title: "Instagram Product Showcase",
    },
    {
      id: 9,
      category: "Social Media tool",
      title: "Keyword Generator",
    },
    {
      id: 10,
      category: "Social Media tool",
      title: "Launch Your Product",
    },
    {
      id: 11,
      category: "Social Media tool",
      title: "Relatable Experiences",
    },
    {
      id: 12,
      category: "Social Media tool",
      title: "Short Text Hook",
    },
    {
      id: 13,
      category: "Social Media tool",
      title: "TikTok Brainstorm Topics",
    },
    {
      id: 14,
      category: "Social Media tool",
      title: "Video Call To Action",
    },
    {
      id: 15,
      category: "Social Media tool",
      title: "YouTube Description Intro",
    },
    {
      id: 16,
      category: "Social Media tool",
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
      category: "Sales Tool",
      title: "Attention-Interest-Desire-Action",
    },
    {
      id: 2,
      category: "Sales Tool",
      title: "Before-After-Bridge",
    },
    {
      id: 3,
      category: "Sales Tool",
      title: "Feature to Benefits",
    },
    {
      id: 4,
      category: "Sales Tool",
      title: "Feature-Advantage-Benefit",
    },
    {
      id: 5,
      category: "Sales Tool",
      title: "Marketing Angles",
    },
    {
      id: 6,
      category: "Sales Tool",
      title: "Pain-Agitate-Solution",
    },
    {
      id: 7,
      category: "Sales Tool",
      title: "Problem-Promise-Proof-Proposal",
    },
    {
      id: 8,
      category: "Sales Tool",
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
      category: "Writing Tool",
      title: "Adjective Accelerator",
    },
    {
      id: 2,
      category: "Writing Tool",
      title: "Analogy Generator",
    },
    {
      id: 3,
      category: "Writing Tool",
      title: "Bullet Point to Blog Section",
    },
    {
      id: 4,
      category: "Writing Tool",
      title: "Bullet Point to Paragraph",
    },
    {
      id: 5,
      category: "Writing Tool",
      title: "Cliffhanger",
    },
    {
      id: 6,
      category: "Writing Tool",
      title: "Essay Intro",
    },
    {
      id: 7,
      category: "Writing Tool",
      title: "Essay Outline",
    },
    {
      id: 8,
      category: "Writing Tool",
      title: "Explain Like I'm 5",
    },
    {
      id: 9,
      category: "Writing Tool",
      title: "Freestyle",
    },
    {
      id: 10,
      category: "Writing Tool",
      title: "Hero Story Intro",
    },
    {
      id: 11,
      category: "Writing Tool",
      title: "Hero Story Villain",
    },
    {
      id: 12,
      category: "Writing Tool",
      title: "Passive To Active Voice",
    },
    {
      id: 14,
      category: "Writing Tool",
      title: "Press Release Intros",
    },
    {
      id: 15,
      category: "Writing Tool",
      title: "Rewrite With Keywords",
    },
    {
      id: 16,
      category: "Writing Tool",
      title: "Sentence Rewriter",
    },
    {
      id: 17,
      category: "Writing Tool",
      title: "Simplify Sentences",
    },
    {
      id: 18,
      category: "Writing Tool",
      title: "Tone Changer",
    },
    {
      id: 19,
      category: "Writing Tool",
      title: "Two Sentence Stories",
    },
    {
      id: 20,
      category: "Writing Tool",
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
      category: "Brainstorming Tool",
      title: "Growth Ideas",
    },
    {
      id: 2,
      category: "Brainstorming Tool",
      title: "Name Generator",
    },
    {
      id: 3,
      category: "Brainstorming Tool",
      title: "Next Product",
    },
    {
      id: 4,
      category: "Brainstorming Tool",
      title: "Startup Ideas",
    },
    {
      id: 5,
      category: "Brainstorming Tool",
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
      category: "product tool",
      title: "Birthday Card",
    },
    {
      id: 2,
      category: "product tool",
      title: "Clubhouse Bio",
    },
    {
      id: 3,
      category: "product tool",
      title: "Cover Letter",
    },
    {
      id: 4,
      category: "product tool",
      title: "Love Letter",
    },
    {
      id: 5,
      category: "product tool",
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

export const searchTools: { id: number; title: string; category: string }[] = [
  ...digitalAdCopy.list,
  ...product.list,
  ...WebsiteCopy.list,
  ...statupTool.list,
  ...Blog.list,
  ...Email.list,
  ...social.list,
  ...sales.list,
  ...writingTools.list,
  ...Brainstorming.list,
  ...PersonalTools.list,
];
