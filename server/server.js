import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import { connectDB } from './db/connection.js';
import { Post } from './models/Post.js';
import { Contact } from './models/Contact.js';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Post schema validation
const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()),
  contact: z.string().email()
});

// Contact schema validation
const contactSchema = z.object({
  postId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const validatedData = postSchema.parse(req.body);
    const newPost = new Post(validatedData);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Error creating post' });
    }
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const newContact = new Contact(validatedData);
    await newContact.save();
    res.status(201).json({ message: 'Contact request received' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Error sending contact request' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 