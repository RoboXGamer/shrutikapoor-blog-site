import { getPosts, getTalks } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutFullWidth, {
  GradientBackground,
} from '../components/LayoutFullWidth';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import FeaturedSection from '../components/FeaturedSection';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedSpeaking from '../components/FeaturedTalks';

export default function Index({ posts, talks, globalData }) {
  return (
    <LayoutFullWidth>
      <SEO title={globalData.name} description={globalData.name} />
      <Header name={globalData.name} />
      <main className="mx-5">
        <FeaturedSection />
        <FeaturedBlogs posts={posts} />
        <FeaturedSpeaking talks={talks} />
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </LayoutFullWidth>
  );
}

export function getStaticProps() {
  const allPosts = getPosts();
  const talks = getTalks();

  const globalData = getGlobalData();
  const posts = allPosts.slice(0, 3).map((post) => {
    return {
      data: post.data,
      filePath: post.filePath,
    };
  });

  return { props: { posts, talks, globalData } };
}
