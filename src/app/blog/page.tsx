import Posts from "@/component/Posts";
import PostModel from "@/model/PostModel";
import { Suspense } from "react";

export default function DocumentList () {
    const data:Promise<PostModel[]> = 
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={data} />
      </Suspense>
    );
      
}