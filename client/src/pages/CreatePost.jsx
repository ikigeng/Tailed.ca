import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Request',
    tags: '',
    contact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      };
      await axios.post('/api/posts', postData);
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Post</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Request">Request</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags" className="block mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="e.g. math, calculus, tutoring"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block mb-2">Contact Email</label>
          <input
            type="email"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border rounded-md hover:bg-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost; 