function PostCard({ post, onContact }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{post.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <button
        onClick={() => onContact(post)}
        className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Contact
      </button>
    </div>
  );
}

export default PostCard; 