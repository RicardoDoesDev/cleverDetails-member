const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
const reviewsFile = path.join(dataDir, 'reviews.json');

async function ensureDataDirExists() {
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir);
  }
}

async function ensureReviewsFileExists() {
  try {
    await fs.access(reviewsFile);
  } catch {
    await fs.writeFile(reviewsFile, JSON.stringify([]));
  }
}

// Initialize data files
(async () => {
  await ensureDataDirExists();
  await ensureReviewsFileExists();
})();

// Get all reviews for an item
app.get('/api/reviews/:categoryId/:itemId', async (req, res) => {
  try {
    const { categoryId, itemId } = req.params;
    const data = await fs.readFile(reviewsFile, 'utf8');
    const reviews = JSON.parse(data);
    
    const filteredReviews = reviews.filter(
      review => review.categoryId === categoryId && review.itemId === Number(itemId)
    );
    
    res.json(filteredReviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read reviews' });
  }
});

// Add a new review
app.post('/api/reviews/:categoryId/:itemId', async (req, res) => {
  try {
    const { categoryId, itemId } = req.params;
    const { author, rating, comment } = req.body;

    const data = await fs.readFile(reviewsFile, 'utf8');
    const reviews = JSON.parse(data);

    const newReview = {
      id: Date.now(),
      author,
      rating,
      comment,
      itemId: Number(itemId),
      categoryId,
      createdAt: new Date().toISOString()
    };

    reviews.push(newReview);
    await fs.writeFile(reviewsFile, JSON.stringify(reviews, null, 2));

    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save review' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 