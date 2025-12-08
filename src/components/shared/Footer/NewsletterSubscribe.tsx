'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;
        console.log("User submitted email:", email);

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setMessage('Thank you for subscribing! 🎉');
            setEmail('');
            setIsLoading(false);
            setTimeout(() => setMessage(''), 4000);
        }, 1000);
    };

    return (
        <div className="pt-4">
            <form onSubmit={handleSubmit} >

                <div className="flex">
                    <Input
                        type="email"
                        placeholder="Enter your Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10 border-y border-l border-primary rounded-l-[8px] outline-none ring-0"
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-10 bg-primary text-white font-bold leading-[120%] rounded-r-[8px]"
                    >
                        {isLoading ? (
                            'Subscribing...'
                        ) : (
                            <>
                                Subscribe
                            </>
                        )}
                    </Button>
                </div>

            </form>

            {message && (
                <p className="text-sm text-green-600 font-medium animate-pulse">{message}</p>
            )}
        </div>
    );
}