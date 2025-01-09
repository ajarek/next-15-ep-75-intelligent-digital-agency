'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, User, Check } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <Mail className="mr-2 h-6 w-6" /> Contact Us
        </h1>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Check className="h-12 w-12 text-green-500" />
            <p className="text-lg font-semibold">Thank you for your message!</p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className='space-y-2'>
              <Label htmlFor="name" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label htmlFor="email" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
                />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label htmlFor="message" className="flex items-center">
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? 'border-red-500' : ''}  
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </div>
    </div>
  )
}