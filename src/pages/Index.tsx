
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { setupScrollAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Set up animations when the component mounts
    setupScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white to-zw-green-50 dark:from-black dark:to-zw-green-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 animate-on-scroll">
                About <span className="text-zw-green-500">Zero Waste Grocery</span>
              </h2>
              <p className="text-zw-slate-600 dark:text-zw-slate-400 text-lg animate-on-scroll">
                Our mission is to help people reduce food waste, save money, and contribute to a healthier planet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <p className="text-zw-slate-700 dark:text-zw-slate-300">
                  Founded in 2023, Zero Waste Grocery is dedicated to the idea that small changes in how we manage our food can lead to significant environmental benefits. By helping people track their groceries and reduce waste, we're working towards a sustainable future.
                </p>
                <p className="text-zw-slate-700 dark:text-zw-slate-300">
                  Our team of passionate environmentalists and tech experts has created a simple yet powerful platform that makes it easy for everyone to participate in the zero waste movement.
                </p>
                <p className="text-zw-slate-700 dark:text-zw-slate-300">
                  We believe that technology should enhance our relationship with food, not complicate it. That's why we've designed a user-friendly tool that fits seamlessly into your daily life.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-elevation bg-white p-6 md:p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-zw-green-500">Why Zero Waste?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">🌍 Environmental Impact</h4>
                        <p className="text-sm text-zw-slate-600">One-third of all food produced globally is wasted, contributing to greenhouse gas emissions.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">💰 Financial Savings</h4>
                        <p className="text-sm text-zw-slate-600">The average family wastes $1,500+ on food that never gets eaten each year.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">🥗 Healthier Eating</h4>
                        <p className="text-sm text-zw-slate-600">Better grocery management leads to more mindful consumption and healthier eating habits.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
