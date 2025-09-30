'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };

  const handleBadgeAction = () => {
    router.push('/pricing');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: Advanced Analytics Dashboard
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Scale Your Business
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Intelligence
              </span>
              With AI-Powered SaaS
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Transform your operations with intelligent automation, real-time analytics, and
              seamless integrations. Built for modern businesses that demand performance and
              reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Platform Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ businesses trust us
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 enterprise rating</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border bg-card p-4 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/30 to-muted/60 aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Dashboard Elements */}
                  <div className="absolute inset-4 grid grid-cols-3 gap-4">
                    <div className="bg-primary/20 rounded-lg p-4">
                      <div className="h-2 bg-primary/40 rounded mb-2"></div>
                      <div className="h-8 bg-primary/60 rounded"></div>
                    </div>
                    <div className="bg-accent/20 rounded-lg p-4">
                      <div className="h-2 bg-accent/40 rounded mb-2"></div>
                      <div className="h-8 bg-accent/60 rounded"></div>
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-4">
                      <div className="h-2 bg-secondary/40 rounded mb-2"></div>
                      <div className="h-8 bg-secondary/60 rounded"></div>
                    </div>
                  </div>

                  <div className="text-center z-10">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                      <Zap className="size-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">Live Analytics Dashboard</p>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Revenue Growth</div>
                <div className="text-lg font-bold text-primary">+247%</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Active Users</div>
                <div className="text-lg font-bold text-accent">1.2M+</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Uptime</div>
                <div className="text-lg font-bold text-secondary">99.99%</div>
              </div>
            </div>
          </div>

          {/* Key Features Preview */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="size-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning algorithms analyze your data patterns
              </p>
            </div>
            <div className="text-center">
              <div className="size-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="size-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Real-time collaboration tools for distributed teams
              </p>
            </div>
            <div className="text-center">
              <div className="size-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Star className="size-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                Bank-grade security with SOC 2 compliance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Platform Demo</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="size-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
