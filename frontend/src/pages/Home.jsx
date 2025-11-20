import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { ArrowRight, TrendingUp, Video, BookOpen, Users, BarChart3, Globe, Check, MessageSquare, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';
import TickerBar from "../components/TickerBar.jsx";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll animation on mount
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter."
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, contactForm);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly."
      });
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { icon: TrendingUp, title: 'Market Outlooks', description: 'Daily & weekly institutional macro insights.' },
    { icon: Video, title: 'Live Trading Sessions', description: 'Real-time execution + commentary.' },
    { icon: BookOpen, title: 'Educational Material', description: 'Structured modules for every level.' },
    { icon: Users, title: 'Exclusive Guest Contributions', description: 'Expert insights from professionals.' },
    { icon: BarChart3, title: 'Macro Data Analysis', description: 'Deep-dive models & global frameworks.' },
    { icon: Globe, title: 'Explore Our Platforms', description: 'Dashboards, tools, analytics.' }
  ];

  const tradeBreakdowns = [
    {
      title: 'EUR/USD Long Setup',
      setup: 'Technical breakout + macro alignment',
      thesis: 'Fed dovish pivot expected, ECB maintaining hawkish stance',
      execution: 'Entry at 1.0850, stop at 1.0820',
      risk: '1.5% portfolio allocation',
      outcome: '+2.8% return in 5 sessions'
    },
    {
      title: 'Gold Macro Position',
      setup: 'Risk-off environment + inflation hedge',
      thesis: 'Central bank buying + geopolitical uncertainty',
      execution: 'Scaled entry 1920-1940',
      risk: '2% portfolio allocation',
      outcome: '+4.2% return over 3 weeks'
    },
    {
      title: 'S&P 500 Short',
      setup: 'Overbought conditions + macro headwinds',
      thesis: 'Earnings compression + rate uncertainty',
      execution: 'Entry at 4580, stop at 4620',
      risk: '1.8% portfolio allocation',
      outcome: '+3.1% return in 8 sessions'
    }
  ];

  const blogPosts = [
    {
      title: 'Understanding Macro Market Structure',
      excerpt: 'A deep dive into how institutional players analyze market cycles and economic indicators.',
      date: 'March 15, 2024'
    },
    {
      title: 'Execution Psychology in Volatile Markets',
      excerpt: 'Managing emotions and maintaining discipline during high-volatility trading environments.',
      date: 'March 10, 2024'
    },
    {
      title: 'Fed Policy & Market Implications',
      excerpt: 'Analyzing recent Federal Reserve decisions and their impact on global asset classes.',
      date: 'March 5, 2024'
    },
    {
      title: 'Risk Management Frameworks',
      excerpt: 'Institutional approaches to portfolio risk allocation and position sizing strategies.',
      date: 'February 28, 2024'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 100,
      features: [
        'Weekly market outlooks',
        'Access to educational content',
        'Community Discord access',
        'Monthly macro analysis',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: 150,
      popular: true,
      features: [
        'Everything in Starter',
        'Live trading sessions (2x/week)',
        'Trade breakdown analysis',
        'Priority Discord support',
        'Advanced educational modules',
        'Real-time alerts'
      ]
    },
    {
      name: 'Premium',
      price: 200,
      features: [
        'Everything in Pro',
        'Daily live sessions',
        'One-on-one mentorship (monthly)',
        'Exclusive macro reports',
        'Private strategy calls',
        'Direct chat access',
        'Full trade journal access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center fade-section">
          <img 
  src={logo} 
  alt="Horizon Market Edge Logo" 
  className="mx-auto mb-8"
  style={{ width: "180px", height: "auto" }} 
/>

          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
            Horizon Market Edge
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">
            Institutional-Grade Market Intelligence & Trading Education
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            Established in 2024, Horizon Market Edge empowers traders through structured market intelligence, 
            expert guidance, and hands-on learning designed for real-world application.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-light"
              onClick={() => document.getElementById('platforms').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Platforms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-6 text-lg font-light"
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      {/* Market Ticker */}
<div className="max-w-6xl mx-auto mb-16">
  <TickerBar />
</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Bridging Theory & Execution
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We bridge the gap between theoretical knowledge and institutional execution. Our platform integrates 
                macro analysis, real-time sessions, and a structured learning system engineered for traders at every 
                stage — from foundational skills to advanced institutional-style strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Services Section */}
      <section id="platforms" className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our Core Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-gray-900 mb-4" strokeWidth={1.5} />
                    <CardTitle className="text-xl font-light text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Trade Breakdown Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Trade Breakdowns
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Clarity Behind Every Move.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
              A structured review of executed trades with detailed institutional-style reasoning. Each breakdown 
              covers thesis, entry logic, risk structure, macro alignment, and post-trade reflection.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tradeBreakdowns.map((trade, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-gray-900">{trade.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Setup</p>
                    <p className="text-sm text-gray-600">{trade.setup}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Thesis</p>
                    <p className="text-sm text-gray-600">{trade.thesis}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Execution</p>
                    <p className="text-sm text-gray-600">{trade.execution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Risk</p>
                    <p className="text-sm text-gray-600">{trade.risk}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-900">Outcome</p>
                    <p className="text-sm text-green-600 font-medium">{trade.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Why Horizon Market Edge?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Built for Traders Who Think Bigger.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our ecosystem combines macro frameworks, real-time sessions, structured education, and disciplined 
              review systems — enabling traders to operate with clarity, consistency, and institutional mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Insights & Research
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Macro Perspectives. Market Structure. Execution Psychology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-light text-gray-900">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <Button variant="link" className="mt-4 p-0 text-gray-900 font-light">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-section">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Subscribe to Get Started
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Choose a plan that fits your journey. Unlock premium insights, live sessions, trade breakdowns, 
            and structured macro analysis.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-light"
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          >
            View Plans & Pricing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Discord Community */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center fade-section">
          <MessageSquare className="h-12 w-12 text-gray-900 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Join the Private Trading Community
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Subscribers get access to our private Discord — real-time updates, expert Q&A, trade flow commentary, 
            and a community of serious traders.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-light"
            onClick={() => window.open('https://discord.gg/placeholder', '_blank')}
          >
            Join Discord
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Plans & Pricing
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Simple. Transparent. Professional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 ${plan.popular ? 'border-gray-900 shadow-xl' : 'border-gray-200'} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-900 text-white px-4 py-1 text-sm font-light rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-light text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-light text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-6 text-lg font-light ${
                      plan.popular 
                        ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900'
                    }`}
                    onClick={() => {
                      toast({
                        title: "Stripe Integration",
                        description: "Checkout will be enabled with Stripe integration."
                      });
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto fade-section">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-light text-gray-900">Stay Informed</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Subscribe to receive weekly market insights and updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto fade-section">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help.
            </p>
          </div>
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-light"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-2">Horizon Market Edge</h3>
              <p className="text-gray-400 font-light">Institutional-Grade Market Intelligence</p>
            </div>
            <div className="flex gap-6">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-gray-300 hover:bg-gray-800"
                onClick={() => window.open('https://t.me/placeholder', '_blank')}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-gray-300 hover:bg-gray-800"
                onClick={() => window.open('mailto:contact@horizonmarketedge.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-gray-300 hover:bg-gray-800"
                onClick={() => window.open('https://discord.gg/placeholder', '_blank')}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Horizon Market Edge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;