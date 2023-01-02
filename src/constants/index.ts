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
      endPoint: "productDescription",
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
      detail: "BrainStrom variations to your ad copy.",
    },
    {
      id: 2,
      category: "Digital Ad Copy tool",
      title: "Facebook Headlines",
      detail: "Generate Facebook ad headlines for your business.",
    },
    {
      id: 3,
      category: "Digital Ad Copy tool",
      title: "Facebook Link Descriptions",
      detail: "Create a Facebook Link descriptions for your business.",
    },
    {
      id: 4,
      category: "Digital Ad Copy tool",
      title: "Facebook Listicle",
      detail: "Create a attention-grabbing list post for Facebook.",
    },
    {
      id: 5,
      category: "Digital Ad Copy tool",
      title: "Facebook Primary Text",
      detail: "Write A body Text for your Facebook.",
    },
    {
      id: 6,
      category: "Digital Ad Copy tool",
      title: "General Ad Copy",
      detail: "BrainStrom an outline for any type of ad.",
    },
    {
      id: 7,
      category: "Digital Ad Copy tool",
      title: "Google Description",
      detail: "Generate a description for your Google Ad.",
    },
    {
      id: 8,
      category: "Digital Ad Copy tool",
      title: "Google Headlines",
      detail: "Google ad headlines that helps you get catchy",
    },
    {
      id: 9,
      category: "Digital Ad Copy tool",
      title: "LinkedIn Ad Copy",
      detail: "Generate Likedin Ad copy with ease",
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
      detail: "Discover the right audience for your business.",
    },
    {
      id: 2,
      category: "Startup tool",
      title: "Brand Mission",
      detail: "Generate the perfect mission for your brand.",
    },
    {
      id: 3,
      category: "Startup tool",
      title: "Brand Voice",
      detail: "BrainStorm words for your brand",
    },
    {
      id: 4,
      category: "Startup tool",
      title: "Motto Generator",
      detail: "Discover the perfect Motto for your business",
    },
    {
      id: 5,
      category: "Startup tool",
      title: "Value Proposition",
      detail: "Find a perfect description for your company",
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
      detail: "Generate right Call to action to your website",
    },
    {
      id: 2,
      category: "WebSite Copy tool",
      title: "Event Copy",
      detail: "Generate a event promotion",
    },
    {
      id: 3,
      category: "WebSite Copy tool",
      title: "Landing Page Hero Text",
      detail: "Discover the best Landing Page Hero text on your website",
    },
    {
      id: 4,
      category: "WebSite Copy tool",
      title: "Listicle",
      detail: "Generate sublist for specific topic to your website",
    },
    {
      id: 5,
      category: "WebSite Copy tool",
      title: "Meta Descriptions",
      detail: "Create better meta description for your website.",
    },
    {
      id: 6,
      category: "WebSite Copy tool",
      title: "Microcopy",
      detail: "Humanze any text by applying microcopy.",
    },
    {
      id: 7,
      category: "WebSite Copy tool",
      title: "Question Generator",
      detail: "Generate engaging questions to your target audience.",
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
  title: "Personal Tools",
  icon: EmojiEmotionsRounded,
  list: [
    {
      id: 1,
      category: "Personal tool",
      title: "Birthday Card",
    },
    {
      id: 2,
      category: "Personal tool",
      title: "Clubhouse Bio",
    },
    {
      id: 3,
      category: "Personal tool",
      title: "Cover Letter",
    },
    {
      id: 4,
      category: "Personal tool",
      title: "Love Letter",
    },
    {
      id: 5,
      category: "Personal tool",
      title: "Resume Bullet Points",
    },
  ],
};

export const tools: Menu[] = [
  social,
  product,
  statupTool,
  writingTools,
  digitalAdCopy,
  WebsiteCopy,
  Blog,
  Email,
  sales,
  Brainstorming,
  PersonalTools,
];

export const searchTools: { id: number; title: string; category: string }[] = [
  ...social.list,
  ...product.list,
  ...writingTools.list,
  ...statupTool.list,
  ...digitalAdCopy.list,
  ...WebsiteCopy.list,
  ...Blog.list,
  ...Email.list,
  ...sales.list,
  ...Brainstorming.list,
  ...PersonalTools.list,
];
