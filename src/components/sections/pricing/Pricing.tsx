'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for early-stage companies and MVPs',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      badge: null,
      features: [
        'Up to 5 team members',
        'Core automation workflows',
        'Standard integrations',
        '10GB cloud storage',
        'Email support',
        'Basic analytics dashboard',
      ],
      cta: 'Start Building',
      popular: false,
      icon: <Users className="size-5" />,
    },
    {
      name: 'Scale',
      description: 'Accelerate growth with advanced SaaS capabilities',
      price: billingCycle === 'monthly' ? '$89' : '$712',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      badge: 'Most Popular',
      features: [
        'Unlimited team members',
        'Advanced AI-powered workflows',
        'Premium API integrations',
        '500GB cloud storage',
        'Priority 24/7 support',
        'Advanced analytics & reporting',
        'Custom domain & branding',
        'Multi-environment deployment',
        'Real-time collaboration tools',
      ],
      cta: 'Scale Your Business',
      popular: true,
      icon: <Zap className="size-5" />,
    },
    {
      name: 'Enterprise',
      description: 'Mission-critical solutions for large organizations',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      features: [
        'Everything in Scale plan',
        'Unlimited cloud storage',
        'Dedicated success manager',
        'Custom integrations & APIs',
        'Enterprise-grade security',
        '99.99% SLA guarantee',
        'On-premise deployment options',
        'Custom training & onboarding',
        'Advanced compliance tools',
      ],
      cta: 'Contact Enterprise',
      popular: false,
      icon: <Shield className="size-5" />,
    },
  ];

  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm">
            <Clock className="size-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Scale Your Business
            <span className="block bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-transparent">
              Without Breaking Budget
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Choose the perfect SaaS plan to accelerate your growth. Enterprise-grade security,
            99.99% uptime, and world-class support included in every plan.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted/50 rounded-xl border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-lg transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-lg transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual Billing
              <Badge variant="secondary" className="text-xs px-2 py-1">
                Save 33%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-xl',
                plan.popular
                  ? 'border-primary/50 shadow-xl shadow-primary/20 scale-105 bg-card/50'
                  : 'border-border/30 hover:border-primary/30 bg-card/30'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium">
                    <Star className="size-4 mr-2" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Effects */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              )}

              <CardHeader className="relative text-center pb-8 pt-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit px-4 py-2">
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">{plan.icon}</div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </div>

                <CardDescription className="text-base mb-8 leading-relaxed">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-2 text-lg">{plan.period}</span>
                  )}
                </div>

                {billingCycle === 'annual' && plan.price !== 'Custom' && plan.price !== '$0' && (
                  <p className="text-sm text-muted-foreground">Billed annually • Save $356/year</p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-8">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="size-4 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={
                    index === 0
                      ? handleStarterPlan
                      : index === 1
                        ? handleProfessionalPlan
                        : handleEnterprisePlan
                  }
                  className={cn(
                    'w-full text-base py-6 font-medium',
                    plan.popular ? 'bg-primary hover:bg-primary/90 shadow-lg' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-5 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Scale' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No setup fees • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16 border border-border/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for organizations that demand the highest levels of security, compliance, and
              performance at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="size-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">SOC 2 Compliant</h4>
              <p className="text-sm text-muted-foreground">
                Enterprise security with annual audits and compliance reporting
              </p>
            </div>
            <div className="text-center">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="size-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">99.99% Uptime SLA</h4>
              <p className="text-sm text-muted-foreground">
                Mission-critical reliability with guaranteed service levels
              </p>
            </div>
            <div className="text-center">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="size-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Dedicated Support</h4>
              <p className="text-sm text-muted-foreground">
                24/7 priority support with dedicated success manager
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of companies already scaling with Example SaaS. See how our platform can
            accelerate your growth in just 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleScheduleDemo} size="lg" className="px-8 py-6 text-base">
              <Clock className="size-5 mr-2" />
              Schedule Live Demo
            </Button>
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base"
            >
              View Platform Features
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • See results in your first week
          </p>
        </div>
      </div>
    </section>
  );
}
