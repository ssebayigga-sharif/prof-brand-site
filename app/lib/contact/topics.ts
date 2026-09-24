export const PROF_EMAIL = "nserekoddn@gmail.com";

export type ContactTopicId =
  | "speaking"
  | "books"
  | "teaching"
  | "media"
  | "general";

export type ContactTopic = {
  id: ContactTopicId;
  label: string;
  description: string;
  subject: string;
  bodyIntro: string;
};

export const topics: readonly ContactTopic[] = [
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
] as const;

export function buildMailto(topic: ContactTopic): string {
  const params = new URLSearchParams({
    subject: `[Site] ${topic.subject}`,
    body: `${topic.bodyIntro}\n\n`,
  });
  return `mailto:${PROF_EMAIL}?${params.toString()}`;
}

// Guards the crash risk you had with `topics.find(...) ?? topics[0]`
export function getTopicOrDefault(
  topicId: string,
  list: readonly ContactTopic[] = topics,
): ContactTopic | undefined {
  return list.find((t) => t.id === topicId) ?? list[0];
}
