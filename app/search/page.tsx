type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  await searchParams;

  return <main className="inner-page" aria-label="Search" />;
}
