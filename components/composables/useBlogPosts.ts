import { ref, onMounted } from 'vue';
import type { BlogPost } from '../../types';

export function useBlogPosts() {
  const posts = ref<BlogPost[]>([
    {
      id: 1,
      title: "Choosing the Right Dental Irrigator",
      excerpt: "A comprehensive guide to selecting the perfect dental irrigator for your needs.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "2024-03-15",
      author: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Benefits of Water Flossing",
      excerpt: "Discover why dental professionals recommend water flossing for optimal oral health.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "2024-03-14",
      author: "Dr. Michael Chen"
    }
  ]);

  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      // In a real application, this would be an API call
      // await fetch('/api/posts')
      loading.value = false;
    } catch (e) {
      error.value = 'Failed to fetch posts';
      loading.value = false;
    }
  };

  onMounted(fetchPosts);

  return {
    posts,
    loading,
    error
  };
}