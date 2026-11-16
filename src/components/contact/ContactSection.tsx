import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Check if custom endpoint exists in env
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Fallback: Launch native email client with pre-filled message
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="09"
          badge="GET IN TOUCH"
          title="LET'S BUILD SOMETHING GREAT."
          subtitle="Have an opportunity, an interesting idea, or a project in mind? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                I am actively seeking software engineering internships, AI/ML research collaborations, and full-time opportunities. Feel free to reach out directly via email or the form.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-sm font-mono text-white hover:text-violet-300 transition-colors"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-mono text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-300">
                    <MapPin className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-mono text-white">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/40 text-xs font-mono transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600" />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600" />
                  </a>

                  {personalData.leetcode && (
                    <a
                      href={personalData.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 text-xs font-mono transition-colors"
                    >
                      <span className="font-bold text-amber-400 font-mono text-xs">LC</span>
                      <span>LeetCode</span>
                      <ExternalLink className="w-3 h-3 text-zinc-600" />
                    </a>
                  )}

                  {personalData.geeksforgeeks && (
                    <a
                      href={personalData.geeksforgeeks}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 text-xs font-mono transition-colors"
                    >
                      <span className="font-bold text-emerald-400 font-mono text-xs">GFG</span>
                      <span>GeeksforGeeks</span>
                      <ExternalLink className="w-3 h-3 text-zinc-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Taylor"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border ${
                      errors.name ? 'border-rose-500/50' : 'border-white/10 focus:border-violet-500/50'
                    } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-rose-400 text-xs font-mono mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border ${
                      errors.email ? 'border-rose-500/50' : 'border-white/10 focus:border-violet-500/50'
                    } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-rose-400 text-xs font-mono mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Subject <span className="text-violet-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Role / Research Project Collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border ${
                    errors.subject ? 'border-rose-500/50' : 'border-white/10 focus:border-violet-500/50'
                  } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                />
                {errors.subject && <p className="text-rose-400 text-xs font-mono mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Message <span className="text-violet-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, project requirements, or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border ${
                    errors.message ? 'border-rose-500/50' : 'border-white/10 focus:border-violet-500/50'
                  } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-rose-400 text-xs font-mono mt-1">{errors.message}</p>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message dispatched successfully! A response will be provided shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Transmission error. You can also reach me directly at {personalData.email}.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white text-zinc-950 font-mono text-sm font-semibold hover:bg-zinc-100 transition-all shadow-md shadow-white/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)] disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-violet-600" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
