// src/pages/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../components/firebase.jsx';  // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [passport, setPassport] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user details to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName,
        middleName,
        lastName,
        dob,
        gender,
        passport,
        mobile,
        country,
        email,
      });

      // Navigate to home or login page after successful signup
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/path-to-your-image.jpg')" }}>
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border rounded"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              className="w-full p-2 border rounded"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border rounded"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              className="w-full p-2 border rounded"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="w-full p-2 border rounded"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="passport">Passport Number</label>
            <input
              type="text"
              id="passport"
              className="w-full p-2 border rounded"
              placeholder="Passport Number"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              className="w-full p-2 border rounded"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="w-full p-2 border rounded"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
