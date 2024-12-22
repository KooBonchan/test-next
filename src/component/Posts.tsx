'use client'
import PostModel from "@/model/PostModel";
import Link from "next/link";
import { use } from "react";

export default function Posts({posts:_posts}:{posts:Promise<PostModel[]>}) {
  const posts = use(_posts);
  return (
  <>
    <ul>
      {posts.map((post: PostModel) => (
        <li key={"post"+post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
  );
}