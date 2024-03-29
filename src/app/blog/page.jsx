import { PostPreview, SocialMedia } from "@/components";
import styles from "@/styles/blog.module.scss";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export default function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>Blog</h1>
          <div className={styles.headerDesc}>
            <p>
              Mi camino hacia una vida de impacto: pensamientos y aprendizajes
            </p>
            <p>
              Escribo para compartir mis aprendizajes y pensamientos en mi
              camino a diseñar una vida que me ayude a impactar a millones de
              personas a través de la tecnología.
            </p>
          </div>
        </div>
        <hr />
        <section className={styles.posts}>
          {posts.map((post) => {
            return <PostPreview key={post.title} {...post} />;
          })}
        </section>
        <SocialMedia />
      </div>
    </section>
  );
}
