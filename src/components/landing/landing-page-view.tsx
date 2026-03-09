"use client";

import { Button } from '../ui/button';
import { ArrowRight, BarChart3, CheckCircle, Headset, Lock, Palette, Share2, Users, Zap } from 'lucide-react';
import { Card } from '../ui/card';

const features = [
    {
        icon: Zap,
        title: 'Lightning-fast performance',
        description: 'Real-time rendering with zero lag. Your canvas keeps up with your creativity.',
    },
    {
        icon: Users,
        title: 'Seamless collaboration',
        description: 'Invite your team instantly. See cursors, edits, and reactions in real time.',
    },
    {
        icon: Palette,
        title: 'Rich visual tools',
        description: 'Shapes, text, images, and connectors. Everything you need to express your ideas.',
    },
    {
        icon: Share2,
        title: 'Smart sharing',
        description: 'Export to PNG, SVG, or PDF. Share links with custom permissions.',
    },
    {
        icon: BarChart3,
        title: 'AI assistant',
        description: 'Get intelligent suggestions for layouts, diagrams, and design improvements.',
    },
    {
        icon: Lock,
        title: 'Enterprise security',
        description: 'End-to-end encryption, SSO, and compliance with SOC 2, GDPR, and HIPAA.',
    },
]


const plans = [
    {
        name: 'Starter',
        price: 'Free',
        description: 'Perfect for individuals and small teams',
        features: [
            'Unlimited canvases',
            'Up to 5 collaborators',
            'Real-time collaboration',
            '5GB storage',
            'Basic shapes and tools',
            'Community support',
        ],
        cta: 'Get started',
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$12',
        period: 'per user/month',
        description: 'For growing teams and organizations',
        features: [
            'Everything in Starter',
            'Unlimited collaborators',
            '100GB storage',
            'Advanced AI features',
            'Custom templates',
            'SSO & SAML',
            'Priority support',
            'Team management',
        ],
        cta: 'Start free trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations with advanced needs',
        features: [
            'Everything in Pro',
            'Unlimited storage',
            'Custom integrations',
            'Advanced security',
            'Dedicated support',
            'SLA guarantee',
            'On-premise options',
            'Custom features',
        ],
        cta: 'Contact sales',
        highlighted: false,
    },
]

function LandingPageView() {

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">i</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">iBoard</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#product" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Product</a>
                        <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Features</a>
                        <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
                        {/* <a href="#customers" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Customers</a> */}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="/trial">
                            <Button variant="ghost" className="text-sm font-medium hidden sm:inline-flex">Log in</Button>
                        </a>
                        <a href="/try-demo">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-full px-6">
                                Try for free
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
            <div className="container mx-auto">
                <div className="w-full h-full flex flex-col px-16">
                    {/* Hero section */}

                    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
                        <div className="container mx-auto px-4 max-w-7xl">
                            <div className="mx-auto max-w-3xl text-center">
                                <div className="hover:bg-foreground/10 transition-colors inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
                                    <span className="text-xs font-semibold text-primary">✨ New</span>
                                    <span className="text-xs font-medium text-foreground/70">AI-powered canvas suggestions</span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
                                    Infinite canvas for every team
                                </h1>

                                <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance leading-relaxed">
                                    Collaborate in real-time on an infinite canvas. Sketch ideas, build diagrams, plan projects—all together, instantly.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-full px-4 py-3 h-min flex items-center gap-2">
                                        Start creating
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" className="text-foreground text-base font-semibold rounded-full px-4 py-3 h-min border-2 border-primary hover:bg-primary/5">
                                        Watch demo
                                    </Button>
                                </div>

                                {/* Stats */}
                                {/* <div className="mt-16 grid grid-cols-3 gap-8 text-center border-t border-border/40 pt-12">
                                    <div>
                                        <p className="text-2xl md:text-3xl font-bold text-primary">2M+</p>
                                        <p className="text-sm text-foreground/60 mt-2">Active collaborators</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl md:text-3xl font-bold text-primary">500K+</p>
                                        <p className="text-sm text-foreground/60 mt-2">Teams worldwide</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl md:text-3xl font-bold text-primary">99.9%</p>
                                        <p className="text-sm text-foreground/60 mt-2">Uptime guaranteed</p>
                                    </div>
                                </div> */}
                            </div>
                            {/* Features... */}
                            <section id="features" className="py-20 md:py-32 border-t border-border/40">
                                <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mx-auto max-w-2xl text-center mb-16">
                                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                                            Everything you need to collaborate
                                        </h2>
                                        <p className="text-lg text-foreground/70 text-balance">
                                            Powerful features designed for teams of all sizes
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {features.map((feature, idx) => {
                                            const Icon = feature.icon
                                            return (
                                                <div key={idx} className="group p-6 rounded-xl border border-border/40 hover:border-primary/40 bg-card/50 hover:bg-card/80 transition-all duration-300">
                                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                                        <Icon className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                                                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section>

                            {/* Pricing section */}
                            <section id="pricing" className="py-20 md:py-32 border-t border-border/40">
                                <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mx-auto max-w-2xl text-center mb-16">
                                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                                            Simple, transparent pricing
                                        </h2>
                                        <p className="text-lg text-foreground/70 text-balance">
                                            Choose the perfect plan for your team
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {plans.map((plan, idx) => (
                                            <Card
                                                key={idx}
                                                className={`relative p-8 border-2 transition-all duration-300 ${plan.highlighted
                                                    ? 'border-primary bg-primary/5 md:scale-105'
                                                    : 'border-border/40 bg-card/50 hover:border-primary/40'
                                                    }`}
                                            >
                                                {plan.highlighted && (
                                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                                                        Most Popular
                                                    </div>
                                                )}

                                                <div className="mb-6">
                                                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                                    <p className="text-sm text-foreground/60 mb-4">{plan.description}</p>
                                                    <div className="mb-2">
                                                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                                        {plan.period && <span className="text-foreground/60 text-sm ml-2">{plan.period}</span>}
                                                    </div>
                                                </div>

                                                <Button
                                                    className={`w-full mb-8 rounded-lg font-semibold ${plan.highlighted
                                                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                                                        : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                                                        }`}
                                                >
                                                    {plan.cta}
                                                </Button>

                                                <div className="space-y-4">
                                                    {plan.features.map((feature, featureIdx) => (
                                                        <div key={featureIdx} className="flex gap-3">
                                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                            <span className="text-sm text-foreground/70">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <p className="text-foreground/60 mb-2">Need something custom?</p>
                                        <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 hover:text-primary hover:cursor-pointer">
                                            Schedule a demo <Headset />
                                        </Button>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </section>
                </div>
            </div>
            <footer>
                <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Features</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Templates</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">About</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Blog</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Careers</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">API Docs</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Community</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Terms</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Security</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Cookies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Follow</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">GitHub</a></li>
                                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Discord</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">i</span>
                            </div>
                            <span className="font-bold text-foreground">iBoard</span>
                        </div>
                        <p className="text-xs text-foreground/50">
                            © 2026 iBoard. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default LandingPageView