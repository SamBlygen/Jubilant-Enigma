
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

 
    user = await User.create({ name, email, password });
    

    const token = generateToken(user._id);
    res.status(201).json({ 
      token, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      message: 'Registration successful' 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return a token and user data
    const token = generateToken(user._id);
    res.status(200).json({ 
      token, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      message: 'Login successful' 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
