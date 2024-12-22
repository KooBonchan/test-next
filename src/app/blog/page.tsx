import Link from "next/link";

interface Post {
    userid: number;
    id: number;
    title: string;
    body: string;
}

export default async function DocumentList () {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => (
        <ul>
        {data.map((post: Post) => (
          <li key={"post"+post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
        </ul>
    ))
}