
const PostCard = () => {
  const post = {
    id: 1,
    title: "Introduction to JSON Server",
    content: "JSON Server is a tool that lets you create a fake REST API easily.",
    author: "John Doe",
    date: "2024-06-01T08:30:00Z"
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-100 p-10 min-h-screen flex items-center justify-center ">
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
            <p className="mt-2 text-gray-500">{post.content}</p>
            <div className="mt-4">
              <span className="text-gray-700 font-medium">By {post.author}</span>
              <span className="text-gray-500 text-sm"> on {formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
