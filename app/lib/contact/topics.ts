export const PROF_EMAIL = "nserekoddn@gmail.com";

export type ContactTopic = {
  id: string;
  label: string;
  description: string;
  subject: string;
  bodyIntro: string;
};

export const topics: ContactTopic[] = [
  {
    id: "speaking",
    label: "Speaking",
    description:
      "Invitations to speak on culture, education, public life, and imagining a more generous future.",
    subject: "Speaking invitation",
    bodyIntro: "Hello David, I would like to invite you to speak at",
  },
  {
    id: "books",
    label: "Books & research",
    description:
      "Questions about the books, research interests, or scholarly collaboration.",
    subject: "Books & research",
    bodyIntro: "Hello David, I am writing about your books and research.",
  },
  {
    id: "teaching",
    label: "Teaching & mentorship",
    description:
      "Student supervision, mentorship, and teaching collaborations.",
    subject: "Teaching & mentorship",
    bodyIntro: "Hello David, I am reaching out about teaching and mentorship.",
  },
  {
    id: "media",
    label: "Media & interviews",
    description: "Press, interviews, podcasts, and public commentary.",
    subject: "Media request",
    bodyIntro: "Hello David, I am a journalist / producer contacting you about",
  },
  {
    id: "general",
    label: "General",
    description: "Anything else — a thought to share, a question, a hello.",
    subject: "General inquiry",
    bodyIntro: "Hello David,",
  },
];

/** Builds a prefilled mailto: link used as the no-JS / fallback path. */
export function buildMailto(topic: ContactTopic): string {
  const params = new URLSearchParams({
    subject: `[Site] ${topic.subject}`,
    body: `${topic.bodyIntro}\n\n`,
  });
  return `mailto:${PROF_EMAIL}?${params.toString()}`;
}
