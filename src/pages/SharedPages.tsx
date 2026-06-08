import { Hexagon } from 'lucide-react';
import { AdContainer } from '../components/AdContainer';

export function About() {
  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-white text-amber-500 rounded-xl shadow-sm border border-slate-200">
            <Hexagon className="w-6 h-6 stroke-current" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">About Honeybee</h1>
        </div>
        
        <div className="glass-card rounded-2xl p-8 max-w-none text-slate-600 shadow-sm text-sm leading-relaxed mb-8">
          <p className="text-base mb-6">
            Honeybee is part of the <strong className="text-slate-900 font-semibold">Rural Utility Cost</strong> master ecosystem. We focus on beekeeping, apiary planning, and hive-related estimation to help rural property owners and agricultural decision-makers.
          </p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            The goal of Honeybee is to help users make practical hive decisions with clear, simple, and reliable tools. Whether you are a hobbyist with two hives or a commercial manager overseeing hundreds, having the right data leads to better overwintering success, more reliable honey yields, and healthier colonies.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Rural Utility Cost Ecosystem</h2>
          <p>
            As a module within the Rural Utility Cost platform, Honeybee shares a unified approach to data privacy, user experience, and practical utility. You can trust that the tools here are built with the same rigorous standards as our property, forecasting, and master planning calculators.
          </p>
        </div>

        <AdContainer slot="about-inline-ad" location="About Page Footer" />
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-white text-amber-500 rounded-xl shadow-sm border border-slate-200">
            <Hexagon className="w-6 h-6 stroke-current" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
        </div>
        <p className="text-slate-600 mb-8 text-sm">
          For inquiries regarding the Honeybee app or the broader Rural Utility Cost platform, please use the form below.
        </p>
        
        <div className="glass-card rounded-xl p-8 shadow-sm mb-8">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            if (typeof window !== 'undefined' && 'gtag' in window) {
              // @ts-ignore
              window.gtag('event', 'click', { element: 'contact_submit_button' });
            }
            alert('Form submitted successfully!');
          }}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white min-h-[48px]"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white min-h-[48px]"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                aria-required="true"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[48px]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="glass-card rounded-xl p-8 shadow-sm">
          <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">Support Email</p>
          <a href="mailto:support@ruralutilitycost.com" className="text-base font-semibold text-amber-600 hover:text-amber-700 transition-colors py-2 block">
            support@ruralutilitycost.com
          </a>
        </div>
      </div>
    </div>
  );
}

export function Legal() {
  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Legal & Privacy</h1>
        <div className="glass-card rounded-2xl p-8 max-w-none text-slate-600 text-sm shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Important Disclaimer</h2>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 mb-8 font-medium text-xs leading-relaxed shadow-sm">
            The calculators and estimators provided by Honeybee and the Rural Utility Cost network are for planning and decision support purposes only. Users should verify agricultural, environmental, and financial decisions independently.
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Privacy Policy</h2>
          <p className="mb-6 leading-relaxed">
            Your privacy is important to us. Honeybee uses local browser storage (localStorage) to save your favorite tools. We do not transmit your apiary planning data to external servers without your explicit consent. For the full master privacy policy, please refer to the main Rural Utility Cost terms of service.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Terms of Service</h2>
          <p className="leading-relaxed">
            By using this application, you agree to the master terms of service established by Rural Utility Cost. The tools provided are offered "as is" without warranty of accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}

export function License() {
  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">License</h1>
        <div className="glass-card p-8 rounded-xl shadow-sm border border-slate-200">
          <p className="font-mono text-xs text-slate-500 leading-relaxed">
            Copyright (c) {new Date().getFullYear()} Rural Utility Cost
            <br /><br />
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
          </p>
        </div>
      </div>
    </div>
  );
}
