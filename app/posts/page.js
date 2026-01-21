import Link from "next/link";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const Posts = async () => {
  const posts = await getPosts();
  // Andy
  console.log("execute server side code");
  

  return (
    <>
      <div className="container m-auto mt-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
                <h2 className="text-lg font-bold text-gray-600">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;

Posts;
