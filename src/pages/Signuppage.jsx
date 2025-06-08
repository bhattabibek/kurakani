import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import ChatImage from "../../public/chat.png";
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom';

const Signuppage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const { signup } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullname.trim()) {
      toast.error("The Fullname is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email Address is required");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    signup(formData);
    toast.success("Signup successful!");
  };

  return (
    <>
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left column: Signup form */}
        <div className="flex flex-col justify-center items-center px-6 sm:px-12 py-12 bg-white">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-2xl font-bold text-center">KURAKANI.com</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="fullname"
                  required
                  placeholder="Username"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
              </label>

              {/* Email */}
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="mail@site.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>

              {/* Password */}
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </label>

              <div className="space-y-3 pt-4">
                <button className="btn btn-primary w-full" type="submit">
                  Sign Up
                </button>

                <button
                  type="button"
                  className="btn w-full bg-white text-black border border-gray-300"
                >
                  Sign up with Email
                </button>

                <button
                  type="button"
                  className="btn w-full bg-white text-black border border-gray-300"
                >
                  Sign up with Google
                </button>
              </div>
            </form>
            <div  className='text-center'>
              <p className='text-base-content/60'>
              Already have an account?
              <Link to="/login" className="link link-primary">
              Sign In
              </Link>
              </p>
            </div>
          </div>
        </div>

      
        <div className="hidden lg:flex items-center justify-center bg-gray-100">
          <img src={ChatImage} alt="chat-image" />
        </div>
      </div>
    </>
  );
};

export default Signuppage;
