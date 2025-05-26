import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { fetchMediumPosts, formatDate, type MediumPost } from '@/utils/mediumRss';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Your Medium username
  const mediumUsername = 'patelsaurin2002';

  const loadPosts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const posts = await fetchMediumPosts(mediumUsername);
      setBlogPosts(posts.slice(0, 3)); // Show only the latest 3 posts
    } catch (err) {
      console.error('Failed to load Medium posts:', err);
      setError('Failed to load blog posts');
      
      // Fallback to static posts if Medium fetch fails
      setBlogPosts([
        {
          title: "From RAG to ReAct: Advancing LLM Context Handling",
          link: "#",
          pubDate: "2023-04-15T00:00:00Z",
          description: "Explore how combining Retrieval-Augmented Generation with Reasoning and Acting frameworks creates more intelligent AI assistants capable of complex decision making.",
          guid: "1",
          thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=3176&h=2000"
        },
        {
          title: "Optimizing Vector Search for Enterprise-Scale RAG Systems",
          link: "#",
          pubDate: "2023-03-02T00:00:00Z",
          description: "A deep dive into techniques for enhancing vector search performance in large-scale RAG implementations, including hybrid search, chunking strategies, and metadata filtering.",
          guid: "2",
          thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=3270&h=2000"
        },
        {
          title: "Creating Agentic AI Systems with LangGraph",
          link: "#",
          pubDate: "2023-01-18T00:00:00Z",
          description: "Learn how to build intelligent agent systems that can plan, reason about, and execute complex multi-step tasks using the powerful LangGraph framework.",
          guid: "3",
          thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=3021&h=2000"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section id="blog" className="section-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">Latest Blog Posts</h2>
        <Button
          onClick={loadPosts}
          disabled={isLoading}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      
      {isLoading ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted rounded-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-portfolio-slate/20"></div>
              <div className="p-6">
                <div className="h-4 bg-portfolio-slate/20 rounded mb-2"></div>
                <div className="h-6 bg-portfolio-slate/20 rounded mb-2"></div>
                <div className="h-16 bg-portfolio-slate/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a 
              key={post.guid}
              href={post.link}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-muted rounded-lg overflow-hidden transition-transform group-hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.thumbnail || "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=3176&h=2000"} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=3176&h=2000";
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-portfolio-light mb-2">{formatDate(post.pubDate)}</p>
                  <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-2 group-hover:text-portfolio-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-portfolio-slate line-clamp-3">{post.description}</p>
                  
                  <div className="mt-4 flex items-center text-portfolio-light">
                    <span className="text-sm font-medium">Read Article</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <a 
          href={`https://medium.com/@${mediumUsername}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Articles
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
